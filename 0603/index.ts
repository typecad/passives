import { Component } from '@typecad/typecad'

export class Fuse extends Component {
  constructor(reference: string, value: string){
    super("Device:Fuse_Small", reference, value, "Fuse:Fuse_0603_1608Metric");
  }
}

export class Inductor extends Component {
  constructor(reference: string, value: string){
    super("Device:L_Small", reference, value, "Inductor_SMD:L_0603_1608Metric");
  }
}

export class Diode extends Component {
  constructor(reference: string, value: string){
    super("Device:D_Small", reference, value, "Diode_SMD:D_0603_1608Metric");
  }
}

export class LED extends Component {
  constructor(reference: string, value: string){
    super("Device:LED_Small", reference, value, "LED_SMD:LED_0603_1608Metric");
  }
}

export class Resistor extends Component {
  Wattage?:string;
  constructor(reference: string, value: string, wattage?: string){
    super("Device:R_Small", reference, value, "Resistor_SMD:R_0603_1608Metric");
    this.Wattage = wattage;
  }
}

export class Capacitor extends Component {
  Voltage?:string;
  constructor(reference: string, value: string, voltage?: string){
    super("Device:C_Small", reference, value, "Capacitor_SMD:C_0603_1608Metric");
    this.Voltage = voltage;
  }
}