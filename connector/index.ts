import { Component } from '@typecad/typecad'

export class Connector extends Component {
    constructor(reference: string, number: number, footprint?: string) {
        let number_string: string;

        if (number > 10) {
            number_string = '0' + number.toString();
        } else {
            number_string = number.toString();
        }
        if (footprint == undefined) {
            super(`Connector:Conn_01x${number_string}_Pin`, reference, '', `Connector_PinHeader_2.54mm:PinHeader_1x${number_string}_P2.54mm_Vertical`);
        } else {
            super(`Connector:Conn_01x${number_string}_Pin`, reference, '', footprint);
        }
    }
}