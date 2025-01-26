import { Component, IComponent } from '@typecad/typecad'

export class Fuse extends Component {
  constructor({ reference, value, footprint, prefix, datasheet, description, voltage, wattage, mpn }: IComponent = {}) {
    super({ reference: reference, value: value, footprint: footprint || "Fuse:Fuse_0805_2012Metric", prefix: prefix || 'F', datasheet, description, voltage, wattage, mpn });
  }
}

export class Inductor extends Component {
  constructor({ reference, value, footprint, prefix, datasheet, description, voltage, wattage, mpn }: IComponent = {}) {
    super({ reference: reference, value: value, footprint: footprint || "Inductor_SMD:L_0805_2012Metric", prefix: prefix || 'L', datasheet, description, voltage, wattage, mpn });
  }
}

export class Diode extends Component {
  constructor({ reference, value, footprint, prefix, datasheet, description, voltage, wattage, mpn }: IComponent = {}) {
    super({ reference: reference, value: value, footprint: footprint || "Diode_SMD:D_0805_2012Metric", prefix: prefix || 'D', datasheet, description, voltage, wattage, mpn });
  }
}

export class LED extends Component {
  constructor({ reference, value, footprint, prefix, datasheet, description, voltage, wattage, mpn }: IComponent = {}) {
    super({ reference: reference, value: value, footprint: footprint || "LED_SMD:LED_0805_2012Metric", prefix: prefix || 'D', datasheet, description, voltage, wattage, mpn });
  }
}

export class Resistor extends Component {
  Wattage?: string;
  constructor({ reference, value, footprint, prefix, datasheet, description, voltage, wattage, mpn }: IComponent = {}) {
    super({ value: value, footprint: footprint || "Resistor_SMD:R_0805_2012Metric", prefix: prefix || 'R', reference, datasheet, description, voltage, wattage, mpn });
    this.Wattage = wattage;
  }
}

export class Capacitor extends Component {
  Voltage?: string;
  constructor({ reference, value, footprint, prefix, datasheet, description, voltage, wattage, mpn }: IComponent = {}) {
    super({ reference: reference, value: value, footprint: footprint || "Capacitor_SMD:C_0805_2012Metric", prefix: prefix || 'C', datasheet, description, voltage, wattage, mpn });
    this.Voltage = voltage;
  }
}