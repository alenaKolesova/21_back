const express = require('express')
const app = express()
const port = 2000
var cors = require('cors')

app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/api/serial', (req, res) => {
    res.json({
        'name': 'Одни из нас (Last of us)',
        'poster': 'https://i.postimg.cc/7hSmdqGc/754032d6c9aa27def56f4eff82223370.jpg',
        'actors' : [
            'Joel Miller',
            'Bella Ramsey',
            'Anna Torv',
            'Gabriel Luna',
            'Lamar Johnson'
        ],
        'description': 'В конце сентября 2003 года по всей планете произошло массовое заражение людей кордицепсом. Прежде паразитировавший только на насекомых гриб приспособился выживать в человеческом теле, полностью подчиняя себе волю носителя и меняя его облик. В первый же день оказавшийся в эпицентре пандемии строитель Джоэл понёс невосполнимую утрату.'  
 
    })
})

app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`)
})