import { Component } from '@typecad/typecad'

export class PWR_Flag extends Component {
    constructor(number_designator: number) {
        super('Power:PWR_FLAG', `#FLG${number_designator}`);
    }
}