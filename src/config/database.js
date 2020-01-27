module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'docker',
    database: 'nagro',
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true
    }
};