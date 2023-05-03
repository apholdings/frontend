import { Tab } from '@headlessui/react';
import {
  BellAlertIcon,
  CheckIcon,
  CreditCardIcon,
  DevicePhoneMobileIcon,
  LockClosedIcon,
  PhoneIcon,
  ShoppingCartIcon,
  StarIcon,
  TagIcon,
  TvIcon,
  UserIcon,
  VideoCameraIcon,
  WrenchIcon,
} from '@heroicons/react/20/solid';
import Link from 'next/link';

const customerLinks = [
  { text: 'Payment Methods', path: '/help/id' },
  { text: 'Lifetime Access', path: '/help/id' },
  { text: 'Missing courses', path: '/help/id' },
  { text: 'Certificates', path: '/help/id' },
  { text: 'Resources', path: '/help/id' },
  { text: 'Payment Failure', path: '/help/id' },
  { text: 'Your Wallet', path: '/help/id' },
  { text: 'Your History', path: '/help/id' },
];

const customerHelpLinks = [
  {
    link: '/help/id',
    icon: StarIcon,
    title: 'Getting Started',
    description: 'Learn how to get started with Boomslag.',
  },
  {
    link: '/help/id',
    icon: UserIcon,
    title: 'Account/Profile',
    description: 'Manage your account settings.',
  },
  {
    link: '/help/id',
    icon: BellAlertIcon,
    title: 'Troubleshooting',
    description: 'Fix any technical issue.',
  },
  {
    link: '/help/id',
    icon: VideoCameraIcon,
    title: 'Learning Experience',
    description: 'Everything about learning on boomslag.',
  },
  {
    link: '/help/id',
    icon: ShoppingCartIcon,
    title: 'Payments',
    description: 'Understand everything about payments and your wallet.',
  },
  {
    link: '/help/id',
    icon: DevicePhoneMobileIcon,
    title: 'Mobile',
    description: 'Learn about the boomslag app.',
  },
  {
    link: '/help/id',
    icon: LockClosedIcon,
    title: 'Trust & Safety',
    description: 'Trust & Safety information and reports.',
  },
];

const sellerLinks = [
  { text: 'How to become a Verified seller', path: '/help/id' },
  { text: 'Promote courses with coupons and affiliates', path: '/help/id' },
  { text: 'Course quality checklist', path: '/help/id' },
  { text: 'Seller revenue share', path: '/help/id' },
  { text: 'Promotional agreements and deals', path: '/help/id' },
  { text: 'Selling on Boomslag: FAQ', path: '/help/id' },
];

const sellerHelpLinks = [
  {
    link: '/help/id',
    icon: CreditCardIcon,
    title: 'Seller Payments',
    description: 'Understand revenue share and how to receive payments.',
  },
  {
    link: '/help/id',
    icon: TagIcon,
    title: 'Selling & Promotion',
    description: 'Learn about announcements and promotions by boomslag.',
  },
  {
    link: '/help/id',
    icon: CheckIcon,
    title: 'Quality Standards',
    description: 'What you need to know to create an amazing course..',
  },
  {
    link: '/help/id',
    icon: TvIcon,
    title: 'Course Building',
    description: 'Build the best course curriculum and landing page.',
  },
  {
    link: '/help/id',
    icon: WrenchIcon,
    title: 'Course Management',
    description: 'Management and maintenance to engage your students.',
  },
  {
    link: '/help/id',
    icon: LockClosedIcon,
    title: 'Trust & Safety',
    description: 'Trust & Safety information and reports.',
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Faqs() {
  return (
    <div className="w-full pb-12">
      <Tab.Group>
        <Tab.List className=" flex space-x-1 p-1 ">
          <Tab
            className={({ selected }) =>
              classNames(
                'col-span-1 w-full py-2.5 text-lg leading-5 md:col-span-2',
                '',
                selected
                  ? 'flex items-center justify-center space-x-2 border-b-4 border-gray-900 p-1 font-bold text-black focus:outline-none dark:text-dark-txt dark:border-dark-primary'
                  : 'flex items-center justify-center border-b-2 border-gray-50 p-1 font-semibold text-gray-600 hover:border-gray-200 dark:border-dark-third dark:text-dark-txt dark:hover:border-dark-border md:space-x-2',
              )
            }
          >
            Customer
          </Tab>

          <Tab
            className={({ selected }) =>
              classNames(
                'col-span-1 w-full py-2.5 text-lg leading-5 md:col-span-2',
                '',
                selected
                  ? 'flex items-center justify-center space-x-2 border-b-4 border-gray-900 p-1 font-bold text-black focus:outline-none dark:text-dark-txt dark:border-dark-primary'
                  : 'flex items-center justify-center border-b-2 border-gray-50 p-1 font-semibold text-gray-600 hover:border-gray-200 dark:border-dark-third dark:text-dark-txt dark:hover:border-dark-border md:space-x-2',
              )
            }
          >
            Seller
          </Tab>
        </Tab.List>

        <Tab.Panels className="">
          <Tab.Panel className={classNames('rounded-xl  p-3', '')}>
            <div className="relative mx-auto max-w-7xl py-12 ">
              {/* Heading */}
              <div className=" flex flex-wrap items-center justify-between sm:flex-nowrap">
                <h3 className="text-2xl font-medium tracking-tight text-gray-900 dark:text-dark-txt">
                  Frequently asked questions
                </h3>
              </div>
              <div className="mt-6 flex">
                <ul className="grid w-full grid-cols-4 gap-2">
                  {customerLinks.map((link) => (
                    <Link
                      key={link.text}
                      href={link.path}
                      type="button"
                      className="text-sm focus:ring-indigo-500 mx-0.5 my-0.5 inline-flex items-center justify-center border border-gray-300 dark:border-dark-border bg-white dark:bg-dark-bg px-6 py-5 font-bold text-gray-900 dark:text-dark-txt shadow-sm hover:bg-gray-50 dark:hover:bg-dark-second focus:outline-none focus:ring-2 focus:ring-offset-2"
                    >
                      {link.text}
                    </Link>
                  ))}
                </ul>
              </div>
            </div>
            <div className="relative mx-auto max-w-7xl py-12 ">
              {/* Heading */}
              <div className=" flex flex-wrap items-center justify-between sm:flex-nowrap">
                <h3 className="text-2xl font-medium tracking-tight text-gray-900 dark:text-dark-txt">
                  Select a topic to get more help
                </h3>
              </div>
              <div className="mt-6 flex">
                <ul className="grid w-full grid-cols-3 gap-2">
                  {customerHelpLinks.map((link, index) => (
                    <Link
                      key={index}
                      href={link.link}
                      type="button"
                      className="group text-ms focus:ring-indigo-500 mx-0.5 my-0.5 inline-flex flex-col items-center justify-center border border-gray-300 dark:border-dark-border rounded-md bg-white dark:bg-dark-bg px-6 py-5 font-bold text-gray-900 dark:text-dark-txt shadow-sm hover:bg-gray-50 dark:hover:bg-dark-second focus:outline-none focus:ring-2 focus:ring-offset-2 transition duration-150 ease-in-out"
                    >
                      <link.icon className="h-14 w-auto bg-dark group-hover:bg-iris-700 dark:group-hover:bg-dark-accent rounded-full p-3 text-white transition duration-150 ease-in-out" />
                      <h3 className="mt-2 mb-1 text-lg dark:text-dark-txt">{link.title}</h3>
                      <p className="text-gray-600 dark:text-dark-txt-secondary text-sm group-hover:text-gray-800 dark:group-hover:text-dark-txt transition duration-150 ease-in-out">
                        {link.description}
                      </p>
                    </Link>
                  ))}
                </ul>
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel className={classNames('rounded-xl  p-3', '')}>
            <div className="relative mx-auto max-w-7xl py-12 ">
              {/* Heading */}
              <div className=" flex flex-wrap items-center justify-between sm:flex-nowrap">
                <h3 className="text-2xl font-medium tracking-tight text-gray-900 dark:text-dark-txt">
                  Frequently asked questions
                </h3>
              </div>
              <div className="mt-6 flex">
                <ul className="grid w-full grid-cols-3 gap-2">
                  {sellerLinks.map((link) => (
                    <Link
                      key={link.text}
                      href={link.path}
                      type="button"
                      className="text-sm focus:ring-indigo-500 mx-0.5 my-0.5 inline-flex items-center justify-center border border-gray-300 dark:border-dark-border bg-white dark:bg-dark-bg px-6 py-5 font-bold text-gray-900 dark:text-dark-txt shadow-sm hover:bg-gray-50 dark:hover:bg-dark-second focus:outline-none focus:ring-2 focus:ring-offset-2"
                    >
                      {link.text}
                    </Link>
                  ))}
                </ul>
              </div>
            </div>
            <div className="relative mx-auto max-w-7xl py-12 ">
              {/* Heading */}
              <div className=" flex flex-wrap items-center justify-between sm:flex-nowrap">
                <h3 className="text-2xl font-medium tracking-tight text-gray-900 dark:text-dark-txt">
                  Select a topic to get more help
                </h3>
              </div>
              <div className="mt-6 flex">
                <ul className="grid w-full grid-cols-3 gap-2">
                  {sellerHelpLinks.map((link, index) => (
                    <Link
                      key={index}
                      href={link.link}
                      type="button"
                      className="group text-ms focus:ring-indigo-500 mx-0.5 my-0.5 inline-flex flex-col items-center justify-center border border-gray-300 dark:border-dark-border rounded-md bg-white dark:bg-dark-bg px-6 py-5 font-bold text-gray-900 dark:text-dark-txt shadow-sm hover:bg-gray-50 dark:hover:bg-dark-second focus:outline-none focus:ring-2 focus:ring-offset-2 transition duration-150 ease-in-out"
                    >
                      <link.icon className="h-14 w-auto bg-dark group-hover:bg-iris-700 dark:group-hover:bg-dark-accent rounded-full p-3 text-white transition duration-150 ease-in-out" />
                      <h3 className="mt-2 mb-1 text-lg dark:text-dark-txt">{link.title}</h3>
                      <p className="text-gray-600 dark:text-dark-txt-secondary text-sm group-hover:text-gray-800 dark:group-hover:text-dark-txt transition duration-150 ease-in-out">
                        {link.description}
                      </p>
                    </Link>
                  ))}
                </ul>
              </div>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
