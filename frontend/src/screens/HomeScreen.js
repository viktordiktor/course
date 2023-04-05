
const HomeScreen = {
    render: async () =>{
        const response = await fetch("http://localhost:5000/api/books", {
            headers: {
                "Content-Type": 'application/json',
            },
        });
        if(!response || !response.ok){
            return `<div>Error in getting data!</div>`
        }
        const books = await response.json();

        return `
        <ul class="books">
        ${books.map( book => `
        <li>
            <div class="book">
                <a href="/#/book/${book._id}">
                    <img src="${book.image}" alt="${book.name}"/>
                </a>
                <div class="book-name">
                    <a href="/#/book/1">
                        ${book.name}
                    </a>
                </div>
                <div class="book-genre">
                    ${book.genre}
                </div>
                <div class="book-price">
                    ${book.price}
                </div>
            </div>
        </li>
        `).join('\n')}
        `
    }
}
export default HomeScreen;