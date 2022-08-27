const {handleHttpError} = require("../utils/handleError");
const fs = require ("fs")
const {matchedData} = require("express-validator")
const {storageModel} = require("../models");

const PUBLIC_URL = process.env.PUBLIC_URL;
const MEDIA_PATH =`${__dirname}/../storage`;


const getItems = async (req, res) => {
    try{
        const data = await storageModel.find({});
        res.send({data})
    }catch(e){
        handleHttpError(res,'ERROR_LIST_ITEMS')
    }
    
};

const getItem = async (req, res) => {
    try{
        const {id} = matchedData(req)
        const data = await storageModel.findById(id);
        res.send({data})
    }catch(e){
        handleHttpError(res,'ERROR_DETAIL_ITEMS')
    }
    
};


const createItem = async (req, res) => {
    try{
        const {file} = req;
        const fileData ={
        filename: file.filename,url:`${PUBLIC_URL}/${file.filename}`};
        const data = await storageModel.create(fileData)
        res.send({data})
    }catch(e){
        handleHttpError(res,'ERROR_INSERT_ITEM')
    }
    
};

const deleteItem = async (req, res) => {
    try{
        const {id} = matchedData(req)
        const {filename} = dataFile;
        const dataFile = await storageModel.findById(id);
        const filePath =`${MEDIA_PATH}/${filename}`

        fs.unlinkSync(filePath)
        const data = {
            filePath, 
            deleted:1
        }
        res.send({data});
    } catch(e){
        handleHttpError(res,'ERROR_DELETE_ITEM')
    }
    
};


module.exports = {  getItem, getItems, deleteItem, createItem };