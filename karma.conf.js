module.exports = function(config) {
  config.set({

    preprocessors: {
      'app/templates/directives/*.html': ['ng-html2js']
    },

    basePath: './',

    files: [
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular-route/angular-route.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
      "../node_modules/sinon/**/*.js",
      'app/app.js',
      'app/controllers/*.js',
      'app/factories/*.js',
      'app/directives/*.js',
      'app/filters/*.js',
      'spec/*.js',
      "app/templates/*.html",
      "app/templates/directives/*.html"
    ],

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['Chrome'],

    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
      'karma-junit-reporter',
      'karma-ng-html2js-preprocessor'
    ],

    junitReporter: {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    },

    ngHtml2JsPreprocessor: {
      stripPrefix: 'app/'
    }
  });
};
