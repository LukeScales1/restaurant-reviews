const gulp = require("gulp");
const sass = require("gulp-sass");
const autoprefixer = require('gulp-autoprefixer');
	
function style() {
    return (
        gulp
		    .src("sass/**/*.scss")
		    .pipe(sass())
		    .on("error", sass.logError)
		    .pipe(
		      autoprefixer({
		        browsers: ["last 2 versions"]
		      })
		    )
		    .pipe(gulp.dest("./css"))
    );
}

exports.style = style;