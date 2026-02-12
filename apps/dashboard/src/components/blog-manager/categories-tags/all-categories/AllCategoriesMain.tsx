'use client';
import BannerJPG from '@/assets/images/tokyo-bn.jpg';
import clsx from 'clsx';
import { ModalCategoryActions } from '@/components/modal/category';
import { Image } from '@mantine/core';

const categories = [
  {
    key: 'all-home',
    department: 'All Home',
    color: 'green',
    divisions: ['Bathroom', 'Bedding', 'Kitchen', 'Home Decor'],
  },
  {
    key: 'apparel-footware-accessories',
    department: 'Apparel, Footware & Accessories',
    color: 'blue',
    divisions: ['Apparel', 'Footware', 'Accessories'],
  },
  {
    key: 'electronics',
    department: 'Electronics',
    color: 'cyan',
    divisions: [
      'Audio Equipment',
      'Powerbars',
      'Cables',
      'Batteries',
      'Printers',
      'TVs & Home Theatres',
    ],
  },
  {
    key: 'food-beverage',
    department: 'Food & Beverage',
    color: 'orange',
    divisions: ['Beverages', 'Snacks', 'Pantry Food'],
  },
  {
    key: 'furniture',
    department: 'Furniture',
    color: 'teal',
    divisions: ['Bedroom', 'Dining', 'Kids Room', 'Office'],
  },
  {
    key: 'sports-outdoor',
    department: 'Sports & Outdoor',
    color: 'lime',
    divisions: ['Camping', 'Cycling', 'Running', 'Gym'],
  },
  {
    key: 'beauty-personal-care',
    department: 'Beauty & Personal Care',
    color: 'pink',
    divisions: ['Makeup', 'Haircare', 'Skincare', 'Fragrance'],
  },
  {
    key: 'automotive',
    department: 'Automotive',
    color: 'red',
    divisions: ['Car Accessories', 'Motorbike', 'Maintenance', 'Tools'],
  },
  {
    key: 'toys-games',
    department: 'Toys & Games',
    color: 'yellow',
    divisions: ['Board Games', 'Outdoor Toys', 'Puzzles', 'Building Sets'],
  },
  {
    key: 'baby-products',
    department: 'Baby Products',
    color: 'rose',
    divisions: [
      'Baby Care',
      'Toys',
      'Feeding',
      'Diapers',
      'Baby Care',
      'Toys',
      'Feeding',
      'Diapers',
      'Baby Care',
      'Toys',
      'Feeding',
      'Diapers',
    ],
  },
  {
    key: 'books-media',
    department: 'Books & Media',
    color: 'violet',
    divisions: ['Fiction', 'Comics', 'Music', 'Movies'],
  },
  {
    key: 'garden-tools',
    department: 'Garden & Tools',
    color: 'emerald',
    divisions: ['Plants', 'Garden Tools', 'Lighting', 'Decor'],
  },
  {
    key: 'pet-supplies',
    department: 'Pet Supplies',
    color: 'amber',
    divisions: ['Dogs', 'Cats', 'Aquarium', 'Birds'],
  },
  {
    key: 'office-supplies',
    department: 'Office Supplies',
    color: 'gray',
    divisions: ['Stationery', 'Printers', 'Paper', 'Desks'],
  },
  {
    key: 'health-household',
    department: 'Health & Household',
    color: 'indigo',
    divisions: ['Supplements', 'Medicines', 'Cleaning', 'First Aid'],
  },
  {
    key: 'hardware',
    department: 'Hardware',
    color: 'slate',
    divisions: ['Power Tools', 'Paint', 'Electrical', 'Plumbing'],
  },
  {
    key: 'travel-luggage',
    department: 'Travel & Luggage',
    color: 'cyan',
    divisions: ['Suitcases', 'Backpacks', 'Travel Accessories'],
  },
  {
    key: 'musical-instruments',
    department: 'Musical Instruments',
    color: 'purple',
    divisions: ['Guitars', 'Keyboards', 'Drums', 'Recording'],
  },
  {
    key: 'home-improvement',
    department: 'Home Improvement',
    color: 'fuchsia',
    divisions: ['Lighting', 'Storage', 'Hardware', 'Flooring'],
  },
  {
    key: 'art-crafts',
    department: 'Art & Crafts',
    color: 'rose',
    divisions: ['Painting', 'Drawing', 'DIY Kits', 'Sewing'],
  },
];

export default function AllCategoriesMain() {
  return (
    <div className="relative p-6">
      <div className="grid grid-cols-4 gap-6 relative z-20 ">
        {categories.map(cat => {
          return (
            <div
              key={cat.key}
              className={clsx(
                'dark:bg-dark-charcoal bg-white rounded-xl shadow p-4 cursor-pointer relative space-y-3 transition-all overflow-hidden',
              )}
            >
              {/* Header */}
              <Image
                src={BannerJPG}
                h={120}
                className="object-cover rounded-md"
              />
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs dark:text-neutral-400 font-medium">
                    Department
                  </div>
                  <div className="flex items-center gap-1">
                    <div
                      className={`w-2 h-2 rounded-full bg-${cat.color}-500`}
                    />
                    <div className="dark:text-neutral-100 font-medium text-sm">
                      {cat.department}
                    </div>
                  </div>
                </div>
                <ModalCategoryActions type="update" />
              </div>

              <div className="text-sm dark:text-neutral-400 font-medium line-clamp-2">
                An Admin Solution that Runs Ed-Show, You Don’t Have to. Manage,
                organise, and oversee everything from anywhere
              </div>
              <div className="flex">
                <div className="text-sm font-medium bg-orange-600/10 text-orange-500 p-1.5 rounded-md">
                  +11 Sub-categories
                </div>
              </div>
              <div className="flex items-center justify-between dark:text-neutral-200 font-medium">
                <span className="text-sm">Divisions</span>
                <span className="text-sm">
                  Total: <b className="text-cyan-500">{cat.divisions.length}</b>
                </span>
              </div>

              {/* Badge list */}
            </div>
          );
        })}
      </div>
    </div>
  );
}
