import useQuery from "../../hooks/useQuery";
import { productService } from "../../services/productService";

export const useHome = () => {
  // call api san pham voi useQuery
  const {
    data: productData,
    loading,
    error,
  } = useQuery(productService.products);

  const productProps = {
    products: productData?.products,
  };

  return {
    productProps,
  };
};
