const axios = require('axios')

const user = {
    async getUser(userAnswer){
        try {
            let response = await axios

            .get (`https://api.github.com/users/${userAnswer.username}`)
            return response.data
        } catch (error){
            console.log(error)
        }
    }
}

module.exports = user