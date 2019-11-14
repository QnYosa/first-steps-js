let diez = "#";
let space = " ";
let pyramid = "";
let vide = 0
for ( number = prompt ("Nombre d'étages ?") ; number-1 >= 0 ; number--, vide ++ ){
    pyramid =  space.repeat(number*2) + diez + diez.repeat(vide);
    console.log(pyramid)
}