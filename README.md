# typeCAD Passives
This is a typeCAD package that includes simple access to most passive components. 

For 0805 passives, import `@typecad/passives/0805`
```ts
import { Schematic } from '@typecad/typecad'
import { Resistor, LED, Capacitor, Diode, Inductor } from '@typecad/passives/0805'

let schematic = new Schematic('passives');

let resistor = new Resistor("R1", "1 kOhm", "1/4 W");
let capacitor = new Capacitor("C1", "0.1 uF", "16 V");
let diode = new Diode("D1", "1N4048");
let inductor = new Inductor("L1", "2.2 uH");
let led = new LED("LED1", "blue");

schematic.create(resistor, led, capacitor, inductor, diode);
schematic.netlist();
```
Other options are:
- `@typecad/passives/0603`
- `@typecad/passives/0402`
- `@typecad/passives/0201`