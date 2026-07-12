// Interfaces are contracts that define types

// Compiler will enforce the rules of interface

// Duck typing helps you reuse shapes of typing to set a standard for what to expect

interface Movie {
    title:string,
    director:string,
    yearReleased:number,
    streaming:boolean
}

function getAllMovies(): Movie[] {
    return [
        {title: 'A New Hope', director: 'George Lucas', yearReleased: 1977, streaming: true},
        {title: 'Return of the Sith', director: 'George Lucas', yearReleased: 1977, streaming: true}
    ];
}



function getReview(a:string) {
    if (a == 'A New Hope') {
        return 'An Instant Classic!';
    }
    else {
        return Math.floor(Math.random()*10);
    }
}

function printMovieInfo(movie:Movie) {

    console.log(`Movie title: ${movie.title}`);

    if (movie.yearReleased){
        console.log(`Year released: ${movie.yearReleased}`);
    }

    let movieReview: string|number = getReview(movie.title)
    
    console.log(`${movieReview}`);
}

const logMessage = (message:string) => console.log(message);

logMessage('Yes');

function getMovieTitle(director:string): string[];
function getMovieTitle(director:string, streaming: boolean): string[];
function getMovieTitle(director:string, streaming?: boolean): string[]{

    const allMovies = getAllMovies();
    const searchResults:string[] = [];

    // There should only be ONE loop scanning the movies
    for (let movie of allMovies) {
        
        if (movie.title === 'A New Hope') {
            let review = getReview(movie.title);
            console.log(review);
        }

        if (streaming !== undefined) {
            if (movie.director === director && movie.streaming === streaming) {
                searchResults.push(movie.title);
            } 
        } 
        else {
            // FIXED: Removed the inner loop. Just check the current movie!
            if (movie.director === director) {
                searchResults.push(movie.title);
            }
        }
    }
            
    return searchResults;
}

let movies: string[] = getMovieTitle('George Lucas');
movies.forEach(title=>console.log(title))