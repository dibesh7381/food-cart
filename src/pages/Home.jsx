import { useState } from 'react';
import ProductCard from '../components/ProductCard';

const products = [
  {
    id: 1,
    name: 'Laptop',
    price: 59999,
    image: 'https://cdn.mos.cms.futurecdn.net/FUi2wwNdyFSwShZZ7LaqWf.jpg',
    tags: ['laptop', 'computer', 'notebook'],
  },
  {
    id: 2,
    name: 'Headphones',
    price: 1999,
    image: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Rockerz_650_pp_renders_main_banner.124.png?v=1740735495',
    tags: ['headphones', 'headset', 'audio'],
  },
  {
    id: 3,
    name: 'Phone',
    price: 39999,
    image: 'https://m.media-amazon.com/images/I/61xJlx-3KDL._UF1000,1000_QL80_.jpg',
    tags: ['phone', 'mobile', 'smartphone'],
  },
  {
    id: 4,
    name: 'Camera',
    price: 29999,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsjGQmXo41jVjEzrO16eEchagAkKyu1-LN1A&s',
    tags: ['camera', 'dslr', 'photography'],
  },
  {
    id: 5,
    name: 'Speaker',
    price: 29999,
    image: 'https://m.media-amazon.com/images/I/81oRzXfs2zL.jpg',
    tags: ['speaker', 'bluetooth', 'sound'],
  },
  {
    id: 6,
    name: 'Atta',
    price: 299,
    image: 'https://m.media-amazon.com/images/I/9104JpXbv6L._UF1000,1000_QL80_.jpg',
    tags: ['atta'],
  },
  {
    id: 7,
    name: 'Refined Oil',
    price: 399,
    image: 'https://rukminim2.flixcart.com/image/704/844/xif0q/edible-oil/q/z/0/-original-imagqf52ywgfy2nc.jpeg?q=90&crop=false',
    tags: ['refined oil'],
  },
  {
    id: 8,
    name: 'Soap',
    price: 99,
    image: 'https://www.smallflower.com/cdn/shop/products/MysoreSandalSoap.jpg?v=1654292884&width=1946',
    tags: ['soap'],
  },
  {
    id: 9,
    name: 'Laptop Bag',
    price: 1999,
    image: 'https://safaribags.com/cdn/shop/files/3_4bde5165-92cd-4305-b571-dea21fe6568e.jpg?v=1707731843',
    tags: ['laptop bag'],
  },
  {
    id: 10,
    name: 'Travel Bags',
    price: 2999,
    image: 'https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2024/OCTOBER/16/vWAHSCF1_aebe86fc236c4487abb6a1347d47d2d2.jpg',
    tags: ['travel bags'],
  },
  {
    id : 11,
    name : 'Smart TV',
    price : 30999,
    image : 'https://images-cdn.ubuy.co.in/66ba4ff1fe767c56165d577d-lg-50un7300puf-alexa-built-in-50-inch-4k.jpg',
    tags : ['tv',"Tv"]
  },
  {
    id : 12,
    name : '',
    price : 39999,
    image : 'https://www.lg.com/content/dam/channel/wcms/in/split-ac/gallery/us-q19ynze1/gallery/US-Q19YNZE-split-ac-fornt-view-open-door-DZ-02.jpg/_jcr_content/renditions/thum-1600x1062.jpeg',
    tags : ['Ac','ac']
  },
  {
    id : 13,
    name : 'Microwave',
    price : 9999,
    image : 'https://www.lg.com/content/dam/channel/wcms/in/images/microwave-ovens/mc3286brum_dbkqiln_eail_in_c/gallery/MC3286BRUM-microwave-ovens-Left-Side-view-DZ-05.jpg',
    tags : ['Microwave']
  },
  {
    id : 14,
    name : 'Washing Machine',
    price : 15999,
    image : 'https://www.lg.com/content/dam/channel/wcms/in/images/washing-machines/fhp1209z9b_ablqeil_eail_in_c/gallery/FHP1209Z9B-Washing-Machines-Front-View-D-01.jpg',
    tags : ['Washing machine','washing machine']
  },
  {
    id : 15,
    name : 'Cooler',
    price : 8999,
    image : 'https://images-eu.ssl-images-amazon.com/images/I/61KmeXOX+pL._AC_UL600_SR600,600_.jpg',
    tags : ['cooler']
  },
  {
    id : 16,
    name : 'Refrigerator',
    price : 30999,
    image : 'https://img-prd-pim.poorvika.com/product/LG-421-l-frost-free-double-door-refrigerator-gl-t432apzr-shiny-steel-Front-View.png',
    tags : ['fridge']
  },
];

const Home = () => {
  const [search, setSearch] = useState('');

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(search.toLowerCase()) ||
    product.tags.some(tag => tag.includes(search.toLowerCase()))
  );

  return (
    <div className="w-[90%] mx-auto pt-6">
      
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full max-w-md mb-6 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      
      <h1 className='text-center text-4xl font-bold'>Products</h1>
<div className="grid gap-5 grid-cols-[repeat(auto-fit,_minmax(240px,_1fr))] justify-items-center pb-16 mt-10">
  {filteredProducts.length > 0 ? (
    filteredProducts.map(product => (
      <ProductCard key={product.id} product={product} />
    ))
  ) : (
    <p className="text-gray-600 col-span-full text-center">No products found.</p>
  )}
</div>

    </div>
  );
};

export default Home;
