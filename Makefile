MODULES=node_modules/
SRC=src/main.ts
BIN=bin/tache

all: build

build:
	@bun build $(SRC) --compile --outfile=$(BIN) && echo -e "$(BIN) \tcompiled"

setup: $(MODULES) compile
	@echo "Project setuped and compiled"

compile:
	@bun compile

install:
	@command -p bash ./scripts/install.sh  && echo -e '"tache" \tinstalled'
	
clean:
	@rm -rf dist/main.js && echo -e '"dist/main.js" \tremoved'

fclean: clean
	@rm -rf bin/tache && echo -e '"bin/tache" \tremoved'

re: fclean build

$(MODULES):
	@pnpm install
