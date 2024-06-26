import { Bounds, Schematic } from "@typecad/typecad";

export { C_Counter, Capacitor_Initializer, Connector_Initializer, D_Counter, F_Counter, I_Counter, J_Counter, PWR_Counter, Passive_Initializer, Power_Initializer, R_Counter, Resistor_Initializer };

interface Passive_Initializer {
    reference?: string,
    value?: string,
    xy?: Bounds,
}

interface Power_Initializer {
    reference?: string,
    value?: string,
    xy?: Bounds,
    schematic?: Schematic,
    voltage?: number, 
    maximum?: number, 
    minimum?: number,
    power_name?: string,
    ground_name?: string,
    power_flag?: boolean,
    ground_flag?: boolean
}

interface Resistor_Initializer  {
    reference?: string,
    value?: string,
    wattage?: string,
    xy?: Bounds
}

interface Capacitor_Initializer  {
    reference?: string,
    value?: string,
    voltage?: string,
    xy?: Bounds
}

interface Connector_Initializer  {
    reference?: string,
    number: number,
    footprint?: string,
    xy?: Bounds
}

class counter {
    count: number = 0;
    prefix: string = '';
    refs: string[] = [];

    constructor(prefix:string){
        this.prefix = prefix;
    }
    inc() {
        this.count++;
        return this.count.toString();
    }
    reference(reference?: string) {
        this.inc();
        if (reference == undefined) {
            this.refs.push(this.prefix + this.count);
            return this.prefix + this.count;
        } else {
            // check if this will be a repeat reference number
            if (this.refs.includes(reference)) {
                this.refs.push(reference);
                return reference + '_1';
            } else {
                this.refs.push(reference);
                return reference;
            }
        }
    }
}

let R_Counter = new counter('R');
let F_Counter = new counter('F');
let I_Counter = new counter('I');
let D_Counter = new counter('D');
let C_Counter = new counter('C');
let PWR_Counter = new counter('#FLG');
let J_Counter = new counter('J');