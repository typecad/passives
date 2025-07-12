import { Component } from '@typecad/typecad'

interface IConnector {
    reference?: string,
    number: number,
    footprint?: string,
    uuid?: string,
    pcb?: { x: number, y: number, rotation: number },
    sch?: { x: number, y: number, rotation: number }
}

export class Connector extends Component {
    constructor({ number, reference, footprint, uuid, pcb, sch }: IConnector = {number: 1}) {
        let number_string: string;

        if (number < 10) {
            number_string = '0' + number.toString();
        } else {
            number_string = number.toString();
        }
        if (footprint == undefined) {
            super({reference: reference, footprint: `Connector_PinHeader_2.54mm:PinHeader_1x${number_string}_P2.54mm_Vertical`, prefix: 'J', uuid, pcb, sch, symbol: `Connector:Conn_01x${number_string}_Pin` });
        } else {
            super({reference:reference, footprint:footprint, prefix: 'J', uuid, pcb, sch, symbol: `Connector:Conn_01x${number_string}_Pin`});
        }
    }
}