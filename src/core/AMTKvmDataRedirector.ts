/*********************************************************************
 * Copyright (c) Intel Corporation 2019
 * SPDX-License-Identifier: Apache-2.0
 * Author : Ramu Bachala
 **********************************************************************/
import { AMTRedirector } from './AMTRedirector'
import { ILogger, IKvmDataCommunicator } from './Interfaces'

export class AMTKvmDataRedirector extends AMTRedirector implements IKvmDataCommunicator {
  onSendKvmData: (data: string) => void
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor (logger: ILogger, protocol: number, fr: FileReader, host: string, port: number, user: string, pass: string, tls: number, tls1only: number, server?: string) {
    super(logger, protocol, fr, host, port, user, pass, tls, tls1only, server)
  }
}
