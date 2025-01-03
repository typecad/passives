import { Component } from '@typecad/typecad'
import { R_Counter, Resistor_Initializer, Passive_Initializer, Capacitor_Initializer, L_Counter, D_Counter, C_Counter } from '../count';

export class Inductor extends Component {
  constructor({ reference, value, xy, footprint }: Passive_Initializer = {}) {
    reference = L_Counter.reference(reference);
    super({ symbol: "Device:L_Small", reference: reference, value: value, footprint: footprint || "Inductor_SMD:L_0201_0603Metric", xy: xy });
  }
}

export class Diode extends Component {
  constructor({ reference, value, xy, footprint }: Passive_Initializer = {}) {
    reference = D_Counter.reference(reference);
    super({ symbol: "Device:D_Small", reference: reference, value: value, footprint: footprint || "Diode_SMD:D_0201_0603Metric", xy: xy });
  }
}

export class LED extends Component {
  constructor({ reference, value, xy, footprint }: Passive_Initializer = {}) {
    reference = D_Counter.reference(reference);
    super({ symbol: "Device:LED_Small", reference: reference, value: value, footprint: footprint || "LED_SMD:LED_0201_0603Metric", xy: xy });
  }
}

export class Resistor extends Component {
  Wattage?: string;
  constructor({ reference, value, wattage, xy, footprint }: Resistor_Initializer = {}) {
    reference = R_Counter.reference(reference);

    super({ symbol: "Device:R_Small", reference: reference, value: value, footprint: footprint || "Resistor_SMD:R_0201_0603Metric", xy: xy });
    this.Wattage = wattage;
  }
}

export class Capacitor extends Component {
  Voltage?: string;
  constructor({ reference, value, voltage, xy, footprint }: Capacitor_Initializer = {}) {
    reference = C_Counter.reference(reference);
    super({ symbol: "Device:C_Small", reference: reference, value: value, footprint: footprint || "Capacitor_SMD:C_0201_0603Metric", xy: xy });
    this.Voltage = voltage;
  }
}
