import axios from 'axios';
import { ToastError } from '@/components/toast/ToastError';

export default async function FetchBlogPosts(
  page,
  pageSize,
  maxPageSize,
  filterBy,
  orderBy,
  sortBy,
  search,
) {
  const controller = new AbortController();
  const abortSignal = controller.signal;

  try {
    const config = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };

    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_APP_BLOG_API_URL}/api/posts/list/?p=${page}&page_size=${pageSize}&max_page_size=${maxPageSize}&filter=${filterBy}&order=${orderBy}&sort=${sortBy}&search=${search}`,
      {
        ...config,
        signal: abortSignal,
      },
    );

    return res;
  } catch (err) {
    if (axios.isCancel(err)) {
      ToastError(`Error: ${err.response.statusText}`);
    } else {
      ToastError(`Error: ${err.response.statusText}`);
    }
  }
}
