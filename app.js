function init(){
    example1();
}

/*
    A callback function is a function passed into another function as an argument, which is then invoked inside
    the outer function to complete some kind of routine or action.
    here's a quickly example
*/

function example1(){
    
    function greeting(name){
        alert("Hello " + name);
    }

    function processUserInput(callback){
        var name = prompt("Please enter your name");
        callback(name);
    }

    processUserInput(greeting);
}



window.onload = init;