## 📖 Reddit subs on your bash

We gonna create a repo to host our application
```
mkdir -p ~/app/reddit
```
Clone this git repo on our new folder
```
git clone https://github.com/jugurthak/reddit-on-bash.git ~/app/reddit/
```
### Then add it to bash aliases
Add this command on append of ~/.bashrc
```
alias reddit='node ~/app/reddit/app.js'
```
Now, refresh your bash with 
```
source ~/.bashrc
```

Have fun using reddit on bash 👍
```
reddit --help
```

## 🚀 TODO : 
- Display image directly on bash.
- Use some colors