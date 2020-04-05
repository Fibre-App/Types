import { IChangeSet } from "./changeset.interface";

export interface IBranch {
	name: string;
	changeset: IChangeSet;
	isCurrent: boolean;
}
