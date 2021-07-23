export const booksMutation = {
  addBook: (state, { credentials: {id, title, author} }) => state.books = [{id, title, author}, ...state.books],
  removeBook: (state, { credentials: { id } }) => {
    const filteredBooks = state.books.filter((book) => id !== book.id);
    state.books = filteredBooks;
  }
}