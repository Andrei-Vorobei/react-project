import * as classes from './MyInput.module.scss';

export const MyInput: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => {

  return (
    <input {...props} className={classes.myInput} />
  );
};