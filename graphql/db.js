const people = [
    {
        id:1,
        name : "JANG",
        age : 25,
        gender :"MALE"
    },
    {
        id:2,
        name : "HAN",
        age : 24,
        gender :"MALE"
    },
    {
        id:3,
        name : "KIM",
        age : 23,
        gender :"MALE"
    },
    {
        id:4,
        name : "JUN",
        age : 21,
        gender :"MALE"
    },
]
export const getByID=(id)=>{
    console.log(id);
    const filteredPeople = people.filter(person =>{
        return id === person.id;
    })
    return filteredPeople[0];
    
}
export default people;