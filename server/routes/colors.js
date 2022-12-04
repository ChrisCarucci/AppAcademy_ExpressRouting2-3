const express = require('express')
const router = express('router')


router.get('/', (req, res) => {
    res.Json('GET /colors');
})

router.get('/:name', (req, res) => {
    const name = req.params.name;
    res.Json(`GET /colors/${name}`)
})

router.post('/:name/css-styles/:style', (req, res) => {
    const name = req.params.name;
    const style = req.params.style;
    res.json(`POST /${name}/css-styles/${style}`)
})

router.delete('/:name/css-styles/:style', (req, res) => {
    const name = req.params.name;
    const style = req.params.style;
    res.json(`DELETE /${name}/css-styles/${style}`)
})


module.exports = router;