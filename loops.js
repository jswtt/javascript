'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    var vow="";
    var con="";
    for(var i=0;i<s.length;i++){
        var c=s.charAt(i);
        if(c=="a"||c=="e"||c=="i"||c=="o"||c=="u"){
            vow+=c;
        }else{
            con+=c;
        }
    }
    var sorted=vow+con;
    for(var i=0;i<s.length;i++){
        console.log(sorted.charAt(i));
       
    }
}


function main() {
    const s = readLine();
    
    vowelsAndConsonants(s);
}