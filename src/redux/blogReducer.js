const COMMENT = 'COMMENT';
const ADD_COMMENT = 'ADD_COMMENT';
const REMOVE_COMMENT = 'REMOVE_COMMENT';

let initialState = {
    singleBlog: {
        comments: [
        ],
        comment: '',
    },
    blog_info: [
        {
            singleImg: '/images/pages/blog/post-1-big.jpg', img: '/images/pages/blog/news-1.jpg', id: "about-our-company", title: "About our company", text: `An About Us page helps your company make a good first impression, and is critical for building customer trust and loyalty. An About Us page should make sure to cover basic information about the store and its founders, explain the company's purpose and how it differs from the competition, and encourage discussion and interaction. Here are some free templates, samples, and example About Us pages to help your ecommerce store stand out from the crowd. When it comes to personalizing your online store, nothing is more effective than an About Us page. This is a quick summary of your company's history and purpose, and should provide a clear overview of the company's brand story. A great About Us page can help tell your brand story, establish customer loyalty, and turn your bland ecommerce store into an well-loved brand icon. Most importantly, it will give your customers a reason to shop from your brand.
        In this post, we'll give you three different ways to create a professional about us page for your online store, blog, or other website - use our about us page generator, use the fill-in-the-blank about us template below, or create your own custom page using the about us examples within this article.` },
        { singleImg: '/images/pages/blog/post-2-big.jpg', img: '/images/pages/blog/news-2.jpg', id: "come-join-us", title: "Come join us", text: "When it comes to personalizing your online store, nothing is more effective than an About Us page. This is a quick summary of your company's history and purpose, and should provide a clear overview of the company's brand story. A great About Us page can help tell your brand story, establish customer loyalty, and turn your bland ecommerce store into an well-loved brand icon. Most importantly, it will give your customers a reason to shop from your brand." },
        { singleImg: '/images/pages/blog/post-3-big.jpg', img: '/images/pages/blog/news-3.jpg', id: "building-muscles", title: "Building muscles", text: "This gives you an immediate burst of energy and helps you to stay full until your next meal or snack. It also sets the trend: you???ll tend to eat healthier if your day starts with a strong and healthy breakfast. Your best bets if your trying to build muscle mass are omelettes, smoothies and cottage cheese. Eating the right thing at the right time is crucial for helping you boost your muscle mass. The easiest way is to eat your breakfast, lunch and dinner as usual, interspersed with meals post workout, pre-bed and with two snacks in between. By keeping your food intake up, it will mean you won???t be as hungry, because eating smaller meals more often versus a few big meals will decrease your stomach size. You???ll feel full more quickly and your waist will trim, while you???ll also have fewer cravings. Not eating for long periods can cause you to over-eat at the next meal or topping yourself up with unhealthy snacks from the vending machine. So to stop any cravings, eat at fixed times every day and your body will get hungry at those fixed times. Most of them (not all) are low calorie: you can eat your stomach full without gaining fat or weight. Fruit and vegetables are also full of vitamins, minerals, antioxidants and fibre which helps digestion, but just be careful to check the sugar content of some fruits.Healthy fats improve fat loss and health as they digest slowly. Make sure you balance your fat intake, eat healthy fats with every meal and avoid artificial trans-fats and margarine." },
        { singleImg: '/images/pages/blog/post-4-big.jpg', img: '/images/pages/blog/news-4.jpg', id: "running-is-important", title: "Running is important", text: "Believe it or not, running is actually a great way to increase your overall level of health. Research shows that running can raise your levels of good cholesterol while also helping you increase lung function and use. In addition, running can also boost your immune system and lower your risk of developing blood clots., For women, running can actually help to lower your risk of breast cancer. It can also help reduce the risk of having a stroke. Many doctors today recommend running for people who are in the early stages of diabetes, high blood pressure, and osteoporosis, and it is proven to help reduce the risk of having a heart attack. By helping the arteries retain their elasticity and strengthening the heart, your chances of suffering a heart attack can be significantly reduced., Running is one of the best forms of exercise for losing or maintaining a consistent weight. You will find that it is a leading way to burn off extra calories and that it is the second most effective exercise in terms of calories burned per minute, following only after cross country skiing." },
        {
            singleImg: '/images/pages/blog/post-5-big.jpg', img: '/images/pages/blog/news-5.jpg', id: "drinking-water", title: "Drinking Water", text: `Americans seem to carry bottled water everywhere they go these days. In fact, it has become the second most popular drink (behind soft drinks). But water lovers got a jolt recently when we heard that a new report had found that the benefits of drinking water may have been oversold. Apparently, the old suggestion to drink eight glasses a day was nothing more than a guideline, not based on scientific evidence.
        But don't put your water bottle or glass down just yet. While we may not need eight glasses, there are plenty of reasons to drink water. In fact, drinking water (either plain or in the form of other fluids or foods) is essential to your health.
        "Think of water as a nutrient your body needs that is present in liquids, plain water, and foods. All of these are essential daily to replace the large amounts of water lost each day," says Joan Koelemay, RD, dietitian for the Beverage Institute, an industry group.
        Kaiser Permanente nephrologist Steven Guest, MD, agrees: "Fluid losses occur continuously, from skin evaporation, breathing, urine, and stool, and these losses must be replaced daily for good health," he says.
        When your water intake does not equal your output, you can become dehydrated. Fluid losses are accentuated in warmer climates, during strenuous exercise, in high altitudes, and in older adults, whose sense of thirst may not be as sharp.
        Here are six reasons to make sure you're drinking enough water or other fluids every day.`}
    ],
}


export const blogReducer = (state = initialState, action) => {
    switch (action.type) {
        case COMMENT:
            state.singleBlog.comment = action.payload
            return state
        case ADD_COMMENT:
            if(action.payload.text) state.singleBlog.comments.unshift(action.payload)
            state.singleBlog.comment = ''
            return state
        case REMOVE_COMMENT:
            state.singleBlog.comments = action.payload
            return state
        default:
            return state
    }
}
export const removeCommentActionCreator = (filteredComments) => ({type: REMOVE_COMMENT , payload: filteredComments})
export const addCommentCreator = (newComment) => ({ type: ADD_COMMENT, payload: newComment })
export const commentActionCreator = (newComment) => ({ type: COMMENT, payload: newComment })