import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

interface FAQ {
  title: string;
  content: string;
}

interface Props {
  items: FAQ[];
}

export default function FAQAccordion({ items }: Props) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <Disclosure key={item.title}>
          {({ open }) => (
            <div className="border-b border-gray-200 dark:border-neutral-800 pb-4">
              <Disclosure.Button className="text-lg font-medium text-gray-900 dark:text-gray-100 flex items-center justify-between cursor-pointer hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-300 w-full text-left focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary/60 rounded-[4px]">
                {item.title}
                <ChevronDownIcon
                  className={`w-5 h-5 text-gray-400 dark:text-gray-500 transform transition-transform duration-300 ${
                    open ? 'rotate-180' : ''
                  }`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="mt-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                {item.content}
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>
      ))}
    </div>
  )
}
