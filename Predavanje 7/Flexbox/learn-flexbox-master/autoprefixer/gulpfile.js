const gulp = require('gulp')
const autoprefixer = require('gulp-autoprefixer')

// task --> takes a name and a function to run 
// (gulp styles on the terminal)
gulp.task('styles', () => {
  // define the input
  gulp.src('css/styles.css')
    // put input into the pipe (in order to be processed)
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    // specify the output destination
    .pipe(gulp.dest('dist'))
})

gulp.task('watch', function() {
  // define the file that you want to watch ('css/styles.css')
  // then specify and array of tasks to run when the watched file changes
  gulp.watch('css/styles.css', ['styles']);
})