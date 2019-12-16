import React from 'react';
import {Link} from 'react-router-dom';
import {useQuery} from '@apollo/react-hooks';
import {authorListQuery} from './query';
import style from '../component.module.scss';

function Authors() {
  const {data} = useQuery(
    authorListQuery
  );

  if (!data) {
    return null;
  }

  return (
    <div>
      <div>
        <Link
          to={'/book'}
          className={style['back']}
        >
          К списку книг
        </Link>
      </div>
      <br />
      <h1>Authors</h1>
      <table className={style['table']}>
        <thead>
        <tr>
          <th>
            Author
          </th>
          <th>
            Book count
          </th>
        </tr>
        </thead>
        <tbody>
        {
          data.authors.map((author) => (
            <tr key={author.id}>
              <td>
                <Link to={`/author/${author.id}`}>
                  {author.name}
                </Link>
              </td>
              <td>
                {author.books.length}
              </td>
            </tr>
          ))
        }
        <tr>
        </tr>
        </tbody>
      </table>
    </div>
  )
}

export {
  Authors
}
