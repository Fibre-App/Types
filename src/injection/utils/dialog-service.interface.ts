/**
 * A service for showing dialog boxes to the user within the Fibre user-interface.
 */
export interface IDialogService {
  /**
   * Shows a dialog to the user which promps them for a single line of text.
   * @param title The title of the dialog box.
   * @param message The message of the dialog box.
   * @param defaultResult The value to pre-populate the input field with.
   */
  openSingleLineDialog(title: string, message: string, defaultResult: string): Promise<string>;

  /**
   * Shows a dialog to the user which promps them for multiple lines of text.
   * @param title The title of the dialog.
   * @param message The message of the dialog.
   * @param defaultResult The value to pre-populate the input field with.
   */
  openMultiLineDialog(title: string, message: string, defaultResult: string): Promise<string>;

  /**
   * Shows a dialog to the user which promps them an OK button.
   * @param title The title of the dialog.
   * @param message The message of the dialog.
   * @param defaultResult Not implemented for this dialog type.
   */
  openOKDialog(title: string, message: string, defaultResult: void): Promise<void>;

  /**
   * Shows a dialog to the user which promps them with yes and no buttons.
   * @param title The title of the dialog.
   * @param message The message of the dialog.
   * @param defaultResult Which of the two buttons should have focus by default.
   */
  showYesNoDialog(title: string, message: string, defaultResult: YesNoResult): Promise<YesNoResult>;
}

/**
 * The possible results from a YesNo dialog.
 */
export enum YesNoResult {
  Yes,
  No
}
