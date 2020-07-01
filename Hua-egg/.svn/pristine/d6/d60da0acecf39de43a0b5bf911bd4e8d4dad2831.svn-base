/**
 * wuxunyu
 * 使用sequelize创建表模型时候的通用格式化方法
 * 统一主键，名称必须是 id，类型必须是 UUID；
 * 所有字段默认为 NULL，除非显式指定；
 * 统一 timestamp 机制，每个 Model 必须有 createdAt、updatedAt 和 version，分别记录创建时间、修改时间和版本号。
 */


const uuidv1 = require("uuid/v1");

function generateUUID() {
  return uuidv1().replace(/-/g, "");
}

function defineModel(app, name, attributes) {
  const { UUID } = app.Sequelize;

  let attrs = {};
  for (let key in attributes) {
    let value = attributes[key];
    if (typeof value === "object" && value["type"]) {
      value.allowNull = value.allowNull && true;
      attrs[key] = value;
    } else {
      attrs[key] = {
        type: value,
        allowNull: true
      };
    }
  }

  attrs.id = {
    type: UUID,
    // type:sequelize.INTEGER, //不要UUID，统一自增id
    primaryKey: true,
    // autoIncrement: true
    defaultValue: () => {
      return generateUUID();
    }
  };

  return app.model.define(name, attrs, {
    createdAt: "dateAdd",
    updatedAt: "dateUpdate",
    version: true,
    freezeTableName: true
  });
}

module.exports = { defineModel };