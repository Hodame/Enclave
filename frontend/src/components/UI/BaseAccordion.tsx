import { useState } from 'react';
import ChevronLightIcon from '@/assets/icons/ChevronLightIcon';
import { defineTitle } from './BaseSelect';

type AccordionProps<T> = {
  title: string;
  items: T[];
  isOpened?: boolean;
  onOpen?: () => void;
};

export default function BaseAccordion<T>({ title, items, isOpened, onOpen }: AccordionProps<T>) {
  const [opened, setOpened] = useState(false);

  function open() {
    isOpened ? setOpened((value) => (value = !value)) : null;
    onOpen ? onOpen() : null;
  }

  return (
    <div>
      <div
        className="flex cursor-pointer select-none items-center justify-between p-5"
        onClick={open}>
        <h1 className="text-sm font-medium text-gray-900">{title}</h1>
        <ChevronLightIcon className="transition" rotate={opened ? '180deg' : '0deg'} />
      </div>

      <div
        className={
          ' transition ' + (isOpened ? 'opacity-1 visible mt-2' : 'invisible h-0 opacity-0')
        }>
        {items.map((item, idx) => {
          return (
            <div
              key={idx}
              className="cursor-pointer px-5 py-2 text-sm text-gray-500 hover:bg-gray-100">
              {defineTitle(item)}
            </div>
          );
        })}
      </div>
    </div>
  );
}