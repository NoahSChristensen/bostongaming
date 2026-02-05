export const getBannerData = async () => {
  const res = await fetch(`http://localhost:5039/slider`);

  if (!res.ok) throw new Error(`Failed to fetch Hero data`);

  const json = await res.json();
  return json;
};

export const getProductData = async () => {
  const res = await fetch(`http://localhost:5039/product`);

  if (!res.ok) throw new Error(`Faied to fetch product data`);

  const json = await res.json();

  return json;
};
