const db = require("../db");

module.exports = app => {
  const { STRING, INTEGER, DATE, BOOLEAN } = app.Sequelize;

  const User = db.defineModel(app, "users", {
    username: { type: STRING, unique: true, allowNull: false,  }, // 用户名
    email: { type: STRING, unique: true, allowNull: true,  }, // 邮箱
    password: { type: STRING, allowNull: false }, // 密码
    name: STRING, // 姓名
    sex: INTEGER, // 用户性别：1男性, 2女性, 0未知
    age: INTEGER, // 年龄
    avatar: STRING, // 头像
    province:STRING,
    city:STRING,
    company: STRING, // 公司
    department: STRING, // 部门
    telePhone: STRING, // 联系电话
    mobilePhone: STRING, // 手机号码
    info: STRING, // 备注说明
    roleId: INTEGER, // 角色id 0管理员 1商城用户
    status: STRING, // 用户状态
    token: STRING, // 认证 token
    userId:  { type: INTEGER, unique: true, allowNull: false,  },
    lastSignInAt: DATE // 上次登录时间
  });

  return User;
};