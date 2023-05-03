import { useEffect } from 'react';

import moment from 'moment';
import Link from 'next/link';
import Image from 'next/image';

function BlogCardHorizontal({ data, index }) {
  console.log(data);
  const {
    category = '',
    clicks = 0,
    content = '',
    created_at = '2023-05-02T20:01:32.484521-05:00',
    id = '9c1ecdda-02f3-4843-b71e-4ea127095b35',
    impressions = 0,
    keywords = 'death star, star wars',
    language = 'Espaanol',
    level = 'Beginners',
    rating = 0,
    rating_number = 0,
    short_description = 'short descriptop',
    slug = '',
    status = 'published',
    thumbnail = '/blogs/Test/bulb1.jpg',
    title = '',
    updated_at = '2023-05-02T20:01:32.484521-05:00',
    views = 0,
  } = data ?? {};

  return (
    <li>
      <Link
        href={`/blog/${slug}`}
        onMouseEnter={() => {
          // const img = document.getElementById(index)
          // img.classList.add('object-fill')
          const dataTitle = document.getElementById(`title` + id);
          dataTitle.classList.add('text-orange-500');
        }}
        onMouseLeave={() => {
          // const img = document.getElementById(index)
          // img.classList.remove('object-fill')
          const dataTitle = document.getElementById(`title` + id);
          dataTitle.classList.remove('text-orange-500');
        }}
        className="block relative hover:shadow-card rounded-md transition duration-300 ease-in-out"
      >
        <div className="flex items-center   my-10 ">
          <div className="lg:flex min-w-0 lg:flex-1 items-center">
            <figure className="lg:flex-shrink-0">
              <Image
                width={512}
                height={512}
                id={index}
                className="h-64 lg:w-96 w-full object-cover rounded"
                src={thumbnail}
                alt=""
              />
            </figure>
            <div className="min-w-0 flex-1 px-8 p-4 ">
              <p
                id={`title` + id}
                className=" lg:mt-0 lg:absolute lg:top-4 leading-10 text-3xl pb-4 font-semibold transition duration-300 ease-in-out"
              >
                {title.length > 80 ? title.slice(0, 79) : title}
              </p>
              <div className="lg:absolute lg:top-28">
                <span className=" hover:text-orange-500  mx-1 font-medium text-gray-800 text-sm dark:text-dark-txt-secondary">
                  <Link href={`/category/${category.slug}`}>{category.name}</Link>
                </span>{' '}
                <span className="text-gray-300">&middot;</span>
                <span className="mt-2 ml-2 mr-1 font-medium text-gray-800 text-sm dark:text-dark-txt-secondary">
                  {moment(created_at).format('LL')}
                </span>{' '}
                <span className="text-gray-300">&middot;</span>
                <span className="mt-2 mx-2 font-medium text-gray-800 text-sm dark:text-dark-txt-secondary">
                  X min read
                </span>
                <p className="mt-4 text-lg font-regular text-gray-800 leading-8 dark:text-dark-txt-secondary">
                  {short_description.length > 150
                    ? short_description.slice(0, 149)
                    : short_description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
}
export default BlogCardHorizontal;
