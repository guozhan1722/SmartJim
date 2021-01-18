$ cd MMM-awesome-alexa # go into the module directory
$ npm i --package-lock-only
$ npm audit fix --force
$ npm install --only=prod # Install depdendencies
$ cd node_modules
$ rm -rf snowboy # Remove the installed snowboy
$ cp ../snowboy . -rf
$ cd snowboy # Go into the /snowboy directory
$ npm install nan --save # Make sure you install this in the /snowboy directory
$ npm install node-pre-gyp@0.12.0 --save # Make sure you install this in the /snowboy directory
$ npm i @types/node@latest
$ npm install # Make sure you install in the /snowboy directory
$ npm run prepublish # Make sure you run this in the /snowboy directory
$ npm install --save-dev electron-rebuild # Make sure you install this in the /snowboy directory
$ npm install nan # Make sure you install this in the /snowboy directory
$ ./node_modules/.bin/electron-rebuild # Build snowboy to your device specifications, in the /snowboy directory
