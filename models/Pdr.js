module.exports = function (sequelize, DataTypes) {
  var Pdr = sequelize.define("Pdr", {
  aaa_call_num: DataTypes.INTEGER,
  date_towed: DataTypes.DATEONLY,
  driver: DataTypes.STRING,
  damages: DataTypes.STRING,
  img1: DataTypes.INTEGER
  });
  return Pdr;
};