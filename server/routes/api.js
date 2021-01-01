import { Router } from 'express'
import Post from '../model/Post'

const router = Router()

router.route('/w').get((req,res)=>{
  res.send('express')
})

router.route('/postdata').post((req,res)=>{
  let pd = new Post(req.body)
  console.log(pd)
  pd.save()
})

router.route('/getdata').get(async (req,res)=>{
  // Post.find((err , data)=>{
  //   if(err){
  //     console.log(err)
  //   }else{
  //      res.json(data)
  //   }
  // })

  const data = await Post.find({})
  return res.json(data)
})


export default router
