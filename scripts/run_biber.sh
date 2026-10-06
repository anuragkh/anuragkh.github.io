#!/bin/sh

set -eu

biber_path=${BIBER_BIN:-$(command -v biber)}

if [ "$(uname -s)" = "Darwin" ] && file "$biber_path" | grep -q "universal binary"; then
  architecture=$(uname -m)
  temporary_dir=$(mktemp -d "${TMPDIR:-/tmp}/website-biber.XXXXXX")
  trap 'rm -rf "$temporary_dir"' EXIT HUP INT TERM
  /usr/bin/lipo "$biber_path" -thin "$architecture" -output "$temporary_dir/biber"
  chmod +x "$temporary_dir/biber"
  biber_path="$temporary_dir/biber"
fi

# Biber is a PAR-packed executable that unpacks its Perl libraries into
# $TMPDIR/par-<hex username>/ once and reuses them. macOS purges old files from
# $TMPDIR, which can leave that cache half-empty; biber then dies while parsing
# the .bib (e.g. "Unicode::UCD: failed to find unicore/version") and never
# re-extracts. On failure, drop the cache and retry once.
par_cache="${PAR_GLOBAL_TMPDIR:-${TMPDIR:-/tmp}}"
par_cache="${par_cache%/}/par-$(printf '%s' "$(id -un)" | od -An -tx1 | tr -d ' \n')"

if "$biber_path" "$@"; then
  exit 0
fi

if [ -d "$par_cache" ]; then
  echo "biber failed; clearing its unpack cache ($par_cache) and retrying" >&2
  rm -rf "$par_cache"
  "$biber_path" "$@"
else
  exit 1
fi
