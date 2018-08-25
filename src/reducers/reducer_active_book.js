// State argument is not application state, only the state this reducer is responsible for

export default function(state = null, action) {
    switch(action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
    }

    return state;  // Redux does not allow to return "undefined". It will throw an error. So we need a default null for the state
}