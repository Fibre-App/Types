// tslint:disable: ban-types

import { assert } from "chai";
import { Script } from "../src/script.decorator";

describe("In the Inject decorator", () => {

	describe("it", () => {

		it("should return a function with the correct declaration", () => {
			const result: ClassDecorator = Script("anything");

			assert.isFunction<ClassDecorator>(result);
		});
	});

	describe("the returned function", () => {

		[
			"scriptName",
			"anotherName",
		].forEach(scriptName => it(`should set the scriptName "${scriptName}" on the prototype of the constructorFunction`, () => {
			const constructorFunction: Function = () => undefined;
			constructorFunction.prototype = {};

			const subject: ClassDecorator = get_subject_with(scriptName);

			subject(constructorFunction);

			assert.deepStrictEqual(constructorFunction.prototype.scriptName, scriptName);
		}));

		function get_subject_with(scriptName: string): ClassDecorator {
			return Script(scriptName);
		}
	});
});
