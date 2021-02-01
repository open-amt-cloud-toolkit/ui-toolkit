/*********************************************************************
 * Copyright (c) Intel Corporation 2019
 * SPDX-License-Identifier: Apache-2.0
 **********************************************************************/
import dot from 'dot-object'
import camelCase from 'camelcase'

/** Checks whether the given value is an object or not */
export const isObject = (value): any => typeof value === 'object'

/** Takes an object and converts the keys into camelcase  */
export const camelCaseKeys = (data): any => {
  if (Array.isArray(data)) {
    return data.map(camelCaseKeys)
  } else if (data !== null && isFalsy(isObject(data))) {
    return Object.entries(data).reduce((acc, [key, value]) => {
      acc[camelCase(key)] = camelCaseKeys(value)
      return acc
    }, {})
  }
  return data
}

/** Takes an object and converts it to another structure using dot-notation */
export const reshape = (response, model): any => {
  return Object.keys(model).reduce(
    (acc, key) => dot.copy(key, model[key], response, acc),
    {}
  )
}

/** Takes an object, camel cases the keys, and converts it to another structure using dot-notation */
export const camelCaseReshape = (response, model): any => {
  return reshape(camelCaseKeys(response), model)
}

/** Tests if a value is a function */
export const isFunc = (value): any => typeof value === 'function'

export const passwordLengthValidation = (length): any => length >= 8 && length <= 32

export const nameValidation = (value): any =>
  new RegExp('^[a-zA-Z0-9$@$!%*#?&-_~^]+$').test(value)

export const passwordValidation = (value): any =>
  new RegExp(
    '^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9$@$!%*#?&-_~^]{8,32}$'
  ).test(value)

// export const portValidation = (value) => new RegExp('^(4915[0-1]|491[0-4]\d|490\d\d|4[0-8]\d{3}|[1-3]\d{4}|[2-9]\d{3}|1[1-9]\d{2}|10[3-9]\d|102[4-9])$').test(value)
export const portValidation = (value): any =>
  new RegExp(
    '^(102[4-9]|10[3-9][0-9]|1[1-9][0-9]{2}|[2-9][0-9]{3}|[1-3][0-9]{4}|4[0-8][0-9]{3}|490[0-9]{2}|491[0-4][0-9]|4915[01])$'
  ).test(value)

export const commonNameValidation = (value): any =>
  isFalsy(value) ? new RegExp('[^a-zA-Z0-9._-]').test(value) : true

export const ipAddressValidation = (ipType, value): any =>
  ipType === 3
    ? ipv4(value)
    : ipType === 6
      ? ipv6(value)
      : ipType === 201
        ? fqdn(value)
        : ''

/** ipv4 formate validation  */
const ipv4 = (value): any =>
  new RegExp(
    '^([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])\\.([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])\\.([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])\\.([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])$'
  ).test(value)

/** ipv6 formate validation  */

const ipv6 = (value): any =>
  new RegExp(
    '^((?:[0-9A-Fa-f]{1,4}))((?::[0-9A-Fa-f]{1,4}))*::((?:[0-9A-Fa-f]{1,4}))((?::[0-9A-Fa-f]{1,4}))*|((?:[0-9A-Fa-f]{1,4}))((?::[0-9A-Fa-f]{1,4})){7}$'
  ).test(value)

/** fqdn formate validation  */
const fqdn = (value): any => /^(?=.{1,254}$)((?=[a-z0-9-]{1,63}\.)(xn--+)?[a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,63}$/.test(value)

/** utility function to join the css class names */
export const joinClasses = (...classNames): any =>
  classNames
    .filter((name) => !!isFalsy(name))
    .join(' ')
    .trim()

/**
 * encode the special characters
 */
export const encodeSpecialCharacters = (configName): string => {
  const replaceChars = { '#': '%23', '%': '%25' }
  return configName.replace(/#|%/g, match => replaceChars[match])
}

export const prepareHeaders = (apiKey, isMpsControl?: boolean): any => {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
  if (isFalsy(isMpsControl)) {
    headers['X-MPS-API-Key'] = apiKey
  } else {
    headers['X-RPS-API-Key'] = apiKey
  }
  return headers
}

export const validateFileExtensions = (filePath): boolean => {
  const validExtensions = /(\.pfx)$/i
  return !!isFalsy(validExtensions.exec(filePath))
}

export const isFalsy = (value: any): boolean => value !== null && value !== undefined && value !== '' && value !== false && value !== 0
