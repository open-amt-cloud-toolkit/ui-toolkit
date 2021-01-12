/*********************************************************************
* Copyright (c) Intel Corporation 2019
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/
import moment from 'moment'
const EMPTY_FIELD_VAL = '---'
/** The default formatting for dates in the PcsGrid */
const DEFAULT_TIME_FORMAT = 'YYYY-MM-DD HH:mm'
/** A collection of reusable value formatter methods */
const gridValueFormatters = {
  checkForEmpty: (value, emptyValue = EMPTY_FIELD_VAL) => value || emptyValue
}
const { checkForEmpty } = gridValueFormatters
const formatTime = (value) => {
  if (value) {
    const time = moment.utc(value).local()
    return checkForEmpty((time.unix() > 0) ? time.format(DEFAULT_TIME_FORMAT) : '')
  }
  return value
}
export const TimeRenderer = ({ value }) => {
  const formattedTime = formatTime(value)
  return (
    formattedTime || ''
  )
}
