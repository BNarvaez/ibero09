var config = {
    email:{}
}

config.urlreal = "https://farmiapp.online"

config.puerto = 3001;
/* config.db = 'ibero09'; */

config.bd = "BackendBit" //nombre bd mongo
config.bdUser = "adminBit"
config.bdPass = "admin123"
config.bdIp = "164.92.115.71" //ip mongo
config.bdPort = "27017"


config.secret = 'nchhsur750kiaysgdv4253ywgdnxbacatwi58ohkfjer7fy6hy90fjsbxhw'

config.email.host = 'smtp.gmail.com';
config.email.port = 587;
config.email.user = 'contactotecnosmartplus@gmail.com';
config.email.pass = 'bszxzottwogzwoqy';



config.listablanca = [
    "http://localhost:4200",
    "http://localhost:9876",
    "http://localhost:3001",
    undefined,
    "https://farmiapp.online",  
    "https://farmiapp.online:3001",
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