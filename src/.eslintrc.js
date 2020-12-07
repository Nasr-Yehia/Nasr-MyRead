module.expots = {
    parser: "@babel/eslint-parser",
    /* eslint-env node, mocha */
    "env": {
         "es6": true,
         "node": true,
         "browser": true,
        },

        "parserOptions": {
            "ecmaVersion": 6,
            "sourceType": "module",
            "ecmaFeatures": {
                "jsx": true
            }
        },
    "plugins": [
        "react"
    ],
    "extends": [
        "plugin:react/all",
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    // disable rules from base configurations
    "rules": {
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",    
        "semi": "error",
        "no-console": true
    },
    "settings": {
        "react": {
          "createClass": "createReactClass",
          "pragma": "React", 
          "fragment": "Fragment", 
          "version": "detect",
          "flowVersion": "0.53" 
        }
    }
}