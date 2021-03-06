module.exports = app => {
    if (app.config.env === "local") {
      app.beforeStart(function*() {
        yield app.model.sync({ force: false  });
      });
      app.model.User.findOrCreate({
        where: { username: app.config.adminUser.username },
        defaults: {
          username: app.config.adminUser.username,
          password: app.config.adminUser.password,
          roleId:0,
          type:'admin',
          userId:520
        }
      });
    }
  };