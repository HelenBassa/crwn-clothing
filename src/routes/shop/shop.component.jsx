import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useDispatch } from "react-redux";

import { getCategoriesAndDocument } from '../../utils/firebase/firebase.utils'

import CategoriesPreview from '../categories-preview/categories-preview.component'
import Category from '../category/category.component'

import { setCategories } from '../../store/categories/category.action'

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesArray = await getCategoriesAndDocument()
      dispatch(setCategories(categoriesArray))
    }
    getCategoriesMap()
    // eslint-disable-next-line
  }, [])

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  )
}

export default Shop