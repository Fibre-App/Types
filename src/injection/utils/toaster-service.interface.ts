/**
 * A service for displaying toasts within the Fibre user-interface.
 */
export interface IToasterService {

  /**
   * Displays a green success toast to the user.
   *
   * Inputted values should be raw values if only 2 arguments are given.
   * If 3 arguments are given, then the values will be treated as placeholder values
   * and they will get translated to the current langauage.
   *
   * @example
   * success("This is the title", "This is the message")
   * @example
   * success("ThisIsATranslationPlaceholder", "ThisIsAlsoATranslationPlaceholder", {})
   * @example
   * success("ThisIsATranslationPlaceholder", "ThisIsATranslationPlaceholderWhereAnArguementIsUsed", { repoName: "My Repo" })
   * @param title The title of the toast, or the placeholder for the title of the toast
   * @param message The message of the toast, or the placeholder for the message of the toast
   * @param translationArgs The arguments which will be interpolated into the translations. This MUST be supplied if translations
   * are being used - even if you only given an empty object. You can also see them being used in the
   * StandardScripts repository. {@link https://github.com/Fibre-SCM/StandardScripts/blob/master/src/commit.ts}
   */
  success(title: string, message: string, translationArgs?: any): void;

  /**
   * Displays a blue information toast to the user.
   *
   * Inputted values should be raw values if only 2 arguments are given.
   * If 3 arguments are given, then the values will be treated as placeholder values
   * and they will get translated to the current langauage.
   *
   * @example
   * information("This is the title", "This is the message")
   * @example
   * information("ThisIsATranslationPlaceholder", "ThisIsAlsoATranslationPlaceholder", {})
   * @example
   * information("ThisIsATranslationPlaceholder", "ThisIsATranslationPlaceholderWhereAnArguementIsUsed", { repoName: "My Repo" })
   * @param title The title of the toast, or the placeholder for the title of the toast
   * @param message The message of the toast, or the placeholder for the message of the toast
   * @param translationArgs The arguments which will be interpolated into the translations. This MUST be supplied if translations
   * are being used - even if you only given an empty object. You can also see them being used in the
   * StandardScripts repository. {@link https://github.com/Fibre-SCM/StandardScripts/blob/master/src/commit.ts}
   */
  information(title: string, message: string, translationArgs?: any): void;

  /**
   * Displays a yellow warning toast to the user.
   *
   * Inputted values should be raw values if only 2 arguments are given.
   * If 3 arguments are given, then the values will be treated as placeholder values
   * and they will get translated to the current langauage.
   *
   * @example
   * warning("This is the title", "This is the message")
   * @example
   * warning("ThisIsATranslationPlaceholder", "ThisIsAlsoATranslationPlaceholder", {})
   * @example
   * warning("ThisIsATranslationPlaceholder", "ThisIsATranslationPlaceholderWhereAnArguementIsUsed", { repoName: "My Repo" })
   * @param title The title of the toast, or the placeholder for the title of the toast
   * @param message The message of the toast, or the placeholder for the message of the toast
   * @param translationArgs The arguments which will be interpolated into the translations. This MUST be supplied if translations
   * are being used - even if you only given an empty object. You can also see them being used in the
   * StandardScripts repository. {@link https://github.com/Fibre-SCM/StandardScripts/blob/master/src/commit.ts}
   */
  warning(title: string, message: string, translationArgs?: any): void;

  /**
   * Displays a red error toast to the user.
   *
   * Inputted values should be raw values if only 2 arguments are given.
   * If 3 arguments are given, then the values will be treated as placeholder values
   * and they will get translated to the current langauage.
   *
   * @example
   * error("This is the title", "This is the message")
   * @example
   * error("ThisIsATranslationPlaceholder", "ThisIsAlsoATranslationPlaceholder", {})
   * @example
   * error("ThisIsATranslationPlaceholder", "ThisIsATranslationPlaceholderWhereAnArguementIsUsed", { repoName: "My Repo" })
   * @param title The title of the toast, or the placeholder for the title of the toast
   * @param message The message of the toast, or the placeholder for the message of the toast
   * @param translationArgs The arguments which will be interpolated into the translations. This MUST be supplied if translations
   * are being used - even if you only given an empty object. You can also see them being used in the
   * StandardScripts repository. {@link https://github.com/Fibre-SCM/StandardScripts/blob/master/src/commit.ts}
   */
  error(title: string, message: string, translationArgs?: any): void;
}
