# About

## @description A Blocks / Javascript / Python code editor for the STeaMi, a pocket-size computer with OLED display, sensors and Bluetooth.

The **STeaMi MakeCode editor** allows to program [STeaMi programming board](https://steami.cc). The STeaMi was made possible thaks to many [partners](https://steami.cc#partners) and fundings[fundings](https://steami.cc#fundings).

The STeaMi provides an easy and fun introduction to programming and making – switch on, program it to do something fun – wear it, customize it.
Just like micro:bit, the STeaMi can be connected to and interact with sensors, displays, and other devices.

-   [Read the docs](/docs)

## [Hardware: The Device](/device)

The STeaMi is packaged with sensors, radio, microphone, speaker and other goodies. Learn about the [hardware components](/device) of the STeaMi to make the most of it!

## ~ hint

**Looking to buy a micro:bit?** See the [list of resellers](https://steami.cc#resellers).

## Programming: [Blocks](/blocks), [JavaScript](/javascript) or [Python](/python)

You can program the @boardname@ using [Blocks](/blocks), [JavaScript](/javascript) or [Python](/python) in your web browser.

```blocks
forever(function() {
    pins.LED.digitalWrite(true)
    pause(500)
    pins.LED.digitalWrite(false)
    pause(500)
})
```

```typescript
forever(function () {
    pins.LED.digitalWrite(true);
    pause(500);
    pins.LED.digitalWrite(false);
    pause(500);
});
```

The editor work in [most modern browsers](/browsers), work [offline](/offline) once loaded and do not require any installation.

## Compile and Flash: Your Program!

When you have your code ready, you connect your STeaMi to a computer via a USB cable, so it appears as a mounted drive (named STEAMI).

Compilation to ARM thumb machine code from [Blocks](/blocks) or [JavaScript](/javascript) happens in the browser. You save the ARM binary
program to a file, which you then copy to the STeaMi drive, which flashes the board with the new program.

## Simulator: Test Your Code

You can run your code using the STeaMi simulator, all within the confines of a web browser.

```sim
forever(function() {
    pins.LED.digitalWrite(true)
    pause(500)
    pins.LED.digitalWrite(false)
    pause(500)
})
```

## Learn!

We have tons of [projects](/projects), [examples](/examples) and [courses](/courses) to get your started!

## C++ Runtime

The [C++ STeaMi runtime](https://github.com/letssteam/codal-stm32), created by [Laboratoire d'Aix-périmentation et de Bidouille](https://labaixbidouille.com/), provides access to the hardware functions of the microcontroller STM32WB55,
as well as a set of helper functions (such as displaying a number/image/string on the OLED screen).

The [STeaMi library](/reference) mirrors the functions of the C++ library. When code is compiled to ARM machine code, the calls to JavaScript functions are replaced with calls to the corresponding C++ functions.

## [Command Line Tools](/cli)

Looking to use @homeurl@ in your favorite editor? Install the [command line tools](/cli) and get rolling!

## [Extensions](/extensions)

Create, edit and distribute your own blocks and JavaScript using [extensions](/extensions). Extensions are hosted on GitHub and may be written using C++, JavaScript and/or ARM thumb.

## [Open Source](/open-source)

The code for the STeaMi is [open source](/open-source) on GitHub. Contributors are welcome!

## Forum and chat

-   Post a question on the [MakeCode Forum](https://forum.makecode.com)
-   Chat with other users on the [MakeCode Discord](https://aka.ms/makecodecommunity)
