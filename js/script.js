const members = [
    {
        name : 'Wayne Barnett',
        role : 'Founder & CEO',
        photo : 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name : 'Angela caroll',
        role : 'Chief Editor',
        photo : 'angela-caroll-chief-editor.jpg'
    },
    {
        name : 'Walter Gordon',
        role : 'Office Manager',
        photo : 'walter-gordon-office-manager.jpg'
    },
    {
        name : 'Angela Lopez',
        role : 'Social Media Manager',
        photo : 'Manager  angela-lopez-social-media-manager.jpg'
    },
    {
        name : 'Scott Estrada',
        role : 'Developer',
        photo : 'scott-estrada-developer.jpg'
    },
    {
        name : 'Barbara Ramos',
        role : 'Graphic Designer',
        photo : 'barbara-ramos-graphic-designer.jpg'
    },
];


const nameElement = document.getElementById('name');
const roleElement = document.getElementById('role');
const photoElement = document.getElementById('img');

for ( let i = 0; i < members.length; i++ ) {
    console.log(members[i]);

    nameElement.innerHTML += `Membro ${i + 1}: ${members[i].name} <br>`;

    roleElement.innerHTML += `${members[i].role} <br>`;

    photoElement.innerHTML += `${members[i].photo} <br>`;
}
