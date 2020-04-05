import { RepositoryType } from "./type.enum";
import { IChangeSet } from "./changeset.interface";
import { IBranch } from "./branch.interface";
import { IStash } from "./stash.interface";
import { ITag } from "./tag.interface";
import { IRemote } from "./remote.interface";

export interface IRepository {
	type: RepositoryType;
	localLocation: string;
	name: string;

	changesets: IChangeSet[];
	localbranches: IBranch[];
	remotes: IRemote[];
	tags: ITag[];
	stashes: IStash[];

	load(): Promise<void>;

	update(): Promise<void>;
	pull(): Promise<void>;
	push(): Promise<void>;
	commit(message: string): Promise<void>;
	switchBranch(name: string): Promise<void>;
	createBranch(name: string): Promise<void>;
}
