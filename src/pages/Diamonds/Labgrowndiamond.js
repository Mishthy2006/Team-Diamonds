import React, { useState, useEffect,useMemo } from 'react';
import labgrowndata from './labgrowndata.json'; 
import { useParams } from 'react-router-dom';
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom';
import Preloader from '../../components/preloader/preloader';


function Labgrowndiamond() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [sortOrder, setSortOrder] = useState('ascending');
  const {shape}=useParams();
  useEffect(() => {
    setProducts(labgrowndata[0].Data.items);
  }, []);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === 'ascending' ? 'descending' : 'ascending');
  };
  const sortedAndFilteredData=useMemo(()=>{
    const filteredData = shape ? products.filter(item => item.shape === shape) :products;
    return filteredData.sort((a, b) => {
      const priceA = parseFloat(a.price.replace(/,/g, ''));
      const priceB = parseFloat(b.price.replace(/,/g, ''));
      return sortOrder === 'ascending' ? priceA - priceB : priceB - priceA;
    });
  }, [sortOrder, shape,products]);
  if (isLoading) {
    return <Preloader />;
  }



  return (
    <div className="container mx-auto top-32 px-5 pb-28">
      <div className='my-10'>
        <h1 className='text-black font-medium font-sans text-3xl mx-20'>Lab Grown Diamonds</h1>
        <h1 className='mx-20 py-4 font-sans font-normal'>Customize your engagement ring with high-quality, ethically sourced lab-grown diamonds.</h1>
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
      <div className="grid  md:grid-cols-4 gap-4">
        {error && <div>Error: {error.message}</div>}
        {sortedAndFilteredData.map(product => (
  
          <div key={product.sku_esi} className="p-4 rounded-lg cursor-pointer">
            <Link key={product.key} to={`/labgrowndiamond/${product.key}`}><img src={JSON.parse(product.images)[0].url_thumbnail} alt={product.label} className="w-full h-auto" /></Link>
            <div className="mt-4">
              <h1 className='hover:text-[#782374] text-lg font-medium'>{product.label}</h1>
              <h1 className='text-[#782374] text-lg font-semibold'>₹{product.price}</h1>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Labgrowndiamond;
