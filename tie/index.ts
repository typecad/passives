import { Component, Pin } from '@typecad/typecad'

export class Tie extends Component{
    power: string;
    ground: string;
    maximum: number;
    minimum: number;
    power_pin: Pin;
    ground_pin: Pin;
    name: string;

    constructor({ reference, xy, schematic, net1, net2, net3, net4, footprint, uuid }) {
        if (!schematic) return;
        if (!net1) return;
        if (!net2) return;

        if (net4 && net3) {
            super({symbol: "Device:NetTie_4", reference: reference, footprint: footprint || "NetTie:NetTie-4_SMD_Pad0.5mm", uuid});
            schematic.net(this.pin(1), net1);
            schematic.net(this.pin(2), net2);
            schematic.net(this.pin(3), net3);
            schematic.net(this.pin(4), net4);
        } else if (net3) {
            super({symbol: "Device:NetTie_3", reference: reference, footprint: footprint || "NetTie:NetTie-3_SMD_Pad0.5mm", uuid});
            schematic.net(this.pin(1), net1);
            schematic.net(this.pin(2), net2);
            schematic.net(this.pin(3), net3);
        } else {
            super({symbol: "Device:NetTie_2", reference: reference, footprint: footprint || "NetTie:NetTie-2_SMD_Pad0.5mm", uuid});
            schematic.net(this.pin(1), net1);
            schematic.net(this.pin(2), net2);
        }
        schematic.add(this);
    }
}