export const menu = [
  // {
  //   id: 1,
  //   path: '/',
  //   label: 'menu-demos',
  //   subMenu: [
  //     {
  //       id: 1,
  //       path: '/',
  //       label: 'menu-modern',
  //     },
  //     {
  //       id: 2,
  //       path: '/standard',
  //       label: 'menu-standard',
  //     },
  //     {
  //       id: 3,
  //       path: '/minimal',
  //       label: 'menu-minimal',
  //     },
  //     {
  //       id: 4,
  //       path: '/vintage',
  //       label: 'menu-vintage',
  //     },
  //     {
  //       id: 5,
  //       path: '/classic',
  //       label: 'menu-classic',
  //     },
  //     {
  //       id: 6,
  //       path: '/trendy',
  //       label: 'menu-trendy',
  //     },
  //     {
  //       id: 7,
  //       path: '/elegant',
  //       label: 'menu-elegant',
  //     },
  //     {
  //       id: 8,
  //       path: '/refined',
  //       label: 'menu-refined',
  //     },
  //     {
  //       id: 9,
  //       path: '/fashion',
  //       label: 'menu-fashion',
  //     },
  //   ],
  // },
  {
   
    id: 2,
    path: '/search?category=men',
    label: 'Mens',
    columns: [
      {
        id: 1,
        columnItems: [
          {
           
            id: 1,
            path: '/search?category=men',
            label: 'Summer Collection',
            img:"men",
            columnItemItems: [
             
              {
                id: 1,
                path: '/search?category=hoodies',
                label: 'DropShoulder Hoodies',
              },
              {
                id: 2,
                path: '/search?category=hoodies',
                label: 'Non Zipper Hoodies',
              },
              {
                id: 3,
                path: '/search?category=hoodies',
                label: 'Cotton Hoodies',
              },
              {
                id: 4,
                path: '/search?category=hoodies',
                label: 'Sweatshirts',
              },
              {
                id: 5,
                path: '/search?category=hoodies',
                label: 'menu-blazers',
              },
            ],
          },
          {
            id: 2,
            path: '/search?category=men',
            label: 'menu-belt-scarves',
           
          }
        ],
      },
      {
        id: 2,
        columnItems: [
          {
            id: 1,
            path: '/search?category=men',
            label: 'Winter Collection',
            columnItemItems: [
              {
                id: 1,
                path: '/search?category=oversized-tshirts',
                label: 'Oversized Tshirt',
              },
              {
                id: 2,
                path: '/search?category=oversized-tshirts',
                label: 'Oversized dropshoulder Tshirt',
              },
              {
                id: 3,
                path: '/search?category=t-shirt',
                label: 'Polo Tshirt',
              },
              {
                id: 4,
                path: '/search?category=t-shirt',
                label: 'RoundCheck Tshirt',
              },
            
            ],
          },
          {
            id: 2,
            path: '/search?category=men',
            label: 'menu-plus-size',
          },
          {
            id: 3,
            path: '/search?category=men',
            label: 'menu-sunglasses-frames',
          },
         
        ],
      },
      {
        id: 3,
        columnItems: [
          {
            id: 1,
            path: '/search?category=sneakers',
            label: 'Footwear',
            columnItemItems: [
              {
                id: 1,
                path: '/search?category=sneakers',
                label: 'menu-flats',
              },
              {
                id: 2,
                path: '/search?category=sneakers',
                label: 'menu-casual-shoes',
              },
              {
                id: 3,
                path: '/search?category=sneakers',
                label: 'menu-heels',
              },
              {
                id: 4,
                path: '/search?category=sneakers',
                label: 'menu-boots',
              },
            ],
          },
          {
            id: 2,
            path: '/search?category=sports',
            label: 'BagPack & HandBag',
           
          },
        ],
      },
     
    ],
  },

  {
    id: 3,
    path: '/search?category=women',
    label: 'Womens',
    columns: [
      {
        id: 1,
        columnItems: [
          {
            id: 1,
            img:'women',
            path: '/search?category=women',
            label: 'Summer Collection',
            columnItemItems: [
              { id: 1, path: '/search?category=women', label: 'DropShoulder Hoodies' },
              { id: 2, path: '/search?category=women', label: 'Non Zipper Hoodies' },
              { id: 3, path: '/search?category=women', label: 'Cotton Hoodies' },
              { id: 4, path: '/search?category=women', label: 'Sweatshirts' },
              { id: 5, path: '/search?category=women', label: 'Blazers' },
            ],
          },
          { id: 2, path: '/search?category=women', label: 'Belt & Scarves' },
        ],
      },
      {
        id: 2,
        columnItems: [
          {
            id: 1,
            path: '/search?category=women',
            label: 'Winter Collection',
            columnItemItems: [
              { id: 1, path: '/search?category=women', label: 'Oversized Tshirt' },
              { id: 2, path: '/search?category=women', label: 'Oversized DropShoulder Tshirt' },
              { id: 3, path: '/search?category=women', label: 'Polo Tshirt' },
              { id: 4, path: '/search?category=women', label: 'RoundCheck Tshirt' },
            ],
          },
          { id: 2, path: '/search?category=women', label: 'Plus Size' },
          { id: 3, path: '/search?category=women', label: 'Sunglasses & Frames' },
        ],
      },
      {
        id: 3,
        columnItems: [
          {
            id: 1,
            path: '/search?category=sneakers',
            label: 'Footwear',
            columnItemItems: [
              { id: 1, path: '/search?category=sneakers', label: 'Flats' },
              { id: 2, path: '/search?category=sneakers', label: 'Casual Shoes' },
              { id: 3, path: '/search?category=sneakers', label: 'Heels' },
              { id: 4, path: '/search?category=sneakers', label: 'Boots' },
            ],
          },
          { id: 2, path: '/search?category=bags', label: 'BagPack & HandBag' },
        ],
      },
    ],
  }
,  
  {
    id: 3,
    path: '/search?category=mugs',
    label: 'Mugs',
    columns: [
      {
        id: 1,
        columnItems: [
          {
            img:"mugs",
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
          },
          {
            id: 2,
            path: '/search?category=mugs',
            label: 'Specialty Mugs',
          },
        ],
      },
      {
        id: 2,
        columnItems: [
          {
            id: 1,
            path: '/search?category=mugs',
            label: 'Gift Mugs',
            columnItemItems: [
              { id: 1, path: '/search?category=mugs', label: 'Couple Mugs' },
              { id: 2, path: '/search?category=mugs', label: 'Birthday Mugs' },
              { id: 3, path: '/search?category=mugs', label: 'Anniversary Mugs' },
              { id: 4, path: '/search?category=mugs', label: 'Holiday Mugs' },
            ],
          },
          {
            id: 2,
            path: '/search?category=mugs',
            label: 'Collector’s Mugs',
          },
          {
            id: 3,
            path: '/search?category=mugs',
            label: 'Limited Edition Mugs',
          },
        ],
      },
      {
        id: 3,
        columnItems: [
          {
            id: 1,
            path: '/search?category=mugs',
            label: 'Office Mugs',
            columnItemItems: [
              { id: 1, path: '/search?category=mugs', label: 'Corporate Mugs' },
              { id: 2, path: '/search?category=mugs', label: 'Inspirational Mugs' },
              { id: 3, path: '/search?category=mugs', label: 'Logo Mugs' },
              { id: 4, path: '/search?category=mugs', label: 'Minimalist Mugs' },
            ],
          },
          {
            id: 2,
            path: '/search?category=mugs',
            label: 'Eco-Friendly Mugs',
          },
        ],
      },
    ],
  }
,  
{
  id: 3,
  path: '/search?category=Accessories',
  label: 'Accessories',
  columns: [
    {
      id: 1,
      columnItems: [
        {
          img:"accessories",
          id: 1,
          path: '/search?category=women',
          label: 'Jewelry Collection',
          columnItemItems: [
            {
              id: 1,
              path: '/search?category=women',
              label: 'Necklaces',
            },
            {
              id: 2,
              path: '/search?category=women',
              label: 'Bracelets',
            },
            {
              id: 3,
              path: '/search?category=women',
              label: 'Earrings',
            },
            {
              id: 4,
              path: '/search?category=women',
              label: 'Rings',
            },
            {
              id: 5,
              path: '/search?category=women',
              label: 'Anklets',
            },
          ],
        },
        {
          id: 2,
          path: '/search?category=women',
          label: 'Scarves & Belts',
        },
      ],
    },
    {
      id: 2,
      columnItems: [
        {
          id: 1,
          path: '/search?category=women',
          label: 'Winter Accessories',
          columnItemItems: [
            {
              id: 1,
              path: '/search?category=women',
              label: 'Gloves',
            },
            {
              id: 2,
              path: '/search?category=women',
              label: 'Beanies',
            },
            {
              id: 3,
              path: '/search?category=women',
              label: 'Mittens',
            },
            {
              id: 4,
              path: '/search?category=women',
              label: 'Wool Scarves',
            },
          ],
        },
        {
          id: 2,
          path: '/search?category=women',
          label: 'Hats & Caps',
        },
        {
          id: 3,
          path: '/search?category=women',
          label: 'Sunglasses',
        },
      ],
    },
    {
      id: 3,
      columnItems: [
        {
          id: 1,
          path: '/search?category=women',
          label: 'Bags & Purses',
          columnItemItems: [
            {
              id: 1,
              path: '/search?category=women',
              label: 'Handbags',
            },
            {
              id: 2,
              path: '/search?category=women',
              label: 'Tote Bags',
            },
            {
              id: 3,
              path: '/search?category=women',
              label: 'Clutches',
            },
            {
              id: 4,
              path: '/search?category=women',
              label: 'Wallets',
            },
          ],
        },
        {
          id: 2,
          path: '/search?category=women',
          label: 'Footwear Accessories',
        },
      ],
    },
  ],
}
,
  
{
  id: 4,
  path: '/search?category=mobile-covers',
  label: 'Mobile Covers',
  
  columns: [
    {
      id: 1,
      columnItems: [
        {
          img:'mobile-covers',
          id: 1,
          path: '/search?category=mobile-covers',
          label: 'Material Types',
          columnItemItems: [
            {
              id: 1,
              path: '/search?category=mobile-covers',
              label: 'Silicone Covers',
            },
            {
              id: 2,
              path: '/search?category=mobile-covers',
              label: 'Plastic Covers',
            },
            {
              id: 3,
              path: '/search?category=mobile-covers',
              label: 'Leather Covers',
            },
            {
              id: 4,
              path: '/search?category=mobile-covers',
              label: 'Metal Covers',
            },
            {
              id: 5,
              path: '/search?category=mobile-covers',
              label: 'Fabric Covers',
            },
          ],
        },
        {
          id: 2,
          path: '/search?category=mobile-covers',
          label: 'Protection Features',
          columnItemItems: [
            {
              id: 1,
              path: '/search?category=mobile-covers',
              label: 'Shockproof',
            },
            {
              id: 2,
              path: '/search?category=mobile-covers',
              label: 'Waterproof',
            },
            {
              id: 3,
              path: '/search?category=mobile-covers',
              label: 'Anti-Scratch',
            },
            {
              id: 4,
              path: '/search?category=mobile-covers',
              label: 'Dustproof',
            },
          ],
        },
      ],
    },
    {
      id: 2,
      columnItems: [
        {
          id: 1,
          path: '/search?category=mobile-covers',
          label: 'Styles & Designs',
          columnItemItems: [
            {
              id: 1,
              path: '/search?category=mobile-covers',
              label: 'Plain Covers',
            },
            {
              id: 2,
              path: '/search?category=mobile-covers',
              label: 'Printed Covers',
            },
            {
              id: 3,
              path: '/search?category=mobile-covers',
              label: 'Customizable Covers',
            },
            {
              id: 4,
              path: '/search?category=mobile-covers',
              label: 'Transparent Covers',
            },
          ],
        },
        {
          id: 2,
          path: '/search?category=mobile-covers',
          label: 'Brand Specific',
          columnItemItems: [
            {
              id: 1,
              path: '/search?category=mobile-covers',
              label: 'iPhone Covers',
            },
            {
              id: 2,
              path: '/search?category=mobile-covers',
              label: 'Samsung Covers',
            },
            {
              id: 3,
              path: '/search?category=mobile-covers',
              label: 'OnePlus Covers',
            },
            {
              id: 4,
              path: '/search?category=mobile-covers',
              label: 'Xiaomi Covers',
            },
          ],
        },
      ],
    },
    {
      id: 3,
      columnItems: [
        {
          id: 1,
          path: '/search?category=mobile-covers',
          label: 'Additional Features',
          columnItemItems: [
            {
              id: 1,
              path: '/search?category=mobile-covers',
              label: 'Ring Holders',
            },
            {
              id: 2,
              path: '/search?category=mobile-covers',
              label: 'Magnetic Covers',
            },
            {
              id: 3,
              path: '/search?category=mobile-covers',
              label: 'Kickstand Covers',
            },
            {
              id: 4,
              path: '/search?category=mobile-covers',
              label: 'Wallet Covers',
            },
          ],
        },
        {
          id: 2,
          path: '/search?category=mobile-covers',
          label: 'Combo Offers',
        },
      ],
    },
  ],
},

  
 
  {
    id: 7,
    path: '/',
    label: 'menu-pages',
    subMenu: [
      {
        id: 1,
        path: '/',
        label: 'menu-users',
        subMenu: [
          {
            id: 1,
            path: '/my-account',
            label: 'menu-my-account',
          },
          {
            id: 2,
            path: '/signin',
            label: 'menu-sign-in',
          },
          {
            id: 3,
            path: '/signup',
            label: 'menu-sign-up',
          },
          {
            id: 4,
            path: '/forget-password',
            label: 'menu-forget-password',
          },
        ],
      },
      {
        id: 2,
        path: '/offers',
        label: 'menu-offers',
      },
      {
        id: 3,
        path: '/faq',
        label: 'menu-faq',
      },
      {
        id: 4,
        path: '/privacy',
        label: 'menu-privacy-policy',
      },
      {
        id: 5,
        path: '/terms',
        label: 'menu-terms-condition',
      },
      {
        id: 6,
        path: '/contact-us',
        label: 'menu-contact-us',
      },
      {
        id: 7,
        path: '/checkout',
        label: 'menu-checkout',
      },
      {
        id: 8,
        path: '/collections/on-sale',
        label: 'menu-collection',
      },
      {
        id: 9,
        path: '/search',
        label: 'menu-category',
      },
      {
        id: 10,
        path: '/my-account/orders',
        label: 'menu-order',
      },
      {
        id: 11,
        path: '/404',
        label: 'menu-404',
      },
      // {
      //   id:12,
      //   path: '/become-seller',
      //   label: 'menu-become-seller',
      // },
    ],
  },
  // {
  //   id: 8,
  //   path: '/shops',
  //   label: 'menu-shops',
  // },
];

export const mobileMenu = [
  // {
  //   id: 1,
  //   path: '/',
  //   label: 'menu-demos',
  //   subMenu: [
  //     {
  //       id: 1,
  //       path: '/',
  //       label: 'menu-modern',
  //     },
  //     {
  //       id: 2,
  //       path: '/standard',
  //       label: 'menu-standard',
  //     },
  //     {
  //       id: 3,
  //       path: '/minimal',
  //       label: 'menu-minimal',
  //     },
  //     {
  //       id: 4,
  //       path: '/vintage',
  //       label: 'menu-vintage',
  //     },
  //     {
  //       id: 5,
  //       path: '/classic',
  //       label: 'menu-classic',
  //     },
  //     {
  //       id: 6,
  //       path: '/trendy',
  //       label: 'menu-trendy',
  //     },
  //     {
  //       id: 7,
  //       path: '/elegant',
  //       label: 'menu-elegant',
  //     },
  //     {
  //       id: 8,
  //       path: '/refined',
  //       label: 'menu-refined',
  //     },
  //     {
  //       id: 9,
  //       path: '/fashion',
  //       label: 'menu-fashion',
  //     },
  //   ],
  // },
  {
    id: 2,
    path: '/search?category=men',
    label: 'Mens',
    subMenu: [
      {
        id: 1,
        path: '/search?category=men',
        label: 'Summer Collection',
        subMenu: [
          {
            id: 1,
            path: '/search?category=hoodies',
            label: 'DropShoulder Hoodies',
          },
          {
            id: 2,
            path: '/search?category=hoodies',
            label: 'Non Zipper Hoodies',
          },
          {
            id: 3,
            path: '/search?category=hoodies',
            label: 'Cotton Hoodies',
          },
          {
            id: 4,
            path: '/search?category=hoodies',
            label: 'Sweatshirts',
          },
          {
            id: 5,
            path: '/search?category=hoodies',
            label: 'menu-blazers',
          },
        ],
      },
      {
        id: 2,
        path: '/search?category=men',
        label: 'Winter Collection',
        subMenu: [
          {
            id: 1,
            path: '/search?category=oversized-tshirts',
            label: 'Oversized Tshirt',
          },
          {
            id: 2,
            path: '/search?category=oversized-tshirts',
            label: 'Oversized dropshoulder Tshirt',
          },
          {
            id: 3,
            path: '/search?category=t-shirt',
            label: 'Polo Tshirt',
          },
          {
            id: 4,
            path: '/search?category=t-shirt',
            label: 'RoundCheck Tshirt',
          },
        ],
      },
      {
        id: 3,
        path: '/search?category=sneakers',
        label: 'Footwear',
        subMenu: [
          {
            id: 1,
            path: '/search?category=sneakers',
            label: 'menu-flats',
          },
          {
            id: 2,
            path: '/search?category=sneakers',
            label: 'menu-casual-shoes',
          },
          {
            id: 3,
            path: '/search?category=sneakers',
            label: 'menu-heels',
          },
          {
            id: 4,
            path: '/search?category=sneakers',
            label: 'menu-boots',
          },
        ],
      },
    ],
  },
  {
    id: 3,
    path: '/search?category=women',
    label: 'Womens',
    subMenu: [
      {
        id: 1,
        path: '/search?category=women',
        label: 'Summer Collection',
        subMenu: [
          {
            id: 1,
            path: '/search?category=women',
            label: 'DropShoulder Hoodies',
          },
          {
            id: 2,
            path: '/search?category=women',
            label: 'Non Zipper Hoodies',
          },
          {
            id: 3,
            path: '/search?category=women',
            label: 'Cotton Hoodies',
          },
          {
            id: 4,
            path: '/search?category=women',
            label: 'Sweatshirts',
          },
          {
            id: 5,
            path: '/search?category= women',
            label: 'Blazers',
          },
        ],
      },
      {
        id: 2,
        path: '/search?category=women',
        label: 'Winter Collection',
        subMenu: [
          {
            id: 1,
            path: '/search?category=women',
            label: 'Oversized Tshirt',
          },
          {
            id: 2,
            path: '/search?category=women',
            label: 'Oversized DropShoulder Tshirt',
          },
          {
            id: 3,
            path: '/search?category=women',
            label: 'Polo Tshirt',
          },
          {
            id: 4,
            path: '/search?category=women',
            label: 'RoundCheck Tshirt',
          },
        ],
      },
      {
        id: 3,
        path: '/search?category=sneakers',
        label: 'Footwear',
        subMenu: [
          {
            id: 1,
            path: '/search?category=sneakers',
            label: 'Flats',
          },
          {
            id: 2,
            path: '/search?category=sneakers',
            label: 'Casual Shoes',
          },
          {
            id: 3,
            path: '/search?category=sneakers',
            label: 'Heels',
          },
          {
            id: 4,
            path: '/search?category=sneakers',
            label: 'Boots',
          },
        ],
      },
    ],
  },
  {
    id: 4,
    path: '/search?category=mugs',
    label: 'Mugs',
    subMenu: [
      {
        id: 1,
        path: '/search?category=mugs',
        label: 'Coffee Mugs',
        subMenu: [
          {
            id: 1,
            path: '/search?category=mugs',
            label: 'Classic Mugs',
          },
          {
            id: 2,
            path: '/search?category=mugs',
            label: 'Travel Mugs',
          },
          {
            id: 3,
            path: '/search?category=mugs',
            label: 'Ceramic Mugs',
          },
          {
            id: 4,
            path: '/search?category=mugs',
            label: 'Custom Mugs',
          },
          {
            id: 5,
            path: '/search?category=mugs',
            label: 'Printed Mugs',
          },
        ],
      },
      {
        id: 2,
        path: '/search?category=mugs',
        label: 'Gift Mugs',
        subMenu: [
          {
            id: 1,
            path: '/search?category=mugs',
            label: 'Couple Mugs',
          },
          {
            id: 2,
            path: '/search?category=mugs',
            label: 'Birthday Mugs',
          },
          {
            id: 3,
            path: '/search?category=mugs',
            label: 'Anniversary Mugs',
          },
          {
            id: 4,
            path: '/search?category=mugs',
            label: 'Holiday Mugs',
          },
        ],
      },
    ],
  },
  {
    id: 5,
    path: '/search?category=mobile-covers',
    label: 'Mobile Covers',
    subMenu: [
      {
        id: 1,
        path: '/search?category=mobile-covers',
        label: 'Material Types',
        subMenu: [
          {
            id: 1,
            path: '/search?category=mobile-covers',
            label: 'Silicone Covers',
          },
          {
            id: 2,
            path: '/search?category=mobile-covers',
            label: 'Plastic Covers',
          },
          {
            id: 3,
            path: '/search?category=mobile-covers',
            label: 'Leather Covers',
          },
          {
            id: 4,
            path: '/search?category=mobile-covers',
            label: 'Metal Covers',
          },
          {
            id: 5,
            path: '/search?category=mobile-covers',
            label: 'Fabric Covers',
          },
        ],
      },
      {
        id: 2,
        path: '/search?category=mobile-covers',
        label: 'Styles & Designs',
        subMenu: [
          {
            id: 1,
            path: '/search?category=mobile-covers',
            label: 'Plain Covers',
          },
          {
            id: 2,
            path: '/search?category=mobile-covers',
            label: 'Printed Covers',
          },
          {
            id: 3,
            path: '/search?category= mobile-covers',
            label: 'Customizable Covers',
          },
          {
            id: 4,
            path: '/search?category=mobile-covers',
            label: 'Transparent Covers',
          },
        ],
      },
    ],
  },
  {
    id: 6,
    path: '/search?category=Accessories',
    label: 'Accessories',
    subMenu: [
      {
        id: 1,
        path: '/search?category=women',
        label: 'Jewelry Collection',
        subMenu: [
          {
            id: 1,
            path: '/search?category=women',
            label: 'Necklaces',
          },
          {
            id: 2,
            path: '/search?category=women',
            label: 'Bracelets',
          },
          {
            id: 3,
            path: '/search?category=women',
            label: 'Earrings',
          },
          {
            id: 4,
            path: '/search?category=women',
            label: 'Rings',
          },
          {
            id: 5,
            path: '/search?category=women',
            label: 'Anklets',
          },
        ],
      },
      {
        id: 2,
        path: '/search?category=women',
        label: 'Scarves & Belts',
      },
    ],
  },
  {
    id: 7,
    path: '/',
    label: 'menu-pages',
    subMenu: [
      {
        id: 1,
        path: '/my-account',
        label: 'menu-my-account',
      },
      {
        id: 2,
        path: '/signin',
        label: 'menu-sign-in',
      },
      {
        id: 3,
        path: '/signup',
        label: 'menu-sign-up',
      },
      {
        id: 4,
        path: '/forget-password',
        label: 'menu-forget-password',
      },
      {
        id: 5,
        path: '/offers',
        label: 'menu-offers',
      },
      {
        id: 6,
        path: '/faq',
        label: 'menu-faq',
      },
      {
        id: 7,
        path: '/privacy',
        label: 'menu-privacy-policy',
      },
      {
        id: 8,
        path: '/terms',
        label: 'menu-terms-condition',
      },
      {
        id: 9,
        path: '/contact-us',
        label: 'menu-contact-us',
      },
      {
        id: 10,
        path: '/checkout',
        label: 'menu-checkout',
      },
      {
        id: 11,
        path: '/collections/on-sale',
        label: 'menu-collection',
      },
      {
        id: 12,
        path: '/search',
        label: 'menu-category',
      },
      {
        id: 13,
        path: '/my-account/orders',
        label: 'menu-order',
      },
      {
        id: 14,
        path: '/404',
        label: 'menu-404',
      },
    ],
  },
];