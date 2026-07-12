function getAllMovies() {
    return [
        {title: 'A New Hope', director: 'George Lucas', yearReleased: 1977, streaming: true},
        {title: 'Return of the Sith', director: 'George Lucas', yearReleased: 1977, streaming: true}
    ];
}

const movieTitle: string = 'A New Hope';



function getReview(a:string) {
    if (movieTitle== 'A New Hope') {
        return 'An Instant Classic!';
    }
    else {
        return Math.floor(Math.random()*10);
    }
}

function printMovieInfo(movieTitle:string, yearReleased?:number, ...actor:string[]) {

    console.log(`Movie title: ${movieTitle}`);

    if (yearReleased){
        console.log(`Year released: ${yearReleased}`);
    }

    let movieReview: string|number = getReview(movieTitle)
    
    console.log(`${movieReview}`);

    for(const name of actor) {
        console.log (` ${actor}`);
    }
}

let movie1 = printMovieInfo('A New Hope')

const logMessage = (message:string) => console.log(message);

logMessage('Yes');

function getMovieTitle(director:string): string[];
function getMovieTitle(director:string, streaming: boolean): string[];
function getMovieTitle(director:string, streaming?: boolean): string[]{

    const allMovies = getAllMovies();
    const searchResults:string[] = [];

    if (streaming !==undefined) {
        for (let movie of allMovies) {
            if (movie.director === director && movie.streaming === streaming) {
                searchResults.push(movie.title);
            } else {
                break;
            }
        } 
    }else {
                for (let movie of allMovies) {
                    if (movie.director ===director) {
                        searchResults.push(movie.title);
                    }
                }
            }
    return searchResults;
}
let movies: string[] = getMovieTitle('George Lucas');
movies.forEach(title=>console.log(title))

// Interfaces are contracts that define types

// Compiler will enforce the rules of interface

// Duck typing helps you reuse shapes of typing to set a standard for what to expect

interface Duck {
    walk: () => void;
    swim:() => void;
    quack: () => void;
}
let probableDuck = {
    walk: () => console.log('walking like a duck'),
    swim: () => console.log ('swimming like a duck'),
    quack:() => console.log('quacking like a duck')
}
function flyingOverWater(bird:Duck) { 
    bird.walk();
    bird.swim();
    bird.quack();
}
flyingOverWater (probableDuck);