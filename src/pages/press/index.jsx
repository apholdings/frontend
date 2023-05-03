import Layout from '@/hocs/Layout';
import Head from 'next/head';
import BoomslagLogoKit from './components/BoomslagLogoKit';
import Colors from './components/Colors';
import Header from './components/Header';
import PraediumLogoKit from './components/PraediumLogoKit';
import Products from './components/Products';
import UridiumLogoKit from './components/UridiumLogoKit';

const SeoList = {
  title: 'Boomslag Press Kit - NFT Marketplace',
  description:
    'Access the Boomslag press kit for information about the company, the team, our mission, and our revolutionary NFT marketplace platform. Download our logos, brand guidelines, and other assets for use in articles, features, and other media.',
  href: '/',
  url: 'https://boomslag.com',
  keywords: 'boomslag press kit',
  robots: 'all',
  author: 'BoomSlag',
  publisher: 'BoomSlag',
  image:
    'https://bafybeiaor24mrcurzyzccxl7xw46zdqpor4sfuhddl6tzblujoiukchxnq.ipfs.w3s.link/teach.png',
  twitterHandle: '@BoomSlag',
};

export default function Press() {
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
      <PraediumLogoKit />
      <UridiumLogoKit />
      <BoomslagLogoKit />
      <Colors />
      <Products />
    </div>
  );
}

Press.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
