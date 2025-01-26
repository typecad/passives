import { Component, IComponent } from '@typecad/typecad'

export class Fuse extends Component {
  constructor({ reference, value, footprint, prefix, datasheet, description, voltage, wattage, mpn }: IComponent = {}) {
    super({ reference: reference, value: value, footprint: footprint || "Fuse:Fuse_1206_3216Metric", prefix: prefix || 'F', datasheet, description, voltage, wattage, mpn });
  }
}

export class Inductor extends Component {
  constructor({ reference, value, footprint, prefix, datasheet, description, voltage, wattage, mpn }: IComponent = {}) {
    super({ reference: reference, value: value, footprint: footprint || "Inductor_SMD:L_1206_3216Metric", prefix: prefix || 'L', datasheet, description, voltage, wattage, mpn });
  }
}

export class Diode extends Component {
  constructor({ reference, value, footprint, prefix, datasheet, description, voltage, wattage, mpn }: IComponent = {}) {
    super({ reference: reference, value: value, footprint: footprint || "Diode_SMD:D_1206_3216Metric", prefix: prefix || 'D', datasheet, description, voltage, wattage, mpn });
  }
}

export class LED extends Component {
  constructor({ reference, value, footprint, prefix, datasheet, description, voltage, wattage, mpn }: IComponent = {}) {
    super({ reference: reference, value: value, footprint: footprint || "LED_SMD:LED_1206_3216Metric", prefix: prefix || 'D', datasheet, description, voltage, wattage, mpn });
  }
}

export class Resistor extends Component {
  Wattage?: string;
  constructor({ reference, value, footprint, prefix, datasheet, description, voltage, wattage, mpn }: IComponent = {}) {
    super({ value: value, footprint: footprint || "Resistor_SMD:R_1206_3216Metric", prefix: prefix || 'R', reference, datasheet, description, voltage, wattage, mpn });
    this.Wattage = wattage;
  }
}

export class Capacitor extends Component {
  Voltage?: string;
  constructor({ reference, value, footprint, prefix, datasheet, description, voltage, wattage, mpn }: IComponent = {}) {
    super({ reference: reference, value: value, footprint: footprint || "Capacitor_SMD:C_1206_3216Metric", prefix: prefix || 'C', datasheet, description, voltage, wattage, mpn });
    this.Voltage = voltage;
  }
}