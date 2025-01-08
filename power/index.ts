import { Component, Pin } from '@typecad/typecad'
import { PWR_Counter, Power_Initializer } from '../count';

export class Power {
    voltage: number;
    maximum: number;
    minimum: number;
    name: string;
    ground = { "net": "", "pin": new Pin }
    power = { "net": "", "pin": new Pin }

    constructor({ reference, xy, schematic, voltage, maximum, minimum, power_name, ground_name, power_flag = true, ground_flag = true }: Power_Initializer = {}) {
        reference = PWR_Counter.reference(reference);

        // make a default ground name, it may be replaced below
        // this.ground.net = `${PWR_Counter.count}:ground`;

        if (maximum) {
            this.maximum = maximum;
        }
        if (minimum) {
            this.minimum = minimum;
        }

        if (voltage) {
            this.voltage = voltage;
            this.power.net = `${voltage}:power`;
            this.ground.net = `${voltage}:ground`;
        }

        // name when no voltage
        if (power_name) {
            this.power.net = `${power_name}`;
            this.ground.net = `${power_name}:ground`;
        }
        if (ground_name) {
            this.ground.net = `${ground_name}`;
        }

        if (schematic) {
            let vcc = new Component({ symbol: `power:VCC`, reference: `#PWR${PWR_Counter.count}` });
            this.power.pin = vcc.pin(1);
            //this.power.net = `vcc${PWR_Counter.count}`;
            vcc.Value = this.power.net;
            schematic.add(vcc);

            if (power_flag == true) {
                let vcc_flag = new Component({ symbol: `power:PWR_FLAG`, reference: `#FLG${PWR_Counter.count}` });
                schematic.add(vcc_flag);
                schematic.net(vcc.pin(1), vcc_flag.pin(1));
            }
            
            PWR_Counter.inc();
            let gnd = new Component({ symbol: `power:GND`, reference: `#PWR${PWR_Counter.count}` });
            this.ground.pin = gnd.pin(1);
            //this.ground.net = `gnd${PWR_Counter.count}`;
            gnd.Value = this.ground.net;
            schematic.add(gnd);

            if (ground_flag == true) {
                let gnd_flag = new Component({ symbol: `power:PWR_FLAG`, reference: `#FLG${PWR_Counter.count}` });
                schematic.add(gnd_flag);
                schematic.net(gnd.pin(1), gnd_flag.pin(1));
            }
        }
    }
}