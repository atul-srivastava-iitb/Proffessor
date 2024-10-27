import { ReactNode } from 'react';

type props = {
  children?: ReactNode;
  show?: boolean;
};

function NoWrap({ children, show }: props) {
  if (show) {
    return <>{children}</>;
  } else {
    return <></>;
  }
}

export default NoWrap;
