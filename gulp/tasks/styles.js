var gulp = require('gulp');
var postcss = require('gulp-postcss'),
cssImport = require('postcss-import'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
autoprefixer = require('autoprefixer'),
mixins = require('postcss-mixins');


gulp.task('styles', function(){
	return gulp.src('./app/assets/styles/styles.css')
	.pipe(postcss([cssImport, mixins, cssvars, nested,autoprefixer]))
	.on('error', function(errorInfo){
		this.emit('end');
		console.log(errorInfo.toString());
	})
	.pipe(gulp.dest('./app'));
});