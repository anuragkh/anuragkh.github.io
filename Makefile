.PHONY: all cv site serve clean

BUNDLE ?= bundle

all: cv site

cv:
	$(MAKE) -C cv pdf

site: cv
	$(BUNDLE) exec jekyll build --destination ./_site

serve: site
	$(BUNDLE) exec jekyll serve

clean:
	$(MAKE) -C cv clean
	rm -rf _site
