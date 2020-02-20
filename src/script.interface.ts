import { IResult } from "./result.interface";
import { IRepository } from "./repository.interface";

export interface IScript {
	run(... repositories: IRepository[]): IResult
}