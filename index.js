// Write your solution here!
var cats =["milo", "otis","Garfield"]

function destructivelyAppendcat(name){
    cats.push(name)
    return cats;
}
function appendCat(name){
    var newArray = []
    var cats = cats.caats(newArray);
    cats.push(name)
    return cats;
}

function destructivelyAppendcat(name){
    cats.push(name);
    return cats;
}
function destructivelyPrependcat(name){
    cats.unshift(name);
}
function destructivelyRemoveLastCat(){
    cats.pop();
    return cats;
}
function destructivelyRemoveFirstCat(){
    cats.shift()
    return cats;
}

function appendCat(name){
    var name_1= [...cats,name];
    return name_1;
}

function prependcat(name){
    var name_2=[name, ...cats];
    return name_2;
}
function removeLastCat(){
    var MiniFinalArrayOfpets= cats.slice(0,cats.lenth)
    return MiniFinalArrayOfpets;
}

function removeFirstCats(){
    var NewArrayOfCats= cats.slice(1)
    return NewArrayOfCats
}
