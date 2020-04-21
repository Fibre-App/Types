import { IChangeSet } from "./changeset.interface";

/**
 * A tag created within the repository.
 */
export interface ITag {

	/**
	 * The name of the tag.
	 */
	name: string;

	/**
	 * The changeset where the tag was created.
	 */
	changeset: IChangeSet;
}
