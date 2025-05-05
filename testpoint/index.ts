import { Component } from '@typecad/typecad'

interface ITestpoint {
    reference?: string,
    footprint?: string,
    uuid?: string,
}

export class Testpoint extends Component {
    constructor({ reference, footprint, uuid }: ITestpoint = { }) {
        super({ reference, footprint: footprint || 'TestPoint:TestPoint_Pad_D1.0mm', prefix: 'TP', uuid });
    }
}