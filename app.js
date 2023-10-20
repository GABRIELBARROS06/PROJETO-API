const axios = require('axios');

const publicKey = '';
const privateKey = '';
const baseURL = 'https://gateway.marvel.com/v1/public';

// Função para criar uma hash MD5 necessária para autenticação
const generateHash = () => {
  const ts = new Date().getTime();
  const hash = require('crypto').createHash('md5');
  hash.update(ts + privateKey + publicKey);
  return hash.digest('hex');
};

// Exemplo de solicitação para listar personagens da Marvel
const listCharacters = async () => {
  const ts = new Date().getTime();
  const hash = generateHash();
  try {
    const response = await axios.get(`${baseURL}/characters`, {
      params: {
        ts,
        apikey: publicKey,
        hash,
      },
    });
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

listCharacters();
