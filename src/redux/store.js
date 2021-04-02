const store = {
    _subscriber() {
    },
    _store: {
        header: {
            header_menu: [
                {
                    title: "Home",
                    link: "/",
                },
                {
                    title: "Blog",
                    link: "/blog"
                },
                {
                    title: "About us",
                    link: "about-us"
                },
                {
                    title: "Contact Us",
                    link: "contact-us"
                }
            ]
        },
        pages: {
            home: {
                slider_images: ['/images/homeSliderImages/home_slider_1.jpg', '/images/homeSliderImages/home_slider_2.jpg', '/images/homeSliderImages/home_slider_3.jpg', '/images/homeSliderImages/home_slider_4.jpg'],
                about_img:["/images/home_about_img.jpg"],
                about_title: "About us",
                about_text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum officia sed reiciendis, repellat esse explicabo nisi magni? Voluptatibus illo magni atque, rerum vel enim excepturi? Enim nobis illo saepe reprehenderit.",
                
            },
            blog: {
                blog_info: [
                    {img: '/images/pages/blog/news-1.jpg', title: "About our company" , text: "An About Us page helps your company make a good first impression, and is critical for building customer trust and loyalty. An About Us page should make sure to cover basic information about the store and its founders, explain the company's purpose and how it differs from the competition, and encourage discussion and interaction. Here are some free templates, samples, and example About Us pages to help your ecommerce store stand out from the crowd."},
                    {img: '/images/pages/blog/news-2.png' ,title: "Come join us" , text:"When it comes to personalizing your online store, nothing is more effective than an About Us page. This is a quick summary of your company's history and purpose, and should provide a clear overview of the company's brand story. A great About Us page can help tell your brand story, establish customer loyalty, and turn your bland ecommerce store into an well-loved brand icon. Most importantly, it will give your customers a reason to shop from your brand."},
                    {img: '/images/pages/blog/news-1.jpg', title: "About our company" , text: "An About Us page helps your company make a good first impression, and is critical for building customer trust and loyalty. An About Us page should make sure to cover basic information about the store and its founders, explain the company's purpose and how it differs from the competition, and encourage discussion and interaction. Here are some free templates, samples, and example About Us pages to help your ecommerce store stand out from the crowd."},
                    {img: '/images/pages/blog/news-2.png' ,title: "Come join us" , text:"When it comes to personalizing your online store, nothing is more effective than an About Us page. This is a quick summary of your company's history and purpose, and should provide a clear overview of the company's brand story. A great About Us page can help tell your brand story, establish customer loyalty, and turn your bland ecommerce store into an well-loved brand icon. Most importantly, it will give your customers a reason to shop from your brand."},
                ]
            },
            contactUs: {

            },
            aboutUs: {

            }
        },
        footer: {
            footer_menu: [
                {
                    title: "Home",
                    link: "/"
                },
                {
                    title: "Blog",
                    link: "/blog"
                },
                {
                    title: "About Us",
                    link: "about-us"
                },
                {
                    title: "Contact Us",
                    link: "contact-us"
                }
            ]
        }
    },
    getState() {
        return this._store;
    },
    subscribe(osberver) {
        this._subscriber = osberver;
    },

    dispatch(action) {

    }
}

export default store;
window.store = store;