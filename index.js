// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(catname) {
    cats.push(catname);
}
function destructivelyPrependCat(catname) {
    cats.unshift(catname);
}
function destructivelyRemoveLastCat() {
    cats.pop();

}
function destructivelyRemoveFirstCat() {
    cats.shift();
    return cats;
}
function appendCat(catname){
    const newcats = [...cats, catname];
    return newcats;
}
function prependCat(catname){
    const newcats = [catname, ...cats]
    return newcats;
}

function removeLastCat(){
    const newcats = cats.slice(0, -1);
    return newcats;
}
function removeFirstCat(){
    const newcats = cats.slice(1);
    return newcats;
}