// Syntax
// 1)Input Express
var expr = require("express")
var app = expr()

// 2)Reading
app.method(path,callback)
{
res.set(("content-type",MIMETYPE))
res.status()
res.write("hello world")
res.send()
// res.write("hello world")
}

// Note: Like node JS we cannot set headers
// after they are sent to the client. Means if we
// send response by writing in “res.write()” then
// “res.send()” must be blank.

// Method:-               Description:-
// res.end()              End the response process.
// res.json()             Send a JSON response.
// res.redirect()         Redirect a request.
// res.render()           Render a view template.
// res.send()             Send a response of various types.
// res.sendFile()         Send a file as an octet stream.
