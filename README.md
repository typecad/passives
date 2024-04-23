# typeCAD Passives
This is a typeCAD package that includes simple access to many passive components. 

## Resistors, capacitors, LEDs, diodes and inductors
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

## Connectors
Connectors can be created similarly.

```ts
import { Connector } from '@typecad/passives/connector'

// creates a 10-pin connector using the JST footprint passed in the last parameter
let j1 = new Connector('J1', 10, "Connector_JST:JST_SH_SM10B-SRSS-TB_1x10-1MP_P1.00mm_Horizontal");
// creates a 5-pin connector using a default 2.54 mm pin-header
let j2 = new Connector('J2', 5);
```

## Power Flags
For KiCAD's ERC, the PWR_Flag is often needed. 

```ts
import { PWR_Flag } from '@typecad/passives/flag'
let pflag = new PWR_Flag(1);
let pflag = new PWR_Flag(2);
...
// connect pflag to the power net
typecad.net('vcc', pflag.pin(1));

// and ground power flag to the ground net
typecad.net('gnd', gflag.pin(1));
...
```
The `1` and `2` parameters are simply a count, as long as they aren't the same they can be any number. 