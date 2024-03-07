import { ActorEntity } from "../entities/Actor.entity.js";
import { NotFoundError } from "../helpers/error/apiErrors.js";

class ActorService {
  async createActorService(
    first_name,
    last_name,
    dateOfBirth,
    nationality,
    gender,
    awards,
  ) {
    await ActorEntity.sync();
    const newActor = await ActorEntity.create({
      first_name,
      last_name,
      dateOfBirth,
      nationality,
      gender,
      awards,
    });
    return newActor;
  }

  async getAllActorsService() {
    const actors = await ActorEntity.findAll();
    return actors;
  }

  async getActorByIdService(id) {
    const actorId = await ActorEntity.findByPk(id);
    if (!actorId) {
      throw new NotFoundError(`Ator/Atriz não encontrado(a)`);
    }
    return actorId;
  }

  async getActorByNameService(first_name) {
    const actorName = await ActorEntity.findOne({
      where: {
        first_name,
      },
    });
    if (!actorName) {
      throw new NotFoundError(`Ator/Atriz não encontrado(a)`);
    }
    return actorName;
  }

  async updateFistNameService(id, new_first_name) {
    const actorId = await ActorEntity.findByPk(id);
    if (!actorId) {
      throw new NotFoundError(`Ator/Atriz não encontrado(a)`);
    }
    await ActorEntity.update(
      { first_name: new_first_name },
      {
        where: {
          id,
        },
      },
    );
    const messageUpdate = await ActorEntity.findByPk(id);
    return messageUpdate;
  }

  async deleteActor(id) {
    const actorId = await ActorEntity.findByPk(id);
    if (!actorId) {
      throw new NotFoundError(`Ator/Atriz não encontrado(a)`);
    }
    await ActorEntity.destroy({
      where: {
        id,
      },
    });
    return `Deletado com sucesso!`;
  }
}

export { ActorService };
