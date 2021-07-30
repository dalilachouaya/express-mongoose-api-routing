// create all the handlers for our routes 
/* import model schema */

const person = require('../models/User');
                     /*---------------------- */
// get all the users => find //
const getUsers = async(req,res)=>{
    try {
        const result = await person.find()
        res.status(201).send({res:result , msg:' success '})
    } catch (error) {
        res.status(409).send('Failure')
    }
}
                       /*---------------------- */
// add a user .save//
const addUser = async (req,res)=>{
    try {
            console.log(req.body)
            const newPerson= new person(req.body);
            const  response = await newPerson.save();
            res.status(201).send({res:response, msg:'person is added:)'})
    } catch (error) {
        res.status(409).send("cannot add this person :(")
        console.log(error)
    }
}
                    /*---------------------- */

// delete person by id => deleteOne //
const deleteUserById = async (req,res)=>{
    try {
        const result = await person.deleteOne({"_id" : req.params.id})
        result.deletedCount ? 
        res.send({  msg:'successfully deleted'}) :  res.send({  msg:'User  is already deleted '})
    } catch (error) {
        res.status(400).send('Oops ,User is not  deleted')
    }
}

/*-----------------------------------*/

    // Update { id , content(body)}  update => put 

const updateUserById = async(req,res)=>{
        try {
            const result = await User.updateOne({"_id" : req.params.id },{$set: {...req.body}})
            result.nModified ?    
            res.send({ msg:"the data is  updated"}) :  res.send({  msg:'the data is already updated '})
        } catch (error) {
            res.status(400).send('There is no updata!!!')
            
        }
    }


/*---------xx ------------xx--------------*/

module.exports = {
    getUsers,
    addUser,
    deleteUserById,
    updateUserById ,
    };