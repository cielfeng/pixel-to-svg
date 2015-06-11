module.exports= function(config) {
  if(process.env.TRAVIS){
    conf.customLaunchers= customLaunchers
    conf.reporters= ['dots', 'saucelabs']

    conf.colors= true
    conf.logLevel= config.LOG_INFO
    conf.autoWatch= true

    conf.browsers= Object.keys(customLaunchers)
    conf.singleRun= true
  }
  config.set(conf)
}

var conf= {
  // base path that will be used to resolve all patterns (eg. files, exclude)
  basePath: '',


  // frameworks to use
  // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
  frameworks: ['mocha', 'browserify'],


  // list of files / patterns to load in the browser
  files: [
    "test/**/*.js"
  ],


  // list of files to exclude
  exclude: [
  ],


  // preprocess matching files before serving them to the browser
  // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
  preprocessors: {
    "test/**/*.js": "browserify"
  },

  browserify: {
    debug: true,
    transform: [
      ['babelify', {plugins: ['babel-plugin-espower']}],
      ['brfs'],
    ],
    extensions: ['.js'],
  },

  // test results reporter to use
  // possible values: 'dots', 'progress'
  // available reporters: https://npmjs.org/browse/keyword/karma-reporter
  reporters: ['progress'],


  // web server port
  port: 9876,


  // enable / disable colors in the output (reporters and logs)
  colors: true,


  // level of logging
  // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
  logLevel: 'INFO',


  // enable / disable watching file and executing tests whenever any file changes
  autoWatch: true,


  // start these browsers
  // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
  browsers: ['Chrome'],


  // Continuous Integration mode
  // if true, Karma captures browsers, runs the tests and exits
  singleRun: false
}

var sessionName= require('./package').name
var customLaunchers= {
  chrome_43: {
    testName: sessionName,
    base: 'SauceLabs',
    browserName: 'chrome',
    platform: 'Windows 7',
    version: '43',
    passed: true,
    public: 'public',
    recordVideo: true,
  },
  chrome_42: {
    testName: sessionName,
    base: 'SauceLabs',
    browserName: 'chrome',
    platform: 'Windows 7',
    version: '42',
    passed: true,
    public: 'public',
    recordVideo: true,
  },
  chrome_41: {
    testName: sessionName,
    base: 'SauceLabs',
    browserName: 'chrome',
    platform: 'Windows 7',
    version: '41',
    passed: true,
    public: 'public',
    recordVideo: true,
  },
  chrome_40: {
    testName: sessionName,
    base: 'SauceLabs',
    browserName: 'chrome',
    platform: 'Windows 7',
    version: '40',
    passed: true,
    public: 'public',
    recordVideo: true,
  },
  chrome_39: {
    testName: sessionName,
    base: 'SauceLabs',
    browserName: 'chrome',
    platform: 'Windows 7',
    version: '39',
    passed: true,
    public: 'public',
    recordVideo: true,
  },
 
  ie_11: {
    testName: sessionName,
    base: 'SauceLabs',
    browserName: 'internet explorer',
    platform: 'Windows 8.1',
    version: '11',
    passed: true,
    public: 'public',
    recordVideo: true,
  },
  ie_10: {
    testName: sessionName,
    base: 'SauceLabs',
    browserName: 'internet explorer',
    platform: 'Windows 7',
    version: '10',
    passed: true,
    public: 'public',
    recordVideo: true,
  },
  ie_9: {
    testName: sessionName,
    base: 'SauceLabs',
    browserName: 'internet explorer',
    platform: 'Windows 7',
    version: '9',
    passed: true,
    public: 'public',
    recordVideo: true,
  },
  ie_8: {
    testName: sessionName,
    base: 'SauceLabs',
    browserName: 'internet explorer',
    platform: 'Windows XP',
    version: '8',
    passed: true,
    public: 'public',
    recordVideo: true,
  },
 
  firefox_38: {
    testName: sessionName,
    base: 'SauceLabs',
    browserName: 'firefox',
    platform: 'Windows 7',
    version: '38',
    passed: true,
    public: 'public',
    recordVideo: true,
  },
  firefox_37: {
    testName: sessionName,
    base: 'SauceLabs',
    browserName: 'firefox',
    platform: 'Windows 7',
    version: '37',
    passed: true,
    public: 'public',
    recordVideo: true,
  },
  firefox_36: {
    testName: sessionName,
    base: 'SauceLabs',
    browserName: 'firefox',
    platform: 'Windows 7',
    version: '36',
    passed: true,
    public: 'public',
    recordVideo: true,
  },
  firefox_35: {
    testName: sessionName,
    base: 'SauceLabs',
    browserName: 'firefox',
    platform: 'Windows 7',
    version: '35',
    passed: true,
    public: 'public',
    recordVideo: true,
  },
  firefox_34: {
    testName: sessionName,
    base: 'SauceLabs',
    browserName: 'firefox',
    platform: 'Windows 7',
    version: '34',
    passed: true,
    public: 'public',
    recordVideo: true,
  },
 
  safari_8: {
    testName: sessionName,
    base: 'SauceLabs',
    browserName: 'safari',
    platform: 'OS X 10.10',
    version: '8',
    passed: true,
    public: 'public',
    recordVideo: true,
  },
  safari_7: {
    testName: sessionName,
    base: 'SauceLabs',
    browserName: 'safari',
    platform: 'OS X 10.9',
    version: '7',
    passed: true,
    public: 'public',
    recordVideo: true,
  },
  safari_6: {
    testName: sessionName,
    base: 'SauceLabs',
    browserName: 'safari',
    platform: 'OS X 10.8',
    version: '6',
    passed: true,
    public: 'public',
    recordVideo: true,
  },
  safari_5: {
    testName: sessionName,
    base: 'SauceLabs',
    browserName: 'safari',
    platform: 'OS X 10.7',
    version: '5',
    passed: true,
    public: 'public',
    recordVideo: true,
  },
 
  iphone: {
    testName: sessionName,
    base: 'SauceLabs',
    browserName: 'iphone',
    platform: 'OS X 10.10',
    version: '8.2',
    passed: true,
    public: 'public',
    recordVideo: true,
  },
  iphone: {
    testName: sessionName,
    base: 'SauceLabs',
    browserName: 'iphone',
    platform: 'OS X 10.10',
    version: '7.1',
    passed: true,
    public: 'public',
    recordVideo: true,
  },

  ipad: {
    testName: sessionName,
    base: 'SauceLabs',
    browserName: 'ipad',
    platform: 'OS X 10.10',
    version: '8.2',
    passed: true,
    public: 'public',
    recordVideo: true,
  },
  ipad: {
    testName: sessionName,
    base: 'SauceLabs',
    browserName: 'ipad',
    platform: 'OS X 10.10',
    version: '7.1',
    passed: true,
    public: 'public',
    recordVideo: true,
  },

  android: {
    testName: sessionName,
    base: 'SauceLabs',
    browserName: 'android',
    version: '5.1',
    passed: true,
    public: 'public',
    recordVideo: true,
  },
  android: {
    testName: sessionName,
    base: 'SauceLabs',
    browserName: 'android',
    platform: 'Linux',
    version: '4.4',
    passed: true,
    public: 'public',
    recordVideo: true,
  },
  android: {
    testName: sessionName,
    base: 'SauceLabs',
    browserName: 'android',
    platform: 'Linux',
    version: '4.1',
    passed: true,
    public: 'public',
    recordVideo: true,
  },
}