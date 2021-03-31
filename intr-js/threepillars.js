class Bookshelf {
	constructor() {
		this.favoriteBooks = [];
	}

	addFavoriteBook(bookName) {
		if (!bookName.includes("Great")) {
			favoriteBooks.push(bookName);
		}
	}

	printFavoriteBooks() {
		console.log(`Favorite Books: ${favoriteBooks.length}`);
		for (let bookName of favoriteBooks) {
			console.log(bookName);
		}
	}
}

var BOOK_API = "https://some.url/api";

const collection = new Bookshelf();

loadBooks(collection);

function loadBooks(bookshelf) {
	fakeAjax(BOOK_API, function onBooks(bookNames) {
		for (book of bookNames) bookshelf.addFavoriteBook(book);
		bookshelf.printFavoriteBooks();
	});
}

// ***********************

// NOTE: don't modify this function at all
function fakeAjax(url, cb) {
	setTimeout(function fakeLoadingDelay() {
		cb([
			"A Song of Ice and Fire",
			"The Great Gatsby",
			"Crime & Punishment",
			"Great Expectations",
			"You Don't Know JS",
		]);
	}, 500);
}
