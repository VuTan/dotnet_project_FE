import productsData from "../../../data/productsData";
import './ProductDiscriptionStyles.scss'
function ProductDiscription({ productId }) {
    const product = productsData.find(item => item.id === productId);

    const name = product.name;
    const descript = product.descript;
    return (
        <div className="description_container">
            <h2> Mô tả sản phẩm</h2>
            <div className="warp_descript">
                <p>{descript}</p>
            </div>

        </div>
    );
}

export default ProductDiscription;