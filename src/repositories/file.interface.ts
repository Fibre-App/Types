import { IDiff } from "./diff.interface";

/**
 * A file which was modified in a changeset.
 */
export interface IFile {
  /**
   * The name of the file before the changeset was committed.
   */
  beforeName: string;

  /**
   * The name of the file after the changeset was committed.
   */
  afterName: string;

  /**
   * Each of the individual differences within the file.
   */
  diffs: IDiff[];

  /**
   * Flag to indicate if this is a binary file.
   */
  binary: boolean;
}
