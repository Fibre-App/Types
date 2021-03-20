export interface IBranch {
  readonly name: string;
  readonly isCurrent: boolean;

  rename(newName: string): Promise<boolean>;
}
