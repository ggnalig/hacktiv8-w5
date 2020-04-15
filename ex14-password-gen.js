/* 
1. Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal yang diganti akan 
menjadi huruf setelah huruf vokal itu : 
(ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)
2. Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord
3. Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya
4. Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi 
*/


function changeVocals (str) {
    let kamus = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var hurufVokal = 'aiueoAIUEO'
    var hurufVokalBaru = ''
    var arrStr = []
    let strBaru = '';
    
    for (let i = 0; i < hurufVokal.length; i++) {
        for (let j = 0; j < kamus.length; j++) {
            if (hurufVokal[i] == kamus[j]) {
                hurufVokalBaru += kamus[j+1]
            }   
        }
    }
    
    for (let k = 0; k < str.length; k++) {
        arrStr.push(str[k]);
    }
    
    for (let a = 0; a < arrStr.length; a++) {
        for (let b = 0; b < hurufVokal.length; b++) {
            if (arrStr[a] == hurufVokal[b]) {
                arrStr[a] = hurufVokalBaru[b]
            }
        }
    }
    
    for (let c = 0; c < arrStr.length; c++) {
        strBaru += arrStr[c];
    }
    return strBaru;
}

function reverseWord (str) {
    let words = changeVocals(str);
    let strHasil = '';
    
    for (let i = words.length - 1; i >= 0 ; i--) {
        strHasil += words[i]
    }
    return strHasil;
}

function setLowerUpperCase (str) {
    let words = reverseWord(str);
    let strHasil = '';
    
    for (let i = 0; i < words.length; i++) {
        if (words[i] === words[i].toLowerCase()) {
            strHasil += words[i].toUpperCase();
        } else {
            strHasil += words[i].toLowerCase();
        }
        
    }
    return strHasil;
}

function removeSpaces (str) {
    let words = setLowerUpperCase(str);
    let arrTemp = []
    let strHasil = '';
    
    for (let i = 0; i < words.length; i++) {
        if (words[i] !== ' ') {
            strHasil += words[i];
        }
    }
    
    if (strHasil.length < 5) {
        return 'Minimal karakter yang diinputkan adalah 5 karakter';
    } else {
        return strHasil;   
    }
}

function passwordGenerator (name) {
    strHasil = removeSpaces(name)
    
    return strHasil;
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'