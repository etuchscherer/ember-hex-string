# Ember-hex-string

Simple one way idempotent conversion from a string to a hex value. Useful for generating unique colors for a supplied string.

## Installation

In an ember app
* `ember i ember-hex-string`

To clone this library
* `git clone` this repository
* `npm i`
* `bower i`

## QuickStart

Import the utility at the top of your file

```
// app/components/my-random.js

import { stringToHex } from 'ember-hex-string';
```

Pass the utility any string value

```
let initials = 'ET';

stringToHex('ET');  // ==> '8af';
```

## Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test -s`

## Building

* `ember build`

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).
