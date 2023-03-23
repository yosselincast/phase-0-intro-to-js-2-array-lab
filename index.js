// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    return cats.push(name)
}
function destructivelyPrependCat(name){
    return cats.unshift(name);
}
function destructivelyRemoveLastCat(){
    return cats.pop();
}
function destructivelyRemoveFirstCat(){
    return cats.shift();
}
function appendCat(name){
    const newCats = [...cats];
    newCats.push(name);
    return newCats;
}
function prependCat(name){
    let newCats = [...cats];
    newCats.unshift(name);
    return newCats;
}
function removeLastCat(){
    let newCats = [...cats];
    newCats.pop();
    return newCats;
}
function removeFirstCat(){
    let newCats = [...cats];
    newCats.shift();
    return newCats;
}