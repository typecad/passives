import { Bounds } from "@typecad/typecad";

export { R_Counter, F_Counter, Passive_Initializer, Resistor_Initializer, Capacitor_Initializer, Connector_Initializer, 
    I_Counter, D_Counter, C_Counter, PWR_Counter, J_Counter };

interface Passive_Initializer {
    reference?: string,
    value?: string,
    xy?: Bounds
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

    constructor(prefix:string){
        this.prefix = prefix;
    }
    inc() {
        this.count++;
        return this.count.toString();
    }
    reference(reference?: string) {
        if (reference == undefined) {
            return this.prefix + this.inc();
        } else {
            // check if this will be a repeat reference number
            if (parseInt(reference.slice(1)) >= this.count) {
                return reference + '_1';
            } else {
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