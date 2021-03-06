import React from 'react';
import { useSelector } from 'react-redux';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css';
import { imgsCollections } from './../../arrays/imgs-collections';
import { ProductCard } from './ProductCard';

export const ProductsScreen = () => {

  const {products} = useSelector(state => state.product)
  
  return (
    <div className='product__productsscreen-container'>
      <Carousel>
        {
          imgsCollections.map( (imgCollection,i) => (
            <Carousel.Item interval={3000} key={i}>
              <img
                  className="d-block product__productsscreen-img-collection"
                  src={imgCollection.src}
                  alt="Daniels New Collection"
              />
            </Carousel.Item>
          ))
        }
      </Carousel>
      <div className='product__productsscreen-products'>
        <h3>TOP PRODUCTS</h3>
        <p>- just with daniels -</p>
        {
          products.map( (product) => (
            <ProductCard key={product.id} product={product} />
          ))
        }
      </div>
    </div>
  )
}
