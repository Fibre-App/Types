// tslint:disable: ban-types
// tslint:disable: only-arrow-functions

import { Injectable } from "./injectables.enum";

export function Inject(dependencyType: Injectable) {
  return function(target: ITarget, propertyName: string, index: number) {
    if (!target.dependencies) {
      target.dependencies = [];
    }

    target.dependencies.push({
      propertyIndex: index,
      dependencyType
    });
  };
}

interface ITarget {
  dependencies: IDependency[];
}

export interface IDependency {
  propertyIndex: number,
  dependencyType: Injectable
}