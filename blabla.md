target = LEKSAKA
 guess = KAKASKA

 Vi befinner oss på element[1] i GUESS:

       (här) 
# ['K', 'A', 'K', 'A', 'S', 'K', 'A'] (guess)

# ['L', 'E', 'K', 'S', 'A', 'K', 'A'] (target)

--------------------------------------------------------------------------------------------------------------------------

* Steg för steg:

1. Räkna hur många gånger bokstav A finns i båda arrayer. 
   # targetCount: 2,
   # guessCount: 3

2. om (targetCount = guessCount)
      - och om (guess[i] == target[i])
      # pusha letter: guess[i], result: correct

      - annars (om guess[i] != target[i])
      # pusha letter: guess[i], result: misplaced

3.  om (targetCount < guess) (eller kanske bara else) 
    * Iterera över varje bokstav i guessArray
       - På varje ställe där guess[i] = target[i]
          # Decrementa targetCount och guessCount med 1.
          # Spara index på stället där gissning stämmer överens med target i en array.
          
              (här är vi)
                  (↓)       (↓)           (✅)
          # ['K', 'A', 'K', 'A', 'S', 'K', 'A'] (guess)

                                 (↓)      (✅)
          # ['L', 'E', 'K', 'S', 'A', 'K', 'A'] (target)

          * nuvarande värde:
          # targetCount =  1,
          # guessCount = 2,

4. Kolla om det finns något element med samma värde som guess[i]  
   som dyker upp vid ett senare tillfälle i hela guessArrayen. 
   Om så är fallet. 

    