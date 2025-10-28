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
            <div className="border-b border-gray-200 pb-4">
              <Disclosure.Button className="text-lg font-medium text-gray-900 flex items-center justify-between cursor-pointer hover:text-blue-600 transition-colors w-full text-left">
                {item.title}
                <ChevronDownIcon
                  className={`w-5 h-5 text-gray-400 transform transition-transform duration-200 ${
                    open ? 'rotate-180' : ''
                  }`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="mt-4 text-gray-600 leading-relaxed">
                {item.content}
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>
      ))}
    </div>
  )
}
