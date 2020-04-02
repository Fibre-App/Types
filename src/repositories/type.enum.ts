export class RepositoryType {
	public static Git: RepositoryType = new RepositoryType(".git");
	public static Mercurial: RepositoryType = new RepositoryType(".hg");

	private constructor(public readonly dataFolder: string) { }
}