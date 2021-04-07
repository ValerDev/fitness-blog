const NAME = 'NAME';
const EMAIL = 'EMAIL';
const MESSAGE = 'MESSAGE';

let initialState = {
    contact_us: {
        name: '',
        email: '',
        message: '',
    },
    blog_info : [
        { img: '/images/pages/blog/news-1.jpg', id: "about-our-company", title: "About our company", text: "An About Us page helps your company make a good first impression, and is critical for building customer trust and loyalty. An About Us page should make sure to cover basic information about the store and its founders, explain the company's purpose and how it differs from the competition, and encourage discussion and interaction. Here are some free templates, samples, and example About Us pages to help your ecommerce store stand out from the crowd." },
        { img: '/images/pages/blog/news-2.png', id: "come-join-us", title: "Come join us", text: "When it comes to personalizing your online store, nothing is more effective than an About Us page. This is a quick summary of your company's history and purpose, and should provide a clear overview of the company's brand story. A great About Us page can help tell your brand story, establish customer loyalty, and turn your bland ecommerce store into an well-loved brand icon. Most importantly, it will give your customers a reason to shop from your brand." },
     ]
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