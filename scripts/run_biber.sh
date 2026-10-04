#!/bin/sh

set -eu

biber_path=${BIBER_BIN:-$(command -v biber)}

if [ "$(uname -s)" = "Darwin" ] && file "$biber_path" | grep -q "universal binary"; then
  architecture=$(uname -m)
  temporary_dir=$(mktemp -d "${TMPDIR:-/tmp}/website-biber.XXXXXX")
  trap 'rm -rf "$temporary_dir"' EXIT HUP INT TERM
  /usr/bin/lipo "$biber_path" -thin "$architecture" -output "$temporary_dir/biber"
  chmod +x "$temporary_dir/biber"
  "$temporary_dir/biber" "$@"
else
  "$biber_path" "$@"
fi

