import {
  ArrowPathIcon,
  PencilIcon,
  FingerPrintIcon,
  CpuChipIcon,
  GlobeAmericasIcon,
  HeartIcon,
} from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Innovative Learners',
    description:
      'Stay ahead with a yearly learning stipend, unlimited access to our diverse courses, and exclusive learning events. Embrace your inner educator with our in-house production studio, perfect for creating and sharing your own courses.',
    icon: PencilIcon,
  },
  {
    name: 'Future-Driven Visionaries',
    description:
      'We empower our team to reach their full potential, offering workshops and training programs tailored to individual career goals. Together, we navigate the ever-evolving landscape of decentralized learning and commerce.',
    icon: CpuChipIcon,
  },
  {
    name: 'Community Impact',
    description:
      'We believe in giving back and uplifting communities. Through company volunteer events, we support local and global initiatives, providing free courses and direct training to nonprofits, their workforce, and volunteers.',
    icon: HeartIcon,
  },
  {
    name: 'Global Connection',
    description:
      'Our roots span the globe, fostering an international community of learners, educators, and employees. With a diverse and inclusive culture, we work collaboratively across multiple offices worldwide to drive innovation and growth.',
    icon: GlobeAmericasIcon,
  },
];

export default function WhoWeAre() {
  return (
    <div className="dark:bg-dark-bg pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto  max-w-5xl  lg:max-w-7xl">
          <dl className="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 dark:text-dark-txt text-gray-900">
                  <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500 dark:bg-dark-bg">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 dark:text-dark-txt-secondary text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
