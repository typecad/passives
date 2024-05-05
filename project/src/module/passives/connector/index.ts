import { Component } from '@typecad/typecad'
import { J_Counter, Connector_Initializer } from '../count'

export class Connector extends Component {
    constructor({ number, reference, footprint, xy }: Connector_Initializer = {number: 1}) {
        reference = J_Counter.reference(reference);
        let number_string: string;

        if (number < 10) {
            number_string = '0' + number.toString();
        } else {
            number_string = number.toString();
        }
        if (footprint == undefined) {
            super(`Connector:Conn_01x${number_string}_Pin`, reference, '', `Connector_PinHeader_2.54mm:PinHeader_1x${number_string}_P2.54mm_Vertical`, xy);
        } else {
            super(`Connector:Conn_01x${number_string}_Pin`, reference, '', footprint, xy);
        }
    }
}