/**
 * The version control system which is being used by a repository.
 */
export class RepositoryType {

	/**
	 * The Git version control system: {@link https://www.git-scm.com}.
	 */
	public static readonly Git: RepositoryType = new RepositoryType(".git");

	/**
	 * The Mercurial version control system: {@link https://www.mercurial-scm.org}.
	 */
	public static readonly Mercurial: RepositoryType = new RepositoryType(".hg");

	private constructor(public readonly dataFolder: string) { }
}
