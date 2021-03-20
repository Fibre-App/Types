import { IFileDiffData } from "./file-diff-data.interface";

export interface IChangeset {
  hash: string;
  shortHash: string;
  message: string;
  summary: string;
  author: string;
  timestamp: string;

  getFiles(): Promise<IFileDiffData[]>;
}
