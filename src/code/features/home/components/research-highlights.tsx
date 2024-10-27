import { research_highlights } from '@/data/reasearch';
import { BlockText } from '@/code/blocks';

function ResearchHighlights() {
  return (
    <div>
      <BlockText.pageHead text={'Research Highlights'} />
      <div className="h-2" />

      {research_highlights.data.map((item, index) => {
        return (
          <div
            className="flex flex-row flex-nowrap items-start gap-4"
            key={index}
          >
            <div>
              <img src="/svg/rightArrow.svg" alt="" />
            </div>
            <div>
              <div className="text-h3 font-semibold text-[#333]">
                {item.research_name}
              </div>
              <div className="text-base italic leading-8">
                {item.research_content}
              </div>
              <div className="h-2" />
              <div className="flex flex-row items-start gap-3">
                <div className="text-base font-medium">
                  {item.research_result.name}
                </div>
                <div className="flex flex-row gap-2">
                  {item.research_result.results.map((result, index) => {
                    return (
                      <div key={index}>
                        <a
                          href={result}
                          className="px-2 underline"
                          target="_blank"
                        >
                          {index + 1}
                        </a>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="h-8" />
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default ResearchHighlights;
