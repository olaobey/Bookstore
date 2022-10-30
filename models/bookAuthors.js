module.exports = (sequelize, DataTypes) => {
  const BookAuthors = sequelize.define(
    "BookAuthors",
    {
      BookId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "books",
          key: "id",
        },
      },
      AuthorId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "authors",
          key: "id",
        },
      },
    },
    {
      tableName: "book_authors",
    }
  );

  BookAuthors.associate = function (models) {
    BookAuthors.belongsTo(models.Book, {
      foreignKey: "BookId",
      onDelete: "CASCADE",
    });
    BookAuthors.belongsTo(models.Author, {
      foreignKey: "AuthorId",
      onDelete: "CASCADE",
    });
  };

  return BookAuthors;
};
