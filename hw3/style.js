$(document).ready(() => {
  cloud1_left()
  cloud2_right()
  cloud3_right()
  cloud4_left()
  sun_hide()
  train_go()
  train_circle()
})

let cloud1_left = () => {
  $("#cloud1" ).animate({
    opacity: 0.7,
    left: "-=300px",
  }, 10000, () => {
    cloud1_right()  
  })  
}  
let cloud1_right = () => {
  $( "#cloud1" ).animate({
    opacity: 1,
    left: "+=300px",
  }, 10000, () => {
    cloud1_left()  
  })  
}  

let cloud2_right = () => {
  $( "#cloud2" ).animate({
    opacity: 0.8,
    left: "+=200px",
  }, 17000, () => {
    cloud2_left()  
  })  
}  

let cloud2_left = () => {
  $( "#cloud2" ).animate({
    opacity: 1,
    left: "-=200px",
  }, 17000, () => {
    cloud2_right()  
  })  
}  

let cloud3_left = () => {
  $( "#cloud3" ).animate({
    opacity: 1,
    left: "-=230px",
  }, 20000, () => {
    cloud3_right()  
  })  
}  

let cloud3_right = () => {
  $( "#cloud3" ).animate({
    opacity: 0.5,
    left: "+=230px",
  }, 20000, () => {
    cloud3_left()  
  })  
}  

let cloud4_left = () => {
  $( "#cloud4" ).animate({
    opacity: 1,
    left: "-=550px",
  }, 15000, () => {
    cloud4_right()  
  })  
}  

let cloud4_right = () => {
  $( "#cloud4" ).animate({
    opacity: 0.9,
    left: "+=550px",
  }, 15000, () => {
    cloud4_left()  
  })  
} 

let fade_speed = 2000
let sun_hide = () =>{
  $( "#sun1" ).fadeTo(fade_speed, 0, () => {
    $( "#sun2" ).fadeTo(fade_speed, 0, () => {
        sun_show()
    })
  })
}

let sun_show = () =>{
  $( "#sun2" ).fadeTo(fade_speed, 1, () => {
    $( "#sun1" ).fadeTo(fade_speed, 1, () => {
      sun_hide()
    })
  })
} 


let train_go = () => {
  $(".flex").animate({
    left: "-=1550px",
  }, 40000, () => {
    train_go()    
  })
}

let train_circle = () => {
  setTimeout(() => { train1_circle()}, 50000)
  setTimeout(() => { train2_circle()}, 90000)
  setTimeout(() => { train3_circle()}, 130000)
}

let train1_circle = () => {
    $("#train1").hide()
    $("#train1").animate({
      left: "+=4650px",
    }, 1, () => {
      $("#train1").show()
    })
  setInterval(() => { 
    $("#train1").hide()
    $("#train1").animate({
      left: "+=4650px",
    }, 1, () => {
      $("#train1").show()
    })
  }, 120000)  
}

let train2_circle = () => {
    $("#train2").hide()
    $("#train2").animate({
      left: "+=4650px",
    }, 1, () => {
      $("#train2").show()
    })
  setInterval(() => { 
    $("#train2").hide()
    $("#train2").animate({
      left: "+=4650px",
    }, 1, () => {
      $("#train2").show()
    })
  }, 120000)  
}

let train3_circle = () => {
    $("#train3").hide()
    $("#train3").animate({
      left: "+=4650px",
    }, 1, () => {
      $("#train3").show()
    })
  setInterval(() => { 
    $("#train3").hide()
    $("#train3").animate({
      left: "+=4650px",
    }, 1, () => {
      $("#train3").show()
    })
  }, 120000)  
}
