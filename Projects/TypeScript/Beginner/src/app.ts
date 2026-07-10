
function getBooksRead(name: string, ...bookIDs:number[]) {};

//Ellipsis behind last parameter designates rest parameter for multi entry argument

let books = getBooksRead('Freud',2,5);

function createCustomer(name:string, age?:number) { };

function getBookTitle(title:string = 'The C Programming Language') { };

function reccBookTitle(title:string = mostPopularBook) { };

var mostPopularBook:string;

function getReview(a:string) {};

const movieTitle: string = 'A New Hope';

let movieReview: string|number = getReview(movieTitle);

console.log(`Movie title: ${movieTitle}`);
console.log(`${movieReview}`);