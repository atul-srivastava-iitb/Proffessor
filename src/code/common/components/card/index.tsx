import clsx from 'clsx';

/**
```````````````````````````````````````````````````````````
`                                                         ` 
`                Simple stylised Div Wrapper                  
`                                                         `
```````````````````````````````````````````````````````````
*/

type props = {
  children?: React.ReactNode;
  className?: string;
  variant?: 'classic';
};

const classdestro = {
  classic: 'ring-1 rounded-md bg-primary',
};

function Card({ children, className, variant = 'classic' }: props) {
  const destroclass = classdestro[variant];

  const extendclass = clsx(className, destroclass);
  return <div className={extendclass}>{children}</div>;
}
export default Card;
