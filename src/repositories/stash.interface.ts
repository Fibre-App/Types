import { IDiff } from "./diff.interface";

export interface IStash {
	name: string;
	diffs: IDiff[];
}