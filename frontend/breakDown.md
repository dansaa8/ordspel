Breakdown:

# Börja med att repetera lektioner.

1. Ladda ner alla lektioner som jag ej har upprepat.

2. Kolla igenom och code along:a

3. Eventuellt omdefinera nedanstående punkter efterhand.


# Definera Frontend:

1. När man klickar på start new game-knappen så ska state ändras på setPhase till gameActive i App-componenten.

2. Skapa en game component.

3. Game-componenten ska ta emot följande states från App.js:
   *  wordLength, repChars



# Definera Backend:

1. Skapa en API-funktion som hämtar orden från resursen som Sara länkade på slack (async, await o hela faderullan).

2. API-funktionen ska ta emot parametrar för wordLength och repeatedChars.

3. Importera funktionerna som gjordes i första inlämningen till API-funktionen. (randWord och repChars). 

4. filtrera den hämtade ord-arrayen från API:t genom mina egenskapade funktioner för att få ut ett slumpat ord med en bestämd längd.

5. Returnera det slumpade ordet. Är ordet undefined, returnera null.
