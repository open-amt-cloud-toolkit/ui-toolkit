import { EventEmitter, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { AMTRedirector, ConsoleLogger } from '@open-amt-cloud-toolkit/ui-toolkit/core';
import { ActivatedRoute } from '@angular/router';
import * as i0 from "@angular/core";
export declare class SolComponent implements OnInit, OnDestroy, AfterViewInit {
    params: any;
    private readonly activatedRoute;
    uuid: string;
    terminal: any;
    container: any;
    term: any;
    redirector: any;
    dataProcessor: any;
    token: any;
    server: string;
    mpsServer: boolean;
    logger: ConsoleLogger;
    deviceStatus: EventEmitter<number>;
    deviceConnection: EventEmitter<boolean>;
    constructor(params: any, activatedRoute: ActivatedRoute);
    urlConstructor(): string;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    init(): void;
    instantiate(): void;
    handleKeyPress(domEvent: any): void;
    handleClearTerminal(): void;
    handleWriteToXterm(str: string): void;
    onTerminalStateChange(redirector: AMTRedirector, state: number): void;
    startSol(): void;
    stopSol(): void;
    cleanup(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDef<SolComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<SolComponent, "amt-sol", never, { "deviceConnection": "deviceConnection"; }, { "deviceStatus": "deviceStatus"; }, never, never>;
}
//# sourceMappingURL=sol.component.d.ts.map