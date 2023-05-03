import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';

const QuillNoSSRWrapper = dynamic(() => import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

const modules = {
  toolbar: [
    // Text style
    ['bold', 'italic', 'underline'],
    // Header
    [
      // {header:[1,2,3,4,5,6,false]}
      { header: '1' },
      { header: '2' },
    ],
    // Bullet points
    [{ list: 'ordered' }, { list: 'bullet' }],
    // SUb and supersub
    [{ script: 'sub' }, { script: 'super' }],
    // indentation
    [{ indent: '+1' }, { indent: '-1' }],
    // alignment
    [{ align: [] }],
    // Text size
    [{ size: ['small', 'large', 'huge', false] }],
    // Media
    ['image', 'link', 'video', 'formula'],
    // text to color and background
    [{ color: [] }, { background: [] }],
    // Font family
    [{ font: [] }],
    // Code snippet
    ['code-block'],
  ],
  clipboard: {
    matchVisual: false,
  },
};

export default function RichTextEditor({ data }) {
  return <QuillNoSSRWrapper onChange={data} modules={modules} theme="snow" />;
}
