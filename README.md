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

### stringToHex
`stringToHex` will convert a givin string to a hex value.

Import the utility at the top of your file

```
// app/components/my-random.js

import { stringToHex } from 'ember-hex-string/utils/conversions';
```

Pass the utility any string value

```
let initials = 'ET';

stringToHex('ET');  // ==> '8af';
```

### stringToHexColor
`stringToHexColor` will convert a givin string to a hex value, and safely truncate it to a 3 or 6 character length. Useful for conversion to a unique CSS color.

Import the utility at the top of your file

```
// app/components/my-random.js

import { stringToHexColor } from 'ember-hex-string/utils/conversions';
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
