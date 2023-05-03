import Head from 'next/head';
import Layout from '@/hocs/Layout';
import Link from 'next/link';
import Header from './components/Header';

const SeoList = {
  title: 'Our Partners - Boomslag NFT Marketplace',
  description:
    'Discover our partners at Boomslag, the ultimate NFT marketplace for online courses, physical products, and more. Learn about our collaborations with leading brands and creators in the NFT space.',
  href: '/',
  url: 'https://boomslag.com',
  keywords: 'boomslag partners',
  robots: 'all',
  author: 'BoomSlag',
  publisher: 'BoomSlag',
  image:
    'https://bafybeiaor24mrcurzyzccxl7xw46zdqpor4sfuhddl6tzblujoiukchxnq.ipfs.w3s.link/friends.png',
  twitterHandle: '@BoomSlag',
};

export default function Partners() {
  return (
    <div className="dark:bg-dark-bg">
      <Head>
        <title>{SeoList.title}</title>
        <meta name="description" content={SeoList.description} />

        <meta name="keywords" content={SeoList.keywords} />
        <link rel="canonical" href={SeoList.href} />
        <meta name="robots" content={SeoList.robots} />
        <meta name="author" content={SeoList.author} />
        <meta name="publisher" content={SeoList.publisher} />

        {/* Social Media Tags */}
        <meta property="og:title" content={SeoList.title} />
        <meta property="og:description" content={SeoList.description} />
        <meta property="og:url" content={SeoList.url} />
        <meta property="og:image" content={SeoList.image} />
        <meta property="og:image:width" content="1370" />
        <meta property="og:image:height" content="849" />
        <meta property="og:image:alt" content="Boomslag Thumbnail Image" />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content={SeoList.title} />
        <meta name="twitter:description" content={SeoList.description} />
        <meta name="twitter:image" content={SeoList.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={SeoList.twitterHandle} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className=" py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
            <div className="mx-auto w-full max-w-xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight dark:text-dark-txt text-gray-900">
                Trusted by the most innovative teams
              </h2>
              <p className="mt-6 text-lg leading-8 dark:text-dark-txt-secondary text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus
                etiam sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue.
              </p>
              <div className="mt-8 flex items-center gap-x-6">
                <Link
                  href="/auth/signup"
                  className="rounded-md dark:bg-dark-primary bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Create account
                </Link>
                <Link
                  href="/contact"
                  className="text-sm font-semibold dark:text-dark-txt text-gray-900"
                >
                  Contact us <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
            <div className="mx-auto grid w-full max-w-xl grid-cols-2 items-center gap-y-12 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:pl-8">
              <img
                className="max-h-12 w-full object-contain object-left"
                src="https://tailwindui.com/img/logos/tuple-logo-gray-900.svg"
                alt="Tuple"
                width={105}
                height={48}
              />
              <img
                className="max-h-12 w-full object-contain object-left"
                src="https://tailwindui.com/img/logos/reform-logo-gray-900.svg"
                alt="Reform"
                width={104}
                height={48}
              />
              <img
                className="max-h-12 w-full object-contain object-left"
                src="https://tailwindui.com/img/logos/savvycal-logo-gray-900.svg"
                alt="SavvyCal"
                width={140}
                height={48}
              />
              <img
                className="max-h-12 w-full object-contain object-left"
                src="https://tailwindui.com/img/logos/laravel-logo-gray-900.svg"
                alt="Laravel"
                width={136}
                height={48}
              />
              <img
                className="max-h-12 w-full object-contain object-left"
                src="https://tailwindui.com/img/logos/transistor-logo-gray-900.svg"
                alt="Transistor"
                width={158}
                height={48}
              />
              <img
                className="max-h-12 w-full object-contain object-left"
                src="https://tailwindui.com/img/logos/statamic-logo-gray-900.svg"
                alt="Statamic"
                width={147}
                height={48}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Partners.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
