let mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');

mix.js('src/scripts.js', 'assets')
   .sass('src/styles.scss', 'assets')
   .options({
      processCssUrls: false,
      postCss: [tailwindcss('tailwind.config.js')]
   });

   