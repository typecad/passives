# typeCAD Passives
This is a typeCAD package that includes simple access to many passive components. 

## Resistors, capacitors, LEDs, diodes fuses, and inductors
This package uses a named parameter-like interface. Any value can be included or left out. They can be access and modified later in code. 

```ts
import { Schematic } from '@typecad/typecad'
import { Resistor, LED, Capacitor, Diode, Inductor } from '@typecad/passives/0805'
import  *  as _0603 from '@typecad/passives/0805'

let typecad = new Schematic('passives');

let resistor = new Resistor({ reference: "R1", value: "4.7 kOhm" });
let capacitor = new Capacitor({value: "100 nF", voltage: "6 V"});
let diode = new Diode();
let inductor = new Inductor({ value: "2.2 uH"});
let fuse = new Fuse({ reference: "F1" });
let led = new _0603.LED();      // a 0603 instead of 0805

typecad.create(resistor, led, capacitor, inductor, diode, fuse);
```
Other sizes are:
- `@typecad/passives/0603`
- `@typecad/passives/0402`
- `@typecad/passives/0201` **no fuses*

### Auto designation
If `{ reference }` is not included, the component will be auto-numbered. If there are any name collisions, the new name will be suffixed with a `_1`, ie `R1_1`. 

#### Watch out☠️
If auto-designation is used, components have the potential to move/switch/replace each other in the PCB Editor. The first component created will be x1, then x2 and so on. If there is a component added above x1 in the code, that topmost component will now be x1 and the old x1 will now be x2. This will cause them to switch places when imported into the PCB Editor. Specifying the reference for every component avoids this. 

## Connectors
Connectors can be created similarly.

```ts
import { Connector } from '@typecad/passives/connector'

// create a 10-pin connector using the JST footprint passed in the last parameter
let j1 = new Connector({ number: 10, footprint:"Connector_JST:JST_SH_SM10B-SRSS-TB_1x10-1MP_P1.00mm_Horizontal" });
// create a 5-pin connector using a default 2.54 mm pin-header
let j2 = new Connector({ number: 5 });
```

## Power Flags
For KiCAD's ERC, the PWR_Flag is often needed. 

```ts
import { PWR_Flag } from '@typecad/passives/flag'
let pflag = new PWR_Flag();
let pflag = new PWR_Flag();
...
// connect pflag to the power net
typecad.net('vcc', pflag.pin(1));

// and ground power flag to the ground net
typecad.net('gnd', gflag.pin(1));
...
```