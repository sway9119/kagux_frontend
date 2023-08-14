export const getAllFurnitures = async () => {
  const res = await fetch("http://localhost:4000/furnitures", {
    cache: "no-store", // SSR
  });
  const furnitures = res.json();

  return furnitures;
};
