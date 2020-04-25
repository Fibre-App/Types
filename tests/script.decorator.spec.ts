// tslint:disable: ban-types

import { assert } from "chai";
import { Script } from "../src/script.decorator";

describe("In the Inject decorator", () => {

	describe("it", () => {

		it("should return a function with the correct declaration", () => {
			const result: ClassDecorator = Script({
				ionIcon: "anything",
				label: "anything",
				tooltip: "anything"
			});

			assert.isFunction<ClassDecorator>(result);
		});
	});

	describe("the returned function", () => {

		[
			"scriptLabel",
			"anotherLabel",
		].forEach(scriptLabel => it(`should set the scriptLabel "${scriptLabel}" on the prototype of the constructorFunction`, () => {
			const constructorFunction: Function = () => undefined;
			constructorFunction.prototype = {};

			const subject: ClassDecorator = get_subject_with(scriptLabel, "anything", "anything");

			subject(constructorFunction);

			assert.deepStrictEqual(constructorFunction.prototype.scriptData.label, scriptLabel);
		}));

		[
			"scriptTooltip",
			"anotherTooltip",
		].forEach(scriptTooltip => it(`should set the scriptTooltip "${scriptTooltip}" on the prototype of the constructorFunction`, () => {
			const constructorFunction: Function = () => undefined;
			constructorFunction.prototype = {};

			const subject: ClassDecorator = get_subject_with("anything", scriptTooltip, "anything");

			subject(constructorFunction);

			assert.deepStrictEqual(constructorFunction.prototype.scriptData.tooltip, scriptTooltip);
		}));

		[
			"scriptIonIcon",
			"anotherIonIcon",
		].forEach(scriptIonIcon => it(`should set the scriptIonIcon "${scriptIonIcon}" on the prototype of the constructorFunction`, () => {
			const constructorFunction: Function = () => undefined;
			constructorFunction.prototype = {};

			const subject: ClassDecorator = get_subject_with("anything", "anything", scriptIonIcon);

			subject(constructorFunction);

			assert.deepStrictEqual(constructorFunction.prototype.scriptData.ionIcon, scriptIonIcon);
		}));

		function get_subject_with(label: string, tooltip: string, ionIcon: string): ClassDecorator {
			return Script({
				label,
				tooltip,
				ionIcon
			});
		}
	});
});
