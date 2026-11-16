//Exercise 2
let lightBulbStatus = "On";
let result;

lightBulbStatus = "Broken";


if(lightBulbStatus === "On"){
    result = "Light bulb is On.";
}else if (lightBulbStatus === "Broken"){
    result = "Light bulb is Broken.";
}else result = "Please choose the correct input (On/Off/Broken)";

console.log(result);