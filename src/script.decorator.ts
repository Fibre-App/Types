export function Script(scriptName: string) {
	return function (constructorFunction: Function) {
		constructorFunction.prototype.scriptName = scriptName;
	}
}