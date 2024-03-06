import { DirectorEntity } from "../entities/Director.entity.js";
import { ERRORS, SUCESS } from "../shared/messages.js" 

class DirectorService {
    async createDirectorService (name, nationality, dateOfBirth) {
        try {
            await DirectorEntity.sync()
            const newDirector = await DirectorEntity.create({
                name,
                nationality,
                dateOfBirth
            })
            return newDirector
        } catch (error) {
            return error;               
        }
    } 
    async getAllDirectorService(){
        try {
            const directors = await  DirectorEntity.findAll(); 
            return directors;
        } catch (error) {
            return error;
        }
    };
    async getDirectorByIDService(id){
        try {
            const directorID = await DirectorEntity.findByPk(id);
            if (!directorID) {
                return `Diretor ${ERRORS.NOT_FOUND}`
            } 
            return directorID;
        } catch (error) {
            return error;
        }
    } 

    async getDirectorByNameService(name) {
        try {
            const directorName =  await DirectorEntity.findAll({
                where: {
                    name
                }
            });
            if(!directorName){
                return `Diretor ${ERRORS.NOT_FOUND}`
            }
            return directorName;
        } catch (error) {
            return error
        }
    }
    
    async updateNameService(id, newName){
        try {
            const directorID = await DirectorEntity.findByPk(id);
            if (!directorID) {
                return `Diretor ${ERRORS.NOT_FOUND}`;
            }
            await DirectorEntity.update({name: newName}, {
                where: {
                    id 
                }
            })
            const messageUpdate = await DirectorEntity.findByPk(id);
            return messageUpdate;
        } catch (error) {
            return error;
        }
    }

    async updateNationalityService(id, newNationality){
        try {
            const directorID = await DirectorEntity.findByPk(id);
            if (!directorID) {
                return `Diretor ${ERRORS.NOT_FOUND}`;
            }
            await DirectorEntity.update({nationality: newNationality}, {
                where: {
                    id 
                }
            })
            const messageUpdate = await DirectorEntity.findByPk(id);
            return messageUpdate;
        } catch (error) {
            return error;
        }
    }

    async updateDateOfBirthService(id, newDateOfBirth){
        try {
            const directorID = await DirectorEntity.findByPk(id);
            if (!directorID) {
                return `Diretor ${ERRORS.NOT_FOUND}`;
            }
            await DirectorEntity.update({dateOfBirth: newDateOfBirth}, {
                where: {
                    id 
                }
            })
            const messageUpdate = await DirectorEntity.findByPk(id);
            return messageUpdate;
        } catch (error) {
            return error;
        } 
    }

    async deleteDirectorService(id){
        try {
            const directorID = await DirectorEntity.findByPk(id);
            if(!directorID){
                return `Diretor ${ERRORS.NOT_FOUND} parceiro! adios🔫`
            }
            await DirectorEntity.destroy({where:{id}}); 
            return `O diretor ${SUCESS.DELETED}!`;
        } catch (error) {
            return error;
        }
    }

    
}

export { DirectorService };