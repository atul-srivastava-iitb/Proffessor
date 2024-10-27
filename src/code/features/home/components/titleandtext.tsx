import { BlockText } from '@/code/blocks';
import { homeCards } from '@/data/home/cards';

function TitleAndText() {
  return (
    <div>
      {homeCards.map((item, index) => {
        return (
          <div key={index}>
            <BlockText.pageHead text={item.name} />
            <div className="h-2" />
            <div className="text-base italic leading-7 text-[#666]">
              {item.content}
            </div>
            <div className="h-10" />
          </div>
        );
      })}
    </div>
  );
}

export default TitleAndText;
