// Auto-generated. Do not edit.


    declare const enum NumberFormat {
    Int8LE = 1,
    UInt8LE = 2,
    Int16LE = 3,
    UInt16LE = 4,
    Int32LE = 5,
    Int8BE = 6,
    UInt8BE = 7,
    Int16BE = 8,
    UInt16BE = 9,
    Int32BE = 10,

    UInt32LE = 11,
    UInt32BE = 12,
    Float32LE = 13,
    Float64LE = 14,
    Float32BE = 15,
    Float64BE = 16,
    }


    declare const enum PerfCounters {
    GC = 0,
    }


    declare const enum EventFlags {
    //%
    QueueIfBusy = 16,  // MESSAGE_BUS_LISTENER_QUEUE_IF_BUSY
    //%
    DropIfBusy = 32,  // MESSAGE_BUS_LISTENER_DROP_IF_BUSY
    //%
    Reentrant = 8,  // MESSAGE_BUS_LISTENER_REENTRANT
    }


    declare const enum AllLeds {
    //% block="LED_CHG"
    LED_CHG = 1,
    //% block="LED_STATUS"
    LED_STATUS = 2,
    //% block="LED_BLE"
    LED_ble = 3,
    //% block="LED_FLASH"
    LED_FLASH = 4,
    //% block="LED_DAPLINK"
    LED_DAPLINK = 5,
    //% block="LED_RGB"
    LED_RGB = 6,
    }


    declare const enum AllColors {
    //% block="Red" color=#ff0000
    Red = 0,
    //% block="Green" color=#00ff00
    Green = 1,
    //% block="Blue" color=#0000ff
    Blue = 2,
    //% block="Yellow" color=#ffff00
    Yellow = 3,
    //% block="Magenta" color=#ff00ff
    Magenta = 4,
    //% block="Cyan" color=#00ffff
    Cyan = 5,
    //% block="White" color=#ffffff
    White = 6,
    }
declare namespace leds {
}


    declare const enum AllButtons {
    //% block="Button A"
    BTN_A = 1,
    //% block="Button B"
    BTN_B = 2,
    //% block="Button Menu"
    BTN_MENU = 3,
    }
declare namespace buttons {
}


    declare const enum AllTones {
    //% block="C"
    C = 261,
    //% block="C♯ or D♭"
    C_SHARP_D_FLAT = 277,
    //% block="D"
    D = 294,
    //% block="D♯ or E♭"
    D_SHARP_E_FLAT = 311,
    //% block="E"
    E = 330,
    //% block="F"
    F = 349,
    //% block="F♯ or G♭"
    F_SHARP_G_FLAT = 370,
    //% block="G"
    G = 392,
    //% block="G♯ or A♭"
    G_SHARP_A_FLAT = 415,
    //% block="A"
    A = 440,
    //% block="A♯ or B♭"
    A_SHARP_B_FLAT = 466,
    //% block="B"
    B = 494,
    }
declare namespace music {
}

// Auto-generated. Do not edit. Really.
