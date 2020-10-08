import { Inject, ITarget, IDependency } from "../../src/injection/inject.decorator";
import { Injectable } from "../../src/injection/injectables.enum";
import { assert } from "chai";

describe("In the Inject decorator", () => {
  describe("it", () => {
    it("should return a function with the correct declaration", () => {
      const result: ParameterDecorator = Inject({} as Injectable);

      assert.isFunction<ParameterDecorator>(result);
    });
  });

  describe("the returned function", () => {
    it("should create a dependency array on the target if it is undefined", () => {
      const injectable: Injectable = Injectable.FileService;
      const target: ITarget = {} as ITarget;

      const subject: ParameterDecorator = get_subject_with(injectable);

      subject(target, "anything", 0);

      assert.isArray(target.dependencies);
    });

    it("should not overwrite the target dependency array if it is defined", () => {
      const injectable: Injectable = Injectable.FileService;
      const dependency: IDependency = {} as IDependency;
      const target: ITarget = {
        dependencies: [dependency]
      };

      const subject: ParameterDecorator = get_subject_with(injectable);

      subject(target, "anything", 0);

      assert.includeDeepMembers(target.dependencies, [dependency]);
    });

    it("should push a dependency to the target", () => {
      const injectable: Injectable = Injectable.FileService;
      const target: ITarget = {} as ITarget;

      const subject: ParameterDecorator = get_subject_with(injectable);

      subject(target, "anything", 0);

      assert.equal(target.dependencies.length, 1);
    });

    [Injectable.DialogService, Injectable.FileService, Injectable.Logger, Injectable.ToasterService].forEach(
      injectable =>
        it("should push a dependency to the target with the given Injectable: " + injectable, () => {
          const target: ITarget = {} as ITarget;

          const subject: ParameterDecorator = get_subject_with(injectable);

          subject(target, "anything", 0);

          assert.equal(target.dependencies.length, 1);
          assert.equal(target.dependencies[0].dependencyType, injectable);
        })
    );

    [-1, 0, 1, 5].forEach(index =>
      it("should push a dependency to the target with the given index: " + index, () => {
        const target: ITarget = {} as ITarget;

        const subject: ParameterDecorator = get_subject_with({} as Injectable);

        subject(target, "anything", index);

        assert.equal(target.dependencies.length, 1);
        assert.equal(target.dependencies[0].propertyIndex, index);
      })
    );

    function get_subject_with(dependencyType: Injectable): ParameterDecorator {
      return Inject(dependencyType);
    }
  });
});
