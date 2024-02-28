import { ActorEntity } from "../entities/Actor.entity.js";
import { ERRORS, SUCESS } from "../shared/messages.js";

const createActor = async (req, res) => {
    try {
        await ActorEntity.sync();
        const { first_name, last_name, dateOfBirth, nationality, gender, awards } = req.body;
        const newActor = await ActorEntity.create({
            first_name, last_name, dateOfBirth, nationality, gender, awards
        });
        res.status(201).json({ message: `Ator/Atriz ${SUCESS.CREATED}`, newActor });
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

const getAllActors = async (req, res) => {
    try {
        const actors = await ActorEntity.findAll();
        res.json({ actors });
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

const getActorById = async (req, res) => {
    try {
        const { id } = req.params;
        const actorId = await ActorEntity.findByPk(id);
        if (!actorId) {
            return res.json({ message: `Ator/Atriz ${ERRORS.NOT_FOUND}` });
        }
        res.json({ actorId });
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

const getActorByName = async (req, res) => {
    try {
        const { first_name } = req.body;
        const actorName = await ActorEntity.findOne({
            where: {
                first_name
            }
        });
        if (!actorName) {
            return res.json({ message: `Ator/Atriz ${ERRORS.NOT_FOUND}` });
        }
        res.json({ actorName });
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

const updateName = async (req, res) => {
    try {
        const { id } = req.params;
        const { new_first_name } = req.body;
        const actorId = await ActorEntity.findByPk(id);
        if (!actorId) {
            return res.json({ message: `Ator/Atriz ${ERRORS.NOT_FOUND}` });
        }
        await ActorEntity.update({ first_name: new_first_name }, {
            where: {
                id
            }
        });
        const messageUpdate = await ActorEntity.findByPk(id);
        res.json({ messageUpdate });
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

const deleteActor = async (req, res) => {
    try {
        const { id } = req.params;
        const actorId = await ActorEntity.findByPk(id);
        if (!actorId) {
            return res.json({ message: `Ator/Atriz ${ERRORS.NOT_FOUND}` });
        }
        await ActorEntity.destroy({
            where: {
                id
            }
        })
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

export { createActor, getAllActors, getActorById, getActorByName, updateName, deleteActor }