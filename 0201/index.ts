import { Component } from '@typecad/typecad'

export class Inductor extends Component {
  constructor(reference: string, value: string){
    super("Device:L_Small", reference, value, "Inductor_SMD:L_0201_0603Metric");
  }
}

export class Diode extends Component {
  constructor(reference: string, value: string){
    super("Device:D_Small", reference, value, "Diode_SMD:D_0201_0603Metric");
  }
}

export class LED extends Component {
  constructor(reference: string, value: string){
    super("Device:LED_Small", reference, value, "LED_SMD:LED_0201_0603Metric");
  }
}

export class Resistor extends Component {
  Wattage?:string;
  constructor(reference: string, value: string, wattage?: string){
    super("Device:R_Small", reference, value, "Resistor_SMD:R_0201_0603Metric");
    this.Wattage = wattage;
  }
}

export class Capacitor extends Component {
  Voltage?:string;
  constructor(reference: string, value: string, voltage?: string){
    super("Device:C_Small", reference, value, "Capacitor_SMD:C_0201_0603Metric");
    this.Voltage = voltage;
  }
}