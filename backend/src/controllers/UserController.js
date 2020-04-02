const crypto = require('crypto');
const connection = require('../database/connections');

module.exports = {
  async index(request, response) {    
    return response.json(
      (await connection('users').select('*')) || `Isn't possible get users`
    );
  },
  
  async create(request, response) {
    const id = crypto.randomBytes(4).toString('HEX');
    const {
      email,
      name,
      password
    } = request.body;
  
    await connection('users').insert({
      email,
      id,
      name,
      password
    });

    return response.json({ data: `seu ID de recuperação de senha é: ${id}` });
  }
};