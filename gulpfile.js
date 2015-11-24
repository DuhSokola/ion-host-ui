var gulp = require('gulp'),
  debug = require('gulp-debug');

/**
 * Combined Tasks
 */
gulp.task('serve', ['inject', 'browserSync']);
gulp.task('inject', ['injectBower', 'injectSources']);



/**
 * Dependency Injection
 */
var inject = require('gulp-inject'),
  wiredep = require('wiredep');

gulp.task('injectBower', function () {
  wiredep({
      src: './www/index.html',
      directory: './www/externals/bower_components/',
      bowerJson: require('./bower.json'),
      devDependencies: false
    }
  )
});
gulp.task('injectSources', function () {
  var target = gulp.src('www/index.html');

  return target.pipe(inject(gulp.src(
    [
      'app/**/*.js',
      'app/**/*.css',
      'assets/**/*.js',
      'assets/**/*.css',
      '!externals/bower_components/**/*.css',
      '!externals/bower_components/**/*.js'
    ],
    {
      read: false,
      cwd: 'www'
    })
  )).pipe(gulp.dest('./www'));
});

/**
 * Server with BrowserSync
 */
var browserSync = require('browser-sync'),
  reload = browserSync.reload;

gulp.task('browserSync', function () {
  browserSync({
    server: {
      baseDir: 'www'
    }
  });
  gulp.watch(
    [
      'app/**/*.js',
      'app/**/*.html',
      'assets/**/*.js',
      'assets/**/*.css',
      'externals/**/*.js',
      'externals/**/*.html',
      '*.html',
      'assets/i18n/*.json'
    ],
    {
      cwd: 'www'
    },
    reload);
});
