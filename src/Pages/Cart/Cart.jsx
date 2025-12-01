import React, { useContext } from 'react'
import LayOut from '../../Components/LayOut/LayOut'
import { DataContext } from '../../Components/DataProvider/DataProvider'
import ProductCard from '../../Components/Product/ProductCard'

function Cart() {
  const [{ basket, user }, dispatch] = useContext(DataContext)

  return (
    <LayOut>
      <section>

        <div>
          <h2>Hello</h2>
          <h3>Your shopping basket</h3>
          <hr />

          {basket?.length === 0 ? (
            <p>Your basket is empty</p>
          ) : (
            basket.map((item, i) => (
              <ProductCard
                key={i}
                product={item}
                renderDesc={true}
                flex={true}
              />
            ))
          )}
        </div>

        <div>
          {/* Another section if needed */}
        </div>

      </section>
    </LayOut>
  )
}

export default Cart
