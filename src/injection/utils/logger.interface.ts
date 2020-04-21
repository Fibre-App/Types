/**
 * Logs messages and JSON to the main log location for Fibre.
 */
export interface ILogger {

	/**
	 * Logs with the level: Error.
	 * @param message The message to be logged.
	 * @param obj The optional object to me logged as JSON.
	 */
	error(message: string, obj?: any): void;

	/**
	 * Logs with the level: Warning.
	 * @param message The message to be logged.
	 * @param obj The optional object to me logged as JSON.
	 */
	warning(message: string, obj?: any): void;

	/**
	 * Logs with the level: Info.
	 * @param message The message to be logged.
	 * @param obj The optional object to me logged as JSON.
	 */
	info(message: string, obj?: any): void;

	/**
	 * Logs with the level: Debug.
	 * @param message The message to be logged.
	 * @param obj The optional object to me logged as JSON.
	 */
	debug(message: string, obj?: any): void;
}
