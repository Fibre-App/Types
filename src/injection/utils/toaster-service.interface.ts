/**
 * A service for displaying toasts within the Fibre user-interface.
 */
export interface IToasterService {

  /**
   * Displays a green success toast to the user.
   * @param title The title of the toast.
   * @param message The message of the toast.
   */
  success(title: string, message: string): void;

  /**
   * Displays a blue information toast to the user.
   * @param title The title of the toast.
   * @param message The message of the toast.
   */
  information(title: string, message: string): void;

  /**
   * Displays a yellow warning toast to the user.
   * @param title The title of the toast.
   * @param message The message of the toast.
   */
  warning(title: string, message: string): void;

  /**
   * Displays a red error toast to the user.
   * @param title The title of the toast.
   * @param message The message of the toast.
   */
  error(title: string, message: string): void;
}
