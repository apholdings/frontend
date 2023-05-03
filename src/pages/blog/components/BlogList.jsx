import StandardPagination from '@/components/pagination/StandardPagination';
import BlogCardHorizontal from './BlogCardHorizontal';

export default function BlogList({ posts, count, pageSize, currentPage, setCurrentPage }) {
  return (
    <div className="overflow-hidden px-8 ">
      <ul className="divide-y space-y-8 gap-8 dark:divide-dark-second divide-gray-200">
        {posts &&
          posts.map((post, index) => <BlogCardHorizontal data={post} key={index} index={index} />)}
      </ul>
      <StandardPagination
        data={posts}
        count={count}
        pageSize={pageSize}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}
