# bash completion support for git-extras.

_git_resume(){
  __gitcomp "$(__git_heads)"
}
