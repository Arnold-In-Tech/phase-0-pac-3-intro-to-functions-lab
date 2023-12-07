function shout(string) {
                        return string.toUpperCase();
                    }

console.log(shout("Hello!"))

function logShout(string){
    console.log(string.toUpperCase());
} 

function logWhisper(string){
    console.log(string.toLowerCase());
}

logShout("HeLLo")
logWhisper("GoodMorning")




function sayHiToGrandma(string){
    if (string === string.toUpperCase()){
        return "YES INDEED!"
    }
    else if (string === string.toLowerCase()){
        return "I can't hear you!"
    }
    else if (string === "I love you, Grandma."){
        return "I love you, too."
    }
    else{
        return "Invalid Greeting"
    }
}


console.log(sayHiToGrandma("I love you, Grandma."))
