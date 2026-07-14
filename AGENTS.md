# Repository Guidelines

## Project Structure & Module Organization

This is a static, bilingual Jekyll site deployed through GitHub Pages. Page sources live at the repository root (`index.md`, `about.md`, `gallery.md`). Shared HTML is in `_layouts/` and `_includes/`. Site settings and plugins are configured in `_config.yml`.

Translations belong in `_data/translations.yml`; gallery metadata belongs in `_data/gallery.yml`. Keep display-ready artwork in `assets/images/paintings/`, reusable illustration assets in `assets/images/`, styles in `assets/css/style.scss`, and browser behavior in `assets/js/main.js`. The Pages workflow is `.github/workflows/pages.yml`.

## Build, Test, and Development Commands

- `bundle install` installs the Ruby/Jekyll dependencies from `Gemfile`.
- `bundle exec jekyll serve` builds the site and serves it locally with live reload.
- `bundle exec jekyll build` produces the deployable site in `_site/`; run this before committing site changes.

There is no separate automated test suite. The production Jekyll build is the required verification. For changes to language links, gallery items, or assets, also inspect the generated paths in `_site/`.

## Coding Style & Naming Conventions

Use two spaces for YAML and HTML nesting. Preserve Liquid syntax and use `relative_url` for ordinary internal links and assets. Language-switcher URLs are an exception: keep their existing `static_href` handling so Polyglot does not rewrite them incorrectly.

Use lowercase, hyphenated names for new web assets, such as `clownfish-hero.png`. Add translated copy to both `en` and `ko` keys. Gallery records should use `file` plus localized `title` values.

## Commit & Pull Request Guidelines

Use concise, imperative commit subjects consistent with the existing history: `Add tiger favicon`, `Fix language switcher routes`, or `Update gallery artwork`. Keep unrelated changes in separate commits.

Pull requests should explain the visible change, identify any configuration or deployment impact, and include screenshots for layout or artwork changes. Confirm `bundle exec jekyll build` succeeds before requesting review.

## Configuration & Deployment

Do not commit `_site/`, `vendor/`, source ZIPs, or unoptimized camera originals. GitHub Actions builds and deploys `main` to Pages. Changes to the workflow should retain explicit Ruby and Node 24-compatible action versions.
