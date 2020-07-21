let movies = [
    {
        id:1,
        name:"AVENGERS",
        score:8
    },
    {
        id:2,
        name:"THE GODFATHER",
        score:99
    },
    {
        id:3,
        name:"LOGAN",
        score:2
    },
    {
        id:4,
        name:"MONSTER",
        score:100
    },

]
export const getByID=(id)=>{
    const filteredMovie = movies.filter(movie =>{
        return id === movie.id;
    })//중요점 --> filter 함수는 배열형으로 리턴하므로 3
    return filteredMovie[0];
    
}
export const deleteMovie = (id)=>{
    const cleanMovies = movies.filter(movie =>{
        return movie.id !== id
    })
    if(movies.length > cleanMovies.length){//삭제를 해줘야하는 경우.
        movies = cleanMovies;
        console.log(movies)
        return true;
    }else{//삭제를 못하는 경우 아이디가 일치하는것이없거나 다른 문제가 있는 경우이다.
        return false;
    }
}
export const addMovie = (name,score) =>{
    const newMovie = {
        id:`${movies.length+1}`,
        name : name,
        score : score
    }
    movies.push(newMovie);
    return newMovie;
}
export const getMovie = ()=>{
    return movies
}
export default movies;