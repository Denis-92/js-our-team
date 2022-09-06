console.log('JS script OK');

/*
CONSEGNA
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede
Consigli del giorno:
Ragioniamo come sempre a step.
Prima la logica in italiano e poi traduciamo in codice.
*/

// creare un array di oggetti per rappresentare i membri del team.
const teamMembers = [
    {
        nome: 'pippo',
        ruolo: 'ceo',
        foto: 'metti foto'
    },

    {
        nome: 'pluto',
        ruolo: 'social media manager',
        foto: 'metti foto'
    },

    {
        nome: 'paperino',
        ruolo: 'chief editor',
        foto: 'metti foto'
    }

];

console.log('Team member 1', teamMembers[0]);
console.log('Team member 2', teamMembers[1]);
console.log('ALL Team', teamMembers);