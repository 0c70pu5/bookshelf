import React from 'react';
import {Link} from 'react-router-dom';
import {useQuery} from '@apollo/react-hooks';
import {getBooks} from './query';
import style from '../component.module.scss';

function Books() {
  const {data} = useQuery(
    getBooks
  );

  if (!data) {
    return null;
  }

  const {books} = data;

  return (
    <div>
      <div>
        <Link
          to={'/'}
          className={style['back']}
        >
          К списку авторов
        </Link>
      </div>
      <br/>
      <h1>Books</h1>
      <table className={style['table']}>
        <thead>
        <tr>
          <th>
            Title
          </th>
          <th>
            Date
          </th>
        </tr>
        </thead>
        <tbody>
        {
          books.map((book) => (
            <tr key={book.id}>
              <td>
                <Link to={`/book/${book.id}`}>
                  {book.name}
                </Link>
              </td>
              <td>
                {book.date}
              </td>
            </tr>
          ))
        }
        </tbody>
      </table>
    </div>
  )
}

export {
  Books
}
