# nightharbor-file-loader
[![CircleCI](https://circleci.com/gh/YoshiyukiKato/nightharbor-file-loader.svg?style=svg)](https://circleci.com/gh/YoshiyukiKato/nightharbor-file-loader)
[![sonarcloud badge](https://sonarcloud.io/api/project_badges/measure?project=YoshiyukiKato_nightharbor-file-loader&metric=alert_status)](https://sonarcloud.io/api/project_badges/measure?project=YoshiyukiKato_nightharbor-file-loader&metric=alert_status)
[![Greenkeeper badge](https://badges.greenkeeper.io/YoshiyukiKato/nightharbor-file-loader.svg)](https://greenkeeper.io/)

A [nightharbor](https://github.com/YoshiyukiKato/nightharbor) loader for local file.

```sh
$ npm install --save nightharbor nightharbor-file-loader
```

#### load targets from json and csv

```js
import {CsvLoader, JsonLoader} from "nightharbor-file-loader";

export default {
  ...,
  loaders: [
    new CsvLoader(["/path/to/targets.csv"]),
    new JsonLoader(["/path/to/targets.json"])
  ],
  ...
}
```