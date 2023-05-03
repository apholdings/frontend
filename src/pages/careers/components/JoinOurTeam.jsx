import { Disclosure } from '@headlessui/react';
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline';

const positions = [
  {
    question: 'Customer Success',
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: 'Data Engineer',
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: 'Ethical Hacker',
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: 'Blockchain Engineer',
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: 'Information Technology',
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: 'Marketing',
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: 'Human Resources',
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: 'Sales',
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: 'Social Media',
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  // More questions...
];

export default function JoinOurTeam() {
  return (
    <div className="dark:bg-dark-bg">
      <div className="mx-auto max-w-7xl px-6 py-24  lg:px-8">
        <div className="mx-auto max-w-4xl divide-y dark:divide-dark-border divide-gray-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight dark:text-dark-txt text-gray-900">
            Join our team
          </h2>
          <dl className="mt-10 space-y-6 divide-y dark:divide-dark-border divide-gray-900/10">
            {positions.map((position) => (
              <Disclosure as="div" key={position.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left dark:text-dark-txt text-gray-900">
                        <span className="text-base font-semibold leading-7">
                          {position.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          ) : (
                            <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 dark:text-dark-txt-secondary text-gray-600">
                        {position.answer}
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
        <p className="italic text-md dark:text-dark-txt text-gray-900 mt-12 mx-auto max-w-4xl">
          We embrace diversity and inclusion at Boomslag and evaluate eligible applications
          regardless of race, color, religion, gender, national origin, ancestry, age, genetic
          information, sexual orientation, gender identity, marital or family status, veteran
          status, medical condition, or disability.
        </p>
      </div>
    </div>
  );
}
