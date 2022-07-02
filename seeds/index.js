
const {
    User,
    Post,
    Comment
} = require('../models');

const users = [

    {
        username: 'William',
        password: 'whocares123'
    },

    {
        username: 'Richard',
        password: 'ilikemath'
    },

    {
        username: 'Bill',
        password: 'mottsfruitsnacks'
    },

]

const posts = [

    {
        title: 'why motts are great',
        content: 'they just are',
        user_id: 2
    },

    {
        title: 'where are my pants',
        content: 'under the bed',
        user_id: 1
    },

    {
        title: 'im tired and sad',
        content: 'i wonder if this window opens',
        user_id: 3
    },

]

const comments = [

    {
        content: 'this is a horrible stream',
        user_id: 2,
        post_id: 1
    },

    {
        content: 'im hungry and sad',
        user_id: 3,
        post_id: 1
    },

]


const plantSeeds = async () => {


    await User.bulkCreate(users, { individualHooks: true });
    await Post.bulkCreate(posts);
    await Comment.bulkCreate(comments);

}

plantSeeds();
