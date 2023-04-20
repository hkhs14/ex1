radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber >= 甩子) {
        basic.showIcon(IconNames.Sad)
    }
})
input.onGesture(Gesture.Shake, function () {
    甩子 = randint(1, 6)
    basic.showNumber(甩子)
    radio.sendNumber(甩子)
})
let 甩子 = 0
radio.setGroup(103)
