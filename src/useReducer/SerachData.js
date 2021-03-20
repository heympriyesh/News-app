
const Search = {
    search: []
}


const SearchData = (state = Search, action) => {
    switch (action.type) {
        case 'ADD_SEARCH':
            return {
                search: [action.payload]
            }
        default:
            return state;
    }
}

export default SearchData;