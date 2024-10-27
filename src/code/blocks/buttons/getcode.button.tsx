import { Button } from '@/code/common/components';
import { DownloadIcon } from '@radix-ui/react-icons';

type props = {
  ping: (name: string) => void;
  children?: React.ReactNode;
  name?: string;
};
function GetCode({ ping, name = 'get', children }: props) {
  return (
    <Button className="px-3 py-2" name={name} ping={ping}>
      <DownloadIcon />
      {children || 'Get Code'}
    </Button>
  );
}

export default GetCode;
