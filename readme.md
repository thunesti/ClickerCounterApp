# Click Counter (TypeScript)

En enkel teller laget i TypeScript uten rammeverk, implementert med Model–View–Update (MVU)-arkitektur.

# Funksjonalitet

Applikasjonen viser en teller og tre knapper:

* +1 – øker telleren.
* -1 – reduserer telleren.
* Reset – setter telleren til 0.

# Hvordan det fungerer

Programmet bruker en ensrettet dataflyt:

User action -> dispatch(msg)-> update(state, msg)-> new state-> view(state)

* State lagrer telleren.
* Msg beskriver hendelser (Increment, Decrement, Reset).
* update() er en ren funksjon som returnerer ny state.
* view() genererer UI basert på state.

Dette gjør programmet forutsigbart, lett å teste og enkelt å utvide.
