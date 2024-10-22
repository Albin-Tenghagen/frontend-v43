Fördjupa JavaScript-kunskaper - Ämnen: - If-satser, else if, else - Switch-satser - Loopar: for, while, do-while - Logiska operatorer och villkor

if/else if/else Övning:

Övning: Temperaturbedömning (Lätt)

Uppgift:

Be användaren ange temperaturen i Celsius. Om temperaturen är över 30 grader, skriv ut "Det är väldigt varmt ute." Om temperaturen är mellan 20 och 30 grader, skriv ut "Det är varmt ute." Om temperaturen är mellan 10 och 20 grader, skriv ut "Det är svalt ute." Annars, skriv ut "Det är kallt ute."

Tips: Kom ihåg att konvertera användarinmatningen till ett nummer.

Övning: Betygskonvertering (Medel)

Uppgift:

Be användaren ange ett numeriskt betyg mellan 0 och 100. Konvertera betyget till en bokstav enligt följande: 90-100: A 80-89: B 70-79: C 60-69: D 0-59: F Skriv ut det motsvarande bokstavsbetyget.

Tips: Använd flera if-else-if-satser för att kontrollera intervallen.

Övning: Butiksrabatt (Medel)

Uppgift:

Be användaren ange sin kundtyp: "Ny" eller "Återkommande". Be användaren ange köpbeloppet. Om kunden är "Återkommande" och köpbeloppet är över 500 kr, ge 15% rabatt. Om kunden är "Ny" och köpbeloppet är över 500 kr, ge 10% rabatt. Skriv ut det slutliga priset efter rabatt.

Tips: Använd logiska operatorer för att kombinera villkor.

Övning: Lösenordskontroll (Medel)

Uppgift:

Be användaren ange ett lösenord. Kontrollera att lösenordet uppfyller följande kriterier: Minst 8 tecken långt. Innehåller minst en siffra. Innehåller minst en versal bokstav. Skriv ut om lösenordet är godkänt eller inte.

Tips: Använd string-metoder och regex för att kontrollera lösenordet (eller enklare kontroller om regex inte är bekant).

Övning: Trafikljus (Medel)

Uppgift:

Be användaren ange färgen på ett trafikljus: "Röd", "Gul" eller "Grön". Skriv ut följande meddelanden baserat på färgen: "Stanna" för "Röd". "Förbered att stanna" för "Gul". "Kör" för "Grön". Hantera även ogiltiga inmatningar.

Tips: Använd if-else-satser och tänk på att göra inmatningen skiftlägesokänslig med toLowerCase().

Övning: Nummer i Ord (Svår)

Uppgift:

Be användaren ange ett tal mellan 0 och 5. Konvertera talet till dess motsvarande ord och skriv ut det. 0: "Noll" 1: "Ett" 2: "Två" 3: "Tre" 4: "Fyra" 5: "Fem" Om talet är utanför intervallet, skriv ut "Ogiltigt tal".

Tips: Använd if-else-satser eller en switch-sats.

Övning: Planetvikt (Svår)

Uppgift:

Be användaren ange sin vikt i kilogram. Be användaren välja en planet (t.ex. "Mars", "Jupiter"). Beräkna och skriv ut vad användaren skulle väga på den valda planeten baserat på gravitationsfaktorer: Mars: 0.38 Jupiter: 2.34 Månen: 0.16 Hantera ogiltiga inmatningar.

Tips: Använd logiska operatorer och if-else-satser för att hantera valen.

Övning: Quizspel (Svår)

Uppgift:

Skapa ett enkelt quiz med tre frågor. För varje korrekt svar får användaren en poäng. Efter sista frågan, skriv ut den totala poängen.

Tips: Använd if-satser för att kontrollera svaren. Frågorna kan vara flervalsfrågor eller fritext.

Övning: Validera E-postadress (Svår)

Uppgift:

Be användaren ange en e-postadress. Kontrollera att e-postadressen innehåller "@" och ".". Skriv ut om e-postadressen är giltig eller ogiltig.

Övning: Enkel Bankomat (Svår)

Uppgift:

Be användaren ange en PIN-kod. Ge användaren tre försök att ange rätt PIN (t.ex. "1234"). Om rätt PIN anges, skriv ut "Välkommen!". Om försök tar slut, skriv ut "Kortet är blockerat.".

Tips: Använd en loop tillsammans med if-satser.

Övning: Matbeställning (Medel)

Uppgift:

Skapa en meny med tre maträtter och deras priser. Be användaren välja en maträtt genom att ange dess nummer. Skriv ut det valda valet och priset.

Tips: Använd if-else-satser för att matcha valet med maträtten.

Övning: Hastighetskontroll (Medel)

Uppgift:

Be användaren ange sin hastighet i km/h. Om hastigheten är över 120 km/h, skriv ut "För fort, böter!". Om hastigheten är mellan 80 km/h och 120 km/h, skriv ut "Godkänd hastighet.". Om hastigheten är under 80 km/h, skriv ut "För långsamt, öka hastigheten.".

Tips: Använd if-else-if-satser för att hantera intervallen.

Övning: Enkel Valutakonverterare (Lätt)

Uppgift:

Be användaren ange ett belopp i SEK. Konvertera beloppet till EUR (1 EUR = 10 SEK). Skriv ut det konverterade beloppet i EUR.

Tips: Använd enkel beräkning och skriv ut resultatet med två decimaler.

Övning: Filmrekommendation (Medel)

Uppgift:

Be användaren ange sin ålder. Baserat på åldern, rekommendera en film: Under 13: "Animerad film" 13 till 17: "Ungdomsfilm" 18 och över: "Vuxenfilm"

Tips: Använd if-else-if-satser för att hantera åldersintervallen.

Övning: Matematiskt Spel (Svår)

Uppgift:

Generera två slumpmässiga tal mellan 1 och 10. Be användaren att multiplicera dessa två tal och ange svaret. Kontrollera om svaret är korrekt och skriv ut ett passande meddelande.

Tips: Använd Math.random() och Math.floor() för att generera talen. Använd if-satser för att kontrollera svaret.

Övning: BMI-kalkylator (Medel)

Uppgift:

Be användaren ange sin längd i meter och vikt i kilogram. Beräkna användarens BMI med formeln: BMI = vikt / (längd * längd). Skriv ut BMI och en hälsoklassificering: Under 18.5: "Undervikt" 18.5 - 24.9: "Normalvikt" 25 - 29.9: "Övervikt" 30 och över: "Fetma"

Tips: Använd if-else-if-satser för att klassificera BMI-värdet.

Övning: Resekostnadskalkylator (Svår)

Uppgift:

Be användaren ange avståndet i kilometer och bränsleförbrukningen i liter per mil. Be användaren ange bränslepriset per liter. Beräkna och skriv ut

den totala resekostnaden.

Tips: Kom ihåg att 1 mil = 10 km. Använd matematiska beräkningar och if-satser för validering.

Övning: Palindromkontroll (Svår)

Uppgift:

Be användaren ange ett ord. Kontrollera om ordet är ett palindrom (stavas likadant fram- och baklänges). Skriv ut om det är ett palindrom eller inte.

Tips: Använd string-metoder för att vända ordet och jämföra.

Övning: Nummergissningsspel (Svår)

Uppgift:

Skapa ett spel där datorn väljer ett slumpmässigt tal mellan 1 och 50. Användaren har fem försök att gissa talet. Efter varje gissning, ge en ledtråd om talet är högre eller lägre. Skriv ut ett meddelande om användaren vinner eller förlorar.

Tips: Använd en loop för att räkna försök. Använd if-else-satser för att jämföra gissningen med det slumpmässiga talet.
About

Fördjupa JavaScript-kunskaper - Ämnen: - If-satser, else if, else - Switch-satser - Loopar: for, while, do-while - Logiska operatorer och villkor
Resources
Readme
