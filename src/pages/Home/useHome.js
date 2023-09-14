import { useMemo, useState } from "react";
import useMutation from "../../hooks/useMutation";
import useQuery from "../../hooks/useQuery";
import { productService } from "../../services/productService";
import { subscribeService } from "../../services/subscribeService";

export const HOT_TABS = {
  featured: "featured",
  sale: "on-sale",
  top: "top-rated",
};
export const useHome = () => {
  // call api san pham voi useQuery
  const {
    data: productData,
    loading: productLoading,
    error: productError,
  } = useQuery(productService.getProducts);
  const product = productData?.products || [];
  console.log("product", product);
  const {
    data: homeData,
    loading: homeDataLoading,
    error: homeDataError,
  } = useQuery(() => pageService.getPageDataByName("home"));
  const brands = homeData?.data?.brands || [];

  const {
    data: categoriesData,
    loading: categoriesLoading,
    error: categoriesError,
  } = useQuery(productService.getCategories);
  const categories = categoriesData?.products || [];

  const { loading: dealLoading, execute: dealExecute } = useMutation(
    subscribeService.subscribeDeal,
    {
      onSuccess: (data) => {
        console.log("data", data);
        message.success(HOME_MESSAGE.dealSuccess);
      },
      onFail: (error) => {
        console.log("error", error);
        message.error(GENERAL_MESSAGE.error);
      },
    }
  );
  // Brands Section
  // const brandProps = {
  //   brands,
  // };
  // Hot Product Section
  const [selectedHotTab, setSelectedHotTab] = useState(HOT_TABS.featured);
  const hotProductProps = useMemo(() => {
    let hotProducts = [];
    switch (selectedHotTab) {
      case HOT_TABS.featured:
        hotProducts = product?.filter((product) => product.featured);
        break;

      case HOT_TABS.sale:
        hotProducts = product?.filter((product) => product.onSale);
        break;

      case HOT_TABS.top:
        hotProducts = product?.filter((product) => product.topRated);
        break;

      default:
        hotProducts = [];
        break;
    }
    return {
      hotProducts,
      selectedHotTab,
      onSelectHotTab: setSelectedHotTab,
    };
  }, [product, selectedHotTab]);

  return {
    hotProductProps,
    // brandProps,
  };
};
