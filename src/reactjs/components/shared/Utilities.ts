/*********************************************************************
* Copyright (c) Intel Corporation 2019
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/
import dot from 'dot-object';
import camelCase from 'camelcase';

/** Checks whether the given value is an object or not */
export const isObject = value => typeof value === 'object';

/** Takes an object and converts the keys into camelcase  */
export const camelCaseKeys = (data) => {
    if (Array.isArray(data)) {
      return data.map(camelCaseKeys);
    } else if (data !== null && isObject(data)) {
      return Object.entries(data)
        .reduce((acc, [key, value]) => {
          acc[camelCase(key)] = camelCaseKeys(value);
          return acc;
        }, {});
    }
    return data;
  };

  /** Takes an object and converts it to another structure using dot-notation */
export const reshape = (response, model) => {
    return Object.keys(model).reduce((acc, key) => dot.copy(key, model[key], response, acc), {});
  };
  
  /** Takes an object, camel cases the keys, and converts it to another structure using dot-notation */
  export const camelCaseReshape = (response, model) => {
    return reshape(camelCaseKeys(response), model);
  };
