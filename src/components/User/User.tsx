import { cn } from '@bem-react/classname';
import { FC } from 'react';
import './User.css';

import user from './User.svg';

export type UserProps = {
  userName?: string;
};

const DEFAULT_USER = 'Гость';

export const cnUser = cn('User');

export const User: FC<UserProps> = ({ userName = DEFAULT_USER }) => {
  console.log('User');
  return (
    <div className={cnUser()}>
      {
        userName !== DEFAULT_USER &&
          (
            <img
              className={cnUser('Avatar')}
              src={user}
              alt={`аватарка пользователя ${userName}`}
            />
          )
      }
      {userName === DEFAULT_USER ? userName : `Пользователь ${userName}`}
    </div>
  );
};
