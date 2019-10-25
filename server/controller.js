const bcrypt = require('bcryptjs')

module.exports = {
    register: async (req, res) => {
        const db = req.app.get('db')

        const {username, password} = req.body
        let foundUser = await db.check_user([username])
        if(!foundUser){
            res.status(401).send('username already exists');
        }
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        
        let newUser = await db.register_user({username, password: hash});
        res.status(200).send('you have been registered');  
    }, 
    login: async(req, res) => {
        const {username, password} = req.body;
        const db = req.app.get('db')

        let foundUser = await db.check_user(username);
        foundUser = foundUser[0];
        if(!foundUser){
            res.status(401).send('username dont exist')
        }
        const authenticated = bcrypt.compareSync(password, foundUser.password);

        if(authenticated){
            delete foundUser.password;
            res.status(200).send('logged in')
        }
    },
    
}