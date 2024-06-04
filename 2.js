const expr = require ("express")
const path = require ("path");
const app = expr();
const staticpath = path.join(__dirname,"../public");
app.use(expr.static(staticpath,{index:"2.html"})); 
app.listen(5200)