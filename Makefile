
MODULES=node_modules/
SRC=src/main.ts
BIN=bin/tache

all: build

build:
	@bun build $(SRC) --compile --outfile=$(BIN)

compile:
	@bun compile
	
clean:
	@rm -rf dist/main.js

fclean: clean
	@rm -rf bin/tache

re: fclean build

$(MODULES):
	@pnpm install
