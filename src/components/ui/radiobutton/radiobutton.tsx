import * as RadixCheckbox from '@radix-ui/react-checkbox'
import clsx from 'clsx'

type Props = {
  onCheck: () => void
  checked: boolean
  id: string
  label: string
}

const RadioButton = (props: Props) => {
  return (
    <div
      className={clsx(
        'flex items-center p-3 h-[44px]',
        props.checked
          ? 'bg-primary-medium text-white'
          : 'bg-white text-primary-medium'
      )}
    >
      <RadixCheckbox.Root
        className={clsx(
          'flex h-5 w-5 items-center justify-center rounded-full bg-white outline outline-2 outline-primary-medium/[.2]',
          props.checked
            ? 'focus:outline-primary-light'
            : 'focus:outline-primary-medium'
        )}
        defaultChecked
        id={props.id}
        checked={props.checked ? 'indeterminate' : false}
        onCheckedChange={props.onCheck}
      >
        <RadixCheckbox.Indicator>
          {props.checked && <div className="w-4 h-4 rounded-full bg-primary-medium" />}
          <span className="sr-only">{props.label}</span>
        </RadixCheckbox.Indicator>
      </RadixCheckbox.Root>
      <label
        className="font-sans-bold text-lg leading-6 cursor-pointer pl-[9px]"
        htmlFor={props.id}
      >
        {props.label}
      </label>
    </div>
  )
}

export { RadioButton }
