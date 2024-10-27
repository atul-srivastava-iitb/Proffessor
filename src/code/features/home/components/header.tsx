const profileImage = '/resume/sir.JPG';
import { professorInfo } from '@/data/professor';

function HeaderProfile() {
  return (
    <div className="flex flex-col items-center tab3:flex-row">
      <div className="min-h-[400px] w-[100%] border tab3:w-[400px]">
        <img src={profileImage} alt="" className="w-full object-fill" />
      </div>
      <div className="flex-1">
        <div className="grid min-h-[250px] grid-cols-1 grid-rows-1 items-stretch justify-stretch border bg-white">
          <div className="flex flex-row items-center rounded-md bg-white py-8 tab3:left-[-40px]">
            <div className="flex-1 px-5 tab3:px-16">
              <div className="text-3xl font-medium">{professorInfo.name}</div>
              <div className="h-2" />
              {professorInfo.generalInfo.status.map((item, index) => {
                return (
                  <div
                    className="flex flex-row items-center justify-between gap-2 py-1"
                    key={index}
                  >
                    <div className="text-base font-semibold italic text-[#666]">
                      {item.text}
                    </div>
                    <div className="text-body italic text-[#666]">
                      {item.date}
                    </div>
                  </div>
                );
              })}
              <div className="pt-2">
                <div className="inline-block text-h4 font-semibold">
                  Research Interest:
                </div>
                <div className="inline-block text-base font-normal">
                  {professorInfo.generalInfo.interest.description}
                </div>
              </div>
              <div>
                <div className="h-5"></div>
                <a href="/resume/Atul_CV.pdf" target="_blank">
                  <div className="border-secondary inline-block rounded-[30px] border-2 bg-white px-6 py-2.5 text-base text-black shadow-lg">
                    Downlad CV
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HeaderProfile;
