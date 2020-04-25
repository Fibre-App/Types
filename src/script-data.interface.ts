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
}
