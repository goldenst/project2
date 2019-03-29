module.exports = function (sequelize, DataTypes) {
  var Lien = sequelize.define("Lien", {
  invoice_num: DataTypes.INTEGER,
  date_towed: DataTypes.DATEONLY,
  year:DataTypes.INTEGER,
  make:DataTypes.STRING,
  model:DataTypes.STRING,
  plate:DataTypes.STRING,
  state:DataTypes.STRING,
  vin:DataTypes.STRING,
  tow_fee:DataTypes.DECIMAL(6,2),
  storage:DataTypes.DECIMAL(6,2),
  req_by: DataTypes.STRING,
  valued:DataTypes.STRING,
  owner: DataTypes.STRING,
  eng_vin: DataTypes.STRING,
  });
  return Lien;
};