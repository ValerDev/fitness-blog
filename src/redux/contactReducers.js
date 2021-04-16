const NAME = 'NAME';
const EMAIL = 'EMAIL';
const MESSAGE = 'MESSAGE';

let initialState = {
    contact_us: {
        name: '',
        email: '',
        message: '',
    }
};

const contactReducers = (state = initialState, action) => {
    switch (action.type) {
        case NAME:
            state.contact_us.name = action.payload
            return state
        case EMAIL:
            state.contact_us.email = action.payload
            return state
        case MESSAGE:
            state.contact_us.message = action.payload
            return state
        default:
            return state
    }
}

export const handleNameChangeActionCreator = (newName) => ({ type: NAME, payload: newName });
export const handleEmailChangeActionCreator = (newEmail) => ({ type: EMAIL, payload: newEmail });
export const handleMessageChangeActionCreator = (newMessage) => ({ type: MESSAGE, payload: newMessage });

export default contactReducers;