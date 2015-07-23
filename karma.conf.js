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
      "node_modules/sinon/lib/sinon.js",
      'app/app.js',
      'app/controllers/*.js',
      'app/factories/*.js',
      'app/directives/*.js',
      'app/filters/*.js',
      "app/templates/*.html",
      "app/templates/directives/*.html",
      'app/img/*.*',
      'spec/*.js'
    ],

//    proxies: {
//      '/base/app/templates/img/': 'app/img/'
//    },

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['Chrome'],

    reporters: ['progress'],

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
