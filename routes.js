const express = require('express');
const { spawn } = require('child_process');
var router = express.Router();

router.get('/', (req, res)=> {
  res.render('main')
})

router.get('/python', (req, res)=> {
  res.render('python')
})

router.post('/python', (req,res)=>{
  res.setHeader('Content-Type', 'application/json');
  //^is this neccesary?
  res.send(JSON.stringify(req.body));
})

module.exports = router;
