**Chrome Extension in React** 

[create-react-app](https://github.com/facebook/create-react-app) makes it easy to build web applications in react. It abstracts out a lot many complicated configuration setups so that developers can focus purely on building great applications. This is not true, when it comes to building chrome or any other browser specific extensions in general. 

Chrome Extensions consists of three fundamental units - 
1. Popup - Popup is what you get when you click on the extension icon placed at the extreme right of the address bar in the browser. Popup has a context of its own. It doesn't interfere with the context of the page on which it is opened. It is alive only when it is open.
2. Background Scripts - Background Scripts in chrome extensions are named for a reason. They handle the background tasks such as making a API request to the server. Background scripts are active all of the time. They can also listen to the push notifications (FCM) and accordingly display them to the user. Background scripts never go to the dormant state hence they're also used for preserving the state of the extension. For example, we may store the local data of the extension in IndexedDB in the context of background scripts.
3. Content Scripts - If the extension is supposed to interfere with the DOM on the web page, we make use of Content Scripts. Content Scripts are injected into the webpage for doing tasks like modifying its DOM or adding some custom DOM elements. Context Scripts live in an isolated world. They don't interfere with the context of the web page. 

