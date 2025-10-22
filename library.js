const library={
    books: ["atomic habits","psychology of money","rich dad poor dad"],
    showBooks:function(){
        for(let book of this.books){
            console.log(book);
        }
    }
}
library.showBooks();
