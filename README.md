# webpack-dll-problem

In the example for using DLLs in webpack, a module named `module` is included in the 
alpha-DLL. `module` comes from the `node_modules` directory in the examples dir (one dir 
below the `dll` dir).

This works, when I build the example in the `dll-user` dir using `node build.js` and
look at [dll-user/js/output.js](dll-user/js/output.js), I can see these lines:

```
/*!*****************************************************************************************!*\
  !*** delegated ../node_modules/module.js from dll-reference alpha_e0d5512587ca63cbbd71 ***!
  \*****************************************************************************************/
```

The module named `module` is, however not really a proper npm module, it is just a file named
`module.js` sitting directly in the `node_modules` directory. I tried including a “real world”
npm module, in this case [preact](https://www.npmjs.com/package/preact).

After building the `dll` and `dll-user` projects, looking at the `output.js` file, I can see that
the whole code of the `preact` module was included in the output, there is no delegation.
