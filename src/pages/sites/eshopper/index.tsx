import View from "@/sites/ecommerce/home";

export const sitePath = "/sites/eshopper";

export const Routes = {
  home: {
    title: "Home",
    path: sitePath,
  },
  shop: {
    title: "shop",
    path: `${sitePath}/shop`,
  },
  cart: {
    title: "cart",
    path: `${sitePath}/cart`,
  },
  checkout: {
    title: "checkout",
    path: `${sitePath}/checkout`,
  },
  orderSuccess: {
    title: "success",
    path: `${sitePath}/order/success`,
  },
};

export default function Page() {
  return <View />;
}
