export interface IDiff {
	startingLineNumber: number;
	title: string;
	before: string[];
	after: string[];
	totalLines: number;
}
