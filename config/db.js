const mongoose = require('mongoose');

// MJL2B93Br22VxbyE
// mongodb+srv://iamshaifahmed:<db_password>@cluster0.b4hdq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

const db = async ()=> {
    try {

        const dbUrl = `mongodb+srv://iamshaifahmed:MJL2B93Br22VxbyE@cluster0.b4hdq.mongodb.net/data?retryWrites=true&w=majority&appName=Cluster0`

        await mongoose.connect(dbUrl)
        console.log('database connected')
    } catch (error) {
        console.log('database connected faield')
        process.exit(1)
    }

}

module.exports = db