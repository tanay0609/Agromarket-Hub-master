import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { setProduct, setEditProduct } from "../../../../slices/productSlice"
import RenderSteps from "../AddProduct/RenderSteps"
import { getFullDetailsOfProduct } from "../../../../services/operations/ProductAPI"

export default function EditProduct() {
  const dispatch = useDispatch()
  const { productId } = useParams()
  const { product } = useSelector((state) => state.product)

  const [loading, setLoading] = useState(false)
  const { token } = useSelector((state) => state.auth)

  useEffect(() => {
    ;(async () => {
      setLoading(true)
      const result = await getFullDetailsOfProduct(productId, token)
      if (result?.productDetails) {
        dispatch(setEditProduct(true))
        dispatch(setProduct(result?.productDetails))
      }
      setLoading(false)
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (loading) {
    return (
      <div className="grid flex-1 place-items-center">
        <div className="spinner"></div>
      </div>
    )
  }

  return (
    <div>
      <h1 className="mb-14 text-3xl font-bold text-white">
        Edit Product
      </h1>
       
      <div className="mx-auto max-w-[600px]">
        {product ? (
          <RenderSteps />
        ) : (
          <p className="mt-14 text-center text-3xl font-bold text-white">
            Product not found
          </p>
        )}
      </div>
    </div>
  )
}