import Head from 'next/head';
import Header from './components/Header';
import Layout from '@/hocs/Layout';

import InfoCollection from './components/InfoCollection';
import TypesOfData from './components/TypesOfData';
import UsageData from './components/UsageData';
import CookiesData from './components/CookiesData';
import UseOfData from './components/UseOfData';
import TransferOfData from './components/TransferOfData';
import DisclosureOfData from './components/DisclosureOfData';
import SecurityOfData from './components/SecurityOfData';
import ServiceProviders from './components/ServiceProviders';
import Analytics from './components/Analytics';
import OtherSites from './components/OtherSites';
import ChildrensPrivacy from './components/ChildrensPrivacy';
import Changes from './components/Changes';

const SeoList = {
  title: 'Política de Privacidad - SoloPython, Empresa de Desarrollo de Software',
  description:
    'La Política de Privacidad de SoloPython explica cómo recopilamos, utilizamos y protegemos la información personal de nuestros clientes y usuarios. Conozca nuestros compromisos y responsabilidades en relación con la privacidad y protección de datos.',
  href: '/privacy-policy',
  url: 'https://solopython.com/privacy-policy',
  keywords:
    'SoloPython, política de privacidad, protección de datos, empresa de desarrollo de software',
  robots: 'all',
  author: 'SoloPython',
  publisher: 'SoloPython',
  image:
    'https://bafybeiaor24mrcurzyzccxl7xw46zdqpor4sfuhddl6tzblujoiukchxnq.ipfs.w3s.link/teach.png',
  video: '',

  twitterHandle: '@boomslag_',
};

export default function Privacy() {
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
      <InfoCollection />
      <TypesOfData />
      <UsageData />
      <CookiesData />
      <UseOfData />
      <TransferOfData />
      <DisclosureOfData />
      <SecurityOfData />
      <ServiceProviders />
      <Analytics />
      <OtherSites />
      <ChildrensPrivacy />
      <Changes />
      <div className="pb-32" />
    </div>
  );
}

Privacy.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
