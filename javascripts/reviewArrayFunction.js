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
    },
    "I think this is good to use and to discover more",
    {
        content: "New to Bible study but I think this app is really useful. I like the search and the strongs accordance tie in. Thank you so much!",
        stars: 4
    },
    "Great app! Thanks!",
    "Easy to read Bible, no flashing or annoying details",
    "The best Bible app on the entire Playstore !! Different versions of the Bible, commentaries, Hebrew and Greek lexicons to verify original words, quick word search. In short, a must have for every Christian. I highly recommend",
    "Unique app, does a great job ..... read, and tag with pleasure. I highly recommend it to the lovers of the Living, God's, Word.",
    "Awesome! Well-built!",
    "For the study of the Bible it is good 5 stars",
    "Perfect app for reading bible anywhere, anytime with bookmarks",
    "This is the best Bible study/Quiet time app for me. New additions like the Study Blocks, put this app in a class of its own. I will recommend this app for anyone that is serious about reading and studying the Word of God. My gratitude goes to each and everyone that contributes to this project. If there was a way to pay for translations that is not available due to copyright restrictions, then this would be the ultimate Bible app.",
    "the best, and minimal permissions too.",
    "5 stars is useful for bible studies thank you very much.",
    "Very convenient to use",
    "Thanks for the links and embedded notes! Also, the ability to watch multiple texts at once and compare different translations is great. Thanks!",
    "Amazing app lots of resources. The speak a loud option is really convinient. It should be available for documents, too. Perhaps next version. Lord bless you!! GOD be thanked for all of you who participate in the project.",
    "Really, really congratulations to your team, your application is really very very useful, all in one Thank you very much. I recommend it to everyone",
    "Simply user-friendly and, most importantly, free.",
    "Well done is very useful for bible study ...",
    "Best Bible app. Easy to quickly find passages at church. So helpful. Love the new update!!!",
    "OUTSTANDING! The best bible study app there is—100% FREE! The recent update has essentially given us a brand new app, and that deserves a brand new review. ALL of my bookmarks and notes transfered SEAMLESSLY. From the menu, click Help & tips for links to tutorial videos.",
    "Really Good. Thank you so much for all the hard work. May God reward you abundantly.",
    "The best app of all Bibles !!! What great fellows you are, thank you for your service !! Many thanks to the developers for this free app! Glory to Jesus!",
    "very good 👍 👏 👌",
    {
        stars: 4,
        content: "I am pleasantly surprised about the update. As in the video, marks everything okay. Still has to get used to innovation. Now app building is much better. Thank you for the app and God's blessing continues. Romans 1: 11,12",
    },
    "Very good bible tool",
    "This app has come a long way. It is now my favorite study tool on Android platforms. Excellent work! - Sept2021 update is great, project continues to impress!",
    "Great app for reading Bible, commentaries, strings translations, multiple translations etc.",
    "My Very Best Bible app so far For years now I have looked out for this app I love it and it's an amazing app, all-in-one kind of Bible app. Thank you Best Bible app I have ever used",
    "I am a bible scholar, I am in the word for hours each day. I have tried every bible app on the planet and this is by far the best and easiest to use.",
    "Very nice Apps for growth on spiritual life...//Thanks very much// 👍",
    "Best bible app ,I thought I lost the app searched for like 3 hours for it.thank you for this tool 🔥",
    "Two thumbs up for the new 4.0 version! Thanks! (I'm using it on a chromebook. Works great!)",
    "Multiple workspaces are nice when I'm following a study plan with passages for both New testament and Old testament - and a separate workspace for just jumping to various books & verses. I like to split the window in parts so I can look to a meaning of Greek word from dictionary or keep my personal notes open. Bookmarks and notes are also private, not always shared with friends. I like to keep focus on the Word of God and I think this app is better focused on the Word than some other Bible apps.",
    "Best study Bible I have used",
    "Thank you very much for your work! It is really very convenient to study the Bible.",
    "My favorite thing about the 4.0 update is that, when you enter a note, the note field unobtrusively pops up above the keyboard. Often in apps, calling up the keyboard gives a text field above it that covers the rest of the screen, or worse the keyboard covers the field one is entering text into.",
    'Probably the most comprehensive free Bible program for Android. The only "shortcoming" is the lack of commercial Bible editions (such as Luther Bible, NGÜ, etc.). However, this is not due to the program, but to the Bible societies, which do not license their translations for this program (or others).',
    "Been using this app for years. It took some time to understand how to navigate but now I've got it! I got 4.0 on my phone but screen real estate is so limited I can't use all the new features. Will be glad when the tablet update is out. It's not a problem with the app. It's just that the phone is small and my fingers are big.",
    "11/18/20 I have used the Bible Study app for many years. It's top notch and problem free. Navigation is superb. ⭐⭐⭐⭐⭐",
    "Loving the enhancements recently made, really great thanks, especially option of showing Strong's as fine dotted underline without the numbers showing, and the copy enhancements, and so on!",
    "🤗🙌",
    "The more I use it the more useful it is. ",
];

function addReviews(parent, num) {
    const reviews = reviewStore.slice();
    for (let i = 0; i< num; i++) {
        const random = Math.floor(Math.random() * reviews.length);
        const review = reviews[random];
        let content, by, stars, source;
        if(typeof review === 'string') {
            content = review;
            stars = 5;
            by = "";
            source = "Google Play";
        } else {
            ({content, by, stars = 5, source = "Google Play"} = review);
        }
        reviews.splice(random, 1);
        const e = document.createElement("div");
        e.classList.add("review-item");
        const star = "<span class='fa fa-star checked'></span>"
        let starStr = "";
        for (let i = 0; i < stars; i++) {
            starStr += star;
        }
        const byStr = by ? `<br/>-${by}` : "";
        e.innerHTML = `"<i>${content}</i> " ${byStr} <br/> ${starStr} <small>(Review from ${source})</small><hr/>`;
        parent.appendChild(e);
    }
}
document.addEventListener('DOMContentLoaded', (event) => {
    const parent = document.getElementById("review-container");
    addReviews(parent, 4);
 });
