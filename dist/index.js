// src/components/ProductList.tsx
import { jsx, jsxs } from "react/jsx-runtime";
var ProductList = ({ products }) => {
  return /* @__PURE__ */ jsx("ul", { children: products.map((product) => /* @__PURE__ */ jsxs("li", { children: [
    product.name,
    " - $",
    product.price
  ] }, product.id)) });
};
export {
  ProductList
};
//# sourceMappingURL=index.js.map