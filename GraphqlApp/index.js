const express = require('express');
const {ApolloServer} = require('apollo-server-express');
const fs = require('fs');
const typeDefs = fs.readFileSync('./schema.graphql', 'utf8').toString();

const {authors} = require('./authors');
const {books} = require('./books');
const user = {
  token: 'token',
  email: 'admin@admin.local',
  name: 'admin'
};

const resolvers = {
  Query: {
    user: (obj, {email, password}) => {
      if (user.email === email && password === 'admin') {
        return user
      }
      return null;
    },
    authors: () =>
      authors.map((author) => {
        const tempBooks = author.books.map(bookIndex => {
          const book = books[bookIndex];
          if (!book) {
            throw new Error('BL error');
          }
          return {
            id: book.id
          };
        });
        return {
          ...author,
          books: tempBooks
        };
      }),
    books: () =>
      books.map((book) => {
        const tempAuthors = book.authors.map(authorIndex => {
          const author = authors[authorIndex];
          if (!author) {
            throw new Error('BL error');
          }
          return {
            id: author.id
          };
        });
        return {
          ...book,
          authors: tempAuthors
        };
      }),
    author: (obj, {id}, context) => {
      const author = authors.filter((author) => author.id === id)[0];
      if (!author) {
        return null;
      }
      const tempBooks = author.books.map((bookIndex) => {
        return books[bookIndex];
      });
      return {
        ...author,
        books: tempBooks
      };
    },
    book: (obj, {id}, context) => {
      const book = books.filter((book) => book.id === id)[0];
      if (!book) {
        return null;
      }
      const tempAuthors = book.authors.map(authorIndex => {
        return authors[authorIndex];
      });
      return {
        ...book,
        authors: tempAuthors
      };
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

const app = express();

server.applyMiddleware({app});

app.listen({port: 3001}, () =>
  console.log(`Server ready at http://localhost:3001${server.graphqlPath}`)
);
