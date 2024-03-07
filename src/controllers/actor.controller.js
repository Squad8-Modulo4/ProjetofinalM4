import { ActorService } from "../services/actor.service.js";
import { SUCCESS } from "../shared/messages.js";

const instanceActorService = new ActorService();

const createActor = async (req, res) => {
  const { first_name, last_name, dateOfBirth, nationality, gender, awards } = req.body;
  const newUser = await instanceActorService.createActorService(
    first_name,
    last_name,
    dateOfBirth,
    nationality,
    gender,
    awards,
  );
  res.status(201).json({
    message: `Ator/Atriz ${SUCCESS.CREATED}`,
    newUser,
  });
};

const getAllActors = async (req, res) => {
    const actors = await instanceActorService.getAllActorsService();
    res.json({actors});
}

const getActorById = async (req, res) => {
  const { id } = req.params;
  const actorId = await instanceActorService.getActorByIdService(id);
  res.json({ actorId });
};

const getActorByName = async (req, res) => {
  const { first_name } = req.body;
  const actorName = await instanceActorService.getActorByNameService(first_name);
  res.json({ actorName });
};

const updateFirstName = async (req, res) => {
  const { id } = req.params;
  const { new_first_name } = req.body;
  const firstNameUpdate = await instanceActorService.updateFistNameService(
    id,
    new_first_name,
  );
  res.json({ firstNameUpdate });
};

const deleteActor = async (req, res) => {
  const { id } = req.params;
  const delUser = await instanceActorService.deleteActor(id);
  res.json({ message: `Ator/Atriz ${SUCCESS.DELETED}` });
};

export {
  createActor,
  getAllActors,
  getActorById,
  getActorByName,
  updateFirstName,
  deleteActor,
};
