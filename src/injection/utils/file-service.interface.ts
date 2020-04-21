/**
 * A service which allows a script to interact with the file system.
 */
export interface IFileService {

	/**
	 * Returns true if a file exists at the given location.
	 * @param location The file location to check.
	 */
	doesFileExist(location: string): Promise<boolean>;

	/**
	 * Returns true if a folder/directory exists at the given location.
	 * @param location The folder location to check.
	 */
	doesFolderExist(location: string): Promise<boolean>;

	/**
	 * Returns a list of all the file names within a given folder. This is not recursive.
	 * @param location The folder location to get the files in.
	 */
	getFilesInFolder(location: string): Promise<string[]>;

	/**
	 * Returns a list of all the folder/directory names within a given folder. This is not recursive.
	 * @param location The folder location to get the folders in.
	 */
	getFoldersInFolder(location: string): Promise<string[]>;

	/**
	 * Creates a folder/directory at the given location.
	 * @param location The folder location to create.
	 */
	createFolder(location: string): Promise<void>;

	/**
	 * Reads in a file at the given location. This method assumes UFT-8.
	 * @param location The location of the file to read in.
	 */
	readFile(location: string): Promise<string>;

	/**
	 * Writes data to a given file location, creating the file if it does not exist. This method assumes UTF-8.
	 * @param location The location of the file to write to.
	 * @param content The content to write to the file.
	 * @param writeType If the file exists, this determines if it should be added to (appended) or overwritten.
	 */
	writeFile(location: string, content: string, writeType: WriteType): Promise<void>;

	/**
	 * Deletes a file
	 * @param location The file to delete
	 */
	deleteFile(location: string): Promise<void>;

	/**
	 * Deletes a folder/directory. This method will recursively delete all child folders and files.
	 * @param location The location of the folder to delete.
	 */
	deleteFolderRecursively(location: string): Promise<void>;
}

/**
 * The write type for IFileService.writeFile().
 */
export enum WriteType {

	/**
	 * The file should be appended to, keeping the pre-existing content.
	 */
	append,

	/**
	 * The file should be overwritten, all pre-existing content will be lost.
	 */
	overwrite
}
