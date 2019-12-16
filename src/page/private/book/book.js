import React from 'react';
import {useQuery} from "@apollo/react-hooks";
import {getBookById} from './query';
import {Link} from "react-router-dom";
import style from '../component.module.scss';

function Book({match}) {
  const {params} = match;

  const {data} = useQuery(getBookById, {
    variables: {
      id: params.bookId
    }
  });

  if (!data) {
    return null;
  }

  const {book} = data;

  return (
    <div>
      <div>
        <Link to='/book' className={style['back']}>
          К списку книг
        </Link>
      </div>
      <h1>
        {book.name}
      </h1>
      <span>
        &nbsp;{book.date}
      </span>
      <div className={style['authors']}>
        <h2>Authors</h2>
        {
          book.authors.map((author) => (
            author && (
              <div key={author.id}>
                <Link to={`/author/${author.id}`}>
                  {author.name}
                </Link>
              </div>
              )
          ))
        }
      </div>
      <div className={style.description}>
        {book.description}
      </div>
      <h2>Comments</h2>
      <div className={style.comments}>
        {
          book.comments.map((comment) => (
            <div
              key={comment.id}
              className={style['comment']}
            >
              <div className={style['comment-user']}>
                {comment.userName}
              </div>
              <div className={style['comment-text']}>
                {comment.text}
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export {
  Book
}
