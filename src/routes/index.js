const {Router} = require('express');
const router = Router();


router.get('/',(req,res) =>{
    const data = {
        "name": "Yose",
        "lastName": "Rodriguez"

    };
    res.json(data);
});

module.exports = router;
