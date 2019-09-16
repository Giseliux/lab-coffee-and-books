const Place =require('../models/Place')

exports.deletePlace=async(req,res,next)=>{
  const {_id}=req.params
  await Place.findByIdAndDelete(_id)
  res.redirect('/lugares')
}

exports.updatePlace=async(req,res,next)=>{
  const {name, type, coordinates}=req.body
  
  const {placeid}=req.query
  console.log(placeid)
  await Place.findByIdAndUpdate(placeid,{name,type,coordinates})
  res.redirect('/lugares')
}