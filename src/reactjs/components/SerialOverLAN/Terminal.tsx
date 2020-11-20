/*********************************************************************
* Copyright (c) Intel Corporation 2019
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/

import React from 'react';
import Style from 'styled-components';

const TerminalContainer = Style.div`
   display:block;
   text-align:center;
`
const XTerm = Style.div`
   display:inline-block;
`


export interface IPropTerminal {
    handleKeyPress: any,
    xterm: any,
    handleKeyDownPress: any
}

class Term extends React.Component<IPropTerminal> {

    constructor(props: IPropTerminal) {
        super(props);
    }

    componentDidMount() {
        const element = document.getElementById('xterm') || '';
        let { xterm, handleKeyPress } = this.props;
        if (element) {
            xterm.open(element);
            xterm.onData(data => handleKeyPress(data))
            xterm.attachCustomKeyEventHandler(e => {
                e.stopPropagation();
                e.preventDefault();
                if (e.ctrlKey && e.shiftKey && (e.keyCode === 67)) {
                    return navigator.clipboard.writeText(xterm.getSelection())

                } else if (e.ctrlKey && e.shiftKey && (e.keyCode === 86)) {
                    return navigator.clipboard.readText()
                        .then(text => handleKeyPress(text)
                        )
                } else if (e.code === 'Space') {
                    return handleKeyPress(e.key)

                }

            })

        }
    }

    render() {
        return (
            <TerminalContainer>
                <XTerm id="xterm" />
            </TerminalContainer>
        )
    }
}

export default Term