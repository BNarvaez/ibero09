var config = {
    email:{}
}

config.puerto = 3000;
config.db = 'ibero09';
config.secret = 'nchhsur750kiaysgdv4253ywgdnxbacatwi58ohkfjer7fy6hy90fjsbxhw'

config.email.host = 'smtp.gmail.com';
config.email.port = 587;
config.email.user = 'contactotecnosmartplus@gmail.com';
config.email.pass = 'bszxzottwogzwoqy';



config.listablanca = [
    "http://localhost:4200",
    "http://localhost:9876",
]

module.exports = {
    secret: 'tu_secreto_para_testing',
    email: {
      host: 'smtp.test.com',
      port: 587,
      user: 'test@test.com',
      pass: 'password'
    }
  };

module.exports.config = config;