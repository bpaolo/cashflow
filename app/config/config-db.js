module.exports = {
  HOST: "localhost",
  USER: "postgres",
  PASSWORD: "fluxodb",
  DB: "fluxodb",
  dialect: "postgres",
  underscored: "true",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
