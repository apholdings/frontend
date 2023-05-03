import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';

const QuillNoSSRWrapper = dynamic(() => import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

const modules = {
  toolbar: [['bold'], ['italic'], [{ list: 'ordered' }, { list: 'bullet' }], ['code-block']],
  clipboard: {
    matchVisual: false,
  },
};

export default function SimpleEditor({ data, setData, placeholder, maxLength = 1200 }) {
  return (
    <QuillNoSSRWrapper
      value={data}
      onChange={setData}
      placeholder={placeholder}
      modules={modules}
      theme="snow"
      maxLength={maxLength}
    />
  );
}
