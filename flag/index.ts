import { Component } from '@typecad/typecad'
import { PWR_Counter, Passive_Initializer } from '../count';

export class PWR_Flag extends Component {
    constructor({ reference, xy }: Passive_Initializer = {}) {
        reference = PWR_Counter.reference(reference);
        super('power:PWR_FLAG', reference, '', '', xy);
    }
}