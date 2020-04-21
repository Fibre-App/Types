import { IBranch } from "./branch.interface";

/**
 * A connected remote to the repository.
 */
export interface IRemote {

	/**
	 * The name of the remote.
	 */
	name: string;

	/**
	 * The branches which are stored in the remote.
	 */
	branches: IBranch[];
}
