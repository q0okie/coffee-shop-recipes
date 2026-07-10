
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

