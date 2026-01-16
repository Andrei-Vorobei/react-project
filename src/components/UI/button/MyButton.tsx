import * as classes from './MyButton.module.scss';

type MyButtonType = {
  children: React.ReactNode;
  disabled?: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};


export const MyButton: React.FC<MyButtonType> = ({ children, ...props }) => {

  return (
    <button
      { ...props }
      className={classes.myBtn}
      disabled={props.disabled}
    >
      { children }
    </button>
  );
};