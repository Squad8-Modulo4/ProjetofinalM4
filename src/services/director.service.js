import { DirectorEntity } from "../entities/Director.entity.js";
import { NotFoundError } from "../helpers/error/apiErrors.js";
import { ERRORS, SUCCESS } from "../shared/messages.js";

class DirectorService {
  async createDirectorService(name, nationality, dateOfBirth) {
    await DirectorEntity.sync();
    const newDirector = await DirectorEntity.create({
      name,
      nationality,
      dateOfBirth,
    });
    return newDirector;
  }

  async getAllDirectorService() {
    const directors = await DirectorEntity.findAll();
    return directors;
  }

  async getDirectorByIDService(id) {
    const directorID = await DirectorEntity.findByPk(id);
    if (!directorID) {
      throw new NotFoundError(`Diretor ${ERRORS.NOT_FOUND}`);
    }
    return directorID;
  }

  async getDirectorByNameService(name) {
    const directorName = await DirectorEntity.findAll({
      where: {
        name,
      },
    });
    if (!directorName) {
      throw new NotFoundError(`Diretor ${ERRORS.NOT_FOUND}`);
    }
    return directorName;
  }

  async updateNameService(id, newName) {
    const directorID = await DirectorEntity.findByPk(id);
    if (!directorID) {
      throw new NotFoundError(`Diretor ${ERRORS.NOT_FOUND}`);
    }
    await DirectorEntity.update(
      { name: newName },
      {
        where: {
          id,
        },
      },
    );
    const messageUpdate = await DirectorEntity.findByPk(id);
    return messageUpdate;
  }

  async updateNationalityService(id, newNationality) {
    const directorID = await DirectorEntity.findByPk(id);
    if (!directorID) {
      throw new NotFoundError(`Diretor ${ERRORS.NOT_FOUND}`);
    }
    await DirectorEntity.update(
      { nationality: newNationality },
      {
        where: {
          id,
        },
      },
    );
    const messageUpdate = await DirectorEntity.findByPk(id);
    return messageUpdate;
  }

  async updateDateOfBirthService(id, newDateOfBirth) {
    const directorID = await DirectorEntity.findByPk(id);
    if (!directorID) {
      throw new NotFoundError(`Diretor ${ERRORS.NOT_FOUND}`);
    }
    await DirectorEntity.update(
      { dateOfBirth: newDateOfBirth },
      {
        where: {
          id,
        },
      },
    );
    const messageUpdate = await DirectorEntity.findByPk(id);
    return messageUpdate;
  }

  async deleteDirectorService(id) {
    const directorID = await DirectorEntity.findByPk(id);
    if (!directorID) {
      return `Diretor ${ERRORS.NOT_FOUND} parceiro! adios🔫`;
    }
    await DirectorEntity.destroy({ where: { id } });
    throw new NotFoundError(`Diretor ${ERRORS.NOT_FOUND}`);
  }
}

export { DirectorService };
