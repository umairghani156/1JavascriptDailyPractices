var add= prompt('What is your name?');
var add="Nasir";
var add='Habib';
if (add.toLowerCase()=="umair") {
    alert("Correct "+"you are "+add)
}else if(add=="Habib"){
    alert("Correct "+"you are "+add)
}
else{
    alert("You're not selected for this Job")
}
var bonus = prompt("How much bonus did you get")
if (+bonus >= 50000) {
    document.write("I will buy an iPhone")
} else if(+bonus >= 15000) {
    document.write(" I will give some of them on charity")
} else if (+bonus >= 10000) {
    document.write("I will deposit them to my parent")
} else {
    document.write("I will still be happy")
}

