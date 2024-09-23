const express = require('express');
const cors = require('cors');
const {default: axios} = require('axios');

const app = express();
app.use(express.json());
app.use(cors({origin: true}));


app.post('/authenticate', async (req, res) => {
    const { username } = req.body;

    try {
        const r = await axios.put(
            'https://api.chatengine.io/users/',
            {username: username, secret: username, first_name: username},
            {headers: {"Private-Key": "411b5d7d-4bff-4324-b898-397388fedf50"}}
        );
        return res.status(r.status).json(r.data);
    } catch (e) {
        return res.status(e.response.status).json(e.response.data);
    }
});


app.listen(3001);



