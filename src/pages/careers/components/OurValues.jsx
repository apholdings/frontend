const features = [
  {
    name: 'Innovative',
    description:
      'We embrace cutting-edge technologies and strive to create new possibilities for the future of blockchain and online marketplaces.',
  },
  {
    name: 'Knowledgeable',
    description:
      'Our team is committed to continuous learning, sharing expertise, and staying ahead of the curve in the rapidly evolving world of blockchain.',
  },
  {
    name: 'Caring',
    description:
      'We believe in empowering people globally and making a positive impact on their lives through our technology and services.',
  },
  {
    name: 'Collaborative',
    description:
      'We work together, combining our diverse skills and experiences to develop innovative solutions and achieve our shared goals.',
  },
  {
    name: 'Transparent',
    description:
      'We value open communication, honesty, and accountability in all aspects of our work, fostering trust and strong relationships.',
  },
  {
    name: 'Adaptable',
    description:
      'In a fast-paced industry, we remain agile and embrace change, constantly seeking new opportunities for growth and improvement.',
  },
];

export default function OurValues() {
  return (
    <div className="dark:bg-dark-bg py-8 pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight dark:text-dark-txt text-gray-900 sm:text-4xl">
            Our Core Values
          </h2>
          {/* <p className="mt-6 text-lg leading-8 text-gray-600">
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum
            cupiditate veritatis in accusamus quisquam.
          </p> */}
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.name}>
              <dt className="font-semibold dark:text-dark-txt text-gray-900">{feature.name}</dt>
              <dd className="mt-1 text-gray-600 dark:text-dark-txt-secondary">
                {feature.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
