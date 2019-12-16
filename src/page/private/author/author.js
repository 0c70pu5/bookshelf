import React from 'react';
import {Link} from 'react-router-dom';
import {useQuery} from '@apollo/react-hooks';
import {authorById} from './query';
import {AuthorBooks} from './author-books';
import style from '../component.module.scss';

function Author({match}) {
  const {params} = match;

  const {data} = useQuery(
    authorById, {
      variables: {
        id: params.authorId
      }
    }
  );

  if (!data) {
    return null;
  }

  const {author} = data;

  return (
    <div>
      <div>
        <Link
          to='/'
          className={style['back']}
        >
          К списку авторов
        </Link>
      </div>
      <div>
        <h1>
          {author.name}
        </h1>
        <div className={style['description']}>
          {author.biography}
        </div>
        <br />
        <div>
          <AuthorBooks
            books={author.books}
          />
        </div>
      </div>
    </div>
  )
}

export {
  Author
}
