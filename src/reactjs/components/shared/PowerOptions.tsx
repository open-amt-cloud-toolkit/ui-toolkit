/*********************************************************************
* Copyright (c) Intel Corporation 2019
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/

import React from 'react'

export interface PowerOptionProps {
  availableOptions: any
  onChange: any
  isSelected: boolean
  onBlur?: boolean
}

export const PowerOptions: React.SFC<PowerOptionProps> = props => <select onClick={props.onChange} name='PowerOptions'>
  <option value='' selected={!props.isSelected}>Choose</option>
  {props.availableOptions.map(({ value, label }) => (
    <option key={value} value={value}>
      {label}
    </option>
  ))}
</select>
