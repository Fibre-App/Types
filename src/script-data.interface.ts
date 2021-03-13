/**
 * The metadata inputted into the @Script decorator.
 */
export interface IScriptData {
  /**
   * The text displayed in the Fibre user-interface on the script buttons.
   * This needs to be unique within the file.
   */
  label: string;

  /**
   * The text displayed in the tooltip within the Fibre user-interface when a
   * script button is hovered over.
   */
  tooltip: string;

  /**
   * An ionIcons code for an icon to display in the Fibre user-interface.
   * This should ideally be camelCase but kebab-case will be converted.
   *
   *
   * {@link https://ionicons.com}
   */
  ionIcon: string;

  /**
   * Translation values for placeholders thoughout the script.
   *
   * en-gb is the default so if you are using translation values, you should always include at least en-gb.
   *
   * The docs for the toasterService might make this examples clearer. You can also see them being used in the
   * StandardScripts repository. {@link https://github.com/Fibre-App/StandardScripts/blob/master/src/commit.ts}
   *
   * @example
   * Script({
   *  ...
   *  translations: {
   *   "en-gb": {
   *     "customPlaceholder": "This is the value in English",
   *     "giveTheseMeaningfulNames": "This one uses an argument: ${repoName}"
   *   },
   *   "de-de": {
   *     "customPlaceholder": "This is the value in German"
   *   }
   *  }
   * })
   * ...
   * this.toasterService.success("customPlaceholder", "", {});
   * this.toasterService.success("giveTheseMeaningfulNames", "", { repoName: "My Repo" });
   */
  translations?: any;
}
