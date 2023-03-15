import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const newGifs = async () => {
    const getImages = await getGifs(category);
    setImages(getImages);
    setIsLoading(false);
  };

  useEffect(() => {
    newGifs();
  }, []);

  return {
    images,
    isLoading,
  };
};
