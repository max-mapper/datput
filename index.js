var request = require('request')
var series = require('run-series')
var fs = require('fs')
var api = 'http://localhost:6461/api'

module.exports = function(files) {
  var fns = files.map(function(f) {
    return function(cb) {
      request.post({url: api, json: true}, function(err, resp, doc) {
        var uploadURL = api + '/' + doc.id + '/' + f + '?version=' + doc.version
        var upload = request.post({url: uploadURL, json: true}, function(err, resp, updated) {
          if (err) return cb(err)
          cb(null, updated)
        })
        fs.createReadStream(f).pipe(upload)
      })
    }
  })
  series(fns, function(err, results) {
    if (err) throw err
    results.map(function(r) {
      console.log(JSON.stringify(r))
    })
  })
}