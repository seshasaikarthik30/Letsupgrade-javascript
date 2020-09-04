// program to search for a particular character in a  string

let data = prompt("")
console.log(data[2]);


// program to convert minutes to seconds


let k = prompt("Minutes: ");
console.log("seconds is " + k * 60);



// program to search for a element in a array of strings
let data1 = ["Google", "Yahoo", "Gmail", "Microsoft", "letsupgrade"]
console.log(data1[3]);


// program to display only elements constaining 'a' in them from a array
let x = prompt("enter size");
let a = new Array();
for (var i = 0; i < x; i++) {
    a[i] = prompt("enter the string");
}
for (i = 0; i < x; i++) {

    for (var j = 0; j < (a[i].length); j++) {
        if (a[i][j] == 'a') {
            console.log(a[i]);
            break;
        }
    }

}

//print an array in reverse order
let a1 = ["Google", "Yahoo", "Gmail", "Microsoft", "letsupgrade"]
console.log(a1.reverse());