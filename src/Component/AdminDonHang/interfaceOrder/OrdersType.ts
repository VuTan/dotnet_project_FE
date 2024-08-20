// Định nghĩa kiểu dữ liệu cho đối tượng đơn hàng
 export interface Order {
    id: number;
    time: string;
    product: string;
    total: number;
    status: string;
}
