const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function run() {
    // ── Convert frames PNG → WebP ──────────────────────────────
    const framesDir = path.join(__dirname, 'frames');
    const outDir = path.join(__dirname, 'frames-webp');
    if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);

    const frameFiles = fs.readdirSync(framesDir).filter(f => f.endsWith('.png')).sort();
    console.log(`Converting ${frameFiles.length} frames to WebP...`);

    for (const file of frameFiles) {
        const src = path.join(framesDir, file);
        const dest = path.join(outDir, file.replace('.png', '.webp'));
        await sharp(src)
            .webp({ quality: 82, effort: 4 })
            .toFile(dest);
        process.stdout.write('.');
    }
    console.log('\nFrames done.');

    // ── Optimize hero images ───────────────────────────────────
    const assetsDir = path.join(__dirname, 'assets');

    // hero-1.jpg → compressed JPG + WebP
    await sharp(path.join(assetsDir, 'hero-1.jpg'))
        .resize(1920, null, { withoutEnlargement: true })
        .jpeg({ quality: 80, mozjpeg: true })
        .toFile(path.join(assetsDir, 'hero-1-opt.jpg'));
    await sharp(path.join(assetsDir, 'hero-1.jpg'))
        .resize(1920, null, { withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(path.join(assetsDir, 'hero-1.webp'));

    // hero-2.jpg
    await sharp(path.join(assetsDir, 'hero-2.jpg'))
        .resize(1920, null, { withoutEnlargement: true })
        .jpeg({ quality: 80, mozjpeg: true })
        .toFile(path.join(assetsDir, 'hero-2-opt.jpg'));
    await sharp(path.join(assetsDir, 'hero-2.jpg'))
        .resize(1920, null, { withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(path.join(assetsDir, 'hero-2.webp'));

    // hero-3.png → WebP + JPG (PNG 1.8MB → much smaller)
    await sharp(path.join(assetsDir, 'hero-3.png'))
        .resize(1920, null, { withoutEnlargement: true })
        .jpeg({ quality: 80, mozjpeg: true })
        .toFile(path.join(assetsDir, 'hero-3-opt.jpg'));
    await sharp(path.join(assetsDir, 'hero-3.png'))
        .resize(1920, null, { withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(path.join(assetsDir, 'hero-3.webp'));

    // logo.png → optimized PNG + WebP
    await sharp(path.join(assetsDir, 'logo.png'))
        .resize(200, null, { withoutEnlargement: true })
        .png({ compressionLevel: 9 })
        .toFile(path.join(assetsDir, 'logo-opt.png'));
    await sharp(path.join(assetsDir, 'logo.png'))
        .resize(200, null, { withoutEnlargement: true })
        .webp({ quality: 90 })
        .toFile(path.join(assetsDir, 'logo.webp'));

    console.log('Hero images done.');

    // ── Print size comparison ─────────────────────────────────
    const before = frameFiles.reduce((acc, f) => acc + fs.statSync(path.join(framesDir, f)).size, 0);
    const after = fs.readdirSync(outDir).reduce((acc, f) => acc + fs.statSync(path.join(outDir, f)).size, 0);
    console.log(`\nFrames: ${(before/1024/1024).toFixed(1)}MB → ${(after/1024/1024).toFixed(1)}MB`);
    console.log(`hero-1: ${(fs.statSync(path.join(assetsDir,'hero-1.jpg')).size/1024).toFixed(0)}KB → ${(fs.statSync(path.join(assetsDir,'hero-1-opt.jpg')).size/1024).toFixed(0)}KB JPG / ${(fs.statSync(path.join(assetsDir,'hero-1.webp')).size/1024).toFixed(0)}KB WebP`);
    console.log(`hero-3: ${(fs.statSync(path.join(assetsDir,'hero-3.png')).size/1024).toFixed(0)}KB → ${(fs.statSync(path.join(assetsDir,'hero-3-opt.jpg')).size/1024).toFixed(0)}KB JPG / ${(fs.statSync(path.join(assetsDir,'hero-3.webp')).size/1024).toFixed(0)}KB WebP`);
    console.log(`logo:   ${(fs.statSync(path.join(assetsDir,'logo.png')).size/1024).toFixed(0)}KB → ${(fs.statSync(path.join(assetsDir,'logo-opt.png')).size/1024).toFixed(0)}KB PNG / ${(fs.statSync(path.join(assetsDir,'logo.webp')).size/1024).toFixed(0)}KB WebP`);
}

run().catch(console.error);
