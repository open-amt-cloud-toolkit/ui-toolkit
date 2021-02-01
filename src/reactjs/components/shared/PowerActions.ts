/*********************************************************************
* Copyright (c) Intel Corporation 2019
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/
export const availablePowerActions = [
  { value: '2', label: 'Power Up' },
  { value: '101', label: 'Reset To BIOS' },
  { value: '4', label: 'Sleep' },
  { value: '5', label: 'Power Cycle' },
  { value: '7', label: 'Hibernate' },
  { value: '8', label: 'Power Down' },
  { value: '10', label: 'Reset' },
  { value: '12', label: 'Soft-Off' },
  { value: '14', label: 'Soft Reset' },
  { value: '100', label: 'Power Up To BIOS' },
  { value: '400', label: 'Reset To PXE' },
  { value: '401', label: 'Power Up To PXE' }
]

export const getActionById = (action): any => action === 2 ? 'Power Up' : action === 8 ? 'Power Off' : action === 5 ? 'Power Cycle' : action === 10 ? 'Reset' : action === 12 ? 'Soft Off' : action === 14 ? 'Soft Reset' : action === 4 ? 'Sleep' : action === 7 ? 'Hibernate' : action === 100 ? 'Power Up To BIOS' : action === 101 ? 'Reset To BIOS' : null
