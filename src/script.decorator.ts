// tslint:disable: ban-types
// tslint:disable: only-arrow-functions

export function Script(scriptName: string): ClassDecorator {
	return function (constructorFunction: Function): void {
		constructorFunction.prototype.scriptName = scriptName;
	};
}
