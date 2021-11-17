const reviewStore = [
    {
        content: "The 'Bible Study App' (And Bible) for Android is so good that when I'm studying the Bible and I use desktop software I often find myself going back to my Android device because of ease of use and the many features that it has. It helps me to easily organize my thoughts with labels and study pads. The best Bible app for mobile and tablets, bar none!", // no need to have html there even.
        by: "T.B.",
        stars: 5, // default, no need to specify to every item
        source: "Google Play",  // default, no need to specify to every item
    },
    {
        content: "And Bible is the main reason I stay on Android. There's nothing else that provides this breadth and depth of resources. The fact that I'm carrying a complete Biblical Studies bookshelf in my pocket is truly amazing. All this for free? Miraculous!",
        by: "K.P.",
    },
    {
        content: "The And Bible app is a treasure trove of resources for Bible study.  This is the one app I use daily, whether it be for daily reading, family devotion, personal or group Bible study, or sermon prep. This app has surely been a blessing and has helped me in my walk with God.",
        by: "C.R.",
    },
    {
        content: "One of the most underrated Apps in the store. I wish the ratings system went to 10; this is the best app for Bible students. My hat is off to the developers. Some of the best translations and commentaries that currently exist are here... for free. How are all the reviews not 5 stars?",
        by: "J.F.",
    },
    {
        content: "If you are an Android user and don't have And Bible app, you're wasting your time on the others. By far the best free Bible app out there.",
        by: "D.F.",
    },
    {
        content: "This is a fantastic resource. I am a better Christian and a better steward of God's word for having ready access to it.",
        by: "J.L.",
    },
    {
        content: "This app has come a long way. It is now my favorite study tool on Android platforms. Excellent work! The September 2021 update is great; this project continues to impress me!",
        by: "J.B.",
    },
    {
        content: "This is an excellent, powerful, and free resource for studying the word of God. I love how the interface design is clean and simple, yet the wealth of information accessible to you is so extensive. I use it as an invaluable reference tool for commentaries, Greek translation, and Spanish and German translation when on gospel trips to South America and Germany. Though this app isn't perfect, it accomplishes its various functions very well. Thank you!",
        by: "G.A.",
    }
];

function addReviews(parent, num) {
    const reviews = reviewStore.slice();
    for (let i = 0; i< num; i++) {
        const random = Math.floor(Math.random() * reviews.length);
        const {content, by, stars = 5, source = "Google Play"} = reviews[random];
        reviews.splice(random, 1);
        const e = document.createElement("div");
        e.classList.add("review-item");
        const star = "<span class='fa fa-star checked'></span>"
        let starStr = "";
        for (let i = 0; i < stars; i++) {
            starStr += star;
        }
        e.innerHTML = `"<i>${content}</i> " <br/> <b>-${by}, And Bible user</b> <br/> ${starStr} <small>(${source})</small><hr/>`;
        parent.appendChild(e);
    }
}
document.addEventListener('DOMContentLoaded', (event) => {
    const parent = document.getElementById("review-container");
    addReviews(parent, 4);
 });