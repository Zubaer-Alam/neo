import React, { useContext } from 'react'
import Products from '../components/Products'
import { AuthContext } from '../provider/AuthProvider';

const Home = () => {
  const { tokenData, setTokenData } = useContext(AuthContext);

   if (!tokenData) {
     window.location.href ="/allProducts"
   }
  return (
    <div><Products/></div>
  )
}

export default Home