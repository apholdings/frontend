import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import axios from 'axios';
import DOMPurify from 'isomorphic-dompurify';
import moment from 'moment';
import Layout from '@/hocs/Layout';

export default function BlogPost({ slug, post }) {
  const SeoList = {
    title: `${post.title} - ${post.short_description}`,
    description: post.short_description,
    href: `/blog/${slug[0]}`,
    url: `https://solopython.com/blog/${slug[0]}`,
    keywords: post.keywords,
    robots: 'all',
    author: post.author.username,
    publisher: 'SoloPython',
    image: post.thumbnail,
    video: post.video || '',
    twitterHandle: '@boomslag_',
  };

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
        <div className="relative dark:bg-dark-second bg-gray-200">
          <div className="absolute inset-0">
            <Image
              width={512}
              height={512}
              className="h-full w-full object-cover"
              src={post.thumbnail}
              alt=""
            />
            <div className="absolute inset-0  bg-gray-50 mix-blend-multiply" aria-hidden="true" />
          </div>
          <div className="relative mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold tracking-tight dark:text-dark-txt text-black sm:text-5xl lg:text-6xl">
              {post.title}
            </h1>
            <div className="min-w-0 flex-1 p-4 pt-8">
              <div className="">
                <span className=" hover:text-orange-500  mx-1 font-medium dark:text-dark-txt-secondary text-gray-800 text-sm ">
                  <Link href={`/category/${post.category.slug}`}>{post.category.name}</Link>
                </span>{' '}
                <span className="text-gray-300 dark:text-dark-txt-secondary">&middot;</span>
                <span className="mt-2 ml-2 mr-1 font-medium text-gray-800 text-sm dark:text-dark-txt-secondary">
                  {moment(post.created_at).format('LL')}
                </span>{' '}
                <span className="text-gray-300 dark:text-dark-txt-secondary">&middot;</span>
                <span className="mt-2 mx-2 font-medium text-gray-800 text-sm dark:text-dark-txt-secondary">
                  X min read
                </span>
                <p className="mt-4 text-lg font-regular text-gray-800 leading-8 dark:text-dark-txt-secondary">
                  {post.short_description}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden  py-16">
          <div className="relative">
            <div className="prose prose-lg max-w-7xl prose-indigo mx-auto mt-6 dark:text-dark-txt-secondary ">
              <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.content) }} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

BlogPost.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export async function getServerSideProps(context) {
  const { slug } = context.query;

  const res = await axios.get(`${process.env.NEXT_PUBLIC_APP_BLOG_API_URL}/api/posts/get/${slug}/`);

  return {
    props: {
      slug,
      post: res.data.results,
    },
  };
}
