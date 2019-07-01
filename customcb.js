const students = [
    { name: "Javier Torres", school: "UABC", score: 95 },
    { name: "Enrique Alvarez", school: "TEC", score: 98 },
    { name: "Felipe Cortez", school: "TEC", score: 90 },
    { name: "Gerardo Hernandez", school: "UABC", score: 85 },
    { name: "Gabriel Martinez", school: "TEC", score: 88 },
    { name: "Jorge Sanchez", school: "UABC", score: 60 },
    { name: "Jaime Rodriguez", school: "TEC", score: 55 },
    { name: "Alberto Mendez", school: "UABC", score: 55 },
    { name: "Daniel Herrera", school: "TEC", score: 70 },
    { name: "Claudio Parra", school: "UABC", score: 75 }
];

function init(){
    /*
    processStudents(students, function(obj){
        if(obj.score > 60){
            console.log(obj.name + " passed.");
        }
    });
    determineTotal();
    */
   first();
}

const processStudents = function(data, callback){
    for(let i = 0; i < data.length; i++){
        if(data[i].school.toLowerCase() === "uabc"){
            if(typeof callback === "function"){
                callback(data[i]);
            }
        }
    }
}

const determineTotal = function(){
    let total = 0,
        count = 0;

        processStudents(students, function(obj){
            total = total + obj.score;
            count++;
        });

        console.log("total score: " + total + " - Total count: " + count);
}

//callback hell
function one() {
    setTimeout(function() {
      console.log('1. First thing setting up second thing');
      setTimeout(function() {
        console.log('2. Second thing setting up third thing');
        setTimeout(function() {
          console.log('3. Third thing setting up fourth thing');
          setTimeout(function() {
            console.log('4. Fourth thing');
          }, 2000);
        }, 2000);
      }, 2000);
    }, 2000);
  };

  function first(){
      setTimeout(function(){
        let value = Math.floor((Math.random() * 10) + 1);
        console.log("Value on first function: ", value);
        if(value <= 5){
            setTimeout(function(){
                console.log("value <= 5");
                value = Math.floor((Math.random() * 10) + 1);
                console.log("Value on second function: ", value);
            }, 2000)
        }else{
            setTimeout(function(){
                console.log("value > 5");
                value = Math.floor((Math.random() * 10) + 1);
                console.log("Value on second function: ", value);
            }, 2000)
        }
      }, 2000);
  }



window.onload = init;