import { Component, Pin } from '@typecad/typecad'
import { NT_Counter, Tie_Initializer } from '../count';

export class Tie extends Component{
    voltage: number;
    power: string;
    ground: string;
    maximum: number;
    minimum: number;
    power_pin: Pin;
    ground_pin: Pin;
    name: string;

    constructor({ reference, xy, schematic, net1, net2, net3, net4, footprint }: Tie_Initializer = {}) {
        reference = NT_Counter.reference(reference);

        if (!schematic) return;
        if (!net1) return;
        if (!net2) return;

        if (net4 && net3) {
            super({symbol: "Device:NetTie_4", reference: reference, footprint: footprint || "NetTie:NetTie-4_SMD_Pad0.5mm"});
            schematic.net({ net: net1, pins: [this.pin(1)] });
            schematic.net({ net: net2, pins: [this.pin(2)] });
            schematic.net({ net: net3, pins: [this.pin(3)] });
            schematic.net({ net: net4, pins: [this.pin(4)] });
        } else if (net3) {
            super({symbol: "Device:NetTie_3", reference: reference, footprint: footprint || "NetTie:NetTie-3_SMD_Pad0.5mm"});
            schematic.net({ net: net1, pins: [this.pin(1)] });
            schematic.net({ net: net2, pins: [this.pin(2)] });
            schematic.net({ net: net3, pins: [this.pin(3)] });

        } else {
            super({symbol: "Device:NetTie_2", reference: reference, footprint: footprint || "NetTie:NetTie-2_SMD_Pad0.5mm"});
            schematic.net({ net: net1, pins: [this.pin(1)] });
            schematic.net({ net: net2, pins: [this.pin(2)] });

        }
    }
}