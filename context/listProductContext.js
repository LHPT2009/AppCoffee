import React, {createContext , useState} from 'react';

export const ListProductContext = createContext();

const ListProductProvider = (props) => {

    const [products, setProducts] = useState([]);
    
    const addProduct = async (product) => {
      const existedProduct = products.find((item) => {
        return item.name === product.name
      })
      if (existedProduct) {
        products.forEach((item) => {
          if (item.name === product.name) {
            item.amount += 1
          }
        })
        setProducts([...products]);
      } else {
        setProducts([...products, product].sort((a, b) => a.name > b.name ? 1 : -1))
      }
    }

    const delProduct = (name) => {
        setProducts(products.filter((n) => (n.name !== name)));
      }
    
      const upAmount = (name) => {
        products.forEach((item) => {
          if (item.name === name) {
            item.amount += 1
          }
        })
        setProducts([...products])
      }
    
      const downAmount = (name) => {
        products.forEach((item) => {
          if (item.name === name) {
            item.amount -= 1
            if (item.amount <= 1) {
              item.amount = 1
            }
          }
        })
        setProducts([...products])
      }
    
      const clearCart = () => {
        setProducts([])
      }
    
      return (
        <ListProductContext.Provider
          value={{
            products,
            addProduct,
            delProduct,
            upAmount,
            downAmount,
            clearCart,
          }}
        >
          {props.children}
        </ListProductContext.Provider>
      )
}

export default ListProductProvider