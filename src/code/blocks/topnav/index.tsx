'use client';
import { Text } from '@/code/common/components';
import Link from 'next/link';
import { Popover } from '@radix-ui/themes';

import { usePathname, useRouter } from 'next/navigation';

function TopNav() {
  const pathname = usePathname();
  const route = useRouter();
  const gotohome = () => {
    route.push('/');
  };
  const getClassA = (path: string) => {
    if (path === pathname) return 'font-medium';
    return 'font-thin';
  };

  const getClassB = (path: string) => {
    if (path === pathname)
      return 'px-4 py-2 hover:bg-slate-50 bg-slate-50 font-medium w-full';
    return 'px-4 py-2 hover:bg-slate-50 font-thin w-full';
  };

  return (
    <div className="px-10">
      <div className="grid grid-cols-2 items-center gap-5 py-5">
        {/* --------------------- */}
        {/* --------------------- */}

        <div className="flex flex-row items-center gap-2 text-xl font-semibold">
          <div
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#007ced]"
            onClick={gotohome}
          >
            <Text className="text-base text-white">A</Text>
          </div>
          <div className="cursor-pointer text-h3" onClick={gotohome}>
            Atul Srivastava
          </div>
        </div>

        {/* --------------------- */}
        {/* --------------------- */}
        <div className="block justify-self-end tab4:hidden">
          <Popover.Root>
            <Popover.Trigger>
              <div className="px-2 py-1">
                <img src="/svg/6dots.svg" alt="" width={25} height={25} />
              </div>
            </Popover.Trigger>
            <Popover.Content className="p-0 shadow-md">
              <div className="flex flex-col items-start gap-0">
                <TopNav.Link
                  className={getClassB('/experience')}
                  href="/experience"
                  name="Experience"
                />
                <TopNav.Link
                  className={getClassB('/publications')}
                  href="/publications"
                  name="Publications"
                />
                <TopNav.Link
                  className={getClassB('/research')}
                  href="/research"
                  name="Research"
                />
                <TopNav.Link
                  className={getClassB('/students')}
                  href="/students"
                  name="Students"
                />
                <TopNav.Link
                  className={getClassB('/awards')}
                  href="/awards"
                  name="Awards and Recognition"
                />
                <TopNav.Link
                  className={getClassB('/gallery')}
                  href="/gallery"
                  name="Gallery"
                />
                <TopNav.Link
                  className={getClassB('/contact')}
                  href="/contact"
                  name="Contact"
                />
              </div>
            </Popover.Content>
          </Popover.Root>
          <div></div>
        </div>
        {/* --------------------- */}
        {/* --------------------- */}

        <div className="hidden justify-self-end tab4:block">
          <div className="flex flex-row items-center gap-6">
            <TopNav.Link
              className={getClassA('/experience')}
              href="/experience"
              name="Experience"
            />
            <TopNav.Link
              className={getClassA('/publications')}
              href="/publications"
              name="Publications"
            />
            <TopNav.Link
              className={getClassA('/research')}
              href="/research"
              name="Research"
            />
            <TopNav.Link
              className={getClassA('/students')}
              href="/students"
              name="Students"
            />
            <TopNav.Link
              className={getClassA('/awards')}
              href="/awards"
              name="Awards and Recognition"
            />
            <TopNav.Link
              className={getClassA('/gallery')}
              href="/gallery"
              name="Gallery"
            />
            <TopNav.Link
              className={getClassA('/contact')}
              href="/contact"
              name="Contact"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopNav;
type props = {
  name: string;
  href: string;
  className?: string;
};

TopNav.Link = function ({ name, className, href = '#' }: props) {
  const extendClass = `${className || 'cursor-pointer text-base text-[#333]'}`;
  return (
    <Link href={href} className={extendClass}>
      {name}
    </Link>
  );
};
