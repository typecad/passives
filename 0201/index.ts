import { Component, IComponent } from '@typecad/typecad'

export class Inductor extends Component {
  constructor({ reference, value, footprint, prefix, datasheet, description, voltage, wattage, mpn, simulation }: IComponent = {}) {
    super({ reference: reference, value: value, footprint: footprint || "Inductor_SMD:L_0201_0603Metric", prefix: prefix || 'L', datasheet, description, voltage, wattage, mpn, simulation });
  }
}

export class Diode extends Component {
  constructor({ reference, value, footprint, prefix, datasheet, description, voltage, wattage, mpn, simulation }: IComponent = {}) {
    super({ reference: reference, value: value, footprint: footprint || "Diode_SMD:D_0201_0603Metric", prefix: prefix || 'D', datasheet, description, voltage, wattage, mpn, simulation });
  }
}

export class LED extends Component {
  constructor({ reference, value, footprint, prefix, datasheet, description, voltage, wattage, mpn, simulation }: IComponent = {}) {
    super({ reference: reference, value: value, footprint: footprint || "LED_SMD:LED_0201_0603Metric", prefix: prefix || 'D', datasheet, description, voltage, wattage, mpn, simulation });
  }
}

export class Resistor extends Component {
  Wattage?: string;
  constructor({ reference, value, footprint, prefix, datasheet, description, voltage, wattage, mpn, simulation }: IComponent = {}) {
    super({ value: value, footprint: footprint || "Resistor_SMD:R_0201_0603Metric", prefix: prefix || 'R', reference, datasheet, description, voltage, wattage, mpn, simulation });
    this.Wattage = wattage;
  }
}

export class Capacitor extends Component {
  Voltage?: string;
  constructor({ reference, value, footprint, prefix, datasheet, description, voltage, wattage, mpn, simulation }: IComponent = {}) {
    super({ reference: reference, value: value, footprint: footprint || "Capacitor_SMD:C_0201_0603Metric", prefix: prefix || 'C', datasheet, description, voltage, wattage, mpn, simulation });
    this.Voltage = voltage;
  }
}