# PoneyJS

## What is it ?

PoneyJS is the only functionnal library you'll need for your JavaScript application. With an API designed by the elders of PoneyWorld, you will be stuned by the power it will give to your code.

This is an alpha release of the library. Thus, we need you to improve it and to make it the most powerful functional library the world has ever seen.

## How to get started

### For NodeJS

Invoke the Gods of the NodePackagesMountain with `npm install poney.js`

And then power up your NodeJS code :

```
var Poney = require('poney.js');

var mapResult = Poney.walkThroughRainbows(['This', 'is', 'amazing'], function (x) { console.log(x); });

var apocalypse = Poney.keepTheArainAway([1, 2, 3, 10], function (x) { return x > 8; });
```

### For front-end apps

For the moment, PoneyJS is only available on NPM. It will be available on Bower soon. After dealing with NPM, you have to import the libary in your HTML :

```
<script src="PATH_TO_THE_LIB/PoneyJS.js"></script>
```

And then, all the functionalities are available in the variable `PoneyJS`.

And voilà, you're ready to build apps with a level of awesomeness unknown until now.


## API

* Map

`PoneyJS.walkThroughRainbows(array, function (value) { /* Do whatever you want with your value here */})`

* Filter

`PoneyJS.keepTheRainAway(array, function (value) { /* Tell the poney if the value must survive */ })`

* Get the first value of results from a filter

`PoneyJS.getAUnicorn(array, function (value) { /* Tell the poney if the value must survive. There will remain only one */ })`

* Reduce

`PoneyJS.makeALittlePoney(array, function (acc, value) { /* Do whatever you want with your ponies */}, initial)`

* console.log

`PoneyJS.fromYourPoney(message)`

* Check if a value is truthy or falsy

`PoneyJS.areUnicornsReal(value)`

* Throw an error

`PoneyJS.messageFromSatan(error)`


## Contributing

All humans are welcome to contribute, by raising new issues, requesting features or opening new PR. The elders of PoneyWorld count on you !
