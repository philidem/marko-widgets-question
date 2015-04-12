# Marko Widget Question

```sh
$ npm install
$ node src/server.js
```

Two identical widgets (`good-widget` and `bad-widget`) with the only difference in widget file name:

```js
src/good-widget/index.js
src/bad-widget/widget.js
```

When using `bad-widget`, function `getTemplateData()` seems not called. For `good-widget` everything is okay. 
