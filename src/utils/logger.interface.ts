export interface ILogger {
	fatal(message: string, ... params: object[]): Promise<void>;
	error(message: string, ... params: object[]): Promise<void>;
	warning(message: string, ... params: object[]): Promise<void>;
	information(message: string, ... params: object[]): Promise<void>;
	debug(message: string, ... params: object[]): Promise<void>;
	verbose(message: string, ... params: object[]): Promise<void>;

	fatal(error: Error, message: string, ... params: object[]): Promise<void>;
	error(error: Error, message: string, ... params: object[]): Promise<void>;
	warning(error: Error, message: string, ... params: object[]): Promise<void>;
	information(error: Error, message: string, ... params: object[]): Promise<void>;
	debug(error: Error, message: string, ... params: object[]): Promise<void>;
	verbose(error: Error, message: string, ... params: object[]): Promise<void>;
}