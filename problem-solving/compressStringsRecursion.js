function compressString(str,prev, index, result, previous) {
    
    if(index > str.length){
        return result;
    }
    
    if(previous==="") {
        previous = str[index];
    }
    
    if(previous!==str[index]){
        result += str[index-1]+ "" + Number(index-prev);
        prev=index;
        previous=str[index];
    }
    
    return compressString(str, prev, index + 1, result, previous);
}

let str="abcdaf";
let result="";
let previous="";
console.log(compressString(str, 0, 0, result, previous))


/*

compressString -> 
*/

// compressString("aaabccdddda"); // Output: "a3b1c2d4a1"