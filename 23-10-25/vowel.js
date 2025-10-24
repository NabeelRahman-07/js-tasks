function replaceVowels(str1,str2){
    let vowel="aeiouAEIOU"
    let newstr=str1.split(" ");
    let result="";
    for(let i=0;i<newstr.length;i++){
        let word=newstr[i];
        if(word.startsWith(str2)){
            for(let k=0;k<word.length;k++){
                if(vowel.includes(word[k])){
                    word=word.replace(word[k],"*")
                }
            }
            result+=word+" ";
        }
    }
    console.log(result);
}
replaceVowels("apple and apricot are amazing", "a");
replaceVowels("every elephant enjoys eating", "e");
replaceVowels("Bring back big blue balloons", "b")  ;

