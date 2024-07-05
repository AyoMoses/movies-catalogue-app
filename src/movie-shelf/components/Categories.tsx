import { useState } from 'react';
import clsx from 'clsx';

import { RadioButton } from '@/components/ui/radiobutton/radiobutton';
import { Collapsible } from '@/components/ui/collapsible';

import { Category } from '../types';

type Props = {
  selectedCategory: Category | undefined;
  onApplyCategory: (category: Category) => void;
};

export const Categories = (props: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const handleCheck = (category: Category) => {
    props.onApplyCategory(category);
  };

  return (
    <Collapsible
      isOpen={isOpen}
      onToggle={setIsOpen}
      title='Categories'
      className={clsx(isOpen ? 'mb-[68px]' : 'mb-4')}
    >
      <form className={'flex flex-col rounded-xs overflow-hidden'}>
        <RadioButton
          checked={props.selectedCategory === 'popular'}
          onCheck={() => handleCheck('popular')}
          label='Popular'
          id='popular'
        />

        <RadioButton
          checked={props.selectedCategory === 'top_rated'}
          onCheck={() => handleCheck('top_rated')}
          label='Top Rated'
          id='topRated'
        />

        <RadioButton
          checked={props.selectedCategory === 'upcoming'}
          onCheck={() => handleCheck('upcoming')}
          label='Upcoming'
          id='upcoming'
        />
      </form>
    </Collapsible>
  );
};
