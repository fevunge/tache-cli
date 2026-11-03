# Customization Guide

This template is intentionally minimal. Customize it without breaking shared conventions.

## Keep these conventions

- Use Conventional Commits (`feat:`, `fix:`, `docs:`, `chore:`, `refactor:`, `test:`, `build:`).
- Keep `TODO.md` priority sections (`High`, `Medium`, `Low`) with checkbox items.
- Keep `CHANGELOG.md` in Keep a Changelog format.
- Preserve the root `.tlhc.yml` marker file for template identity.

## Safe customization areas

- `README.md`: replace placeholders, project story, stack, and usage examples.
- `.gitignore`: add language/tool-specific ignores as needed.
- `.github/workflows/`: tailor lint/build/test pipeline to your stack.
- `docs/`: add architecture, contribution, or deployment guides.

## Recommended process

1. Replace placeholders first.
2. Add/remove files only when they have a clear project purpose.
3. Update `README.md` whenever a new standard file is introduced.
4. Record notable structural changes in `CHANGELOG.md`.
