import { Component } from '@typecad/typecad'
import { R_Counter, Resistor_Initializer, Passive_Initializer, Capacitor_Initializer, F_Counter, I_Counter, D_Counter, C_Counter } from '../count';

export class Inductor extends Component {
  constructor({ reference, value, xy }: Passive_Initializer = {}) {
    reference = I_Counter.reference(reference);
    super("Device:L_Small", reference, value, "Inductor_SMD:L_0201_0603Metric", xy);
  }
}

export class Diode extends Component {
  constructor({ reference, value, xy }: Passive_Initializer = {}) {
    reference = D_Counter.reference(reference);
    super("Device:D_Small", reference, value, "Diode_SMD:D_0201_0603Metric", xy);
  }
}

export class LED extends Component {
  constructor({ reference, value, xy }: Passive_Initializer = {}) {
    reference = D_Counter.reference(reference);
    super("Device:LED_Small", reference, value, "LED_SMD:LED_0201_0603Metric", xy);
  }
}

export class Resistor extends Component {
  Wattage?: string;
  constructor({ reference, value, wattage, xy }: Resistor_Initializer = {}) {
    reference = R_Counter.reference(reference);

    super("Device:R_Small", reference, value, "Resistor_SMD:R_0201_0603Metric", xy);
    this.Wattage = wattage;
  }
}

export class Capacitor extends Component {
  Voltage?: string;
  constructor({ reference, value, voltage, xy }: Capacitor_Initializer = {}) {
    reference = C_Counter.reference(reference);
    super("Device:C_Small", reference, value, "Capacitor_SMD:C_0201_0603Metric", xy);
    this.Voltage = voltage;
  }
}
