import { IBranch } from "./branch.interface";
import { IChangeset } from "./changeset.interface";
import { IRemoteBranch } from "./remote-branch.interface";
import { ITag } from "./tag.interface";

export interface IChangesetFilter {
  focusedBranches?: string[];
}

export interface IRepository {
  localLocation: string;
  name: string;

  fetch(): Promise<boolean>;

  getChangeSets(filter: IChangesetFilter): Promise<IChangeset[]>;
  getLocalBranches(): Promise<IBranch[]>;
  getRemoteBranches(): Promise<IRemoteBranch[]>;
  getTags(): Promise<ITag[]>;

  checkoutLocalBranch(name: string): Promise<boolean>;
  deleteLocalBranch(name: string): Promise<boolean>;

  commit(message: string): Promise<void>;
  pull(): Promise<void>;
  push(): Promise<void>;
}
