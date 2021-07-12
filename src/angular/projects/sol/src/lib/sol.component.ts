import { Component, EventEmitter, Inject, OnInit, Output, ViewEncapsulation, OnDestroy, Input } from '@angular/core'
import { Terminal } from 'xterm'
import { AmtTerminal, AMTRedirector, TerminalDataProcessor, ConsoleLogger, Protocol, LogLevel } from '@open-amt-cloud-toolkit/ui-toolkit/core'
import { ActivatedRoute } from '@angular/router'
import { C, V, SPACE } from '@angular/cdk/keycodes'

@Component({
  selector: 'amt-sol',
  templateUrl: './sol.component.html',
  styleUrls: ['./sol.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SolComponent implements OnInit, OnDestroy {
  uuid: string = ''
  terminal: any
  container!: any
  term: any
  redirector: any
  dataProcessor: any
  token: any
  server: string = ''
  logger: ConsoleLogger = new ConsoleLogger(LogLevel.ERROR)
  @Output() deviceStatus: EventEmitter<number> = new EventEmitter<number>()
  @Input() deviceConnection: EventEmitter<boolean> = new EventEmitter<boolean>()

  constructor (@Inject('userInput') public params, private readonly activatedRoute: ActivatedRoute) {
    this.token = localStorage.getItem('loggedInUser')
  }

  ngOnInit (): void {
    this.activatedRoute.params.subscribe(params => {
      this.uuid = params.id
    })
  }

  init (): void {
    this.terminal = new AmtTerminal()
    this.dataProcessor = new TerminalDataProcessor(this.terminal)
    this.redirector = new AMTRedirector(this.logger, Protocol.SOL, new FileReader(), this.uuid, 16994, '', '', 0, 0, JSON.parse(this.token).token, this.server)
    this.terminal.onSend = this.redirector.send.bind(this.redirector)
    this.redirector.onNewState = this.terminal.StateChange.bind(this.terminal)
    this.redirector.onStateChanged = this.onTerminalStateChange.bind(this)
    this.redirector.onProcessData = this.dataProcessor.processData.bind(this)
    this.dataProcessor.processDataToXterm = this.handleWriteToXterm.bind(this)
    this.dataProcessor.clearTerminal = this.handleClearTerminal.bind(this)
    this.container = document.getElementById('terminal')
    this.term = new Terminal({
      rows: 30,
      cols: 100,
      cursorStyle: 'block',
      fontWeight: 'bold'
    })
    this.term.open(this.container)
    this.term.onData((data: any) => {
      this.handleKeyPress(data)
    })
    this.term.attachCustomKeyEventHandler((e: any) => {
      e.stopPropagation()
      e.preventDefault()
      if (e.ctrlKey === true && e.shiftKey === true && e.keyCode === C) {
        return navigator.clipboard.writeText(this.term.getSelection())
      } else if (e.ctrlKey === true && e.shiftKey === true && e.keyCode === V) {
        return navigator.clipboard.readText().then(text => {
          this.handleKeyPress(text)
        })
      } else if (e.code === SPACE) {
        return this.handleKeyPress(e.key)
      }
    })
  }

  handleKeyPress (domEvent: any): void {
    this.terminal.TermSendKeys(domEvent)
  }

  handleClearTerminal (): void {
    this.term.reset()
  }

  handleWriteToXterm (str: string): void {
    this.term.write(str)
  }

  onTerminalStateChange (redirector: AMTRedirector, state: number): void {
    this.deviceStatus.emit(state)
  }

  startSol (): void {
    this.redirector.start(WebSocket)
  }

  stopSol (): void {
    this.redirector.stop()
    this.handleClearTerminal()
    this.term.dispose()
    this.cleanup()
  }

  cleanup (): void {
    this.terminal = null
    this.redirector = null
    this.dataProcessor = null
    this.term = null
  }

  ngOnDestroy (): void {
    this.redirector.stop()
    this.cleanup()
  }
}
