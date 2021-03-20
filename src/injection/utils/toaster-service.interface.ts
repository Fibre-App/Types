/**
 * A service for displaying toasts within the Fibre user-interface.
 */
export interface IToasterService {
  /**
   * Displays a green success toast to the user.
   *
   * @example
   * success("This is the title", "This is the message")
   * @param title The title of the toast, or the placeholder for the title of the toast
   * @param message The message of the toast, or the placeholder for the message of the toast
   */
  success(title: string, message: string): void;

  /**
   * Displays a blue information toast to the user.
   *
   * @example
   * information("This is the title", "This is the message")
   * @param title The title of the toast, or the placeholder for the title of the toast
   * @param message The message of the toast, or the placeholder for the message of the toast
   */
  information(title: string, message: string): void;

  /**
   * Displays a yellow warning toast to the user.
   *
   * @example
   * warning("This is the title", "This is the message")
   * @param title The title of the toast, or the placeholder for the title of the toast
   * @param message The message of the toast, or the placeholder for the message of the toast
   */
  warning(title: string, message: string): void;

  /**
   * Displays a red error toast to the user.
   *
   * @example
   * error("This is the title", "This is the message")
   * @param title The title of the toast, or the placeholder for the title of the toast
   * @param message The message of the toast, or the placeholder for the message of the toast
   */
  error(title: string, message: string): void;
}
