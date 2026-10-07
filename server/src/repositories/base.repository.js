/**
 * Generic Base Repository providing basic CRUD operations
 */
export class BaseRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    return await this.model.create(data);
  }

  async findById(id, projection = null, options = {}) {
    return await this.model.findById(id, projection, options);
  }

  async findOne(filter = {}, projection = null, options = {}) {
    return await this.model.findOne(filter, projection, options);
  }

  async findAll(filter = {}, projection = null, options = {}) {
    return await this.model.find(filter, projection, options);
  }

  async updateById(id, data, options = { new: true, runValidators: true }) {
    return await this.model.findByIdAndUpdate(id, data, options);
  }

  async deleteById(id) {
    return await this.model.findByIdAndDelete(id);
  }

  async count(filter = {}) {
    return await this.model.countDocuments(filter);
  }
}
