## Git helpers for saving and resuming progress

#### For a complete set of git feature-branch helper commands checkout [git-fb](https://github.com/tjmehta/git-fb)

## Bash Commands
#### ```git wip```
#### ```git unwip```
#### ```git resume some-feature```

## Requirements

Node.js - [Download here](http://nodejs.org/download/)

## How to Install

```sh
$ npm install -g git-wip
```

## Documentation
#### git wip
```sh
$ git wip
```
* alias for ```git add .; git commit -m __wip;```

#### git unwip
```sh
$ git unwip
```
* checks if last commit is a wip and ```git reset HEAD^```

#### git resume
```sh
$ git resume <branch>
```
* alias for ```git checkout <branch>; git unwip;```

## License
MIT

