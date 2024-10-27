type props = {
  children?: React.ReactNode;
  className?: string;
};
import { ScrollArea } from '../components';
import { TopNav } from '@/code/blocks';

function DefaultPageWrapper({ children }: props) {
  return (
    <ScrollArea orientation="vertical">
      <div>
        <TopNav />
        <div className="px-10">{children}</div>
      </div>
    </ScrollArea>
  );
}

export default DefaultPageWrapper;
