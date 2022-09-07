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

// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
const teamMembers = [

    {
        nome: 'Wayne Barnett',
        ruolo: 'Founder & CEO',
        foto: 'wayne-barnett-founder-ceo.jpg'
    },

    {
        nome: 'Angela Caroll',
        ruolo: 'Chief Editor',
        foto: 'angela-caroll-chief-editor.jpg'
    },

    {
        nome: 'Walter Gordon',
        ruolo: 'Office Manager',
        foto: 'walter-gordon-office-manager.jpg'
    },

    {
        nome: 'Angela Lopez',
        ruolo: 'Social Media Manager',
        foto: 'angela-lopez-social-media-manager.jpg'
    },

    {
        nome: 'Scott Estrada',
        ruolo: 'Developer',
        foto: 'scott-estrada-developer.jpg'
    },

    {
        nome: 'Barbara Ramos',
        ruolo: 'Graphic Designer',
        foto: 'barbara-ramos-graphic-designer.jpg'
    }

];

// MILESTONE 1:
// Stampare su console le informazioni di nome, ruolo e la stringa della foto
for (let i = 0; i < teamMembers.length; i++) {
    console.log('Team member:');
    console.log(teamMembers[i].nome); //NOTA: meglio usare dot notation invece delle quadre
    console.log(teamMembers[i].ruolo);
    console.log(teamMembers[i].foto);
    console.log(' ');
}


// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe

const selectContainer = document.getElementById('team-members');

for (let i = 0; i < teamMembers.length; i++) {

    let putInContainer = document.createElement('div');
    putInContainer.classList = 'team-member-card';
    putInContainer.innerHTML = [
        teamMembers[i].nome + '<p>' +
        teamMembers[i].ruolo + '</p>' + '<img src="img/' + //BONUS 1: Trasformare la stringa foto in una immagine effettiva
        teamMembers[i].foto + '" alt="Picture team member" >'
    ];

    selectContainer.append(putInContainer);

}

// BONUS 2:
// Organizzare i singoli membri in card/schede