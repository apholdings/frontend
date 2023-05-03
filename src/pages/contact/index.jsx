import Head from 'next/head';
import Layout from '@/hocs/Layout';

const SeoList = {
  title: 'Contáctanos - SoloPython, Empresa de Desarrollo de Software y Marketing',
  description:
    'Ponte en contacto con SoloPython, una empresa de desarrollo de software y marketing que se dedica a crear soluciones innovadoras para nuestros clientes. Estamos disponibles para responder a tus preguntas y discutir tus necesidades en cuanto a proyectos de software.',
  href: '/contact',
  url: 'https://solopython.com/contact',
  keywords:
    'SoloPython, contacto, empresa de desarrollo de software, marketing, proyectos de software, soluciones',
  robots: 'all',
  author: 'SoloPython',
  publisher: 'SoloPython',
  image:
    'https://bafybeiaor24mrcurzyzccxl7xw46zdqpor4sfuhddl6tzblujoiukchxnq.ipfs.w3s.link/teach.png',
  video: 'https://boomslagcourses.s3.us-east-2.amazonaws.com/Quack+Sound+Effect.mp4',

  twitterHandle: '@boomslag_',
};

export default function Contact() {
  return (
    <>
      <Head>
        <title>{SeoList.title}</title>
        <meta name="description" content={SeoList.description} />

        <meta name="keywords" content={SeoList.keywords} />
        <link rel="canonical" href={SeoList.href} />
        <meta name="robots" content={SeoList.robots} />
        <meta name="author" content={SeoList.author} />
        <meta name="publisher" content={SeoList.publisher} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        {/* Social Media Tags */}
        <meta property="og:title" content={SeoList.title} />
        <meta property="og:description" content={SeoList.description} />
        <meta property="og:url" content={SeoList.url} />
        <meta property="og:image" content={SeoList.image} />
        <meta property="og:image:width" content="1370" />
        <meta property="og:image:height" content="849" />
        <meta property="og:image:alt" content={SeoList.image} />
        <meta property="og:type" content="website" />

        <meta property="fb:app_id" content="555171873348164" />

        {/* Video meta tags */}
        <meta property="og:video" content={SeoList.video} />
        <meta property="og:video:url" content={SeoList.video} />
        <meta property="og:video:type" content="video/mp4" />
        <meta property="og:video:width" content="1280" />
        <meta property="og:video:height" content="720" />
        <meta property="og:video:secure_url" content={SeoList.video} />

        {/* Twitter meta Tags */}
        <meta name="twitter:title" content={SeoList.title} />
        <meta name="twitter:description" content={SeoList.description} />
        <meta name="twitter:image" content={SeoList.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={SeoList.twitterHandle} />
        <meta name="twitter:player:width" content="1280" />
        <meta name="twitter:player:height" content="720" />
        <meta name="twitter:player:stream" content={SeoList.video} />
      </Head>
      <div className="dark:bg-dark-bg">
        <p className="dark:text-dark-txt">Contact page</p>
      </div>
    </>
  );
}

Contact.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
