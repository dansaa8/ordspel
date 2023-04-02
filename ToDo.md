# WordLengthSelector - component

1. Gör om valen i dropdownen till radiobuttons

  1.1  Skapa en min & max variabel. Kör en forloop som iterarar från och till och med max variabeln. 
       minvärdet ska vara det minsta antalet bokstäver ett ord får ha. maxvärdet ska vara det högsta antalet.
       Skapa input=radiobutton + label för varje iteration i forloopen.

  1.2  Setwordlength ska uppdatera sitt state när en radiobutton ändras

2. Uppdatera det visade valet i dropdownen med att visa det senaste statet för wordlength.

3. Eventuellt: Gör om SetWordlength + RepeatedChars till ett settingsobjekt igen kanske. (Det blir mindre props att skicka ner via propssystem)