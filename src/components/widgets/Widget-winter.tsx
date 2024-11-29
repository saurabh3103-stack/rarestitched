import type { FC } from 'react';
import Link from 'next/link';

const WidgetWinter: FC = () => {
  const widgetWinter = {
    id: 1,
    columns: [
      {
        id: 1,
        columnItems: [
          {
            id: 1,
            label: 'Men Winter Collection',
            columnItemItems: [
              { id: 1, path: '/search?category=oversized-tshirts', label: 'Oversized Tshirt' },
              { id: 2, path: '/search?category=oversized-tshirts', label: 'Oversized dropshoulder Tshirt' },
              { id: 3, path: '/search?category=t-shirt', label: 'Polo Tshirt' },
              { id: 4, path: '/search?category=t-shirt', label: 'RoundCheck Tshirt' },
            ],
          },
        ],
      },
    ],
  };

  return (
    <div>
      {/* Heading */}
      <h4 className="mb-5 text-sm text-yellow-300 font-semibold text-heading md:text-base xl:text-lg 2xl:mb-6 3xl:mb-7">
        {widgetWinter.columns[0]?.columnItems[0]?.label}
      </h4>

      {/* List Items */}
      <ul className="text-xs md:text-[13px] lg:text-sm text-body flex flex-col space-y-3 lg:space-y-3.5 text-white">
        {widgetWinter.columns[0]?.columnItems[0]?.columnItemItems?.map((subItem) => (
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

export default WidgetWinter;
