# typeCAD Passives
This is a typeCAD package that includes simple access to many passive components.

## Resistors, capacitors, LEDs, diodes, fuses, and inductors
This package uses an options interface. All options are optional. They can also be accessed and modified later in code.

### Component Options and Usage

#### Resistor
- **Options**: `reference`, `value`, `wattage`, `datasheet`, `description`, `voltage`, `mpn`, `simulation`, `uuid`, `pcb`
- **Usage Example**:
  ```ts
  let resistor = new Resistor({ reference: "R1", value: "4.7 kOhm", wattage: "0.25 W", datasheet: "link/to/datasheet", description: "High precision resistor", voltage: "100 V", mpn: "123456", simulation: "simulation/model", uuid: "unique-id", pcb: "pcb/layout" });
  ```

#### Capacitor
- **Options**: `reference`, `value`, `voltage`, `datasheet`, `description`, `mpn`, `simulation`, `uuid`, `pcb`
- **Usage Example**:
  ```ts
  let capacitor = new Capacitor({ reference: "C1", value: "100 nF", voltage: "6 V", datasheet: "link/to/datasheet", description: "High voltage capacitor", mpn: "123456", simulation: "simulation/model", uuid: "unique-id", pcb: "pcb/layout" });
  ```

#### Diode
- **Options**: `reference`, `datasheet`, `description`, `voltage`, `mpn`, `simulation`, `uuid`, `pcb`
- **Usage Example**:
  ```ts
  let diode = new Diode({ reference: "D1", datasheet: "link/to/datasheet", description: "High efficiency diode", voltage: "100 V", mpn: "123456", simulation: "simulation/model", uuid: "unique-id", pcb: "pcb/layout" });
  ```

#### Inductor
- **Options**: `reference`, `value`, `datasheet`, `description`, `mpn`, `simulation`, `uuid`, `pcb`
- **Usage Example**:
  ```ts
  let inductor = new Inductor({ reference: "L1", value: "2.2 uH", datasheet: "link/to/datasheet", description: "High inductance inductor", mpn: "123456", simulation: "simulation/model", uuid: "unique-id", pcb: "pcb/layout" });
  ```

#### Fuse
- **Options**: `reference`, `datasheet`, `description`, `voltage`, `mpn`, `simulation`, `uuid`, `pcb`
- **Usage Example**:
  ```ts
  let fuse = new Fuse({ reference: "F1", datasheet: "link/to/datasheet", description: "High current fuse", voltage: "100 V", mpn: "123456", simulation: "simulation/model", uuid: "unique-id", pcb: "pcb/layout" });
  ```

#### LED
- **Options**: `reference`, `datasheet`, `description`, `voltage`, `mpn`, `simulation`, `uuid`, `pcb`
- **Usage Example**:
  ```ts
  let led = new LED({ reference: "D2", datasheet: "link/to/datasheet", description: "High brightness LED", voltage: "100 V", mpn: "123456", simulation: "simulation/model", uuid: "unique-id", pcb: "pcb/layout" });
  ```

### Example Usage
```ts
import { Schematic } from '@typecad/typecad'
import { Resistor, LED, Capacitor, Diode, Inductor, Fuse } from '@typecad/passives/0805'
import  *  as _0603 from '@typecad/passives/0603'

let typecad = new Schematic('passives');

let resistor = new Resistor({ reference: "R1", value: "4.7 kOhm" });
let capacitor = new Capacitor({value: "100 nF", voltage: "6 V"});
let diode = new Diode();
let inductor = new Inductor({ value: "2.2 uH"});
let fuse = new Fuse({ reference: "F1" });
let led = new _0603.LED();      // a 0603 instead of 0805

typecad.create(resistor, led, capacitor, inductor, diode, fuse);
```
All of the sizes are:
- `@typecad/passives/1210`
- `@typecad/passives/1206`
- `@typecad/passives/0805`
- `@typecad/passives/0603`
- `@typecad/passives/0402`
- `@typecad/passives/0201` **no fuses**

### Auto designation
If `{ reference }` is not included, the component will be auto-numbered. If there are any name collisions, the new name will be suffixed with a `_1`, ie `R1_1`.

## Connectors
Connectors can be created similarly.

```ts
import { Connector } from '@typecad/passives/connector'

// create a 10-pin connector using the JST footprint passed in the last parameter
let j1 = new Connector({ number: 10, footprint:"Connector_JST:JST_SH_SM10B-SRSS-TB_1x10-1MP_P1.00mm_Horizontal" });
// create a 5-pin connector using a default 2.54 mm pin-header
let j2 = new Connector({ number: 5 });
```

## Testpoints
Testpoints can be created:

```ts
import { Testpoint } from '@typecad/passives/testpoint';
let tp = new Testpoint();
```
Will create a testpoint with a default footprint of `TestPoint:TestPoint_Pad_D1.0mm`.

Specific footprints can be chosen:

```ts
let tp = new Testpoint({ footprint: 'TestPoint:TestPoint_Keystone_5015_Micro_Mini'});
```

Connect a testpoint using `tp.pin(1)` in the `::net()` method.
