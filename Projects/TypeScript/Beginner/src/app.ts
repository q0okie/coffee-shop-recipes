function GetReview(title: string): string|number {
    if (title=='A New Hope') {
        return 'An instant Classic!';
    }
    else {
        return Math.floor(Math.random() * 10);
    }
}

const movieTitle: string = 'A New Hope';

let movieReview: string|number = GetReview(movieTitle);

console.log(`Movie title: ${movieTitle}`);
console.log(`${movieReview}`);