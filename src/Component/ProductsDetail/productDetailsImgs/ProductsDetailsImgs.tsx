import React, { useState } from 'react';
import productsData from "../../../data/productsData";
import './ProductsDetailsImgsStyles.scss';

interface Product {
    id: string;
    images: { url: string }[];
}

interface ProductsDetailsImgsProps {
    productId: string;
}

const ProductsDetailsImgs: React.FC<ProductsDetailsImgsProps> = ({ productId }) => {
    // Tìm sản phẩm, nếu không tìm thấy trả về đối tượng mặc định
    const product: Product | undefined = productsData.find(item => item.id === productId.toString());

    // Nếu không có sản phẩm, sử dụng giá trị mặc định (images rỗng) để đảm bảo các hooks luôn được gọi
    const images = product ? product.images : [{ url: "" }, { url: "" }, { url: "" }, { url: "" }];

    // Gọi các hooks bên ngoài mọi điều kiện
    const [image, setImage] = useState({
        img1: images[0].url,
        img2: images[1].url,
        img3: images[2].url,
        img4: images[3].url,
    });

    const [activeImg, setActiveImg] = useState(image.img1);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [showMagnifier, setShowMagnifier] = useState(false);
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

    // ZOOM
    const handleMouseHover = (e: React.MouseEvent<HTMLDivElement>) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();

        const x = ((e.pageX - left) / width) * 100;
        const y = ((e.pageY - top) / height) * 100;
        setPosition({ x, y });
        setCursorPosition({ x: e.pageX - left, y: e.pageY - top });
    };

    // Render nội dung dựa trên việc có sản phẩm hay không
    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className="imgs_container">
            <div className="img_large">
                <div className="large_imgDetail"
                     onMouseEnter={() => setShowMagnifier(true)}
                     onMouseLeave={() => setShowMagnifier(false)}
                     onMouseMove={handleMouseHover}
                >
                    <img className="imgDetail_large" src={activeImg} alt="" />
                    {showMagnifier && (
                        <div
                            style={{
                                position: "absolute",
                                left: `${cursorPosition.x - 100}px`,
                                top: `${cursorPosition.y - 100}px`,
                                pointerEvents: "none",
                            }}
                        >
                            <div className="magnifier_img"
                                 style={{
                                     backgroundImage: `url(${activeImg})`,
                                     backgroundPosition: `${position.x}% ${position.y}%`,
                                 }}
                            >
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div className="list_imgs">
                <div className="img1">
                    <img className="imglist" src={image.img1} alt="" onClick={() => setActiveImg(image.img1)} />
                </div>
                <div className="img2">
                    <img className="imglist" src={image.img2} alt="" onClick={() => setActiveImg(image.img2)} />
                </div>
                <div className="img3">
                    <img className="imglist" src={image.img3} alt="" onClick={() => setActiveImg(image.img3)} />
                </div>
                <div className="img4">
                    <img className="imglist" src={image.img4} alt="" onClick={() => setActiveImg(image.img4)} />
                </div>
            </div>
        </div>
    );
};

export default ProductsDetailsImgs;
