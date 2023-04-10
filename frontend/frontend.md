# Game component:
   
   # Definera: 

      * Skapa en Game-component med underkomponenter som liknar designen på figma.

      * Fem rader med gissningar som ska ha samma längd som ordet. 

      * I samma veva när vi får game id:t så ska vi också hämta längden på det slumpade ordet, 
        så att man vet hur många bokstäver som ska renderas per rad. Viktigt att frontend endast får längden och inte själva ordet.
        mätningen sker serverSide.
     


   # Separera:

      1. Fixa så att frontEnd får ordets längd på lämpligt ställe, men inte själva ORDET!

      2. Skapa en counter-component som håller koll på hur många gissningar x av 5. 

      3. Skapa en Wordcontainer som returneras från game där alla ord (form element/Word-componenter ska ligga).
         3.1 Skapa en validate knapp inuti returvärdet från Game.

      4. Skapa en WordComponent(form-element) och rendera dem inuti Wordcontainer som returneras från game (5st). 

         4.1 Sätt antalet gånger till 5 i en variabel och

         4.2 loopa igenom den för att skapa 5 st.

      5. Skapa Letter component. Letter-componenten ska vara child till Word-componenten. Word-componenten ska ha 
         lika många letter-componenter som det slumpade ordet har. 

         5.1 



   # Experimentera:
   

