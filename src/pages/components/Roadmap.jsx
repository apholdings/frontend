import { CheckIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';

const steps = [
  {
    name: 'Deploy Smart Contracts (Apr 20 ~ 27, 2023)',
    description:
      'Initially, we must ensure our e-learning platform functions seamlessly. During this stage, our focus will be on deploying smart contracts and conducting penetration testing.',
    href: '#',
    status: 'current',
  },
  {
    name: 'Physical Products (May 20, 2023)',
    description:
      "We will integrate the ERC1155 token standard to facilitate buying and selling physical goods, fostering an ecosystem that doesn't require leaving MATIC. Physical products are crucial in achieving this goal.",
    href: '#',
    status: 'upcoming',
  },
  {
    name: 'Improved Messages (Jul 19, 2023)',
    description:
      'With a functioning e-learning and e-commerce platform powered by NFTs and MATIC, we will refine messaging, notifications, and other applications to enhance user experience. We will dedicate a few weeks to these improvements and brainstorm additional ideas.',
    href: '#',
    status: 'upcoming',
  },
  {
    name: 'Enhanced Social Interactions (Aug 19, 2023)',
    description:
      'Envisioning a digital campus akin to a university, we aim to create a space for knowledge, friendships, extracurricular activities, and groups. This marks the beginning of our metaverse, the Boomslag Metaverse, or Praedium.',
    href: '#',
    status: 'upcoming',
  },
  {
    name: 'Advanced Analytics (Sep 19, 2023)',
    description:
      'To grow our platform, we will gather and present analytics in a structured manner, enabling buyers and sellers to track their spending and earnings. We will also introduce interactive analytics dashboards for enhanced engagement.',
    href: '#',
    status: 'upcoming',
  },
  {
    name: 'Crowdfunding Platform (Nov 19, 2023)',
    description:
      'We will launch a crowdfunding platform centered on DeSci, allowing the community to fund scientific projects and offer perks to project investors.',
    href: '#',
    status: 'upcoming',
  },
  {
    name: 'Tiered Subscriptions (Dec 19, 2023)',
    description:
      'Imagine an OnlyFans-style subscription model for any product or service sold on Boomslag. Users will have the ability to create their unique brand and offer recurring subscriptions, all paid in MATIC.',
    href: '#',
    status: 'upcoming',
  },
  {
    name: 'Poker Casino (Jan ~ Mar 19, 2024)',
    description:
      'We plan to implement a casino for users aged 18 and older to gamble with MATIC in the Boomslag Casino. This feature is extensive, so it may take some time, but rest assured, a casino is on the horizon by late 2023 or early 2024.',
    href: '#',
    status: 'upcoming',
  },
  {
    name: 'Video Games (Jan 19, 2024)',
    description:
      "By the end of 2023, we aim to enable video game distribution and in-platform gaming. We're developing our own games as well, and once we finalize our vision for integrating our platform with video game metaverses, we'll make this feature available to the public.",
    href: '#',
    status: 'upcoming',
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Roadmap() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
      <div className="mx-auto max-w-3xl">
        {/* Content goes here */}
        <nav aria-label="Progress">
          <ol className="overflow-hidden">
            {steps.map((step, stepIdx) => (
              <li
                key={step.name}
                className={classNames(stepIdx !== steps.length - 1 ? 'pb-10' : '', 'relative')}
              >
                {step.status === 'complete' ? (
                  <>
                    {stepIdx !== steps.length - 1 ? (
                      <div
                        className="absolute left-4 top-4 -ml-px mt-0.5 h-full w-0.5 bg-indigo-600"
                        aria-hidden="true"
                      />
                    ) : null}
                    <Link href={step.href} className="group relative flex items-start">
                      <span className="flex h-9 items-center">
                        <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 group-hover:bg-indigo-800">
                          <CheckIcon className="h-5 w-5 text-white" aria-hidden="true" />
                        </span>
                      </span>
                      <span className="ml-4 flex min-w-0 flex-col">
                        <span className="text-sm font-medium dark:text-dark-txt">{step.name}</span>
                        <span className="text-sm text-gray-500 dark:text-dark-txt-secondary">
                          {step.description}
                        </span>
                      </span>
                    </Link>
                  </>
                ) : step.status === 'current' ? (
                  <>
                    {stepIdx !== steps.length - 1 ? (
                      <div
                        className="absolute left-4 top-4 -ml-px mt-0.5 h-full w-0.5 bg-gray-300"
                        aria-hidden="true"
                      />
                    ) : null}
                    <Link
                      href={step.href}
                      className="group relative flex items-start"
                      aria-current="step"
                    >
                      <span className="flex h-9 items-center" aria-hidden="true">
                        <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 dark:border-dark-accent border-indigo-600 bg-white">
                          <span className="h-2.5 w-2.5 rounded-full dark:bg-dark-accent bg-indigo-600" />
                        </span>
                      </span>
                      <span className="ml-4 flex min-w-0 flex-col">
                        <span className="text-sm font-medium darrk:text-dark-accent dark:text-dark-accent text-indigo-600">
                          {step.name}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-dark-txt-secondary">
                          {step.description}
                        </span>
                      </span>
                    </Link>
                  </>
                ) : (
                  <>
                    {stepIdx !== steps.length - 1 ? (
                      <div
                        className="absolute left-4 top-4 -ml-px mt-0.5 h-full w-0.5 bg-gray-300"
                        aria-hidden="true"
                      />
                    ) : null}
                    <Link href={step.href} className="group relative flex items-start">
                      <span className="flex h-9 items-center" aria-hidden="true">
                        <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white group-hover:border-gray-400">
                          <span className="h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-gray-300" />
                        </span>
                      </span>
                      <span className="ml-4 flex min-w-0 flex-col">
                        <span className="text-sm font-medium text-gray-500 dark:text-dark-txt">
                          {step.name}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-dark-txt-secondary">
                          {step.description}
                        </span>
                      </span>
                    </Link>
                  </>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </div>
  );
}
