export class RepositoryType {
	public static Git: RepositoryType = new RepositoryType(".git");
	public static Mercurial: RepositoryType = new RepositoryType(".hg");

	private constructor(private readonly dataFolder: string) { }

	public getDataFolder() {
		return this.dataFolder;
	}
}