function validAnagram(str1, str2){
    if(str1.length !== str2.length){
        return false;
    }

    const counter = {};

    for(let letter of str1) {
        counter[letter] ? counter[letter] += 1 : counter[letter] = 1;
    }

    for(let letter of str2){
        if(!counter[letter]){
            return false;
        } else {
            counter[letter] -= 1;
        }
    }

    return true;
}