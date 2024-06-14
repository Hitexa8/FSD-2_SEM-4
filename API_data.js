const expr=require("express")
const router=expr.Router()

const mvi = [{id:101,name:"DON-1",Year:2013,rating:9.5},
{id:102,name:"DON-2",Year:2016,rating:9.5},
{id:103,name:"DON-3",Year:2103,rating:100}]
module.exports=router
router.get("/",(req,res)=>
{
res.json(mvi)
})
//for specific
router.get("/:id([0-9]{3,})",(req,res)=>
{
var currmovie=mvi.filter((m)=>
{
if(m.id==req.params.id)
{
return true
}
})
if(currmovie.length==1)
{
res.json(currmovie[0])
}
else{
res.json("not found")
}
})