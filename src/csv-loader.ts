import csvtojson from "csvtojson";
import {ILoader} from "nightharbor/interface";

/**
 * load targets from csv file
 */
export default class CsvLoader implements ILoader {
  private paths: string[];

  /**
   * @param paths list of paths to target csv files
   */
  constructor(paths: string[]) {
    this.paths = paths;
  }

  public load() {
    const csvToJsonPromises = this.paths.map((path) => csvtojson().fromFile(path));
    return Promise.all(csvToJsonPromises)
      .then((targets) => targets.reduce((acc, val) => [...acc, ...val], []));
  }
}
