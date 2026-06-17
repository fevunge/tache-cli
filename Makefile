MODULES=node_modules/

all: build

build:
	@pnpm run build

$(MODULES):
	@pnpm install
