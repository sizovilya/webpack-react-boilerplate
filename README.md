Webpack React Boilerplate
==========================

##Installing:
1) Install node.js (LTS) - https://nodejs.org/

2) Open Terminal and "cd path_to_project_root"  ( For example cd C:\TFS\AwesomeProject )

3) **npm install**

Done! Now you have full configured environment for React development.

##Commands:
**npm start** - run development environment, it starts webpack dev server. (just open http://localhost:8080/ in browser for view result).

**npm run prod** - create fully minified production-ready files in dist folder.

##How to deploy to server:
1) **npm run prod**

2) Copy files from dist folder to your server.

3) Done!

##Included:
**React**

**React-Dom**

**Babel** and presets for transpilling from ES6/ES7 and JSX

**Webpack** and plugins

**Webpack dev server** for development

Also "Live Reload" included - webpack watch all your files and reload your browser on ctrl+s (on every file change)

##How to add packages:
Execute **npm install <package>** with "--save" flag. It inserts package to **package.json** file. For example, **npm install bootstrap --save**, it inserts bootstrap to package.json and **npm install** command in the root folder automatically install bootstrap for you in the future.

Also **npm install <package> --save-dev** for development dependencies like webpack, sass, babel and others.
