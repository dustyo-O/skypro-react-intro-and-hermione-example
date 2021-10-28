import { FC, useState } from 'react';

export const LikeButton: FC = () => {
  console.log('LikeButton');
  const [buttonState, setButtonState] = useState({
    like: false,
    count: 0,
  });

  const likeEmoji = buttonState.like ? '❤️' : '💔';

  const clickHandle = (e: React.MouseEvent) => {
    console.log(e);
    console.log('click');
    setButtonState(prev => ({
      ...prev,
      count: prev.count + 1,
      like: !prev.like,
    }));
  };

  const isClickable = buttonState.count < 5;

  return (
    <button
      className="LikeButton"
      onClick={isClickable ? clickHandle : undefined}
    >
      <div>
        {likeEmoji}
        {!isClickable && 'Хватит менять мнение!'}
      </div>
    </button>
  );
};
