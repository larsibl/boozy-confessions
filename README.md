# Boozy Confessions

🔗 [larsibl.github.io/boozy-confessions](https://larsibl.github.io/boozy-confessions/) 🔗

## En enkel drikkelek i nettleseren

### Motivasjon

Motivasjonen bak dette prosjektet var å finne på noe enkelt og gøy, hvor resultatet skulle bli en nettside.

### Mål

Ønsket for prosjektet var å lære mer om Svelte og SvelteKit, samt gjøre kall til et eksternt API. Jeg ønsket å utforske hvilke muligheter som fantes når det kom til designbibliotek, og jeg ville lære mer om responsivt design. I tillegg ville jeg se om det var mulig å legge inn animasjoner.

### API

API'et jeg endte opp med å bruke er [Truth or Date API](https://api.truthordarebot.xyz/). Her er det mulig å få spørsmål i fem ulike kategorier:

1. Truth
2. Dare
3. Would You Rather
4. Never Have I Ever
5. Paranoia Question

I tillegg kan man bytte mellom tre forskjellige moduser – PG, PG-13 og R – alt ettersom hvor "voksne" man ønsker at spørsmålene skal være. Disse valgte jeg å representere som 😇, 😏 og 😈.

### Design

Når det kom til designbibliotek endte jeg opp med å velge Skeleton sammen med Tailwind, ettersom det skulle være enkelt å ta i bruk, samt at Tailwind hadde innebygd funksjonalitet for responsivt design. Nettsiden er responsiv i det at den har to ulike oppsett avhengig av om man besøker nettsiden på en større skjerm (laptop) eller mindre skjerm (mobil).

### Teknologier

Under finner du en liste over teknologiene jeg tok i bruk med lenke til sine respektive nettsider:

-   [Svelte](https://svelte.dev)
-   [SvelteKit](https://kit.svelte.dev)
-   [TypeScript](https://www.typescriptlang.org)
-   [Tailwind CSS](https://tailwindcss.com)
-   [Skeleton](https://www.skeleton.dev/)
-   [Svelte Confetti](https://mitcheljager.github.io/svelte-confetti/)

### Installering

Hvis du ønsker å kjøre prosjektet lokalt, så kan du laste det ned. Åpne så et terminalvindu i prosjektmappen og kjør kommandoen:

```zsh
npm install
```

Når prosessen er ferdig, så kan du kjøre følgende kommando:

```zsh
npm run dev
```

Da vil det starte en server som leverer nettsiden på en gitt addresse og port som blir oppgitt i terminalvinduet. Besøk addressen i en nettleser for å få opp applikasjonen. For å avslutte serveren kan du bruke:

```
CTRL-C
```
