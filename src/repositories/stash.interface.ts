import { IDiff } from "./diff.interface";

/**
 * A stash within the repository. Might also be called a shelve.
 */
export interface IStash {

	/**
	 * The name of the stash.
	 */
	name: string;

	/**
	 * The diffs contained within the stash.
	 */
	diffs: IDiff[];
}
