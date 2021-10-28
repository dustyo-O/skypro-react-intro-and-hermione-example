module.exports = {
  sets: {
    desktop: {
      files: 'features/desktop'
    }
  },

  browsers: {
    chrome: {
      desiredCapabilities: {
        browserName: 'chrome' // this browser should be installed on your OS
      }
    }
  },

  plugins: {
    'html-reporter/hermione': {
        enabled: true,
        path: 'hermione/hermione-reports',
        defaultView: 'all',
        baseHost: 'localhost',
        errorPatterns: [
            'Parameter .* must be a string',
            {
                name: 'Cannot read property of undefined',
                pattern: 'Cannot read property .* of undefined',
                hint: '<div>google it, i dont know how to fix it =(</div>'
            }
        ]
    }
},
};
