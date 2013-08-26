##Git feature-branch helpers for saving and resuming progress

###How to Install

```sh
$ npm install -g git-wip
```

###Commands
####git wip
####git unwip
####git resume some-feature-branch

*for more git feature branch helper commands checkout [git-fb](https://github.com/tjmehta/git-fb)

###Documentation
####git wip
```sh
$ git wip
```
* alias for 'git stash save wip'

####git unwip
```sh
$ git unwip
```
* finds first stash for current branch and pops it

####git resume
```sh
$ git resume <branch>
```
* alias for ```git checkout <branch>; git unwip;```

##License
MIT

