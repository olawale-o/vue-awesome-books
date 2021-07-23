export const booksAction = {
  async addBook({ commit }, { credentials, type }) {
    try {
      const action = type.split('/')[1];
      console.log(credentials)
      commit({ type: action, credentials });
    } catch (e) {
      console.log(e)  
    }
  },
  async removeBook({ commit }, { credentials, type }) {
    try {
      const action = type.split('/')[1];
      commit({ type: action, credentials });
    } catch (e) {
      console.log(e)
    }
  }
}