# webpack-babel

This is a minimal setup for projects using webpack and babel. Everything in this template may
seem evident to others, but not to me: I come from a typescript world and didn't find any
reason to use babel as a transpiler ... until I wanted to use experimental es2017 features (most notably
Object.assign or object spreading in a redux context).

As it turned out, these features are not yet available in Typescript (they are staged, though in future releases).

The biggest surprise in the current setup, is how well VSCode's javascript language service keeps
behaving, even without typescript compilation and linting. Intellisense is not impacted at all.

1. npm init 
2. npm install  --save-dev 
    webpack 
    webpack-dev-server 
    babel-core
    babel-eslint
    babel-loader
    babel-plugin-transform-object-rest-spread
    babel-preset-es2015
    eslint
    eslint-loader

3. Add 2 npm scripts:
    - build : call webpack
    - debug : run webpack-dev-server

4. EsLint configuration in .eslintrc.json: override the built-in parser by
    setup babel-eslint in order to force eslint to take the extra presets into account.

6. Setup VSCode:
    - no need for a tsconfig or jsconfig.json file
    - in order to configure VSCode to rely on the es-linter alone:
        * in ./.vscode/settings.json, add  "javascript.validate.enable" : false
        * enable the eslint plugin in VSCode
    - see the .vscode/tasks.json file on how to call npm build and debug scrips from within the command
        palette or with predefined shortcuts.



##Usage as a template for your projects

Clone it and detach its remote origin:

- git clone --depth 1 https://github.com/lucclaesen/webpack-babel.git ${yourNewProject}
- cd ${yourNewProject}
- git remote rm origin