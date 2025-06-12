// src/pages/InventoryPage.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductList from '../components/productList';
import AddProductModal  from '../components/AddProductModal';
import '../Styles/modal.css';
import '../Styles/inventario.css';

const InventoryPage = () => {
  const [products, setProducts] = useState([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false); // Estado para controlar el modal de agregar



  // Cargar los productos al iniciar la aplicación
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error cargando productos:', error);
    }
  };

  //Agregar los productos
  const handleAddProduct = async (newProduct) => {
    try {
      const response = await axios.post('http://localhost:3000/api/products', newProduct);
      setProducts([...products, response.data]); // Agregar el nuevo producto a la lista
    } catch (error) {
      console.error('Error agregando producto:', error);
    }
  };


    //Borrar las productos
  const handleProductDeleted = (id) => {
    setProducts(products.filter((product) => product._id !== id)); // Eliminar el producto de la lista
  };

    //Actualizar los productos
  const handleProductUpdated = (updatedProduct) => {
    setProducts(
      products.map((product) =>
        product._id === updatedProduct._id ? updatedProduct : product
      )
    ); 
  };
  
  return (
    //campo de busqueda
    <div className="container">
      <h1 className='container-titulo'>Inventario</h1>
      <button className='' onClick={() => setIsAddModalOpen(true)}>Agregar Producto</button> 

      <ProductList
        products={products}
        onProductDeleted={handleProductDeleted}
        onProductUpdated={handleProductUpdated}
      />
       {/* Modal para agregar producto */}
      {isAddModalOpen && (
        <AddProductModal
          onClose={() => setIsAddModalOpen(false)}
          onAddProduct={handleAddProduct}
        />
      )}

    </div>
  );
};

export default InventoryPage;