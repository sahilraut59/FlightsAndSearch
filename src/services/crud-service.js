class CrudService {
  constructor(repository) {
    this.repository = repository;
  }

  async create(data) {
    try {
      const response = await this.repository.create(data);
      return response;
    } catch (error) {
      console.log("Something went wrong int the CRUD service");
    }
  }
  async destroy(id) {
    try {
      const response = await this.repository.destroy(id);
      return response;
    } catch (error) {
      console.log("Something went wrong int the CRUD service");
    }
  }
  async get(id) {
    try {
      const response = await this.repository.get(id);
      return response;
    } catch (error) {
      console.log("Something went wrong int the CRUD service");
    }
  }
  async getAll() {
    try {
      const response = await this.repository.getAll();
      return response;
    } catch (error) {
      console.log("Something went wrong int the CRUD service");
    }
  }
  async update(id, data) {
    try {
      const response = await this.repository.create(id, data);
      return response;
    } catch (error) {
      console.log("Something went wrong int the CRUD service");
    }
  }
}

module.exports = CrudService;
