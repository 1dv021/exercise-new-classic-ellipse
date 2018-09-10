# Ny klassisk ellips

- A-nivå
- [GitBook](https://coursepress.gitbook.io/1dv021/ovningsuppgifter/del-2/a-niva/ny-klassisk-ellips)
- [Lösningsförslag](https://github.com/1dv021/exercise-solution-proposals/tree/master/part-2/new-classic-ellipse)


>__VIKTIGT!__ Innan du börjar arbeta med övningsuppgiften är det viktigt att du följer guiden [Att komma igång med en övningsuppgift](https://coursepress.gitbook.io/1dv021/guider/att-komma-igang-med-en-ovningsuppgift) för att lägga till övningsuppgiftens repo till ditt repo för övningsuppgifter.

## Uppgift

Hämta hem övningsuppgiftens repo, lägg till en .gitignore-fil och komplettera enligt anvisningarna.

I denna uppgift ska du komplettera med kod så att objekt, som representerar en ellips, skapas enligt _"class syntax"_ . Genom att använda arv ska även objekt representerande en cirkel kunna skapas.

Övningsuppgiften är uppdelad i tre filer och du ska skriva kod i som skapar objekt enligt nämndt designmönster. Genomför uppgiften genom att arbeta med filerna, och designmönster, i tur och ordning.

1. `Ellips.js` - _"class syntax"_
1. `Circle.js` - _"class syntax"_ som ärver från `Ellips`.
1. `app.js` - instansierar och använder objekt av typerna `Ellips`och `Circle`.

Genom att använda designmönstret ska typer skapas som har egenskaper och metoder enigt nedan.

### src/Ellipse.js

Du ska skriva en klass av vilken objekt av typen `Ellipse` ska kunna instansieras, där arean och omkretsen ska kunna beräknas. I samband med att objektet skapas ska det vara möjligt att ange halva storaxelns längd, som betecknas `a`, och halva lillaxelns längd, som betecknas `b`.

En ellips area kan bestämmas med `Math.PI * a * b`, och dess omkrets approximativt med `Math.PI * Math.sqrt(2 * a * a + 2 * b * b)`.

#### Egenskaper

- `a`, halva storaxelns längd.
- `b`, halva lillaxelns längd.

#### Metoder

Metoderna nedan ska vara gemensamma för samtliga objekt som instansieras av typen `Ellipse`.

- `getArea`, ska returnera ellipsens area.
- `getCircumference`, ska returnera ellipsens omkrets.
- `toString`, ska returnera en sträng representerande aktuellt objekt, med halva storaxelns längd satt till 42.7 och halva lillaxelns längd satt till 13.8, enligt `a: 42.7, b: 13.8, area: 1851.2, circumference: 199.4` där arean respektive omkretsen ska avrundas till en decimal.

### src/Circle.js

Du ska skriva en konstruktorfunktion som skapar ett objekt av typen `Circle` där arean och omkretsen ska kunna beräknas. I samband med att objektet skapas ska det vara möjligt att cirkelns radie, som betecknas `radius`. Se till att återanvända kod i så stor utsträckning som möjligt från typen `Ellipse` genom att använda arv.

En ellips area kan bestämmas med `Math.PI * radius * radius`, och dess omkrets med `2 * Math.PI * radius`. _(Samma formler kan användas som för en ellips area och omkrets, eller?)_

#### Egenskaper

- `radius`, cirkelns radie.

#### Metoder

Metoderna nedan ska vara gemensamma för samtliga objekt som instansieras av typen `Circle`.

- `getArea`, ska returnera cirkelns area.
- `getCircumference`, ska returnera cirkelns omkrets.
- `toString`, ska returnera en sträng representerande aktuellt objekt, med radien satt till 42.7, enligt `radius: 42.7, area: 5728.0, circumference: 268.3` där arean respektive omkretsen ska avrundas till en decimal.

### app.js

Filen ska skapas i roten på applikationen. Du ska importera modulerna Ellipse och Circle så du kan instansiera objekt av respektive typ.

Ellipsen du skapar ska initialt ha värdet `42,7` för halva storaxelns längd (`a`), och värdet `13,8` för halva lillaxelns längd (`b`). En textbeskrivning av objektet ska presenteras.

Vidare ska du presentera en textbeskrivning av objektet för värdena 63 och `18,4` samt `78,9` och `68,4` för halva storaxelns längd (`a`) respektive för halva lillaxelns längd (`b`).

Cirkeln du skapar ska initial ha radien `6,7`, och en textbeskrivning av objektet ska presenteras. Även en textbeskrivning av cirklen ska presenteras för radien `3,8`.

```
a: 13.8, b: 42.7, area: 1851.2, circumference: 199.4
a: 63, b: 18.4, area: 3641.7, circumference: 291.6
a: 78.9, b: 68.4, area: 16954.4, circumference: 463.9
radius: 6.7, area: 141.0, circumference: 42.1
radius: 3.8, area: 45.4, circumference: 23.9</pre>
```

## Tips

__Ta del av föreläsningarna om olika sätt att skapa objekt, och återanvändning av kod, innan du fullständigt fullföljer denna uppgift!__

Genom att köra testerna som kommer med övningsuppgiften kan du undersöka om koden du skrivit löst uppgiften (i alla fall enligt testet...).