import { IDiff } from "./diff.interface";

export interface IFile {
	beforeName: string;
	afterName: string;
	diffs: IDiff[];
	binary: boolean;
}
