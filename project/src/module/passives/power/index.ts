import { Component, Pin } from '@typecad/typecad'
import { PWR_Counter, Power_Initializer } from '../count';

export class Power {
    voltage: number;
    power: string;
    ground: string;
    maximum: number;
    minimum: number;
    power_pin: Pin;
    ground_pin: Pin;
    name: string;

    constructor({ reference, xy, schematic, voltage, maximum, minimum, power_name, ground_name, power_flag, ground_flag }: Power_Initializer = {}) {
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
            this.ground = `ground`;
        }

        if (power_name) {
            this.power = `${power_name}`;
        }
        if (ground_name) {
            this.ground = `${ground_name}`;
        }

        if (schematic) {
            let vcc = new Component(`power:VCC`, `#PWR${PWR_Counter.count}`);
            if (power_flag == true){
                let vcc_flag = new Component(`power:PWR_FLAG`, `#FLG${PWR_Counter.count}`);
                schematic.add(vcc_flag);
                schematic.net(this.power, vcc.pin(1), vcc_flag.pin(1));
            } else {
                schematic.net(this.power, vcc.pin(1));
            }
            vcc.Value = this.power;
            schematic.add(vcc);
            this.power_pin = vcc.pin(1);

            PWR_Counter.inc();
            let gnd = new Component(`power:GND`, `#PWR${PWR_Counter.count}`);
            if (ground_flag == true){
                let gnd_flag = new Component(`power:PWR_FLAG`, `#FLG${PWR_Counter.count}`);
                schematic.add(gnd_flag);
                schematic.net(this.ground, gnd.pin(1), gnd_flag.pin(1));
            } else {
                schematic.net(this.ground, gnd.pin(1));
            }
            gnd.Value = this.ground;
            schematic.add(gnd);
            
            this.ground_pin = gnd.pin(1);
        }
    }
}