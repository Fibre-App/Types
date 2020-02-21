import { IDiff } from "./diff.interface";

export interface IFile {
	filename: string;
	diffs: IDiff[];
}