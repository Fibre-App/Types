import { IResult } from "./result.interface";
import { IRepository } from "./repositories/repository.interface";

export interface IScript {
	run(... repositories: IRepository[]): IResult
}