// tslint:disable: ban-types
// tslint:disable: only-arrow-functions

import { IScriptData } from "./script-data.interface";

/**
 * This decorator is what Fibre uses to locate scripts within a project.
 * @param scriptData The metadata for the script. This is what will display in the Fibre user-interface.
 * This value must be unique within the file.
 */
export function Script(scriptData: IScriptData): ClassDecorator {
	return function (constructorFunction: Function): void {
		constructorFunction.prototype.scriptData = scriptData;
	};
}
