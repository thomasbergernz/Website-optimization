## Website Performance Optimization Project

The performance optimization was done using <a href="https://developers.google.com/speed/pagespeed/insights/">Google PageSpeed Insights</a> tips. 

Minification and compression of assets like CSS, JS, HTML and images was done using <a href="http://gulpjs.com">Gulp</a>.

The optimized pages are hosted here: <a href="http://thomasbergernz.github.io/Website-optimization/index.html">http://thomasbergernz.github.io/Website-optimization/index.html</a>

The non-production files are in the <a href="https://github.com/thomasbergernz/Website-optimization/tree/master">master branch.</a>

### views/main.js
#### function changePizzaSizes
- moved variables out of the loop
- reduced loop to iterate through containers only to update width
 
#### function updatePositions
- introduced new local function calculator() in order to be able to batch update the sliding pizzas
- moved variables out of the loop if possible
- modified style attribute to use 'transform' 'translateX' rather then 'left'

#### DOMContentLoaded
- optimized images and reduced no. of background pizza elements to 80 (200 seems to cater for 4k displays);
