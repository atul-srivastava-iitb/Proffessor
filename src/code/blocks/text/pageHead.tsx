import { Text } from '@/code/common/components';

type props = {
  text?: string;
};
function PageHead({ text }: props) {
  return (
    <div className="group inline-block cursor-pointer pb-2 text-2xl font-semibold">
      {text}
      <span className="bg-whtie absolute bottom-0 left-0 h-0.5 w-full">
        <span className="bg-secondary absolute bottom-0 left-0 h-0.5 w-[20px] transition-all group-hover:w-full"></span>
      </span>
    </div>
  );
}
export default PageHead;
