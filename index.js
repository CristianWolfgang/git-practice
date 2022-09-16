'use-strict';
function message(type, styles){
    this.type=type;
    this.styles= "color:white;"+styles;
}
message.prototype.log = function(message){
    console.log(`%c ${this.type}: ${message} %c`, `color:white;font-size:2rem;`+this.styles);
}
const errorMessage = new message("Error", "background-color:red");
errorMessage.log("Not logged user");
