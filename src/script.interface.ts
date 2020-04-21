import { IResult } from "./result.interface";
import { IRepository } from "./repositories/repository.interface";

/**
 * An interface which can be applied to scripts to ensure they
 * implement the run function correctly. This is recommended.
 */
export interface IScript {
	run(repositories: IRepository[]): Promise<IResult>;
}
