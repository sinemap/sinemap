// Define variables.
var autoprefixer = require('autoprefixer');
var browserSync  = require('browser-sync').create();
var gulpCached   = require('gulp-cached');
var debug        = require('gulp-debug');
var cleancss     = require('gulp-clean-css');
var concat       = require('gulp-concat');
var del          = require('del');
var gulp         = require('gulp');
var gutil        = require('gulp-util');
var imagemin     = require('gulp-imagemin');
var notify       = require('gulp-notify');
var postcss      = require('gulp-postcss');
var rename       = require('gulp-rename');
var responsive   = require('gulp-responsive');
var run          = require('gulp-run');
var size         = require('gulp-size');
var sass         = require('gulp-sass');
var shell        = require('shelljs');
var uglify       = require('gulp-uglify');

// Include paths file.
var paths = require('./_assets/gulp_config/paths');

// Uses Sass compiler to process styles, adds vendor prefixes, minifies, then
// outputs file to the appropriate location.

gulp.task('build:styles:main', function(done) {
    return gulp.src([paths.sassFiles + '/main.scss'])
        // preprocess Sass
    .pipe(sass({ precision: 5, outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(postcss([ autoprefixer() ]))
        .pipe(cleancss({level: 2}))
        .pipe(size())
        .pipe(gulp.dest(paths.jekyllCssFiles))
        .pipe(gulp.dest(paths.siteCssFiles))
        .on('error', gutil.log);
    done();
});

gulp.task('build:styles:critical', function(done) {
    return gulp.src([paths.sassFiles + '/critical.scss'])
    .pipe(sass({ precision: 5, outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(cleancss({level: 2}))
        .pipe(size())
        .pipe(gulp.dest('_includes'))
        .on('error', gutil.log);
    done();
});

// Builds all styles.
gulp.task('build:styles', gulp.parallel('build:styles:main', 'build:styles:critical'));

gulp.task('clean:styles', function(done) {
    del([paths.jekyllCssFiles + 'main.css',
        paths.siteCssFiles + 'main.css',
        '_includes/critical.css'
    ]);
    done();
});

// Concatenates and uglifies global JS files and outputs result to the
// appropriate location.
gulp.task('build:scripts', function(done) {
    return gulp.src([
        paths.jsFiles + '/lazysizes.js', paths.jsFiles + '/lazy-object-fit.js', paths.jsFiles + '/lazy-blurup.js', paths.jsFiles + '/headroom.js', paths.jsFiles + '/bigfoot.js', paths.jsFiles + '/bigfoot2.js', paths.jsFiles + '/subscription.js', paths.jsFiles + '/search.js'
    ])
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(size())
        .pipe(gulp.dest(paths.jekyllJsFiles))
        .pipe(gulp.dest(paths.siteJsFiles))
        .on('error', gutil.log);
    done();
});

gulp.task('clean:scripts', function(done) {
    del([paths.jekyllJsFiles + 'main.js', paths.siteJsFiles + 'main.js']);
    done();
});

// HTML

// IMAGES 

// Featured

gulp.task('build:images:featured', function(done) {
    return gulp.src(paths.imageFiles + '/featured' + paths.imagePattern)
    .pipe(gulpCached('build:images:featured'))
        .pipe(responsive({
      // resize all images
      '*.*': [{
        width: 32,
        height: 18,
        rename: { suffix: '-lq' },
      }, {
        width: 320,
        height: 180,
        rename: { suffix: '-320' },
      }, {
        width: 640,
        height: 360,
        rename: { suffix: '-640' },
      }, {
        width: 960,
        height: 540, 
        rename: { suffix: '-960' },
      }, {
        width: 1280,
        height: 720,
        rename: { suffix: '-1280' },
      }, {
        width: 1600,
        height: 900,
      }]
    }, {
      // global configuration for all images
      errorOnEnlargement: false,
      withMetadata: false,
      quality: 75,
      progressive: true,
      errorOnUnusedConfig: false
    }))
        .pipe(size())
        .pipe(gulp.dest(paths.jekyllImageFiles + '/featured'))
        .pipe(gulp.dest(paths.siteImageFiles + '/featured'))

        .pipe(browserSync.stream());
    done();
});

// Book images

gulp.task('build:images:kitap', function(done) {
    return gulp.src(paths.imageFiles + '/kitaplik' + paths.imagePattern)
    .pipe(gulpCached('build:images:kitap'))
        .pipe(responsive({
      // resize all images
      '*.*': [{
        width: 12,
        height: 18,
        rename: { suffix: '-lq' },
      }, {
        width: 320,
        height: 480,
        rename: { suffix: '-320' },
      }, {
        width: 640,
        height: 960,
        rename: { suffix: '' },
      }]
    }, {
      // global configuration for all images
      errorOnEnlargement: false,
      withMetadata: false,
      quality: 75,
      progressive: true,
      errorOnUnusedConfig: false
    }))
        .pipe(gulp.dest(paths.jekyllImageFiles + '/kitaplik'))
        .pipe(gulp.dest(paths.siteImageFiles + '/kitaplik'))
        .pipe(browserSync.stream());
    done();
});

// Inline post images

gulp.task('build:images:others', function() {
    return gulp.src(paths.imageFiles + '/others' + paths.imagePattern, "!" + paths.imageFiles + "/others/**/*.{png, gif,svg}")
    .pipe(gulpCached('build:images:others'))
        .pipe(responsive({
      // resize all images
      '*.*': [{
        width: 1400,
      }]
    }, {
      // global configuration for all images
      errorOnEnlargement: false,
      withMetadata: false,
      quality: 75,
      progressive: true,
      errorOnUnusedConfig: false
    }))
        .pipe(gulp.dest(paths.jekyllImageFiles + '/others'))
        .pipe(gulp.dest(paths.siteImageFiles + '/others'))
        .pipe(browserSync.stream());
} 
);

gulp.task('build:images:others-nonjpg', function() {
  return gulp.src(paths.imageFiles + "/others/**/*.{png,gif,svg}")
  .pipe(gulpCached('build:images:others-nonjpg'))
  .pipe(
    imagemin(
      [
        imagemin.gifsicle({ interlaced: true }),
        imagemin.optipng(),
        imagemin.svgo({ plugins: [{ cleanupIDs: false }] })
      ],
      { verbose: true }
    )
  )
      .pipe(gulp.dest(paths.jekyllImageFiles + '/others'))
      .pipe(gulp.dest(paths.siteImageFiles + '/others'))
      .pipe(browserSync.stream());
} 
);

// Inline large images

gulp.task('build:images:huge', function(done) {
    return gulp.src(paths.imageFiles + '/huge' + paths.imagePattern)
    .pipe(gulpCached('build:images:huge'))
        .pipe(responsive({
      // resize all images
      '*.*': [{
        width: 90,
        rename: { suffix: '-lq' },
      }, {
        width: 900,
        rename: { suffix: '-900' },
      }, {
        width: 1400,
        rename: { suffix: '-1400' },
      }, {
        width: 1900,
      }]
    }, {
      // global configuration for all images
      errorOnEnlargement: false,
      withMetadata: false,
      quality: 75,
      progressive: true,
      errorOnUnusedConfig: false
    }))
        .pipe(size())
        .pipe(gulp.dest(paths.jekyllImageFiles + '/huge'))
        .pipe(gulp.dest(paths.siteImageFiles + '/huge'))
        .pipe(browserSync.stream());
    done();
});

gulp.task('build:images', gulp.series('build:images:featured', 'build:images:kitap', 'build:images:others', 'build:images:others-nonjpg', 'build:images:huge' ));

gulp.task('clean:images', function(done) {
    del([paths.jekyllImageFiles, paths.siteImageFiles]);
    done();
});

// Runs jekyll build command.
gulp.task('build:jekyll', done => {
    shell.exec('bundle exec jekyll build --config _config.yml');
    done();});

// Runs jekyll build command using test config.
gulp.task('build:jekyll:test', done => {
    shell.exec('bundle exec jekyll build --config _config.yml,_config.test.yml');
    done();});

// Deletes the entire _site directory.
gulp.task('clean:jekyll', function(done) {
    del(['_site']);
    done();
});

gulp.task('clean', gulp.series('clean:jekyll',
    'clean:images',
    'clean:scripts',
    'clean:styles'));

// Builds site anew.

gulp.task('build', gulp.series('clean', gulp.parallel('build:scripts', 'build:styles'), 'build:images', 'build:jekyll'));

// Builds site anew using test config.
gulp.task('build:test', gulp.series('clean', gulp.parallel('build:scripts', 'build:styles'), 'build:images', 'build:jekyll:test'));

// Default Task: builds site.
gulp.task('default', gulp.series('build'));

// Special tasks for building and then reloading BrowserSync.
gulp.task('build:jekyll:watch', gulp.parallel('build:jekyll:test'), function(done) {
    browserSync.reload();
    done();
});

gulp.task('build:scripts:watch', gulp.parallel('build:scripts'), function(done) {
    browserSync.reload();
    done();
});

gulp.task('build:styles:watch', gulp.parallel('build:styles'), function(done) {
    browserSync.reload();
    done();
});


// Static Server + watching files.
// Note: passing anything besides hard-coded literal paths with globs doesn't
// seem to work with gulp.watch().

function reload(done) {
  browserSync.reload();
  done();
}
gulp.task('serve', gulp.series('build:test', (done) => {

    browserSync.init({
        server: paths.siteDir,
        index: "/index.html",
        injectChanges: true,
        ghostMode: false,
        browser: "google chrome",
        port: 4000,
        ui: {
            port: 4001
        }
    });
    done();

    // Watch site settings.
    gulp.watch('_config.yml', gulp.series('build:jekyll:watch', reload));

    // Watch .scss files; changes are piped to browserSync.
    gulp.watch('_assets/styles/**/*.scss', gulp.series('build:styles', reload));
    
    gulp.watch('_assets/styles/scss/_over.scss', gulp.series('build:jekyll:test', reload));

    // Watch .js files.
    gulp.watch('_assets/js/**/*.js', gulp.series('build:scripts:watch', reload));
    
    
    // Watch img files.
    gulp.watch('_assets/img/**/*', gulp.series('build:images', reload));

    // Watch posts.
    gulp.watch(['_posts/**/*.+(md|markdown|MD)', '_pages/**/*.+(md|markdown|MD)', '_notlar/**/*.+(md|markdown|MD)'], gulp.series('build:jekyll:watch', reload));

    // Watch html and markdown files.
    gulp.watch(['**/*.+(html|md|markdown|MD)', '!_site/**/*.*'], gulp.series('build:jekyll:watch', reload));

    // Watch RSS feed XML files.
    gulp.watch('**.xml', gulp.series('build:jekyll:watch', reload));
}));

gulp.task('update:bundle', function(done) {
    return gulp.src('')
        .pipe(run('bundle install'))
        .pipe(run('bundle update'))
        .pipe(notify({ message: 'Bundle Update Complete' }))
        .on('error', gutil.log);
    done();
});