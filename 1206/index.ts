import { Component, IComponent } from '@typecad/typecad'

export class Fuse extends Component {
  constructor({ reference, value, footprint, prefix, datasheet, description, voltage, wattage, mpn, simulation, uuid, symbol, pcb }: IComponent = {}) {
    super({ reference: reference, value: value, symbol: symbol || 'Device:Fuse_Small', footprint: footprint || "Fuse:Fuse_1206_3216Metric", prefix: prefix || 'F', datasheet, description, voltage, wattage, mpn, simulation, uuid, pcb });
  }
}

export class Inductor extends Component {
  constructor({ reference, value, footprint, prefix, datasheet, description, voltage, wattage, mpn, simulation, uuid, symbol, pcb }: IComponent = {}) {
    super({ reference: reference, value: value, symbol: symbol || 'Device:L_Small', footprint: footprint || "Inductor_SMD:L_1206_3216Metric", prefix: prefix || 'L', datasheet, description, voltage, wattage, mpn, simulation, uuid, pcb });
  }
}

export class Diode extends Component {
  constructor({ reference, value, footprint, prefix, datasheet, description, voltage, wattage, mpn, simulation, uuid, symbol, pcb }: IComponent = {}) {
    super({ reference: reference, value: value, symbol: symbol || 'Device:D_Small', footprint: footprint || "Diode_SMD:D_1206_3216Metric", prefix: prefix || 'D', datasheet, description, voltage, wattage, mpn, simulation, uuid, pcb });
  }
}

export class LED extends Component {
  constructor({ reference, value, footprint, prefix, datasheet, description, voltage, wattage, mpn, simulation, uuid, symbol, pcb }: IComponent = {}) {
    super({ reference: reference, value: value, symbol: symbol || 'Device:LED_Small', footprint: footprint || "LED_SMD:LED_1206_3216Metric", prefix: prefix || 'D', datasheet, description, voltage, wattage, mpn, simulation, uuid, pcb });
  }
}

export class Resistor extends Component {
  Wattage?: string;
  constructor({ reference, value, footprint, prefix, datasheet, description, voltage, wattage, mpn, simulation, uuid, symbol, pcb }: IComponent = {}) {
    super({ value: value, symbol: symbol || 'Device:R_Small', footprint: footprint || "Resistor_SMD:R_1206_3216Metric", prefix: prefix || 'R', reference, datasheet, description, voltage, wattage, mpn, simulation, uuid, pcb });
    this.Wattage = wattage;
  }
}

export class Capacitor extends Component {
  Voltage?: string;
  constructor({ reference, value, footprint, prefix, datasheet, description, voltage, wattage, mpn, simulation, uuid, symbol, pcb }: IComponent = {}) {
    super({ reference, value: value, symbol: symbol || 'Device:C_Small', footprint: footprint || "Capacitor_SMD:C_1206_3216Metric", prefix: prefix || 'C', datasheet, description, voltage, wattage, mpn, simulation, uuid, pcb });
    this.Voltage = voltage;
  }
}