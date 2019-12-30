var five = require("johnny-five"),
  board, button;

  var contador=0;

board = new five.Board();


board.on("ready", function() {

    // Create a new `button` hardware instance.
    // This example allows the button module to
    // create a completely default instance
    button = new five.Button(2);
    luces= new five.Led(13)
  
    // Inject the `button` hardware into
    // the Repl instance's context;
    // allows direct command line access
    // board.repl.inject({
    //   button: button
    // });



// Eventos del boton

button.on("down", function() {
    console.log("down");
   
    contador++
    console.log(contador);
    if (contador==2) {
        
        luces.off()
        contador=0;
    }

    if(contador==1){
        luces.on()
    }
       
  });

  // "hold" the button is pressed for specified time.
  //        defaults to 500ms (1/2 second)
  //        set
  button.on("hold", function() {
    
    console.log("hold");
  });

  // "up" the button is released
  button.on("up", function() {
    
    console.log("up");
 
  });
});