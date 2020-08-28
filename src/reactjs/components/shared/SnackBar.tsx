/*********************************************************************
* Copyright (c) Intel Corporation 2019
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/
import React from 'react';
import Styled from 'styled-components';

const StyledBar = Styled.div`
display: block;
position: fixed;
text-align: center;
bottom: 0;
left: 40%;
background: ${({ type }) => getColors(type)};
border: ${({ type }) => `1px solid ${getColors(type)}`};
margin: 10px;
padding: 10px;position: absolute;
color: #fff; 
font-weight:500;
z-index:1;
`

const getColors = (type) => type === 'success' ? '#4caf50' : type === 'warning' ? '#ff9800' : type === 'error' ? '#f44336' : '#000000'

const SnackBar = ({ message, type }) => <StyledBar type={type}>{message}</StyledBar>

export default SnackBar;