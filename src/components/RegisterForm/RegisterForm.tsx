import { FC, useCallback, useRef, useState } from 'react';

import './RegisterForm.css';

const LANGUAGES = ['Javascript', 'TypeScript', 'CoffeeScript'];
const LEVELS = ['Junior', 'Middle', 'Senior'];

const EMPTY_FORM = {
  login: '',
  password: '',
  language: '',
  agree: false,
  level: LEVELS[0],
  comment: '',
  avatar: '',
};

export const RegisterForm: FC = () => {
  const avatarRef = useRef<HTMLInputElement>(null);
  console.log('RegisterForm');
  const [form, setForm] = useState(EMPTY_FORM);

  const formClearHandle = useCallback((e) => {
    e.preventDefault();

    setForm(EMPTY_FORM);
  }, []);

  const inputChangeHandle = useCallback((e) => {
    const { target } = e;

    setForm(prev => ({
      ...prev,
      [target.name]: target.type === 'checkbox' ? target.checked : target.value,
    }));
  }, []);

  const formSubmitHandle = useCallback((e) => {
    e.preventDefault();

    console.log(form);
  }, [form]);

  const avatarUploadHandle = useCallback(() => {
    const avatarInput = avatarRef.current;

    console.log(avatarInput);
    console.log(avatarInput?.files);

    const file = avatarInput?.files?.[0];

    if (!file) {
      return;
    }

    const reader = new FileReader();

    reader.addEventListener('load', (e) => {
      console.log(e.target?.result);

      setForm(prev => ({
        ...prev,
        avatar: String(e.target?.result),
      }));
    });

    reader.readAsDataURL(file);
  }, []);

  return (
    <form className="RegisterForm" onSubmit={formSubmitHandle}>
      <div className="RegisterForm-Field">
        <label htmlFor="avatar">Аватар</label>
        <img className="RegisterForm-Avatar" src={form.avatar} alt="avatar"/>
        <input
          ref={avatarRef}
          className="RegisterForm-Control"
          type="file"
          id="avatar"
          name="avatar"
          onChange={avatarUploadHandle}
        />
      </div>
      <div className="RegisterForm-Field">
        <label htmlFor="login">Имя пользователя</label>
        <input
          className="RegisterForm-Control"
          id="login"
          name="login"
          onChange={inputChangeHandle}
          value={form.login}
        />
      </div>
      <div className="RegisterForm-Field">
        <label htmlFor="password">Пароль</label>
        <input
          className="RegisterForm-Control"
          id="password"
          name="password"
          type="password"
          onChange={inputChangeHandle}
          value={form.password}
        />
      </div>
      <div className="RegisterForm-Field">
        <label htmlFor="language">Любимый язык программирования</label>
        <select
          className="RegisterForm-Control"
          id="language"
          name="language"
          onChange={inputChangeHandle}
          value={form.language}
        >
          <option value="">Выберите...</option>
          {
            LANGUAGES.map(lang => (
              <option key={lang} value={lang.toLowerCase()}>{lang}</option>
            ))
          }
        </select>
      </div>
      <div className="RegisterForm-Field">
        <label htmlFor="agree">Согласен получать рекламную рассылку по пять писем в час</label>
        <input
          className="RegisterForm-Control"
          id="agree"
          name="agree"
          type="checkbox"
          onChange={inputChangeHandle}
          checked={form.agree}
        />
      </div>
      <div className="RegisterForm-Field">
        <h4>Мой уровень</h4>
        {
          LEVELS.map(level => (
            <div key={level}>
              <label htmlFor={`level-${level}`}>{level}</label>
              <input
                className="RegisterForm-Control"
                id={`level-${level}`}
                name="level"
                type="radio"
                onChange={inputChangeHandle}
                checked={form.level === level}
                value={level}
              />
            </div>
          ))
        }
      </div>
      <div className="RegisterForm-Field">
        <label htmlFor="comment">Комментарий</label>
        <textarea
          className="RegisterForm-Control"
          id="comment"
          name="comment"
          onChange={inputChangeHandle}
          value={form.comment}
        />
      </div>
      <button className="RegisterForm-Button" type="button" onClick={formClearHandle}>Очистить</button>
      <button className="RegisterForm-Button" type="submit">Отправить</button>
    </form>
  );
};
