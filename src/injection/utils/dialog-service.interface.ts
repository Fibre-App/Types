export interface IDialogService {
	openSingleLineDialog(title: string, message: string, defaultResult: string): Promise<string>;
  openMultiLineDialog(title: string, message: string, defaultResult: string): Promise<string>;
  openOKDialog(title: string, message: string, defaultResult: boolean): Promise<boolean>;
  showYesNoDialog(title: string, message: string, defaultResult: YesNoResult): Promise<YesNoResult>;
}

export enum YesNoResult {
  Yes,
  No
}
