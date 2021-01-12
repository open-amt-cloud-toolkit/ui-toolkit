/*********************************************************************
 * Copyright (c) Intel Corporation 2019
 * SPDX-License-Identifier: Apache-2.0
 **********************************************************************/

export class AmtTerminal {
  terminalEmulation = 1
  fxEmulation = 0
  fxLineBreak = 0 // 0 = CR+LF, 1 = LF

  /** used to map Ascii values received from serial port to unicode characters */
  AsciiToUnicode = [
    0x00c7,
    0x00fc,
    0x00e9,
    0x00e2,
    0x00e4,
    0x00e0,
    0x00e5,
    0x00e7,
    0x00ea,
    0x00eb,
    0x00e8,
    0x00ef,
    0x00ee,
    0x00ec,
    0x00c4,
    0x00c5,
    0x00c9,
    0x00e6,
    0x00c6,
    0x00f4,
    0x00f6,
    0x00f2,
    0x00fb,
    0x00f9,
    0x00ff,
    0x00d6,
    0x00dc,
    0x00a2,
    0x00a3,
    0x00a5,
    0x20a7,
    0x0192,
    0x00e1,
    0x00ed,
    0x00f3,
    0x00fa,
    0x00f1,
    0x00d1,
    0x00aa,
    0x00da,
    0x00bf,
    0x2310,
    0x00ac,
    0x00bd,
    0x00bc,
    0x00a1,
    0x00ab,
    0x00bb,
    0x2593,
    0x2592,
    0x2591,
    0x2502,
    0x2524,
    0x2561,
    0x2562,
    0x2556,
    0x2555,
    0x2563,
    0x2551,
    0x2557,
    0x255d,
    0x255c,
    0x255b,
    0x2510,
    0x2514,
    0x2534,
    0x252c,
    0x251c,
    0x2500,
    0x253c,
    0x255e,
    0x255f,
    0x255a,
    0x2554,
    0x2569,
    0x2566,
    0x2560,
    0x2550,
    0x256c,
    0x2567,
    0x2568,
    0x2564,
    0x2565,
    0x2568,
    0x2558,
    0x2552,
    0x2553,
    0x256b,
    0x256a,
    0x2518,
    0x250c,
    0x2588,
    0x2584,
    0x258b,
    0x2590,
    0x2580,
    0x03b1,
    0x00df,
    0x0393,
    0x03c0,
    0x03a3,
    0x03c3,
    0x00b5,
    0x03c4,
    0x03c6,
    0x03b8,
    0x2126,
    0x03b4,
    0x221e,
    0x00f8,
    0x03b5,
    0x220f,
    0x2261,
    0x00b1,
    0x2265,
    0x2266,
    0x2320,
    0x2321,
    0x00f7,
    0x2248,
    0x00b0,
    0x2022,
    0x00b7,
    0x221a,
    0x207f,
    0x00b2,
    0x220e,
    0x00a0
  ]

  AsciiToUnicodeIntel = [
    0x00c7,
    0x00fc,
    0x00e9,
    0x00e2,
    0x00e4,
    0x00e0,
    0x00e5,
    0x00e7,
    0x00ea,
    0x00eb,
    0x00e8,
    0x00ef,
    0x00ee,
    0x00ec,
    0x00c4,
    0x00c5,
    0x00c9,
    0x00e6,
    0x00c6,
    0x00f4,
    0x00f6,
    0x00f2,
    0x00fb,
    0x00f9,
    0x00ff,
    0x00d6,
    0x00dc,
    0x00a2,
    0x00a3,
    0x00a5,
    0x20a7,
    0x0192,
    0x00e1,
    0x00ed,
    0x00f3,
    0x00fa,
    0x00f1,
    0x00d1,
    0x00aa,
    0x00da,
    0x00bf,
    0x2310,
    0x00ac,
    0x00bd,
    0x00bc,
    0x00a1,
    0x00ae,
    0x00bb,
    0x2593,
    0x2592,
    0x2591,
    0x2502,
    0x2524,
    0x2561,
    0x2562,
    0x2556,
    0x2555,
    0x2563,
    0x2551,
    0x2557,
    0x255d,
    0x255c,
    0x255b,
    0x2510,
    0x2514,
    0x2534,
    0x252c,
    0x251c,
    0x2500,
    0x253c,
    0x255e,
    0x255f,
    0x255a,
    0x2554,
    0x2569,
    0x2566,
    0x2560,
    0x2550,
    0x256c,
    0x2567,
    0x2568,
    0x2564,
    0x2565,
    0x2568,
    0x2558,
    0x2552,
    0x2553,
    0x256b,
    0x256a,
    0x2518,
    0x250c,
    0x2588,
    0x2584,
    0x258b,
    0x2590,
    0x2580,
    0x03b1,
    0x00df,
    0x0393,
    0x03c0,
    0x03a3,
    0x03c3,
    0x00b5,
    0x03c4,
    0x03c6,
    0x03b8,
    0x2126,
    0x03b4,
    0x221e,
    0x00f8,
    0x03b5,
    0x220f,
    0x2261,
    0x00b1,
    0x2265,
    0x2266,
    0x2320,
    0x2321,
    0x00f7,
    0x2248,
    0x00b0,
    0x2022,
    0x00b7,
    0x221a,
    0x207f,
    0x00b2,
    0x220e,
    0x00a0
  ]

  StateChange = (newState) => { }

  /** sending  multiple unicode values to socket */
  TermSendKeys = (keys) => this.onSend(keys)

  onSend: (data: any) => void

  ProcessData: (str: string) => void
}
