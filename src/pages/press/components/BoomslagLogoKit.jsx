const praedium = [
  {
    title: 'Praedium Logo',
    description: 'Logo to be used when referencing the organization',
    source:
      'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
  },
  {
    title: 'PDM Token',
    description: 'Logo to be used when referencing the token',
    source:
      'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
  },
  // More files...
];

export default function BoomslagLogoKit() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
      <div className="mx-auto max-w-5xl">
        {/* Content goes here */}
        <div className=" py-5 ">
          <h3 className="text-xl font-semibold leading-6 dark:text-dark-txt text-gray-900">
            Boomslag Kit
          </h3>
        </div>
        <ul className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
          {praedium.map((file) => (
            <li key={file.source} className="relative">
              <div className="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                <img
                  src={file.source}
                  alt=""
                  className="pointer-events-none object-cover group-hover:opacity-75"
                />
                <button type="button" className="absolute inset-0 focus:outline-none">
                  <span className="sr-only">View details for {file.title}</span>
                </button>
              </div>
              <p className="pointer-events-none mt-2 block truncate text-sm font-medium dark:text-dark-txt text-gray-900">
                {file.title}
              </p>
              <p className="pointer-events-none block text-sm font-medium dark:text-dark-txt-secondary text-gray-500">
                {file.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
