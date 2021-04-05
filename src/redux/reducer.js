const NAME = 'NAME';
const EMAIL = 'EMAIL';
const MESSAGE = 'MESSAGE';

const contactReducers = (state, action) => { 
    switch (action.type) {
        case NAME:
            state.contact_info.name = action.payload
            return state
        case EMAIL:
            state.contact_info.email = action.payload
            return state
        case MESSAGE:
            state.contact_info.message = action.payload
            return state
        default:
            return state
    }
}

export const handleNameChangeActionCreator = (newName) => ({ type: NAME, payload: newName });
export const handleEmailChangeActionCreator = (newEmail) => ({ type: EMAIL, payload: newEmail });
export const handleMessageChangeActionCreator = (newMessage) => ({ type: MESSAGE, payload: newMessage });

export default contactReducers;