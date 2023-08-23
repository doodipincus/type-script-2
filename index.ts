export enum ItemType {
    Book = 'book',
    DVD = 'dvd',
}

interface Book {
    type: ItemType.Book
    title: string
    author: string
}

interface DVD {
    type: ItemType.DVD
    title: string
    duration: number
}

const libraryItems: (Book | DVD)[] = [
    { type: ItemType.Book, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    { type: ItemType.DVD, title: 'Inception', duration: 108 },
    { type: ItemType.Book, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { type: ItemType.DVD, title: 'Avatar', duration: 162 },
    { type: ItemType.Book, title: 'Go Set a Watchman', author: 'Harper Lee' },
];


///מקבלת מערך ופונקציית פילטור ומחזירה מערך מסונן
function filterItems(items: ItemType[], filterFn: boolean): ItemType[] {
    const nweArr: ItemType[] = []
    for (const item of items) {
        if (filterFn(item)) nweArr.push(item)
    }
    return nweArr
}
///פונקציית פילטר לסרט ארוך משעתיים
const filterDVD = (item: object): boolean => {
    return item.duration > 120
}
// console.log(filterItems(libraryItems, filterDVD))


///פונקציית פילטר לסופר מסויים
const filterBook = (item: object): boolean => {
    return item.author === 'Harper Lee'
}
// console.log(filterItems(libraryItems, filterBook))


///מדפיסה את כל המערך בצורה מתאימה
function printItemsData(items: ItemType[]): void {
    for (let i: number = 0; i < items.length; i++) {
        const keys: string[] = Object.keys(items[i])
        keys.forEach(key => {
            console.log(`${key}: ${items[i][key]}`)
        });
    }
}
// printItemsData(libraryItems)





///סוף תרגול א

// const 1 = 'אבן'
// const 2 = 'נייר'
// const 3 = 'מספריים'

// function playGame(player1: number, player2: number): string {

//     const results = ["tie", "player 1", "player 2"];
//     const resultIndex = (player1 - player2 + 3) % 3;
//     return results[resultIndex];
// }

// const play = playGame(3, 3);
// console.log(play);


enum Play {
    tie,
    stone,
    paper,
    Scissors,
}

let player1until3: number = 0
let player2until3: number = 0

function playGame(player1: string, player2: string): string {

    const player1Number: number = Play[player1]
    const player2Number: number = Play[player2]

    if (player1Number === 1 && player2Number === 3) player1until3++
    else if (player1Number === 2 && player2Number === 1) player1until3++
    else if (player1Number === 3 && player2Number === 2) player1until3++
    else player2until3++

    if (player1until3 >= 3) {
        player1until3 = 0; 
        player2until3 = 0; 
        return "player 1"
    }else if (player2until3 >= 3) {
        player2until3 = 0; 
        player1until3 = 0; 
        return "player 2"
    }else{
        console.log('player 1', player1until3);
        console.log('player 2', player2until3);
        
        return "still nobody"
    }
}

// for (let i: number = 0; i < 3; i++) {
    let play = playGame('stone', 'paper');
    console.log("play", play);

    play = playGame('paper', 'paper');
    console.log("play", play);

    play = playGame('Scissors', 'paper');
    console.log("play", play);

    play = playGame('stone', 'paper');
    console.log("play", play);
// }