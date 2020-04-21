// tslint:disable: ban-types
// tslint:disable: only-arrow-functions

/**
 * This decorator is what Fibre uses to locate scripts within a project.
 * @param scriptName The name of the script. This is what will display in the Fibre user-interface.
 * This value must be uinque within the file.
 */
export function Script(scriptName: string): ClassDecorator {
	return function (constructorFunction: Function): void {
		constructorFunction.prototype.scriptName = scriptName;
	};
}
