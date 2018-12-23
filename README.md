**Chrome Extension in React** 

[create-react-app](https://github.com/facebook/create-react-app) makes it easy to build web applications in react. It abstracts out a lot many complicated configuration setups so that developers can focus purely on building great applications. This is not true, when it comes to building chrome or any other browser specific extensions in general. 

Chrome Extensions consists of three fundamental units - 
1. Popup - Popup is what you get when you click on the extension icon placed at the extreme right of the address bar in the browser. Popup has a context of its own. It doesn't interfere with the context of the page on which it is opened. It is alive only when it is open.
2. Background Scripts - Background Scripts in chrome extensions are named for a reason. They handle the background tasks such as making a API request to the server. Background scripts are active all of the time. They can also listen to the push notifications (FCM) and accordingly display them to the user. Background scripts never go to the dormant state hence they're also used for preserving the state of the extension. For example, we may store the local data of the extension in IndexedDB in the context of background scripts.
3. Content Scripts - If the extension is supposed to interfere with the DOM on the web page, we make use of Content Scripts. Content Scripts are injected into the webpage for doing tasks like modifying its DOM or adding some custom DOM elements. Context Scripts live in an isolated world. They don't interfere with the context of the web page. 

While we can make any extension in javascript to serve our needs, it would be fun if we can do it in react. This repository serves as the boilerplate for chrome extensions in react. We've to maintain three different contexts in chrome extensions. This would mean either building three different applications (which is painful) or going by another interesting approach. I've obviously tried out the later approach by first ejecting the code using `npm eject` and then making webpack configurations. 

Following changes were done after ejecting the code - 

1. create-react-app adds inline script in index.html. Inline scripts are not allowed in chrome extensions because of [Content Security Policy](https://developer.chrome.com/extensions/contentSecurityPolicy). So, to [disable the addition of inline scripts](https://github.com/facebook/create-react-app/pull/5354), we've to add an environment variable `INLINE_RUNTIME_CHUNK=false`.
2. Adding fields related to chrome extension in manifest.json
3. Creating background.html to handle tasks running in the background of Chrome Extension. I've handled the separation of app (popup) and background specific chunks by configuring code splitting in the webpack config files. This is done so that only background specific files are loaded in the context of background and only app specific files are loaded in the context of app. This can also be done for content-scripts by excluding its chunks from both app and background.
4. [Handling hashing of static assets](https://github.com/facebook/create-react-app/issues/3805) - Since different file names are generated on every build, we've to update the manifest.json file with the respective file names. I've written a node script `update-manifest.js` that does the work of updating manifest.json with the respective file names from `asset-manifest.json` in the build folder. 

