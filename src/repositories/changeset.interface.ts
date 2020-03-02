import { IFile } from "./file.interface";

export interface IChangeSet {
	number: string;
	hash: string;
	shortHash: string;
	message: string;
	author: string;
	timestamp: string;
	files: IFile[];

	load(): Promise<void>;
}