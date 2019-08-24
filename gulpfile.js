const { watch } = require("gulp");
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require("browser-sync").create();

function bs() {
	browserSync.init({
    server: "./"
  });
}

exports.default = function() {
	watch("js/*.js", { events: 'all' }, bs());
	watch("css/*.css", { events: 'all' }, bs());
	watch("*.html", { events: 'all' }, bs());
}
	
function style() {
    return (
        gulp
		    .src("css/styles.css")
		    .pipe(
		      autoprefixer({
		        browsers: ["last 2 versions"]
		      })
		    )
		    .pipe(gulp.dest("css/styles.css"))
		    .pipe(browserSync.stream());
    );
}

exports.style = style;