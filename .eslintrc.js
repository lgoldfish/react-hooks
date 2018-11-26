module.exports = {
    "extends": "airbnb",
    env:{
        "browser": true,
        "node": true,
        "commonjs": true,
        "amd": true,
        "es6":true,
    },
    plugins: [
        "react-hooks"
      ],
    rules:{
        "react/jsx-filename-extension": 0,
        "no-console":0,
        'global-require':0,
        'react/no-typos':0,
        "react/prop-types":0,
        "no-unused-vars":1,
        "react/no-array-index-key":0,
        "react/jsx-one-expression-per-line":0,
        "react-hooks/rules-of-hooks": "error"
    }
};