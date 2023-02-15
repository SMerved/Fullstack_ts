class Person {
    name: string
    age: number
    gender: string

    public constructor(name:string, age:number, gender:string){
        this.name = name
        this.age = age
        this.gender = gender
    }
}
const nameArray: string[] = ["Bob", "Hans", "Jens", "Kurt", "Gert"]
const ageArray: number[] = [23,45,12,34,65]
const genderArray: string[] = ["Male", "Female", "Male", "Female", "Female"]
const populator = (names: string[], ages:number[], genders: string[], amount: number): Person[] => {
    let people: Person[]= []
    for (amount; amount > 0; amount--){
        people.push(new Person(names[Math.floor(Math.random()*names.length)], ages[Math.floor(Math.random()*ages.length)], genders[Math.floor(Math.random()*genders.length)]))
    }
    return people
}

const peopleTable = (people: Person[]) : string => {
    let peopleTable: string
    peopleTable = "<table><tr><th>Name</th><th>Age</th><th>Gender</th></tr>"
    people.forEach(person => {
        let s: string = "<tr><th>"+person.name +"</th><th>"+person.age+ "</th><th>"+person.gender+"</th></tr>"
        peopleTable = peopleTable.concat(s)
    });
    console.log(peopleTable)
    peopleTable = peopleTable.concat("</table>")
    return peopleTable
}
let peopleArray = populator(nameArray, ageArray, genderArray, 10)
document.getElementById("root")!.innerHTML = peopleTable(peopleArray);
