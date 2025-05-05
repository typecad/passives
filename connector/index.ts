import { Component } from '@typecad/typecad'

interface IConnector {
    reference?: string,
    number: number,
    footprint?: string,
    uuid?: string,
}

export class Connector extends Component {
    constructor({ number, reference, footprint, uuid }: IConnector = {number: 1}) {
        let number_string: string;

        if (number < 10) {
            number_string = '0' + number.toString();
        } else {
            number_string = number.toString();
        }
        if (footprint == undefined) {
            super({reference: reference, footprint: `Connector_PinHeader_2.54mm:PinHeader_1x${number_string}_P2.54mm_Vertical`, prefix: 'J', uuid });
        } else {
            super({reference:reference, footprint:footprint, prefix: 'J', uuid});
        }
    }
}