//Exercise 4
// Switch Statement
let lightBulbStatus = "On";
let result;
//Start coding here

switch (lightBulbStatus){
    case "On":
        result = "Light bulb is On.";
        break;
    case "off":
        result = "Light bulb is off.";
        break;
    default:
        result = "Please choose the correct input (On/Off/Broken)";
}

console.log(result);