const OrderTableHeader = () => {
    return (
        <thead>
            <tr>
                <th className="px-1 py-10 text-right">عکس</th>
                <th className="px-1 py-10 text-right">نام محصول</th>
                <th className="px-16 py-2">تاریخ</th>
                <th className="px-16 py-2">قیمت نهایی</th>
                <th className="px-16 py-2">پرداخت</th>
                <th className="px-16 py-2">ارسال</th>
                <th className="px-16 py-2">عملیات</th>
            </tr>
        </thead>
    )
}

export default OrderTableHeader;