/**
 * Represents a change within an IFile.
 */
export interface IDiff {

	/**
	 * The line number within the file that this diff starts on.
	 */
	startingLineNumber: number;

	/**
	 * The title of the diff.
	 */
	title: string;

	/**
	 * What the section of the file looked like before the modification was made.
	 */
	before: string[];

	/**
	 * What the section of the file looked like after the modification was made.
	 */
	after: string[];

	/**
	 * The total number of lines which were modified in the diff.
	 */
	totalLines: number;
}
