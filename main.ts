radio.setGroup(1)

input.onButtonPressed(Button.A,function(){
    radio.sendString("start")
    })
input.onButtonPressed(Button.B,function(){
    radio.sendString("stop")
})