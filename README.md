# webpack Safari nested folder source map issue

This is a bare minimum repository to reproduce the following issue:
<br>
Safari web inspector does not show the original source code for entries that are inside nested folders.

## Steps to reproduce:

1. Install dependencies with `npm install`
2. Build the assets with `npm run build`
3. Start the server with `npm run start`
4. Open the url from `Project is running at <url>` in Safari
5. Open the Web Inspector
6. Go to the `Debugger` or `Resources` tab
7. See that `nested.js` is not available under `src/nested`
