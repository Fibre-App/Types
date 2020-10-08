import { IFile } from "./file.interface";

/**
 * A changeset (commit) within a repository.
 */
export interface IChangeSet {
  /**
   * The number assigned to the changeset.
   */
  number: string;

  /**
   * The unique hash assigned to the changeset.
   */
  hash: string;

  /**
   * The shorthand form of the hash assigned to the changeset.
   */
  shortHash: string;

  /**
   * The commit message for the changeset.
   */
  message: string;

  /**
   * The author of the changeset.
   */
  author: string;

  /**
   * The timestamp that the changeset was committed.
   */
  timestamp: string;

  /**
   * The files which were modified in the changeset.
   */
  files: IFile[];

  /**
   * Reloads the changeset from the repository. The changeset is
   * loaded using the hash value. This should be called before any
   * information within a changeset is used to ensure that it is
   * current.
   */
  load(): Promise<void>;
}
