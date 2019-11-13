const grid = require('smart-grid');

module.exports = function () {
	$.gulp.task('grid', (done) => {
		let settings = {
			outputStyle: 'sass',
			columns: 24,
			offset: '30px',
			mobileFirst: false,
			container: {
				maxWidth: '1200px',
				fields: '30px'
			},
			breakPoints: {
				lg: {
					width: '1100px', /* -> @media (max-width: 1100px) */
				},
				md: {
					width: '960px'
				},
				sm: {
					width: '780px',
					fields: '15px' /* set fields only if you want to change container.fields */
				},
				xs: {
					width: '560px'
				}
				/*
				We can create any quantity of break points.

				some_name: {
					width: 'Npx',
					fields: 'N(px|%|rem)',
					offset: 'N(px|%|rem)'
				}
				*/
			}
		};
		grid('./src/assets/styles/helpers',settings);
		done();
	});

};
