// utils/path.ts

// Define a type for the paths to ensure type safety
interface UserPaths {
    HOME: string;
    PRODUCTDE: string;
    CONTACT: string;
    ABOUT: string;
    POLICY: string;
    LISTPRODUCT: string;
    PRODUCTDETAIL: string;
    CART: string;
    CHECKOUT: string;
}

export const PATH: { USER: UserPaths } = {
    USER: {
        HOME: "home",
        PRODUCTDE: "product-detail",
        CONTACT: "contact",
        ABOUT: "about",
        POLICY: "policy",
        LISTPRODUCT: "products",
        PRODUCTDETAIL: "/products/:productId",
        CART: "cart",
        CHECKOUT: "checkout",
    },
};
