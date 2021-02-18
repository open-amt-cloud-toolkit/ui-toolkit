/*********************************************************************
* Copyright (c) Intel Corporation 2020
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/

import React from 'react'
import Style from 'styled-components'
import { isFalsy } from './Utilities'

const CheckboxContainer = Style.div`
  display: inline-block;
  vertical-align: middle;
`

const Icon = Style.svg`
  fill: none;
  stroke: green;
  stroke-width: 2px;
`

const HiddenCheckbox = Style.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

const StyledCheckbox = Style.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  background-color: ${({ disableCheckbox }) => getColor(disableCheckbox)};
  border-radius: 1px solid black;
  transition: all 150ms;

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 1px white;
  }

  ${Icon} {
    visibility: ${props => (isFalsy(props.checked) ? 'visible' : 'hidden')}
  }
`

const getColor = (disableCheckbox): string => disableCheckbox === true ? '#ccc' : 'white'
/** Generic presentational function for Checkbox */
export const Checkbox = ({ className, checked, disableCheckbox, ...props }): JSX.Element => (
  <CheckboxContainer className={className}>
    <HiddenCheckbox checked={checked} {...props} disabled={disableCheckbox}/>
    <StyledCheckbox checked={checked} disableCheckbox={disableCheckbox}>
      <Icon viewBox="0 0 24 24">
        <polyline points="20 6 9 17 4 12" />
      </Icon>
    </StyledCheckbox>
  </CheckboxContainer>
)
