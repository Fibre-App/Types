export interface IFileUtil {
	doesFileExist(location: string): Promise<boolean>;
	doesFolderExist(location: string): Promise<boolean>;

	getFilesInFolder(location: string): Promise<string[]>;
	getFoldersInFolder(location: string): Promise<string[]>;

	createFolder(location: string): Promise<void>;
	
	readFile(location: string): Promise<string>;
	writeFile(location: string, content: string, writeType: WriteType): Promise<void>;

	deleteFile(location: string): Promise<void>;
	deleteFolderRecursively(location: string): Promise<void>;
}

export enum WriteType {
	append = "append",
	overwrite = "overwrite"
}