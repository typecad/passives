import { Component } from '@typecad/typecad'

interface IMountingHole {
    reference?: string,
    footprint?: string,
    uuid?: string,
    size?: 'M2' | 'M2.5' | 'M3' | 'M4' | 'M5' | 'M6' | 'M8'
}

const sizeToFootprint: Record<NonNullable<IMountingHole['size']>, string> = {
    'M2': 'MountingHole:MountingHole_2.2mm_M2',
    'M2.5': 'MountingHole:MountingHole_2.7mm_M2.5',
    'M3': 'MountingHole:MountingHole_3.2mm_M3',
    'M4': 'MountingHole:MountingHole_4.3mm_M4',
    'M5': 'MountingHole:MountingHole_5.3mm_M5',
    'M6': 'MountingHole:MountingHole_6.4mm_M6',
    'M8': 'MountingHole:MountingHole_8.4mm_M8'
}

export class MountingHole extends Component {
    constructor({ reference, footprint, size = 'M2', uuid }: IMountingHole = { }) {
        const selectedFootprint = footprint || sizeToFootprint[size];
        super({ reference, footprint: selectedFootprint, prefix: 'MH', uuid });
    }
}