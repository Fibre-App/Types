import { IChangeSet } from "./changeset.interface";

/**
 * A branch within a repository. This could be local or remote.
 */
export interface IBranch {
  /**
   * The full name of the branch.
   */
  name: string;

  /**
   * The changeset at the top of that branch. This might be undefined
   * if the branch is not pulled locally.
   */
  changeset: IChangeSet | undefined;

  /**
   * True if this branch is the currently checked-out branch of the repository.
   */
  isCurrent: boolean;
}
