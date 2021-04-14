/*********************************************************************
 * Copyright (c) Intel Corporation 2019
 * SPDX-License-Identifier: Apache-2.0
 **********************************************************************/

/** utility function to join the css class names */
export const joinClasses = (...classNames): any =>
  classNames
    .filter((name) => !!isFalsy(name))
    .join(' ')
    .trim()


export const prepareHeaders = (): any => {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
  return headers
}

export const isFalsy = (value: any): boolean => value !== null && value !== undefined && value !== '' && value !== false && value !== 0
