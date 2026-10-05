# Anurag Khandelwal

This is the personal webpage of Anurag Khandelwal, hosted by GitHub Pages. 

## Shared website and CV data

CV sections that can also be used by the website live in focused files under
`_data/`, with one file per CV section:

- `profile.yml`: identity, contact details, and bio
- `education.yml`: degrees and advisors
- `work_history.yml`: academic and industry appointments
- `awards_honors.yml`: awards and honors
- `research_focus.yml`: research summary
- `research_impact.yml`: research impact
- `invited_talks.yml`: invited talks
- `funding.yml`: grants and fellowships
- `teaching.yml`: courses and offerings
- `advising.yml`: current and former advisees
- `education_outreach.yml`: education outreach
- `community_service.yml`: professional community service
- `university_service.yml`: university service
- `department_service.yml`: department service

Publication metadata remains in `_bibliography/papers.bib`; the ordered
`\cvbibentry` lists remain native to `cv/src/cv.tex`.

Each YAML file starts with a commented template for adding records. Data fields
describe the underlying fact rather than a particular output; the website and
CV renderers apply their own links, typography, grouping, and line wrapping.

Jekyll reads the YAML files directly. `scripts/generate_cv.rb` converts the
same records into ignored LaTeX fragments under `cv/generated/`, which are
included by `cv/src/cv.tex`.

Run `make` at the repository root to regenerate the CV and build the website.
Run `make -C cv pdf` to build only the CV. The GitHub Pages workflow performs
the same generation and rebuilds the PDF before running Jekyll.

Generated files under `_site/`, `cv/build/`, and `cv/generated/` should not be
edited by hand.

## Search discovery and webmaster tools

SEO metadata is rendered by `_includes/seo.html`. The canonical host is set in
`_config.yml`; page-specific search titles, descriptions, and schema types are
set in each page's front matter. The build also publishes `/robots.txt`,
`/sitemap.xml`, and the supplemental `/llms.txt` file.

After deploying a change that affects indexed content:

1. Confirm that `https://www.anuragkhandelwal.com/sitemap.xml` is public.
2. In Google Search Console, verify `anuragkhandelwal.com` as a Domain property
   and submit `https://www.anuragkhandelwal.com/sitemap.xml`.
3. Import that verified property into Bing Webmaster Tools; Bing imports the
   sitemap as part of the process. It can also be submitted directly in Bing's
   Sitemaps tool.

DNS verification is preferred because it covers HTTPS/HTTP and all subdomains.
If a URL-prefix property must use HTML meta-tag verification instead, paste only
the token value into `search_verification.google` or
`search_verification.bing` in `_config.yml`; the shared SEO include will add the
correct tag to the page head.
