'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Quiz extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Quiz.init({
    Quizname:DataTypes.STRING,
    ScooreQuiz:DataTypes.INTEGER,
    SubjectId:DataTypes.INTEGER,
    FormateurId:DataTypes.INTEGER,

  }, {
    sequelize,
    modelName: 'Quiz',
  });
  return Quiz;
};