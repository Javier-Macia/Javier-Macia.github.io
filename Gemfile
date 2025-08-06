# frozen_string_literal: true
source "https://rubygems.org"

gem "jekyll"
#gem "github-pages"

# Dependencias para Ruby 3.4+ compatibilidad
gem "base64"
gem "bigdecimal"

# Forzar versiones más nuevas de dependencias
gem "terminal-table", "~> 4.0"
gem "unicode-display_width", "~> 3.1"
gem "kramdown-parser-gfm", "~> 1.1"

# Optimización para Windows
gem 'wdm', '>= 0.1.0' if Gem.win_platform?

group :jekyll_plugins do
  gem "jekyll-sitemap"
  gem "jekyll-feed"
  gem "jekyll-seo-tag"  
  gem "jekyll-date-localization"
  gem "jekyll-redirect-from"
end
