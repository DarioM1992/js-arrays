const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers

const output = [];
let (i = 0; i < teachers.length; i++) {
  output.push(teachers.at(-)(i - 1));
}


const reversedTeachers = teachers.toReversed();
console.log(teachers);

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = [];

for (let i = 0; i < teachers.length; i++){
  if (teachers[i].length >= 5){
    longNames.push(teachers[i]);
  }
}

console.log(longNames);

// 3. Rimuovi 'Ed' dall'array teachers
for (let i = teachers.length - 1; i >0; i--) {
  if (teachers[i] === 'Ed'){
    teachers.splice(i, 1);
}
}
console.log(teachers);

teachers.splice(teachers.indexOf('Ed'), 1);

// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
const isFabioPresent = teachers.includes('Fabio');


let isPresent = false;
for (let i= 0; i <teachers.length; i++){
  if(teachers[i] === 'Fabio') {
    isPresent = true;
    break;
  }
}
const isFabioPresent = isPresent;

// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString

let out = '';
for(let i = 0; i < teachers.length; i++) {
  out += teachers[i];
  if (i !== teachers.lenght -1) out += ',';
}
const teachersString = out;