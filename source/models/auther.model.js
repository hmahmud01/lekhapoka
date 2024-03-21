module.exports = (sequelize, Sequelize) => {
    const Author = sequelize.define("author", {
        uuid: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4
        },
        name: Sequelize.STRING,
        image: Sequelize.STRING,
        birth_date: Sequelize.STRING,
        expiry_date: Sequelize.STRING,
        createdAt: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: Sequelize.NOW
        },
    })

    return Author;
}