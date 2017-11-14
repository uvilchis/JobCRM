let Sequelize = require('sequelize');

let sequelize = new Sequelize ({
    dialect: 'postgres',
    dialectOptions: {
      ssl: true
    },
    host: `ec2-23-21-220-23.compute-1.amazonaws.com`,
    database: `d9kfc0g85kd1q0`,
    username: `rddgghwbqbufnr`,
    Port: 5432,
    password: `a1a65f57d296c76218ce8910de929fa834823cb5d54a9aa4062f7b1f15db33bf`,
    dialect : 'postgres'
  })
  
  sequelize
    .authenticate()
    .then(() => {
      console.log('Connection to database has been established successfully.');
    })
    .catch(err => {
      console.error('Unable to connect to the database:', err);
    });
  
  let User = sequelize.define('user', {
    username : {type : Sequelize.STRING, unique : true}
  });
  
  let RowEntry = sequelize.define('rowentry', {
    company: { type: Sequelize.STRING, defaultValue: "Enter Company Name" },
    location: { type: Sequelize.STRING, defaultValue: "Enter Location" },
    contact: { type: Sequelize.STRING, defaultValue: "Enter Contact Name" },
    notes: { type: Sequelize.TEXT, defaultValue: "Notes Go Here" },
    coverLetter: { type: Sequelize.BOOLEAN, defaultValue: false },
    resume: { type: Sequelize.BOOLEAN, defaultValue: false },
    firstInterview: { type: Sequelize.BOOLEAN, defaultValue: false },
    secondInterview: { type: Sequelize.BOOLEAN, defaultValue: false },
    offer: { type: Sequelize.BOOLEAN, defaultValue: false },
    rejected: { type: Sequelize.BOOLEAN, defaultValue: false },
    // userId: { type: Sequelize.NUMBER, defaultValue: 0, foreignKey: true}
  });
  
  User.sync({ force: true }).then(() => {
    User.bulkCreate([{
      user: 'example user'
    },
    {
      user: 'Christine Ma'
    }]);
  });
  
  
  RowEntry.sync({ force: true }).then(() => {
    RowEntry.bulkCreate([{
      company: 'example company',
      location: 'New York, NY',
      contact: 'tommy.york@gmail.com',
      notes: 'example info',
      coverLetter: true,
      resume: true,
      firstInterview: true,
      secondInterview: false,
      offer: false,
      rejected: false,
    },{
      company: 'another example',
      location: 'Brooklyn, NY',
      contact: 'hipsterland@gmail.com',
      notes: 'more example info',
      coverLetter: false,
      resume: false,
      firstInterview: true,
      secondInterview: true,
      offer: true,
      rejected: false,
  
    }]);
  });

exports.sequelize = sequelize;
exports.User = User;
exports.RowEntry = RowEntry;

//   module.exports = { sequelize, User, RowEntry };