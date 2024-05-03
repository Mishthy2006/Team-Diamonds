import React, { useState, useEffect, useMemo } from 'react'; 
import discount from '../../assets/discount.webp';
import { Link, useParams } from 'react-router-dom';
import solitaire from '../../assets/Pearls/solitaire/solitaire.json';
import halo from '../../assets/Pearls/Halo/halo.json';
import threestone from '../../assets/Pearls/threestone/threestone.json';
import twist from '../../assets/Pearls/twist/twist.json';
import Preloader from '../../components/preloader/preloader';
import diamondaccented from '../../assets/Pearls/Diamondaccented/diamondaccented.json';

const data = {
  solitaire: solitaire[0].Data.items,
  halo: halo[0].Data.items,
  threestone: threestone[0].Data.items,
  twist: twist[0].Data.items,
  diamondaccented: diamondaccented[0].Data.items,
};
export default function Engagement() {
  const [sortOrder, setSortOrder] = useState('ascending');
  const { style } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === 'ascending' ? 'descending' : 'ascending');
  };

  const sortedAndFilteredData = useMemo(() => {
    const products = style ? data[style] : data.solitaire; 
    return products.sort((a, b) => {
      const priceA = typeof a.price === 'string' ? parseFloat(a.price.replace(/,/g, '')) : a.price;
      const priceB = typeof b.price === 'string' ? parseFloat(b.price.replace(/,/g, '')) : b.price;
      return sortOrder === 'ascending' ? priceA - priceB : priceB - priceA;
    });
  }, [sortOrder, style]);
  if (isLoading) {
    return <Preloader />;
  } 
  return (
    <div className='h-auto w-full'>
      <img style={{marginTop:'148px'}} src={discount} alt='discount' className='w-full h-80' />
      <div className="container mx-auto top-32 px-5 pb-28">
        <div className='my-10'>
          <h1 className='text-black font-medium font-sans text-3xl mx-20'>Engagement Rings</h1>
          <h1 className='mx-20 py-4 font-sans font-normal'>Explore unique engagement ring settings for a custom piece that truly reflects your love.</h1>
        </div>
        <div className="flex justify-between w-full">
          <div className='productslist'>
            <h1 className='mx-20 my-20 text-[#8D8993]'>{sortedAndFilteredData.length} Products</h1> 
          </div>
          <div className='sorting my-20'>
            <label htmlFor="sort" className="mr-2">Sort By :</label>
            <select id="sort" value={sortOrder} onChange={toggleSortOrder} className="px-2 py-1 cursor-pointer rounded-md">
              <option value="ascending">Price - Low to High</option>
              <option value="descending">Price - High to Low</option>
            </select>
          </div>
        </div>
        <div className="grid md:grid-cols-4 gap-4">
          {sortedAndFilteredData.map(product => (
            <div key={product.key} className="p-4 rounded-lg cursor-pointer">
              <Link key={product.key} to={`/engagement/${product.key}`}>
                <img src={JSON.parse(product.images)[0].url_thumbnail} alt={product.label} className="w-full h-auto" />
              </Link>
              <div className="mt-4">
                <h1 className='hover:text-[#782374] text-lg font-medium'>{product.label}</h1>
                <h1 className='text-[#782374] text-lg font-semibold'>₹{product.price}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
