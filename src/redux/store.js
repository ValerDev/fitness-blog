import contactReducers from './reducer'

const store = {
    _subscriber() {
    },
    _state: {
        header: {},
        pages: {
            home: {},
            blog: {},
            contactUs: {
                contact_info: {
                    name: '',
                    email: '',
                    message: ''
                }
            },
            aboutUs: {}
        },
        footer: {}
    },
    getState() {
        return this._state;
    },
    subscribe(osberver) {
        this._subscriber = osberver;
    },

    dispatch(action){
        contactReducers(this._state.pages.contactUs, action)
        this._subscriber(this._state)

    }
}


export default store;
window.store = store;