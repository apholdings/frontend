import Head from 'next/head';
import Layout from '@/hocs/Layout';
import Header from './components/Header';

const SeoList = {
  title: 'Términos de Servicio - SoloPython, Empresa de Desarrollo de Software',
  description:
    'Los Términos de Servicio de SoloPython establecen las condiciones bajo las cuales ofrecemos nuestros servicios de desarrollo de software y marketing. Lea atentamente nuestros términos para comprender sus derechos y responsabilidades como cliente o usuario de nuestros servicios.',
  href: '/terms',
  url: 'https://solopython.com/terms',
  keywords:
    'SoloPython, términos de servicio, empresa de desarrollo de software, condiciones, derechos y responsabilidades',
  robots: 'all',
  author: 'SoloPython',
  publisher: 'SoloPython',
  image:
    'https://bafybeiaor24mrcurzyzccxl7xw46zdqpor4sfuhddl6tzblujoiukchxnq.ipfs.w3s.link/teach.png',
  video: '',

  twitterHandle: '@boomslag_',
};

export default function Terms() {
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
      <div>Terms page</div>
      <div className="pb-32" />
    </div>
  );
}

Terms.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
