import React from "react";
import { useParams } from "react-router-dom";
import LampungUtara from "./LampungUtara";

const regions = {
  "lampung-utara": LampungUtara,
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
