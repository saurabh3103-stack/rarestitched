import type { FC } from 'react';
import Link from 'next/link';

const WidgetMen: FC = () => {
  const widgetMen = {
    id: 2,
    columns: [
      {
        id: 1,
        columnItems: [
          {
            id: 1,
            label: ' Men Summer Collection',
            columnItemItems: [
              { id: 1, path: '/search?category=hoodies', label: 'Drop Shoulder Hoodies' },
              { id: 2, path: '/search?category=hoodies', label: 'Non Zipper Hoodies' },
              { id: 3, path: '/search?category=hoodies', label: 'Cotton Hoodies' },
              { id: 4, path: '/search?category=hoodies', label: 'Sweatshirts' },
              { id: 5, path: '/search?category=hoodies', label: 'Menu Blazers' },
            ],
          },
        ],
      },
    ],
  };

  return (
    <div >
      {/* Heading */}
      <h4 className="mb-5 text-sm text-yellow-300 font-semibold text-heading md:text-base xl:text-lg 2xl:mb-6 3xl:mb-7">
        {widgetMen.columns[0]?.columnItems[0]?.label}
      </h4>

      {/* List Items */}
      <ul className="text-xs md:text-[13px] lg:text-sm text-body flex flex-col space-y-3 lg:space-y-3.5 text-white">
        {widgetMen.columns[0]?.columnItems[0]?.columnItemItems?.map((subItem) => (
          <li key={subItem.id} className='flex items-baseline'>
            <Link href={subItem.path}>
              <span className="transition-colors duration-200 hover:text-white text-white">{subItem.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WidgetMen;
