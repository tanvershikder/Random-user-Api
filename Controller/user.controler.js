
let data = require('../user.data.json')
// console.log(data)

// all data and we can get limited data by using query
module.exports.gellAllusers = (req, res) => {
    const { limit } = req.query
    res.send(data.slice(0, limit))
}

// get random data 
module.exports.getRandom = (req, res) => {
    const randomData = data[Math.floor(Math.random() * data.length)]
    res.send(randomData)
}


module.exports.postUserData = (req, res) => {
    const userData = req.body
    if (userData) {
        if (userData.id && userData.name && userData.address && userData.gender && userData.photo_url && userData.contact) {
            data.push(userData)
            // console.log(data)
            res.send(data)
        }
        else if (!userData.id) {
            res.send("Id is not Available")
        }
        else if (!userData.name) {
            res.send("Name is not Available")
        }
        else if (!userData.contact) {
            res.send("contact is not Available")
        }
        else if (!userData.address) {
            res.send("address is not Available")
        }
        else if (!userData.gender) {
            res.send("gender is not Available")
        }
        else if (!userData.photo_url) {
            res.send("photo Url is not Available")
        }
        else {
            res.send('Please make sure all data are availble {id,name,gender,contact,address,photo_url')
        }
    }
    else {
        res.send("no data available to save")
    }

}


module.exports.patchUserData = (req, res) => {
    const patchData = req.body
    const id = Number(req.params.id)

    if (id) {
        const findData = data.find(dta => dta.id === id)

        if (patchData) {
            if (patchData.name) {
                findData.name = patchData.name
                res.send(data)
            }
            if (patchData.gender) {
                findData.gender = patchData.gender
                res.send(data)
            }
            if (patchData.contact) {
                findData.contact = patchData.contact
                res.send(data)
            }
            if (patchData.address) {
                findData.address = patchData.address
                res.send(data)
            }
            if (patchData.photo_url) {
                findData.photo_url = patchData.photo_url
                res.send(data)
            }
        }
    }

    // console.log(patchData);
    // console.log(filterData);

    res.send(data)

}



module.exports.patchMultipleuserData = (req, res) => {
    res.send("working")
}


module.exports.deleteUser = (req,res) =>{
    const {id} = req.params
    const deletedUser = data.filter(dta=>dta.id !== Number(id))
    res.send(deletedUser)
}