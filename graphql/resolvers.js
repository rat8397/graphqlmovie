import  { getMovie } from "./db"
const resolvers = {
    Query:{
        movies :(_,{limit,rating})=>{            
            return getMovie(limit,rating);//현재 무비로 받아와야됨 이 파일의 무비와 db파일의 무비가 같은 변수가 아님.
        }
    }

}
export default resolvers