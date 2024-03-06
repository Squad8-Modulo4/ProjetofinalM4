import { DirectorService } from "../services/director.service.js";

const instanceDirectorService = new DirectorService();    
const createDirector = async(req, res) => { 
    const {name, nationality, dateOfBirth} = req.body;  
    const newDirector = await  instanceDirectorService.createDirector({name, nationality, dateOfBirth})
    res.json({newDirector}).status(201);        
};



const getAllDirectors = async (req,res) => {
    const directors = await instanceDirectorService.getAllDirectorService();
    res.json({directors});
};

const getDirectorByID = async (req, res) => {
    const {id} = req.params;
    const directorID = await instanceDirectorService.getDirectorByID(id); 
    res.json({directorID});
};

const getDirectorByName = async (res,req) => {
    const {name} = req.body;
    const directorName = await instanceDirectorService.getDirectorByName(name);
    res.json({directorName});
};


const updateNameDirector = async (req,res) => {
    const {id} = req.params;
    const {newName} = req.body;
    const updateName =  await instanceDirectorService.updateNameDirectorService(id, newName);
    res.json({updateName});
};

const updateNationalityDirector = async (req,res) => {
    const {id} = req.params;
    const {newNationality} = req.body;
    const updateNationality =  await instanceDirectorService.updateNationalityService(id, newNationality);
    res.json({updateNationality}); 
};

const updateDateOfBirthDirector = async (req,res) => {
    const {id} = req.params;
    const {newDateOfBirth} = req.body;
    const updateDateOfBirth =  await instanceDirectorService.updateDateOfBirthService(id, newDateOfBirth);
    res.json({updateDateOfBirth});
}; 


const deleteDirector = async (req,res) => {
    const {id} = req.params;
    const deleteDirector = await instanceDirectorService.deleteDirectorService(id);
    res.json({deleteDirector});
};


export { createDirector, getAllDirectors, getDirectorByID, getDirectorByName, updateNameDirector, updateDateOfBirthDirector, updateNationalityDirector, deleteDirector };