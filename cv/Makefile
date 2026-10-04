TEX = cv
SRC_DIR = src
BUILD_DIR = build
MAIN_TEX = $(SRC_DIR)/$(TEX).tex
TEX_SOURCES = $(wildcard $(SRC_DIR)/*.tex)
GENERATED_SOURCES = $(wildcard generated/*.tex)
DATA_SOURCES = $(wildcard ../_data/*.yml)
GENERATOR = ../scripts/generate_cv.rb
BUILD_PDF = $(BUILD_DIR)/$(TEX).pdf
PDF = $(TEX).pdf
BIBER ?= sh ../scripts/run_biber.sh
RUBY ?= ruby

.PHONY: all pdf generate open clean

all: pdf open

pdf: $(PDF)

generate: $(GENERATOR) $(DATA_SOURCES)
	$(RUBY) $(GENERATOR)

$(PDF): generate $(TEX_SOURCES) ../_bibliography/papers.bib
	mkdir -p $(BUILD_DIR)
	pdflatex -output-directory=$(BUILD_DIR) $(MAIN_TEX)
	$(BIBER) --input-directory $(BUILD_DIR) --output-directory $(BUILD_DIR) $(TEX)
	pdflatex -output-directory=$(BUILD_DIR) $(MAIN_TEX)
	pdflatex -output-directory=$(BUILD_DIR) $(MAIN_TEX)
	cp $(BUILD_PDF) $(PDF)

open: $(PDF)
	open $(PDF)

clean:
	rm -rf $(BUILD_DIR) generated $(PDF)
