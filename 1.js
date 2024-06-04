const expr = require ("express")
const path = require ("path");
const app = expr();
// From here it will load HTML file from public folder but name of file must be index.html
const staticpath = path.join(__dirname,"../public");
app.use(expr.static(staticpath))
console.log(__dirname);
app.listen (5200)