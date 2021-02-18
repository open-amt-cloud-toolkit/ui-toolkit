/*********************************************************************
 * Copyright (c) Intel Corporation 2020
 * SPDX-License-Identifier: Apache-2.0
 **********************************************************************/

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import './Clipboard.scss'
/**
 * Reusable  copy to clipboard utility with a button
 */
export const CopyToClipBoard = ({ value }): JSX.Element => {
  const [copied, setCopied] = useState(false)

  // Effect used to reset the copy button by toggling copied flag
  useEffect(() => {
    let timeout
    if (copied) {
      timeout = setTimeout(() => setCopied(false), 4000)
    }
    return () => {
      clearTimeout(timeout)
    }
  }, [copied])

  const copyContents = (value): void => {
    const element = document.createElement('textarea')
    element.value = value
    document.body.appendChild(element)
    element.select()
    document.execCommand('copy')
    setCopied(true)
    document.body.removeChild(element)
  }

  return (
    <>
      <span>{value}</span>
      <button className="clipboard-button" onClick={() => copyContents(value)}>
        {!copied ? <FontAwesomeIcon icon="copy" size="xs" /> : <FontAwesomeIcon icon="check" size="xs" color="green" />}
      </button>
    </>
  )
}
