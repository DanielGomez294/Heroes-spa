import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../../ui"

import { MarvelPage, DcPages, SearchPage, HeroPage } from "../pages"

export const HeroesRoutes = () => {
  return (

    <>
    <Navbar /> 
<div className="container">
<Routes>
    <Route path="marvel" element={<MarvelPage />} />
    <Route path="dc" element={<DcPages />} />

    <Route path="search" element={<SearchPage />} />
    <Route path="hero/:id" element={<HeroPage />} />

    {/* Search, hero by id */}

    <Route path="/" element={<Navigate to="/dc" />} />
    </Routes>
</div>
   
    </>
  )
}