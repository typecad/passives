import { Component } from '@typecad/typecad'

interface ITestpoint {
    reference?: string,
    footprint?: string,
    uuid?: string,
    pcb?: { x: number, y: number, rotation: number }
}

export class Testpoint extends Component {
    constructor({ reference, footprint, uuid, pcb }: ITestpoint = {}) {
        super({ reference, footprint: footprint || 'TestPoint:TestPoint_Pad_D1.0mm', prefix: 'TP', uuid, pcb });
    }
}