import express from 'express'


const router = express.Router()

router.get('/', (req, res)=> {
    res.send(['1', '2', '3'])
})

router.post('/', (req, res)=> {
    res.send({'hello': 'world'})
})

router.get('/cartitas',(req,res)=>{
    console.log('cartitas')
    res.send('ruta de cartas')
});

export default router
//npm run dev