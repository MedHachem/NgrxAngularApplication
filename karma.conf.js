module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'src/**/*.ts',
    ],
    preprocessors: {
      'src/**/*.ts': ['karma-typescript'],
    },
    reporters: ['progress'],
    browsers: ['Chrome'],
    singleRun: false,
    restartOnFileChange: true,
  });
};
