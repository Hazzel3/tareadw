const express = require ("express");
const router = express.Router();
const customHeader = require("../middleware/customHeader")
const {validatorGetItem, validatorCreateItem}=require("../validators/users")
const {getItems, 
       getItem, 
       createItem,  
       deleteItem}=require("../controllers/users");

router.get("/",getItems)

router.get("/:id",validatorGetItem,getItem);

router.post("/", validatorCreateItem, createItem);

router.delete("/:id", validatorGetItem, deleteItem);

module.exports=router;