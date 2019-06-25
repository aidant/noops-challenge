# [noops-challenge](https://noopschallenge.com)

Minimal wrapper around the GitHub NOOPS Challenge

## Quick Start


```ts
import noops from 'noops-challenge'

/*
  You need to pass your favorite fetch library to
  noops. If you are in the browser you can use
  window.fetch otherwise try node-fetch or another
  alternative.
*/
noops.config.fetch = window.fetch

noops.hexbot()
  .then(console.log)
  .catch(console.error)
```
