##Git feature-branch helpers for saving and resuming progress

###How to Install

```sh
$ npm install -g git-wip
```

###Commands
```sh
$ git wip
```
* alias for 'git stash save wip'


```sh
$ git unwip
```
* finds first stash for current branch and pops it


```sh
$ git resume <branch>
```
* alias for ```git checkout <branch>; git unwip;```


