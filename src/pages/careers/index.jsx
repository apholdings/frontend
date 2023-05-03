import Head from 'next/head';
import ParticlesBackground from '@/components/ParticlesBackground';
import WhoWeAre from './components/WhoWeAre';
import OurValues from './components/OurValues';
import Perks from './components/Perks';
import JoinOurTeam from './components/JoinOurTeam';
import Layout from '@/hocs/Layout';

const SeoList = {
  title: 'Join the Team - Boomslag NFT Marketplace',
  description:
    'Find exciting career opportunities at Boomslag, the ultimate NFT marketplace for online courses, physical products, and more. We are looking for talented individuals to help us shape the future of e-commerce with the power of blockchain technology.',
  href: '/',
  url: 'https://boomslag.com',
  keywords: 'boomslag, boomslag affiliates, affiliate marketing NFT, nft affiliate marketing',
  robots: 'all',
  author: 'BoomSlag',
  publisher: 'BoomSlag',
  image:
    'https://bafybeiaor24mrcurzyzccxl7xw46zdqpor4sfuhddl6tzblujoiukchxnq.ipfs.w3s.link/teach.png',
  twitterHandle: '@BoomSlag',
};

export default function Careers() {
  return (
    <div>
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

      <div className="dark:bg-dark-bg px-6 lg:px-8">
        <ParticlesBackground />
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <svg
            className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
            viewBox="0 0 1155 678"
          >
            <path
              fill="url(#career-gradient)"
              fillOpacity=".3"
              d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
            />
            <defs>
              <linearGradient
                id="career-gradient"
                x1="1155.49"
                x2="-78.208"
                y1=".177"
                y2="474.645"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#00c6ff" />
                <stop offset="0.5" stopColor="#0072ff" />
                <stop offset="1" stopColor="#7a2aff" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="mx-auto max-w-2xl py-28 sm:py-36 ">
          <div className="text-center">
            <h1 className="text-4xl dark:text-dark-txt font-bold tracking-tight text-gray-900 sm:text-6xl">
              Shaping the Future of Blockchain Together.
            </h1>
            <p className="mt-6 text-lg leading-8 dark:text-dark-txt-secondary text-gray-600">
              Join us in empowering people globally with the power of cryptocurrency and blockchain
              technology.
            </p>
          </div>
        </div>
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
          <svg
            className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
            viewBox="0 0 1155 678"
          >
            <path
              fill="url(#career-gradient)"
              fillOpacity=".3"
              d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
            />
          </svg>
        </div>
      </div>
      <WhoWeAre />
      <OurValues />
      <Perks />
      <JoinOurTeam />
    </div>
  );
}

Careers.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
