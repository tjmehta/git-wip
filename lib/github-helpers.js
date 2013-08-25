var keychain = require('keychain');
var exec     = require('child_process').exec;
var noop     = function () {};
var cleanStdout = function (strOrBuffer) {
  return strOrBuffer.toString().replace('\n', '');
};

var gitHubHelpers = module.exports = {
  getFirstStashForCurrentBranch: function (cb) {
    var stashRegex = /stash@\{([^}]+)\}:.*On ([^:]+):.*/g;
    this.branch(function (err, branch) {
      if (err) { cb(err); } else {
        exec('git stash list', function (err, stdout) {
          if (err) { cb(err); } else {
            var stashIndex = null;
            var match;
            while (!stashIndex && (match = stashRegex.exec(stdout))) {
              if (branch == match[2]) {
                stashIndex = parseInt(match[1]);
              }
            }
            cb(null, stashIndex);
          }
        });
      }
    });
  },
  popStash: function (index, cb) {
    var cmd = 'git stash pop stash@{:index}'.replace(':index', index);
    exec(cmd, function (err, stdout) {
      cb(err, !err && stdout);
    });
  },
  checkoutBranch: function (branch, cb) {
    exec('git checkout '+branch, function (err, stdout) {
      cb(err, !err && stdout);
    });
  },
  onError: function (err) {
    console.error(err.message);
    process.exit(err.code || 1);
  },
  branch: function (cb) {
    exec('git rev-parse --abbrev-ref HEAD', function (err, stdout, stderr) {
      cb(err, !err && cleanStdout(stdout));
    });
  }
};