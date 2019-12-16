import React from 'react';
import {Link} from 'react-router-dom';
import style from '../../component.module.scss';

function AuthorBooks({books}) {
  console.log(books)
  return (
    <div>
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
  AuthorBooks
}
