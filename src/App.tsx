import './App.css'
import { ProductList } from './index';

function App() {
  return (
      <ProductList products={[{ id: 1, name: 'Product A', price: 100 }]} />
  )
}
export default App
