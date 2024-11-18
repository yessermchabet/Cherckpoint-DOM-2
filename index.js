function RandomColor(){
    var sadik = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"]

    var color = "#"

    for (var i = 0; i < 6; i++) {
    color = color + sadik[Math.floor(Math.random() * sadik.length)]
    }

    return color
}

var box = document.querySelector('#box')
var button = document.querySelector('button')

button.addEventListener('click',function(){
    box.style.backgroundColor = RandomColor()
})