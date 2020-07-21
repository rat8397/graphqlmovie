import movies, { deleteMovie, addMovie, getMovie } from "./db"
import {getByID} from "./db"
const resolvers = {
    Query:{
        movies :()=>{            
            return getMovie();
        },
        movie:(_,{id})=>getByID(id),
            
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
    },
    Mutation:{
        deleteMovie:(_,{id})=>deleteMovie(id),
        addMovie:(_,{name,score})=>addMovie(name,score)
    }

}
export default resolvers