[![Build Status](https://travis-ci.org/MammothHR/mammoth-test-helpers.svg?branch=master)](https://travis-ci.org/MammothHR/mammoth-test-helpers)

# mammoth-test-helpers

A set of QUnit extensions, stubs for common global tools, and other testing tools for testing Ember CLI applications.

## Installation

* `ember install mammoth-test-helpers`

## Use

The primary way to use this is to add some code to your `tests/test-helper.js`.  You include the primary `prepTests` helper, and can programatically add additional helpers to load.

For example:
```
import resolver                  from './helpers/resolver';
import prepTests, { addToQueue } from 'mammoth-test-helpers/test-support/prep-tests';
import linkTo                    from 'mammoth-test-helpers/test-support/helpers/link-to-helper';
import googleChart               from 'mammoth-test-helpers/test-support/stubs/google-chart';
import stripe                    from 'mammoth-test-helpers/test-support/stubs/stripe';
import wysihtml5                 from 'mammoth-test-helpers/test-support/stubs/wysihtml5';
import { setResolver }           from '@ember/test-helpers';

setResolver(resolver);

// Add some non-default helpers
addToQueue(linkTo);
addToQueue(googleChart);
addToQueue(stripe);
addToQueue(wysihtml5);

// Load queued helpers
prepTests();
```

(This example loads everything!)



## Modules

Several modules are includes:

|Path|Default?|Description|Source|
|---|---|---|---|
|`mammoth-test-helpers/test-support/helpers/assert-helpers`| Yes | Adds numerous helpers to QUnit's `assert`. |[source](addon-test-support/helpers/assert-helpers.js)|
|`mammoth-test-helpers/test-support/helpers/link-to-helper`|   | Adds data attributes to `link-to` helpers that track the passed in models / path. |[source](addon-test-support/helpers/link-to-helper.js)|
|`mammoth-test-helpers/test-support/helpers/ajax`|   | A couple of simple helpers for simplifying ajax requests (e.g. using Pretender.js). |[source](addon-test-support/helpers/ajax-helpers.js)|
|`mammoth-test-helpers/test-support/helpers/jquery-actions`|   | Wrappers around ember-test-helper tools so that you can pass jQuery selectors |[source](addon-test-support/helpers/jquery-actions.js)|
|`mammoth-test-helpers/test-support/helpers/select-a-select`|   | A simple helper for firing a change action on a select. |[source](addon-test-support/helpers/select-a-select.js)|
|`mammoth-test-helpers/test-support/shims/console`|   | Shim for `window.console.log` if it doesn't exist (thanks IE!). |[source](addon-test-support/shims/console.js)|
|`mammoth-test-helpers/test-support/stubs/google-chart`|   | Stub out common methods related to google charts. |[source](addon-test-support/stubs/google-chart.js)|
|`mammoth-test-helpers/test-support/stubs/stripe`|   | Stub out some common behavior for Stripe. |[source](addon-test-support/stubs/stripe.js)|
|`mammoth-test-helpers/test-support/stubs/ember-tooltips`|   | Stub out components from ember-tooltips for unit tests. |[source](addon-test-support/stubs/ember-tooltips.js)|
|`mammoth-test-helpers/test-support/stubs/wysihtml5`|   | Stub out globals for WysiHTML5. |[source](addon-test-support/stubs/wysihtml5.js)|
|`mammoth-test-helpers/test-support/temporary-stubs/rsvp`|   | Returns `stubRSVP` and `unstubRSVP` for situations where you don't want RSVP to throw an error (e.g. if you are testing failed requests). |[source](addon-test-support/stubs/rsvp.js)|
|`mammoth-test-helpers/test-support/temporary-stubs/window-actions`|   | Includes several methods for stubbing / unstubbing common blocking window actions (e.g. `alert` and `confirm`.)  Stubs accept functions for testing parameters. |[source](addon-test-support/stubs/window-actions.js)|

## Test Reporter

Included is a custom test reporter for Testem that results in simple output (dots) with failure summaries at the end.  This is ideal in a CI environment.

To use, add this to your testem.js file:

```
const Reporter = require('./node_modules/mammoth-test-helpers/test-reporter');

module.exports = {
  reporter: Reporter,
...
```


## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
