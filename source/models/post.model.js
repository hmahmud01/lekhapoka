module.exports = (sequelize, Sequelize) => {
    const Post = sequelize.define("post", {
        uuid: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4
        },
        cat_id: Sequelize.STRING,
        title: Sequelize.STRING,
        content: Sequelize.TEXT('long'),
        writer: {
            type: Sequelize.STRING,
            allowNull: true
        },
        rating: Sequelize.FLOAT,
        writer_id: Sequelize.STRING,
        feature: Sequelize.BOOLEAN,
        image: Sequelize.STRING,
        audio: Sequelize.STRING,
        createdAt: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: Sequelize.NOW
        },
    })

    return Post;
}