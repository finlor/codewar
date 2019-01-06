function duplicateEncode(word){
    // ...
    let TriWord=word;
    TriWord.sort();
    compteur=[];
    list=[];

    for (i=0; i<word.length; i++)
    {
        if (TriWord(i+1)===TriWord(i)) {
            compteur[i] +=1;
            list[i]=TriWord(i);
        }else {
            
        }

    }
}