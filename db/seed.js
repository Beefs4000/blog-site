const sequelize = require("../config/connection");
const {faker} = require(`@faker-js/faker`);
const User = require("../models/User");
const Post = require("../models/Post");
const Comment = require("../models/Comment");


async function seedUsers(number = 10){
    const models = [];

    const admin = await User.create({
        email: 'justin@test.com',
        username: 'justinTesting',
        password: 'abcd1234'
    });
    models.push(admin);
    // seed user
    for (let index = 0; index < number; index++) {
       
       const created = await User.create({
            email: faker.internet.email(),
            username: faker.name.fullName(),
            password: "12345678",
        });

        models.push(created);
        
    }

    return models;

}

async function seedPosts(userPools, number = 10){
    const models = [];
    // seed user
    for (let index = 0; index < number; index++) {
       
       const created = await Post.create({
            user_id: faker.helpers.arrayElement(userPools).id,
            title: faker.music.songName(),
            content: faker.lorem.paragraph(),
        });

        models.push(created);
        
    }

    return models;

}

async function seedComments(userPools, PostPools, number = 10){
    const models = [];
    // seed user
    for (let index = 0; index < number; index++) {
       
       const created = await Comment.create({
            user_id: faker.helpers.arrayElement(userPools).id,
            Post_id: faker.helpers.arrayElement(PostPools).id,
            content: faker.lorem.paragraph(),
        });

        models.push(created);
        
    }

    return models;

}

    async function seed(){
        
        const users = await seedUsers();
        
        const Posts = await seedPosts(users);

        const comments = await seedComments(users, Posts);


    }
    
sequelize.sync({force: true})
.then(seed)
.then(() => process.exit(0));
