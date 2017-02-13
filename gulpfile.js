/* eric/katbiznis
*
* /gulpfile.js - gulp tasks
*
* code by email...
* started at 09/02/2017
*
*/
//--Config--//
var src = {
    js: "src/js/**/*.js"
},
    dest = {
    js: "scripts"
};


//--Require--//
var gulp = require("gulp"),
    babel = require("gulp-babel");



// --- Task for js

gulp.task( "js", function () {
    gulp.src( src.js )
    .pipe( babel() )
    .pipe( gulp.dest( dest.js ) )
} );

// --- Task for watch

gulp.task( "watch", function () {
    gulp.watch( src.js, [ "js" ] );
} );

// --- Task for alias

gulp.task( "default" , [ "js" ]);
gulp.task( "work" , [ "default", "watch" ]);
