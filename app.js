const reddit = require('redditor')
const argv = process.argv[2];

//http://www.reddit.com/r/subreddit/new.json?sort=new
//http://www.reddit.com/r/subreddit/top/.json?sort=top

if (argv === '--help' || argv == undefined){
    console.log('my favourite subs : \n dankmemes\n programmerhumor\n memes');
    console.log('type reddit subreddit');
} else {
    reddit.get(`/r/${argv}/new.json?sort=new`, (err, res) => {
        if (err) throw err;
        let r = res.data.children;
        r.forEach(post => {
            let url = post.data.url
            let title = post.data.title;
            if (url.indexOf('.png') !== -1 || url.indexOf('.jpg') !== -1 || url.indexOf('.gif') !== -1){
                console.log(`${title}\n → ${url} \n`);
            }
        });
    })  
}