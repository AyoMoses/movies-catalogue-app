import * as RadixCollapsible from '@radix-ui/react-collapsible'

import expandArrowIcon from './expand-arrow.svg'
import crossIcon from './cross.svg'
import clsx from 'clsx'

type Props = {
  isOpen: boolean
  onToggle: (state: boolean) => void
  children: React.ReactNode
  title: string
  className?: string
}

const Collapsible = (props: Props) => {
  return (
    <RadixCollapsible.Root
      open={props.isOpen}
      onOpenChange={props.onToggle}
      className={clsx(
        'bg-primary-light rounded-sm overflow-hidden',
        props.className
      )}
    >
      <RadixCollapsible.Trigger asChild>
        <button
          type="button"
          className="w-full flex items-center justify-between text-primary-medium py-[9px] px-[14px] font-sans-bold"
        >
          {props.title}
          <img
            className="h-6 w-6 opacity-60"
            role="presentation"
            src={props.isOpen ? crossIcon : expandArrowIcon}
          />
        </button>
      </RadixCollapsible.Trigger>
      <RadixCollapsible.Content asChild className="m-[6px] overflow-hidden">
        {props.children}
      </RadixCollapsible.Content>
    </RadixCollapsible.Root>
  )
}

export { Collapsible }
