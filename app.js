const reddit = require('redditor')
const color = require('./color');
const subr = process.argv[2];
let sortBy = process.argv[3];

function urlGenerator(){
    sortBy == undefined ? sortBy = 'hot' : sortBy = sortBy.toLowerCase();
    switch (sortBy) {
        case 'new':
            return `/r/${subr}/new.json?sort=new`;
            break;
        case 'top':
            return `/r/${subr}/top.json?sort=top`;
            break;
        case 'hot':
            return `/r/${subr}/hot.json?sort=hot`;
            break;
    }
}

if (subr === '--help' || subr == undefined){
    console.log(`Parameters : ${color.title('reddit subreddit sortby')}`);
    console.log('   Subreddit :    All subreddits available');
    console.log('Sort by :');
    console.log('   Hot :  Upvoted growing memes');
    console.log('   Top :  Best memes of the past 24 hours');
    console.log('   New :  Freshly new memes');
} else {
    reddit.get(urlGenerator(), (err, res) => {
        if (err) throw err;
        let r = res.data.children;
        r.forEach(post => {
            let img = post.data.url;
            let title = post.data.title;
            if (img.indexOf('.png') !== -1 || img.indexOf('.jpg') !== -1 || img.indexOf('.gif') !== -1){
                console.log(`${color.title(title)}\n ${color.arrow(' →')} ${img} \n`);
            }
        });
    })  
}