// Первое задание //
class PrintEditionItem {

    constructor(name, releaseDate, pagesCount){
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix(){
        let stateFix = this.state * 1.5;
        this.state = stateFix;
    }

    set state(state){
        if (state < 0){
            this._state = 0; 
        }
        if (state > 100){
            this._state = 100;
        }
        if (state <= 100 && state >= 0){
            this._state = state;
        }
    }

    get state(){
        return this._state
    }

}
class Magazine extends PrintEditionItem {
    constructor (name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor (author, name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount)
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor (author, name, releaseDate, pagesCount, type){
        super(author, name, releaseDate, pagesCount)
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor (author, name, releaseDate, pagesCount, type){
        super(author, name, releaseDate, pagesCount)
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor (author, name, releaseDate, pagesCount, type){
        super(author, name, releaseDate, pagesCount)
        this.type = "detective";
    }
}

// Второе задание //

class Library {
    constructor(name){
        this.name = name;
        this.books = [];
    }

    addBook(book){
        if (book.state > 30){
            this.books.push(book);
        }
        else{
            console.log(`Состояние книги хуже, чем у туалетной бумаги`)
        }
    }

    findBookBy(type, value){
        let findBook = null;
        for (let i = 0; i < this.books.length; i++) {
            let book = this.books[i];
            if (book[type] === value){
                findBook = book;
            }
        }
        return findBook
    }

    giveBookByName(bookName){
        let findBook = null;
        for (let i = 0; i < this.books.length; i++) {
            let book = this.books[i]
            if (book.name === bookName){
                this.books.splice(book, 1);
                findBook = book;
            }  
        }
        return findBook
    }
}