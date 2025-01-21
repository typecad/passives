import { Component } from '@typecad/typecad2'

interface IConnector {
    reference?: string,
    number: number,
    footprint?: string,
}

export class Connector extends Component {
    constructor({ number, reference, footprint }: IConnector = {number: 1}) {
        let number_string: string;

        if (number < 10) {
            number_string = '0' + number.toString();
        } else {
            number_string = number.toString();
        }
        if (footprint == undefined) {
            super({reference: reference, footprint: `Connector_PinHeader_2.54mm:PinHeader_1x${number_string}_P2.54mm_Vertical`, prefix: 'J' });
        } else {
            super({reference:reference, footprint:footprint, prefix: 'J'});
        }
    }
}