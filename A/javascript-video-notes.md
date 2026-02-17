# Javascript video notes

1. Beginning the Beginner's series [1 of 51]
   * JavaScriptiä on käytetty ohjelmoinnissa erittäin kauan ja osaavat tekijät opettavat siitä näillä tulevilla videoilla.
2. What is JavaScript [2 of 51]
   * JavaScript on ohjelmointikieli, jota käytetään web-sivustoilla ja serverin puolella.
3. Running JavaScript: browser or server [3 of 51]
   * JavaScriptin voi kirjoittaa suoraan html tiedostoon, mutta linkitetty erillinen tiedosto on kätevämpi.
4. Building your toolbox [4 of 51]
   * VSC + lisäosat(ESLint, Prettier, JavaScript(ES6) code snippets)
   * Node.js (using javascript outside of browser)
5. Demo: Building your toolbox [5 of 51]
   * Tältä videolta löytyy käytännön ohjeet ohjelmien asentamiseen.
6. Creating your first application [6 of 51]
   * %s merkitsee muuttujan paikkaa, mutta ´${}´ käyttö on helpommin luettava vaihtoehto.
7. Comments [7 of 51]
   * Kaksi tapaa kommentoida: riville (//) tai useampi rivi (/**/)
   * Koodin kannattaa olla niin helposti luettavaa, ettei kommenteja tarvitse.
8. Demo: Comments [8 of 51]
   * Automaattinen kommentointi ctrl + /
9. Declaring variables [9 of 51]
   * Kolme tapaa määritellä muuttujat: var, let, const
10. Demo:Declaring variables [10 of 51]
    * Kun var on kerran määritelty, se tunnistetaan kaikessa koodissa ja sitä voi muuttaa.
    * Let pätee vain siinä blockissa jossa se on määritelty, toimii hyvin loopeihin. Ei voi muuttaa.
    * Const voi määritellä vain kerran koodissa. Ei voi muuttaa.
11. Working with strings [11 of 51]
    * Määriteltyjä stringejä voi yhdistää + -merkillä.
    * Huomioi välit
12. Demo: Working with strings [12 of 51]
    * Muista numeroiden käyttäminen stringinä täytyy olla heittomerkkien sisällä.
13. Using template literals to format strings [13 of 51]
    * Käyttämällä ´${}´ välit tulevat, jos ne kirjoitetaan hipsujen sisään.
    * Linebreaks \n
14. Demo: Using template literals to format strings [14 of 51]
    * Tulostuksessa voi suorittaa "tehtäviä" ${} sisällä, kuten numeroiden yhteenlaskua.
15. Data types in JavaScript [15 of 51]
    * JavaScriptissä muuttujien tyyppi voi muuttua kesken koodin.
16. Demo: Data types in JavaScript [16 of 51]
    * Data tyyppi kannattaa testata muutamalla tavalla. Aina ei tule oikeaa vastausta. (typeof{muuttuja}, {muuttuja}instanceof {data type})
17. Math in JavaScript [17 of 51]
    * ++ lisää yhden, -- vähentää yhden muuttujasta(numero)
18. Demo: Math in JavaScript [18 of 51]
    * math objectit esim. Math.PI
19. Converting strings to numbers [19 of 51]
    * stringistä numeroksi = parseInt(muuttuja), parseFloat(muuttuja)
    * numerosta stringiksi = toString()
20. Demo: Converting strings to numbers [20 of 51]
    * parseInt tunnistaa esim. Hexadecimalit
    * Jos muuttuja ei ole numero = NaN
    * Ei tunnista erikoismerkkejä esim 1+1 tämä onnistuu käyttämällä ${1+1}
21. Handling errors with try/catch/finally [21 of 51]
    * Valmistaudutaan erroreihin
22. Demo: Handling errors with try/catch/finally [22 of 51]
    * Ohjelma ei pysähdy erroreihin
23. Dates [23 of 51]
    * Kuukaudet ja viikonpäivät alkaa nollasta (sunnuntai = 0)
24. Demo: Dates [24 of 51]
    * päiväyksilllä on get ja set metodit
25. Boolean logic with if statements [25 of 51]
    * == katsoo ovatko muuttujat samanlaisia ja === katsoo ovatko muuttujat samoja myös tyypiltään.
    * !== käytä tätä, tämä näyttää eron myös tyypissä verrattuna !=
26. Demo: Boolean logic with if statements [26 of 51]
    * Use === no ==!
    * Learn shorter way to use
27. Boolean logic with switch and other syntax [27 of 51]
    * ||/| = tai, &&/& = ja
    * syntaxissa on "breaks" ja oikea järjestys.
28. Demo: Boolean logic with switch and other syntax [28 of 51]
    * Vältä negatiivista
    * switch: case ja default(else), muista break!
29. Creating arrays [29 of 51]
    * array on lista tai arvojen kokelma
    * joka arvolla on index
30. Demo: Creating arrays [30 of 51]
    * Voit luoda arrayn [] tai Array()
31. Populating arrays [31 of 51]
    * No value = Undefined
    * Index alkaa 0:sta
32. Demo: Populating arrays [32 of 51]
    * array.lenght - 1 on viimeisen arvon indexin
33. Array methods [33 of 51]
    * array.push() lisää arvon
    * array.pop() poistaa viimeisen
    * array.unshift() lisää arvon alkuun
34. Demo: Array methods [34 of 51]
    * array.sift() poistaa ensimmäisen arvon
    * array.concat() liittää arrayhin arrayn 
35. Loops [35 of 51]
    * while, for, for ... of
    * while: muista muuttaa muuttujaa esim. index++
    * for ... of syntax käy listan läpi puolestani listan
36. Demo: Loops [36 of 51]
    * for ... of on helppo ja nopea
37. Functions [37 of 51]
    * koodin paloja jota voi käyttää uudestaan ja uudestaan
    * funktiot lyhentää koodia ja helpottaa muokkaamista ja lukemista
    * funktioiden nimissä voi käyttää kirjaimia, numeroita, $ ja _
    * return antaa palautus arvon.
38. Demo: Functions [38 of 51]
    * function nimi(){ .. } funktio
    * kutsu fuktiota: "nimi();"
    * parameters=input, return=output
39. Arrow and anonymous functions [39 of 51]
    * Useammalle riville { .. }
40. Demo: Arrow and anonymous functions [40 of 51]
    * esim. const nimi (a, b) => a + b;
    * jos useampi rivi niin { .. return }
41. JavaScript Object Notation (JSON) [41 of 51]
    * nimi-arvo parit tekstimuotoon
    * .stringify
    * .parse()
42. Demo: JavaScript Object Notation (JSON) [42 of 51]
    * .stringify muuttaa objectin koodista tekstiksi
    * .parse() saa tekstin objectiksi koodiin
43. Objects in JavaScript [43 of 51]
    * objecteilla voi olla myös funktioita
44. Demo: Objects in JavaScript [44 of 51]
    * Funktion perässä () suorittaa funktion
    * this = runtime contents
45. Promises for long running operations [45 of 51]
    *.then ja .catch
46. Demo: Promises for long running operations [46 of 51]
    * tällä saa synkronoitua koodin funktiot
47.  Async/await for managing promises [47 of 51]
    * async/await näyttää synkronoidulta, mutta laittaa funktion pauselle, kunnes toinen funktio on suoritettu.
    * try/catch hoitaa errorit
48. Demo: async/await for managing promises [48 of 51]
    * await voi käyttää vain async sisällä
    * ilman await, koodi jatkaa suorittamiista vaikka joku funktio olisi kesken.
49. Package management [49 of 51]
    * devDependencies = paketit joita tarvitaan vain kehittäessä
    * Dependencies = paketit joita ohjelma tarvitsee toimiakseen
50. Demo: Package management [50 of 51]
    * paketteja ladataan ja käytetään terminaalin kautta
    * paketteihin voi tehdä lyhenteitä esim. käyttää koodia
    * paketteja käytetään salaamaan tietoa koodista
51. Next steps [51 of 51]
    * I feel ready to start with JavaScript
