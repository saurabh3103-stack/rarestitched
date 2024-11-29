import type { FC } from 'react';
import Link from 'next/link';

const WidgetMugs: FC = () => {
  const widgetMugs = {
    id: 1,
    path: '/search?category=mugs',
    label: 'Coffee Mugs',
    columnItemItems: [
      { id: 1, path: '/search?category=mugs', label: 'Classic Mugs' },
      { id: 2, path: '/search?category=mugs', label: 'Travel Mugs' },
      { id: 3, path: '/search?category=mugs', label: 'Ceramic Mugs' },
      { id: 4, path: '/search?category=mugs', label: 'Custom Mugs' },
      { id: 5, path: '/search?category=mugs', label: 'Printed Mugs' },
    ],
  };

  return (
    <div>
      {/* Heading */}
      <h4 className="mb-5 text-sm text-yellow-300 font-semibold text-heading md:text-base xl:text-lg 2xl:mb-6 3xl:mb-7">
        {widgetMugs.label}
      </h4>

      {/* List Items */}
      <ul className="text-xs md:text-[13px] lg:text-sm text-body flex flex-col space-y-3 lg:space-y-3.5 text-white">
        {widgetMugs.columnItemItems.map((subItem) => (
          <li key={subItem.id} className="flex items-baseline">
            <Link href={subItem.path}>
              <span className="transition-colors duration-200 hover:text-white text-white">{subItem.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WidgetMugs;
