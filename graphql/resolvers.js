import people from "./db"
import {getByID} from "./db"
const resolvers = {
    Query:{
        people :()=>{
            const people_two = [
                people[0],people[1]
            ]
            return people_two
        },
        person:(_,{id})=>getByID(id)
        /*{
            const filteredpeople = people.filter(person => {
                return args.name === person.name
            })
            return filteredpeople[0];
        }/* 같은 코드 -> person:(_,{name})=>{
            const filteredpeople = people.filter(person => {
                return name === person.name
            })
            return filteredpeople[0];
        }*/
    }
}
export default resolvers