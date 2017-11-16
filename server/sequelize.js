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
  googleId : { type : Sequelize.STRING, defaultValue: '' }, 
  accessToken : { type : Sequelize.STRING, defualtValue: ''}, 
  expires_in : { type : Sequelize.INTEGER, defualtValue: ''}, 
  refreshToken : { type : Sequelize.STRING, defualtValue: ''},
  profileJSON : { type : Sequelize.JSON}
});

// User.drop()


let Company = sequelize.define('company', {
  name: {type: Sequelize.STRING}
});

// Company.drop()
Company.sync().then(() => {
  Company.bulkCreate([{
    name: 'SerumCorp'
  },{
    name: 'Mighty Pastry'
  }])
})

let Record = sequelize.define('record', {
  //company: { type: Sequelize.STRING, defaultValue: "Enter Company Name" },
  location: { type: Sequelize.STRING, defaultValue: "Enter Location" },
  contact: { type: Sequelize.STRING, defaultValue: "Enter Contact Name" },
  notes: { type: Sequelize.TEXT, defaultValue: "Notes Go Here" },
  coverLetter: { type: Sequelize.BOOLEAN, defaultValue: false },
  resume: { type: Sequelize.BOOLEAN, defaultValue: false },
  tags: { type: Sequelize.STRING, default: 'default'},
  firstInterview: { type: Sequelize.BOOLEAN, defaultValue: false },
  secondInterview: { type: Sequelize.BOOLEAN, defaultValue: false },
  offer: { type: Sequelize.BOOLEAN, defaultValue: false },
  rejected: { type: Sequelize.BOOLEAN, defaultValue: false },
});

Record.belongsTo(User);
Record.belongsTo(Company);

Record.sync().then(() => {
  Record.bulkCreate([{
    // company: 'example company',
    location: 'New York, NY',
    contact: 'tommy.york@gmail.com',
    notes: 'example info',
    coverLetter: true,
    tags: 'Javascript React',
    resume: true,
    firstInterview: true,
    secondInterview: false,
    offer: false,
    rejected: false,
    userId: 1,
    companyId: 1
  },{
    // company: 'another example',
    location: 'Brooklyn, NY',
    contact: 'hipsterland@gmail.com',
    notes: 'more example info',
    coverLetter: false,
    tags: 'C Networks',
    resume: false,
    firstInterview: true,
    secondInterview: true,
    offer: true,
    rejected: false,
    userId: 2,
    companyId: 2
  }]);
});

let Artifacts = sequelize.define('artifact', {
  type: {type: Sequelize.STRING},
  artifact: {type: Sequelize.BLOB},
  artifactTitle: {type: Sequelize.STRING}
})

Artifacts.belongsTo(Record);

Artifacts.sync().then(() => {
  Artifacts.bulkCreate([{
    type: 'Empty',
    artifact: '',
    artifactTitle: 'Empty artifact.',
  }])
})

let Contact = sequelize.define('contact', {
  name: {type: Sequelize.STRING},
  emailAddress: {type: Sequelize.STRING},
});

Contact.sync().then(() => {
  Contact.bulkCreate([{
    name: 'Tommy York (Corporate)',
    emailAddress: 'tommy.york@gmail.com'
  }])
  .catch((err) => console.log(err));
});


// let recordsContactMap = sequelize.define('recordscontact');

// recordsContactMap.belongsTo(Contact);
// recordsContactMap.belongsTo(Record);

// recordsContactMap.drop()
// recordsContactMap.sync().then(() => {
//   recordsContactMap.bulkCreate([{
//     contactId: 1,
//     recordId: 1
//   }])




exports.sequelize = sequelize;
exports.User = User;
exports.RowEntry = Record;
exports.Company = Company;
exports.Artifacts = Artifacts;
// exports.recordsContactMap = recordsContactMap;