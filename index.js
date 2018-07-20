function changeVolume(){
     var currentVolume= document.getElementById("screen").getAttribute("sound", "volume")
    //  How to parse to get *just the sound value. Currently getting everything about sound
    // var currentVolume= document.getElementById("box").getAttribute("sound","volume")
    //  console.log(currentVolume.volume)
     if (currentVolume.volume > 0){
        document.getElementById("screen").setAttribute("sound","volume","0")
     }else {
        document.getElementById("screen").setAttribute("sound","volume","10")
   }
   console.log("I was clicked")
}

function eject() {
    document.getElementById("cam").setAttribute('position', {x: 2199.967, y: 21.679, z: 27.062});
    document.getElementById("nasa-obj").setAttribute('position', {x: 2199.967, y: 21.679, z: 27.062});
    
    //make a new animation tag
//     const makeEjectAnimation = document.createElement('a-animation')
//     makeEjectAnimation.setAttribute("from", [2199.967, 20.55, 25.871].join(""))
//     makeEjectAnimation.setAttribute("to", [2199.967, 21.679].join(""))

    // while(document.getElementById("cam").position.y<21.7) {
    //     document.getElementById("cam").position.y+=.02
    // }
 }
 
 






