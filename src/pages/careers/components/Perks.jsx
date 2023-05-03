import { CheckIcon } from '@heroicons/react/20/solid';

const perks = [
  {
    name: 'Global benefits',
    description:
      'Our benefits, equity, and time-off programs are tailored to suit each of our international locations.',
  },
  {
    name: 'Crypto incentives',
    description: 'Get cryptocurrency and NFT incentives as part of our employee rewards program.',
  },
  {
    name: 'Charitable matching',
    description:
      'We match monetary contributions to eligible nonprofits and charities up to a certain annual limit.',
  },
  {
    name: 'Blockchain education',
    description:
      'Gain access to leading blockchain and NFT courses to advance your professional development.',
  },
  {
    name: 'Diversity and Inclusion',
    description:
      'We prioritize diversity and inclusion through events, trainings, and meet-ups facilitated by our Employee Resource Groups.',
  },
  {
    name: 'Guest speakers',
    description:
      'We regularly host speakers from various industries and backgrounds to provide diverse perspectives.',
  },
  {
    name: 'Remote work flexibility',
    description:
      'We offer flexible remote work options, so you can work from anywhere in the world.',
  },
  {
    name: 'Company events',
    description:
      'Take part in company celebrations, wellness events, and fun activities like online gaming tournaments, virtual art galleries, and more.',
  },
  {
    name: 'We-Invest',
    description:
      'Our workers are encouraged to spend work time on their own projeccts, they are given a company credit card to fund whatever they want.',
  },
  {
    name: 'Groups and clubs',
    description:
      'Connect with others who share your interests in cryptocurrency, NFTs, and more through our various groups and clubs.',
  },
];

export default function Perks() {
  return (
    <div className="dark:bg-dark-bg py-24 pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div>
            <h2 className="text-base font-semibold leading-7 dark:text-dark-accent text-indigo-600">
              Everything you need
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight dark:text-dark-txt text-gray-900 sm:text-4xl">
              All-in-one platform
            </p>
            <p className="mt-6 text-base leading-7 text-gray-600 dark:text-dark-txt-secondary">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis
              suscipit eaque, iste dolor cupiditate blanditiis ratione.
            </p>
          </div>
          <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:gap-y-16">
            {perks.map((perk) => (
              <div key={perk.name} className="relative pl-9">
                <dt className="font-semibold dark:text-dark-txt text-gray-900">
                  <CheckIcon
                    className="absolute top-1 left-0 h-5 w-5 text-forest-green-300"
                    aria-hidden="true"
                  />
                  {perk.name}
                </dt>
                <dd className="mt-2 dark:text-dark-txt-secondary">{perk.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
