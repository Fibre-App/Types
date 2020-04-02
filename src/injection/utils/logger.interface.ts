export interface ILogger {
	error(message: string, obj?: any): void;
	warning(message: string, obj?: any): void;
	info(message: string, obj?: any): void;
	debug(message: string, obj?: any): void;
}
