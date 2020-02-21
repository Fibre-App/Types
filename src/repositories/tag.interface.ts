import { IChangeSet } from "./changeset.interface";

export interface ITag {
	name: string;
	changeset: IChangeSet;
}