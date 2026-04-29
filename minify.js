const CleanCSS = require('clean-css');
const { minify } = require('terser');
const fs = require('fs');

async function run() {
    // Minify CSS
    const css = fs.readFileSync('styles.css', 'utf8');
    const cssResult = new CleanCSS({ level: 2 }).minify(css);
    fs.writeFileSync('styles.min.css', cssResult.styles);
    const cssOrig = Buffer.byteLength(css, 'utf8');
    const cssMin  = Buffer.byteLength(cssResult.styles, 'utf8');
    console.log(`CSS: ${(cssOrig/1024).toFixed(1)}KB → ${(cssMin/1024).toFixed(1)}KB (${Math.round((1-cssMin/cssOrig)*100)}% saved)`);

    // Minify JS
    const js = fs.readFileSync('script.js', 'utf8');
    const jsResult = await minify(js, { compress: true, mangle: true });
    fs.writeFileSync('script.min.js', jsResult.code);
    const jsOrig = Buffer.byteLength(js, 'utf8');
    const jsMin  = Buffer.byteLength(jsResult.code, 'utf8');
    console.log(`JS:  ${(jsOrig/1024).toFixed(1)}KB → ${(jsMin/1024).toFixed(1)}KB (${Math.round((1-jsMin/jsOrig)*100)}% saved)`);
}

run().catch(console.error);
