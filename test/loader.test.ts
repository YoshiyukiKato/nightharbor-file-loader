import csv from "csvtojson";
import fs from "fs-extra";
import path from "path";
import assert from "power-assert";
import {CsvLoader, JsonLoader} from "../src";

describe("Local file reporters", () => {
  it("reads a target json file", () => {
    const filepath = path.resolve(__dirname, "fixture/targets.json");
    const loader = new JsonLoader([filepath]);
    const expected = [{ url: "https://google.com" }];
    return loader.load()
      .then((actual) => {
        assert.deepEqual(actual, expected);
      });
  });

  it("reads a target csv file", () => {
    const filepath = path.resolve(__dirname, "fixture/targets.csv");
    const loader = new CsvLoader([filepath]);
    const expected = [{ url: "https://google.com" }];
    return loader.load()
      .then((actual) => {
        assert.deepEqual(actual, expected);
      });
  });
});
