import productsData from "../../../data/productsData";
import './ProductDiscriptionStyles.scss';
import { Product } from "../../../utils/type";

interface ProductDiscriptionProps {
    productId: string;
}

const ProductDiscription: React.FC<ProductDiscriptionProps> = ({ productId }) => {
    const product: Product | undefined = productsData.find(item => item.id === productId);

    if (!product) {
        return <div>Product not found</div>;
    }

    const { name, descript } = product;

    return (
        <div className="description_container">
            <h2>Mô tả sản phẩm</h2>
            <div className="warp_descript">
                <p>{descript}</p>
            </div>
        </div>
    );
};

export default ProductDiscription;

