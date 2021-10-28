import { FC, useCallback, useState } from "react";
import { v4 } from 'uuid';
import Picker, { IEmojiData } from 'emoji-picker-react';

import { EMPTY_STATUS_FORM } from "../StatusDashboard.const";
import { cnStatusesDashboard } from "../StatusesDashboard";
import { StatusesDashboardFormProps } from "../StatusesDashboard.types";


export const StatusesDashboardForm: FC<StatusesDashboardFormProps> = ({ onSubmit }) => {
  const [form, setForm] = useState(EMPTY_STATUS_FORM);

  const onEmojiClick = (event: React.MouseEvent, emojiObject: IEmojiData) => {
    setForm(form => ({ ...form, emoji: emojiObject.emoji }));
  };

  const inputChangeHandle = useCallback((e) => {
    const { target } = e;

    setForm(prev => ({
      ...prev,
      [target.name]: target.type === 'checkbox' ? target.checked : target.value,
    }));
  }, []);

  const formSubmitHandle = useCallback((e) => {
    e.preventDefault();

    onSubmit({
      ...form,
      id: v4(),
    });

    setForm(EMPTY_STATUS_FORM);
  }, [form, onSubmit]);

  return (
    <form className={cnStatusesDashboard('Form')} onSubmit={formSubmitHandle}>
      <input
        className={cnStatusesDashboard('StatusInput')}
        value={form.status}
        name="status"
        onChange={inputChangeHandle}
      />
      {form.emoji ? (
        <span>You chose: {form.emoji}</span>
      ) : (
        <span>No emoji Chosen</span>
      )}
      <Picker onEmojiClick={onEmojiClick} />
      <button className={cnStatusesDashboard('AddButton')}>Добавить статус</button>
    </form>
  );
}
