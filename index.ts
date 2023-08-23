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
    { type: ItemType.DVD, title: 'Inception', duration: 148 },
    { type: ItemType.Book, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { type: ItemType.DVD, title: 'Avatar', duration: 162 },
    { type: ItemType.Book, title: 'Go Set a Watchman', author: 'Harper Lee' },
];



function filterItems(items: ItemType[], filterFn: boolean): ItemType[] {
    const nweArr: ItemType[] = []
    for (const item of items) {
        if (filterFn(item)) nweArr.push(item)
    }
    return nweArr
}

const filterDVD = (item: object): boolean => {
    return item.duration > 120
}

const filterBook = (item: object): boolean => {
    return item.author === 'Harper Lee'
}

function printItemsData(items: ItemType[]): void {
    for (let i: number = 0; i < items.length; i++) {
        const keys: string[] = Object.keys(items[i])
        keys.forEach(key => {
            console.log(`${key}: ${items[i][key]}`)
        });
    }
}


// printItemsData(libraryItems)

// console.log(filterItems(libraryItems, filterDVD))

// console.log(filterItems(libraryItems, filterBook))