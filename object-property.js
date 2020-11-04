const students = [
    {id:20, name: "Rony"},
    {id:32, name: "Bappy"},
    {id:36, name: "Hasan"},
    {id:40, name:"Babu"},
]

const names = students.map(s => s.name);
const sId = students.map(s => s.id);
const bigger = students.filter(s => s.id < 40);
const biggerone = students.find(s => s.id > 31) ;

console.log(biggerone);