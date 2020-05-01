export class Book {
    constructor(title, author, description, pages, current_page = 1, read = false) {
        this.title = title;
        this.author = author;
        this.description = description;
        this.pages = pages;
        this.current_page = current_page;
        this.read = read;
    }

    readBook(page) {
        if (page == this.pages)
            return this.read = true;
        else if (page < this.pages && this.current_page > 0)
            return this.current_page = page;
        else
            return 0;
    }
}

export const books = [
    new Book("titre1", "autheur1", "description1", 21),
    new Book("titre2", "autheur2", "description2", 22),
    new Book("titre3", "autheur3", "description3", 23),
    new Book("titre4", "autheur4", "description4", 24),
];

const cl = e => console.log(e);