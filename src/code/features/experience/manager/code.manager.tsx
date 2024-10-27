'use client';
import { useState } from 'react';
import { useExperienceEdit } from '../state/experience.edit';
import {
  Dialog,
  Button,
  ShowIf,
  Text,
  ScrollArea,
} from '@/code/common/components';
import { CopyIcon } from '@radix-ui/react-icons';

type props = {
  text?: string;
};

function CodeManager({ text }: props) {
  const [copied, setCopied] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const getCode = useExperienceEdit((s) => s.getCode);
  const code = useExperienceEdit((s) => s.code);
  const copyClick = async () => {
    try {
      await navigator.clipboard.writeText(code.fileText);
      setCopied(true);
    } catch (err) {
      setError(true);
    }
    setTimeout(() => {
      setCopied(false);
      setError(false);
    }, 2000);
  };

  const errortext = error ? 'Error, Please copy manually' : '';
  const buttontext = copied ? 'Copied' : 'Copy Code';

  return (
    <Dialog
      open={code.show}
      onOpenChange={() => {
        getCode('');
      }}
    >
      <div className="bg-white p-7">
        <div className="py-2 text-center font-bold underline">{text}</div>
        <div className="h-5" />
        <div className="flex flex-row justify-end gap-3">
          <ShowIf.nowrap show={errortext !== ''}>
            <Text type="p_bo_b_p" color="red">
              {errortext}
            </Text>
          </ShowIf.nowrap>

          <Button className="px-3 py-2" onClick={copyClick}>
            <CopyIcon />
            {buttontext}
          </Button>
        </div>
        <div className="h-5" />

        <div className="grid grid-cols-1 grid-rows-1 items-stretch justify-stretch rounded-md bg-gray-600 p-4">
          <ScrollArea
            orientation="vertical"
            contClass="select-text text-wrap text-white"
          >
            {code.fileText}
          </ScrollArea>
        </div>
        <div className="h-5" />
      </div>
    </Dialog>
  );
}
export default CodeManager;
