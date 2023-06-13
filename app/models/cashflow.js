module.exports = (sequelize, Sequelize) => {
  const Cashflow = sequelize.define("cashflow", {
    typeFlow: {
      type: Sequelize.STRING
    },
    valueFlow: {
      type: Sequelize.DECIMAL,
    },
    description: {
      type: Sequelize.STRING
    },
    create_at: {
      type: Sequelize.DATEONLY,
    },
    update_at: {
      type: Sequelize.DATEONLY,
    }
    

  },
  {
    timestamps: false,
  });
  return Cashflow;
};
