const {Sequelize}=require('sequelize')

const sequelize = new Sequelize('busdb', 'root', '0323', {
  host: 'localhost',
  dialect: 'mysql' 
});
//check connection
(async()=>{ try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}})();

module.exports=sequelize

