#include "pxt.h"

#if defined(NRF52_SERIES) || defined(PICO_BOARD)
#define _estack __StackTop
#endif
extern uint32_t _estack;

enum EventFlags {
    //%
    QueueIfBusy = MESSAGE_BUS_LISTENER_QUEUE_IF_BUSY,
    //%
    DropIfBusy = MESSAGE_BUS_LISTENER_DROP_IF_BUSY,
    //%
    Reentrant = MESSAGE_BUS_LISTENER_REENTRANT
};


namespace control {

/**
 * Gets the number of milliseconds elapsed since power on.
 */
//% help=control/millis weight=50
//% blockId=control_running_time block="millis (ms)"
int millis() {
    return system_timer_current_time();
}

/**
 * Gets current time in microseconds. Overflows every ~18 minutes.
 */
//%
int micros() {
    return system_timer_current_time_us() & 0x3fffffff;
}

/**
 * Schedules code that run in the background.
 */
//% help=control/in-background blockAllowMultiple=1 afterOnStart=true
//% blockId="control_in_background" block="run in background" blockGap=8
void inBackground(Action a) {
    runInParallel(a);
}

/**
 * Registers an event handler.
 */
//% weight=20 blockGap=8 blockId="control_on_event" block="on event|from
//% src=control_event_source_id|with value %value=control_event_value_id" % help=control/on-event %
//% blockExternalInputs=1
void onEvent(int src, int value, Action handler, int flags = 0) {
    if (!flags)
        flags = ::EventFlags::QueueIfBusy;
    registerWithDal(src, value, handler, (int)flags);
}

/**
 * Blocks the calling thread until the specified event is raised.
 */
//% help=control/wait-for-event async
//% blockId=control_wait_for_event block="wait for event|from %src|with value %value"
void waitForEvent(int src, int value) {
    pxt::waitForEvent(src, value);
}

/**
 * Announce that an event happened to registered handlers.
 * @param src ID of the MicroBit Component that generated the event
 * @param value Component specific code indicating the cause of the event.
 */
//% weight=21 blockGap=12 blockId="control_raise_event"
//% help=control/raise-event
//% block="raise event|from %src|with value %value" blockExternalInputs=1
void raiseEvent(int src, int value) {
    Event evt(src, value);
}

/**
 * Gets the value of the last event executed on the bus
 */
//% blockId=control_event_value" block="event value"
//% help=control/event-value
//% weight=18
int eventValue() {
    return pxt::lastEvent.value;
}

/**
 * Gets the timestamp of the last event executed on the bus
 */
//% blockId=control_event_timestamp" block="event timestamp"
//% help=control/event-timestamp
//% weight=19 blockGap=8
int eventTimestamp() {
    return pxt::lastEvent.timestamp;
}

/**
 * Determine the version of system software currently running.
 */
//% blockId="control_device_dal_version" block="device dal version"
//% help=control/device-dal-version
String deviceDalVersion() {
    return mkString(device.getVersion());
}

/**
 * Allocates the next user notification event
 */
//% help=control/allocate-notify-event
int allocateNotifyEvent() {
    return ::allocateNotifyEvent();
}

/**
 *
 */
//%
void __log(int priority, String text) {
    if (NULL == text)
        return;
    pxt::sendSerial(text->getUTF8Data(), text->getUTF8Size());
}

/** Write a message to DMESG debugging buffer. */
//%
void dmesg(String s) {
    DMESG("# %s", s->getUTF8Data());
}

/** Write a message and value (pointer) to DMESG debugging buffer. */
//%
void dmesgPtr(String str, Object_ ptr) {
    DMESG("# %s: %p", str->getUTF8Data(), ptr);
}

//%
uint32_t _ramSize() {
    return (uint32_t)&_estack & 0x1fffffff;
}

} // namespace control