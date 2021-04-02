const store = {
    _subscriber(){
    },
    _store:{
        header:{
            header_menu:[
                {
                    title:"Home",
                    link:"/",
                },
                {
                    title:"Blog",
                    link:"/blog"
                },
                {
                    title:"About us",
                    link:"about-us"
                },
                {
                    title:"Contact Us",
                    link:"contact-us"
                }
            ]
        },
        pages:{
            home:{
                slider_images : ['/images/homeSliderImages/home_slider_1.jpg','/images/homeSliderImages/home_slider_2.jpg','/images/homeSliderImages/home_slider_3.jpg','/images/homeSliderImages/home_slider_4.jpg']
            },
            blog:{

            },
            contactUs:{

            },
            aboutUs:{

            }
        },
        footer:{
            footer_menu:[
                {
                    title:"Home",
                    link:"/"
                },
                {
                    title:"Blog",
                    link:"/blog"
                },
                {
                    title:"About Us",
                    link:"about-us"
                },
                {
                    title:"Contact Us",
                    link:"contact-us"
                }
            ]
        }
    },
    getState(){
        return this._store;
    },
    subscribe(osberver){
        this._subscriber = osberver;
    },

    dispatch(action){

    }
}

export default store;
window.store = store;