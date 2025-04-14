import { Component } from '@typecad/typecad'

interface ITestpoint {
    reference?: string,
    footprint?: string,
}

export class Testpoint extends Component {
    constructor({ reference, footprint }: ITestpoint = { footprint: 'TestPoint:TestPoint_Pad_D1.0mm'}) {

        super({ reference, footprint: footprint, prefix: 'TP' });
    }
}