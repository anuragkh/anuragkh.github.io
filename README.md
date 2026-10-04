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
