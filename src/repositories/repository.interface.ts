import { RepositoryType } from "./type.enum";
import { IChangeSet } from "./changeset.interface";
import { IBranch } from "./branch.interface";
import { IStash } from "./stash.interface";
import { ITag } from "./tag.interface";
import { IRemote } from "./remote.interface";

/**
 * A repository.
 */
export interface IRepository {
  /**
   * The version control system used by the repository, e.g. Git.
   */
  type: RepositoryType;

  /**
   * The location locally on the machine where the repository can be found
   */
  localLocation: string;

  /**
   * The name of the repository. This is the last folder in the `localLocation`.
   */
  name: string;

  /**
   * All of the changesets within the repository. This collection might be limted in size to a
   * configured ceiling.
   */
  changesets: IChangeSet[];

  /**
   * The branches of the repository which exist locally on this machine.
   */
  localbranches: IBranch[];

  /**
   * The remotes which this local copy of the machine is connected to.
   */
  remotes: IRemote[];

  /**
   * Tags which have been applied to changesets within the repository.
   */
  tags: ITag[];

  /**
   * Stashes which have been created within the repository.
   * Might also be known as shelves.
   */
  stashes: IStash[];

  /**
   * Reloads the repository from the local machine. This function
   * will reload all changesets, branches, remotes, tags, and stashes.
   * This method should be called before any information within a
   * repository is used to ensure that it is current.
   */
  load(): Promise<void>;

  /**
   * Updates working directory against the local copy of the repository.
   */
  update(): Promise<void>;

  /**
   * Pulls any updates to the repository down from the origin.
   */
  pull(): Promise<void>;

  /**
   * Pushes updates to the repository made locally up to the origin.
   */
  push(): Promise<void>;

  /**
   * Creates a new changeset in the repository using the currently stages changes.
   * @param message The message to commit the changes against
   */
  commit(message: string): Promise<void>;

  /**
   * Switches the currenly checked out branch of the repository
   * @param name The name of the branch to switch the repository over to
   */
  switchBranch(name: string): Promise<void>;

  /**
   * Creates a new branch locally within the repository
   * @param name The name of the branch to create
   */
  createBranch(name: string): Promise<void>;
}
