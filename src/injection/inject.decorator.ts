// tslint:disable: ban-types
// tslint:disable: only-arrow-functions

import { Injectable } from "./injectables.enum";

export function Inject(dependencyType: Injectable): ParameterDecorator {
  return function(_target: Object, propertyName: string | symbol, index: number): void {
    const target: ITarget = _target as ITarget;

    if (!target.dependencies) {
      target.dependencies = [];
    }

    target.dependencies.push({
      propertyIndex: index,
      dependencyType
    });
  };
}

export interface ITarget {
  dependencies: IDependency[];
}

export interface IDependency {
  propertyIndex: number;
  dependencyType: Injectable;
}
