Skapa test för randomWord. 
#                     para1     para2      para3 
                      (arr)     (int)      (bool)
# function randomWord(words, wordLength, repeatChars) {

};

* 1. skapa en lista med 5 ord. Två utav dem ska ha dubbla chars. Ett utav orden med dubbla chars ska ha samma längd som wordLength. 
* 2. testa funktionen.
     2.1 parameterLista: 
        2.2 argument1:  ovanstående lista med 5 ord som första.
        2.3 argument2: wordLength ska vara samma som ett utav orden med dubbla chars
        2.4 argument3: true (repeatChars ska vara boolean)
3. expect: förvänta oss att få tillbaka ordet som har samma längd som wordLength. 

----------------------------------------------------------------------------------------------------------------------

Skapa funktion för randomWord.

* 1. filtrera igenom words med filter() method. Endast ord som har samma längd som andra para2 samt kolla vad para3 har för värde 
     i filtreringen. Har den true, så ska även ord som har fler än ett ord kunna returneras. 
  2. tilldela en variabel ett slumpat ord från den filtrerade arrayen. 
  3. om filtreringen returnerar en tom array, så returnera ett nullValue. 
  4. annars returnera det slumpade ordet. 