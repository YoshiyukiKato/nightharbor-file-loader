import fs from "fs-extra";
import {ILoader} from "nightharbor/interface";

/**
 * load targets from json file
 */
export default class JsonLoader implements ILoader {
  private paths: string[];

  /**
   * @param paths list of paths to target json files
   */
  constructor(paths: string[]) {
    this.paths = paths;
  }

  public load() {
    const jsonReadPromises = this.paths.map((path) => fs.readFile(path));
    return Promise.all(jsonReadPromises)
      .then((jsonBuffers) => jsonBuffers.map((jsonBuffer) => JSON.parse(jsonBuffer.toString())))
      .then((jsonObjects) => jsonObjects.reduce((acc, {targets}) => [...acc, ...targets], []));
  }
}
