import { Component, Pin } from '@typecad/typecad'
import { PWR_Counter, Passive_Initializer } from '../count';

export class Power {
    voltage: number;
    power: string;
    ground: string;
    maximum: number;
    minimum: number;

    constructor({ reference, xy, schematic, voltage, maximum, minimum }: Passive_Initializer = {}) {
        reference = PWR_Counter.reference(reference);

        if (voltage) {
            if (maximum) {
                this.maximum = maximum;
            } else {
                this.maximum = voltage
            }
            if (minimum) {
                this.minimum = minimum;
            } else {
                this.minimum = voltage
            }

            this.voltage = voltage;
            this.power = `${voltage}:power`;
            this.ground = `${voltage}:ground`;
        }

        if (schematic) {
            let vcc = new Component(`power:VCC`, `#PWR${PWR_Counter.count}`);
            let vcc_flag = new Component(`power:PWR_FLAG`, `#FLG${PWR_Counter.count}`);
            vcc.Value = this.power;
            schematic.add(vcc);
            schematic.add(vcc_flag);
            schematic.net(`${voltage}:power`, vcc.pin(1), vcc_flag.pin(1));

            PWR_Counter.inc();
            let gnd = new Component(`power:GND`, `#PWR${PWR_Counter.count}`);
            let gnd_flag = new Component(`power:PWR_FLAG`, `#FLG${PWR_Counter.count}`);
            gnd.Value = this.ground;
            schematic.add(gnd);
            schematic.add(gnd_flag);
            schematic.net(this.ground, gnd.pin(1), gnd_flag.pin(1));
        }
    }
}