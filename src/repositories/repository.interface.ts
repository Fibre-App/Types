import { RepositoryType } from "./type.enum";
import { IChangeSet } from "./changeset.interface";
import { IBranch } from "./branch.interface";
import { IStash } from "./stash.interface";
import { ITag } from "./tag.interface";

export interface IRepository {
	type: RepositoryType;
	localLocation: string;
	name: string;

	changesets: IChangeSet[];
	branches: IBranch[];
	tags: ITag[];
	stashes: IStash[];

	Update(): Promise<void>;
	Pull(): Promise<void>;
	Push(): Promise<void>;
	Commit(message: string): Promise<void>;
	SwitchBranch(name: string): Promise<void>;
	CreateBranch(name: string): Promise<void>;
}