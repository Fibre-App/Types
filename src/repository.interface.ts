import { ICommit } from "./commit.interface";

export interface IRepository {
	getCommits(): ICommit[]
}