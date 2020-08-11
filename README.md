# React pizza shop ordering app

## Description

This simple demonstration app contains:
1. State management using 'react-redux'
2. Routing implemented using 'react-router-dom'
3. Global event bus could be implemented using some libraryes (e.i. [mitt](https://github.com/developit/mitt)), but I decided for simple custom implementation of Pub/Sub pattern using one global eventBus object
4. Created global object "scrollLock" for handling body scroll lock for disabling scrolling when modals are opened. The same object implements logic for clearing body styles on resize event.
5. Styles and theme taken from [Demo pizza theme](http://www.templatemonsterpreview.com/demo/78480.html?_ga=2.215933651.536897203.1595899832-1079675168.1595899832)

## Development

```
npm install
npm start
```
### Serving 
```
serve -s build
```


### Third party libraries

```
npm i react-select # For custom select elements
npm install prettier -D --save-exact # VS code formetter 
npm install body-scroll-lock # for preventing scrooling of elements
```

## TODOS / Project ideas:

1. Implement Home, Contact, About Us , Sign In / Up pages
2. Mock data are simple js object, fetch data via REST API.
3. Implement tests  (or replicate existing project using test driven development)
4. Implement existing app in React Native
5. Clean CSS (currently using some old theme css, can be written much cleaner)
6. ...