'use strict';

(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){},{}[]},{},[1]);
// I always forget how to do these
// https://egghead.io/lessons/ecmascript-6-es6-modules-es2015-import-and-export



typeof Symbol() === 'symbol'
typeof Symbol('foo') === 'symbol'
typeof Symbol.iterator === 'symbol'

var sym = Symbol("foo");
typeof sym;     // "symbol"
var symObj = Object(sym);
typeof symObj;  // "object"





var rad = 1234 * 367;
var hello = function whatsThis() {
  return 'hello' + 'again';
};

let house = require('ramda');

const nada = null;

const nada = 'blah';

var re = new RegExp("ab+c");

function Cat (name) {
  this.name = name;
};

const you = [1,2,3,4,5]
var re = /ab+c/;

var arr = [23];


let hi = 3786940.split('');

function hello (a, b, c) {
  return true ;
}

var _greeting = require('./greeting');

(0, _greeting.clog)(); // hello
(0, _greeting.clog2)(); // what up

},{"./greeting":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var clog = function clog() {
  console.log('hello');
};

exports.clog = clog;
var clog2 = function clog2() {
  console.log('what up');
}
exports.clog2 = clog2;


//# sourceMappingURL=app.js.map


class Rectangle extends Polygon {
  constructor(height, width) {
    super(height, width);
    this.name = 'Rectangle';
  }
  // Here, sayName() is a subclassed method which
  // overrides their superclass method of the same name.
  sayName() {
    ChromeSamples.log('Sup! My name is ', this.name + '.');
    super.sayHistory();
  }
}

let r = new Rectangle(50, 60);
r.sayName();

// Example 5: Defining static methods
// ===============================================================

// Classes support static members which can be accessed without an
// instance being present.
class Triple {
  // Using the 'static' keyword creates a method which is associated
  // with a class, but not with an instance of the class.
  static triple(n) {
    n = n || 1;
    return n * 3;
  }
}

// super.prop in this example is used for accessing super-properties from
// a parent class. This works fine in static methods too:
class BiggerTriple extends Triple {
  static triple(n) {
    return super.triple(n) * super.triple(n);
  }
}

ChromeSamples.log(Triple.triple());
ChromeSamples.log(Triple.triple(6));
ChromeSamples.log(BiggerTriple.triple(3));
// var tp = new Triple();
// ChromeSamples.log(tp.triple()); tp.triple is not a function



////////////
//imports //
////////////

import gulp from 'gulp'


// helpers
import fs from 'fs'
//import path from 'path'


// Conditionals
import gulpif from 'gulp-if'
import yargs from 'yargs'


// Reloading
import browserSync from 'browser-sync'


// Error handling
import plumber from 'gulp-plumber'
import notify from 'gulp-notify'
const plumberErrorHandler = { errorHandler: notify.onError({
   title: 'Gulp',
   message: 'Error: <%= error.message %>'
 })
}

// Templating
import jade from 'gulp-jade'
//import yaml from 'gulp-yaml'
//import md from 'marked'
//import data from 'gulp-data' // import yaml straight into Jade?
//import fmatter from 'gulp-front-matter' // Cna use jade for this


import vinylYamlData from 'vinyl-yaml-data'
import deepExtend from 'deep-extend-stream'
var locals


// CSS
import stylus from 'gulp-stylus'
import poststylus from 'poststylus'


// PostCSS
import autoprefixer from 'autoprefixer'
import csswring from 'csswring'

const browserSettings = {
  browsers: [
    'ie >= 8',
    'ie_mob >= 10',
    'ff >= 3.6',
    'chrome >= 10',
    'safari >= 5.1',
    'opera >= 11',
    'ios >= 7',
    'android >= 4.1',
    'bb >= 10'
  ]
}

const cssminOptions = {
  preserveHacks: false,
  removeAllComments: true
}

// JS
import concat from 'gulp-concat'
import uglify from 'gulp-uglify'

import gutil from 'gulp-util'
import source from 'vinyl-source-stream'
import browserify from 'browserify'
import watchify from 'watchify'
import babelify from 'babelify'
import exorcist from 'exorcist'


// Sourcemaps
import sourcemaps from 'gulp-sourcemaps'


// Icons
import evil from 'gulp-evil-icons'


// Images
import imagmin from 'gulp-imagemin'
import imgpng from 'imagemin-pngquant'
import changed from 'gulp-changed'


// Delpoy
import ghp from 'gulp-gh-pages'


///////////
// Paths //
///////////


const sendto = {
  dist: './dist'
};

const srcPath = {
  jade: './src/jade/htdocs/**/*.jade',
  yaml: './src/data/**/*.y{,a}ml',
  img: './src/img/**/*',
  stylus: './src/stylus/style.styl',
  js: './src/js/**/*.js'
};

const watchPath = {
  jade: './src/jade/**/*.jade',
  stylus: './src/stylus/**/*.styl',
  yaml: srcPath.yaml
};


//////////
//tasks //
//////////




var bundle = (bundler) => {
    return bundler
        .transform(babelify)
        .bundle()
        .on('error', (e) => {
            gutil.log(e.message);
        })
        .pipe(exorcist(`${sendto.dist}/app.js.map`))
        .pipe(source('bundle.js'))
        .pipe(gulp.dest(sendto.dist))
        .pipe(browserSync.stream())
};

gulp.task('jwatch', () => {
    watchify.args.debug = true;
    var watcher = watchify(browserify('./src/js/app.js', watchify.args));
    bundle(watcher);
    watcher.on('update', () => {
        bundle(watcher)+`${hello}`;
    });
    watcher.on('log', gutil.log);
});

gulp.task('js', () => {
    return bundle(browserify(sendto.dist));
});



//--------------------------


gulp.task('serve', ['stylus', 'jade', 'jwatch'], () => {
  browserSync.init({
    logFileChanges: false,
    server: {
      baseDir: sendto.dist
    }
  })

  gulp.watch(watchPath.jade, ['jade'])
  gulp.watch(watchPath.stylus, ['stylus'])
  gulp.watch(watchPath.yaml, ['jade'])
  gulp.watch(watchPath.js, ['jwatch'])
});


// Let's make a static YAML DB and make it consumable by Jade
// https://github.com/shinnn/vinyl-yaml-data
gulp.task('data', () => {
  locals = {}
  return gulp.src(srcPath.yaml)
    .pipe(vinylYamlData())
    .pipe(deepExtend(locals));
});


gulp.task('jade', ['data'], () => {
  return gulp.src(srcPath.jade)
    .pipe(plumber(plumberErrorHandler))
    //.pipe(frontMatter({ property: 'data' }))
    .pipe(jade({locals, pretty: true}))
    .pipe(evil())
    .pipe(gulp.dest(sendto.dist))
    .pipe(browserSync.stream())
});


gulp.task('stylus', () => {
  return gulp.src(srcPath.stylus)
    .pipe(plumber(plumberErrorHandler))
    .pipe(sourcemaps.init())
    .pipe(stylus({
      // Other PostCSS plugins to remember
      // cssnano
      // oldie
      // postcss-vertical-rhythm
      // postcss-zindex
      // postcss-flexbugs-fixes
      // postcss-style-guide
      // postcss-cssstats
      // list-selectors
      use: [
        poststylus([
          autoprefixer(browserSettings),
          csswring(cssminOptions),
          'pixrem',
          'postcss-pseudoelements',
          'postcss-opacity',
          'postcss-clearfix',
          'postcss-quantity-queries',
          'postcss-focus'
        ])
      ]
    }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(sendto.dist))
    .pipe(browserSync.stream());
})



gulp.task('default', ['serve'])

gulp.task('clog', () => {
	console.log( srcPath.yaml );
})


var ph = function() {
     if (10 >= 9) {
      return true;
     }
     else {
       return false;
     }
};
