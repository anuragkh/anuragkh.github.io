.PHONY: all cv details site serve clean

BUNDLE ?= bundle

all: cv site

cv:
	$(MAKE) -C cv pdf

# Fills in missing _data/paper_details.yml records from public metadata APIs.
# Kept out of the default build so local builds stay offline and fast; run it
# when you add a paper, then review the appended entries before committing.
details:
	ruby scripts/fetch_paper_details.rb

site: cv
	$(BUNDLE) exec jekyll build --destination ./_site

serve: site
	$(BUNDLE) exec jekyll serve

clean:
	$(MAKE) -C cv clean
	rm -rf _site
