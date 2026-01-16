import * as classes from './MyModal.module.scss';
import { Dispatch, SetStateAction } from 'react';

type MyModalType = {
  children: React.ReactNode;
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
};

export const MyModal: React.FC<MyModalType> = ({ children, visible, setVisible }) => {

  const rootClasses = [ classes.myModal ];
  if (visible) {
    rootClasses.push(classes.active);
  }
  return (
    <div
      className={rootClasses.join(' ')}
      onClick={() => setVisible(false)}
    >
      <div className={classes.myModalContent}
       onClick={(e) => e.stopPropagation()}
      >
        { children }
      </div>
    </div>
  );
};