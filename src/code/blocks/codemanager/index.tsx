'use client';
import { useState } from 'react';
import { CopyIcon } from '@radix-ui/react-icons';
import {
  Dialog,
  Button,
  ShowIf,
  Text,
  ScrollArea,
} from '@/code/common/components';
type props = {
  codetext: string;
  open: boolean;
  getCode: (action: string) => void;
  text?: string;
};

function CodeManager({ codetext, open, getCode, text }: props) {
  const [copied, setCopied] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const copyClick = async () => {
    try {
      await navigator.clipboard.writeText(codetext);
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
      open={open}
      onOpenChange={() => {
        getCode('');
      }}
    >
      <div className="max-w-50vh grid max-h-50vh grid-cols-1 grid-rows-1 items-stretch justify-stretch bg-white">
        <ScrollArea orientation="vertical" contClass="w-full">
          <div className="bg-white p-7">
            <div className="py-2 text-center font-bold underline">{text}</div>
            <div className="flex flex-row items-center justify-end gap-3">
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
            <div className="rounded-md bg-gray-600 p-4">
              <div className="select-text text-wrap text-white">{codetext}</div>
            </div>
          </div>
        </ScrollArea>
      </div>
    </Dialog>
  );
}
export default CodeManager;
