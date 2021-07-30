var express = require('express');
var router = express.Router();
const Us = require('../controllers/persons');

router.use(express.json());
/*--------------------------------------------------------------------------*/
//GET :  RETURN ALL USERS 
router.get('/', Us.getUsers)
/*----------------------xx------------------------xx------ */
//POST :  ADD A NEW USER TO THE DATABASE  
router.post('/', Us.addUser)
/*-----------------------------xx----------xx----------------------*/

// PUT || PATCH : EDIT A USER BY ID
router.put("/:id", Us.updateUserById)

/*---------------------------------------*/
// DELETE : REMOVE A USER BY ID
router.delete('/deleteUser/:id', Us.deleteUserById)

module.exports = router;
