// utils/formatUtils.ts

// Format a number as a currency string in Vietnamese Dong
export function formatPrices(price: number): string {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
}

export function formatPercentage(decimalValue: number): string {
    // Chuyển đổi số thập phân thành phần trăm và định dạng với 2 chữ số thập phân
    return (decimalValue * 100).toFixed(2) + '%';
}
