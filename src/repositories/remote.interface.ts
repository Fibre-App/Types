import { IBranch } from "./branch.interface";

export interface IRemote {
	name: string;
	branches: IBranch[];
}
