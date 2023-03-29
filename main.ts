radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        kBit.motor(KBitMotorObs.LeftSide, KBitMotorDir.Forward, 40)
        kBit.motor(KBitMotorObs.RightSide, KBitMotorDir.Forward, 50)
        kBit.led(KBitColor.Green)
        kBit.ledBrightness(100)
    } else if (receivedNumber == 2) {
        kBit.motor(KBitMotorObs.LeftSide, KBitMotorDir.Back, 40)
        kBit.motor(KBitMotorObs.RightSide, KBitMotorDir.Back, 49)
        kBit.led(KBitColor.Blue)
    } else if (receivedNumber == 3) {
        kBit.carStop()
        kBit.led(KBitColor.Red)
    } else if (receivedNumber == 4) {
        kBit.run(KBitDir.TurnLeft, 30)
        kBit.led(KBitColor.White)
        basic.pause(200)
        kBit.led(KBitColor.Black)
        basic.pause(200)
    } else if (receivedNumber == 5) {
        kBit.run(KBitDir.TurnRight, 30)
        kBit.led(KBitColor.White)
        basic.pause(200)
        kBit.led(KBitColor.Black)
        basic.pause(200)
    } else {
        kBit.led(KBitColor.White)
    }
})
radio.setGroup(1)
