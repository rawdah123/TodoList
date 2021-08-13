const todo = (sequelize, DataTypes) => {
    const todo = sequelize.define('todo', { 
      title: {
          type: DataTypes.STRING(60)
      },
    },
    {
        timestamps: false
    });
  
    return todo;
  };
  
  module.exports = todo
  
  