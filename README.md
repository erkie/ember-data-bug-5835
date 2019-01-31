# Ember Data bug 5385

```
Error while processing route: index 'currentState' is a reserved property name on instances of classes extending Model. Please choose a different property name for model:my-model Error: 'currentState' is a reserved property name on instances of classes extending Model. Please choose a different property name for model:my-model
```

Running:

```shell
npm install
ember s
```

Open http://localhost:4200 and check console for error. Expected output: No error.
