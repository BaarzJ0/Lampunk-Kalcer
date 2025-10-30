import React from "react";
import { useParams } from "react-router-dom";
import LampungUtara from "./LampungUtara";
import LampungSelatan from "./LampungSelatan";
import LampungTimur from "./LampungTimur";
import LampungBarat from "./LampungBarat";
import LampungTengah from "./LampungTengah";


const regions = {
  "lampung-utara": LampungUtara,
  "lampung-selatan": LampungSelatan,
  "lampung-timur": LampungTimur,
  "lampung-barat": LampungBarat,
  "lampung-tengah": LampungTengah,


  // Tambahkan data wilayah lain jika perlu
};

const RegionDetail = () => {
  const { regionName } = useParams();
  const RegionComponent = regions[regionName];

  if (!RegionComponent) {
    return <h1>Wilayah tidak ditemukan!</h1>;
  }

  return <RegionComponent />;
};

export default RegionDetail;
