function testeString(string1, string2) {
    let result = 0
    for (let i = 0; i < string1.length; i++) {
        for (let j = 0; j < string2.length; j++) {
            if (string1[i] == string2[j]) {
                console.log(`stg1= ${string1[i]} stg2= ${string2[j]}`)
                result += 1
            }
        }
    }
    if (result == string1.length) {
        return true
    } else {
        return false
    }
}

console.log(testeString('abc', 'cbd'))