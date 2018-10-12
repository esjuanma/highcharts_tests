const fs = require('fs');
const browserify = require('browserify');
const watchify = require('watchify');
const browserSync = require('browser-sync').create();

browserSync.init({
    server: './'
});

const b = browserify({
    entries: ['main.js'],
    cache: {},
    packageCache: {},
    plugin: [watchify]
});

function bundle() {
    b.bundle()
        .pipe(fs.createWriteStream('bundle.js'))
    
    console.log(`Bundled ${Date()}`);
}

console.log('Watching..');

b.on('update', bundle);
bundle();
