import { ActorEntity } from "../entities/Actor.entity.js";

class ActorService {
    async createActorService(first_name, last_name, dateOfBirth, nationality, gender, awards) {
        try {
            await ActorEntity.sync();
            const newActor = await ActorEntity.create({
                first_name, last_name, dateOfBirth, nationality, gender, awards
            });
            return newActor;
        } catch (error) {
            return error;
        }
    }

    async getAllActorsService() {
        try {
            const actors = await ActorEntity.findAll();
            return actors;
        } catch (error) {
            return error;
        }
    }

    async getActorByIdService(id) {
        try{
            const actorId = await ActorEntity.findByPk(id);
            if(!actorId){
                return `Ator/Atriz não encontrado(a)`
            }
            return actorId;
        } catch (error) {
            return error;
        }
    }

    async getActorByNameService(first_name){
        try{
            const actorName = await ActorEntity.findOne({
                where: {
                    first_name
                }
            });
            if(!actorName){
                return `Ator/Atriz não encontrado!`
            }
            return actorName;
        } catch (error) {
            return error;
        }
    }

    async updateFistNameService(id, new_first_name){
        try{
            const actorId = await ActorEntity.findByPk(id);
            if(!actorId){
                return `Ator/Atriz não encontrado(a)`
            }
            await ActorEntity.update({ first_name: new_first_name }, {
                where: {
                    id
                }
            });
            const messageUpdate = await ActorEntity.findByPk(id);
            return messageUpdate;

        } catch (error) {
            return error;
        }
    }

    async deleteActor(id){
        try{
            const actorId = await ActorEntity.findByPk(id);
            if(!actorId){
                return `Ator/Atriz não encontrado(a)`
            }
            await ActorEntity.destroy({
                where: {
                    id
                }
            });
            return `Deletado com sucesso!`
        } catch (error) {
            return error;
        }
    }
}

export { ActorService }