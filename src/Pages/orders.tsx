import useOrders from "../utils/useOrders";

const Orders = () => {
  const { data: orders } = useOrders();
  console.log(orders);

  return (
    <div className="overflow-x-auto p-16">
      <table className="table table-md">
        <thead>
          <tr>
            <th></th>
            <th>عکس</th>
            <th>نام محصول</th>
            <th>تاریخ</th>
            <th>کاربر</th>
            <th>پرداخت</th>
            <th>ارسال</th>
            <th>عملیات</th>
          </tr>
        </thead>
        <tbody>
          {orders?.map((order, index) => (
            <tr key={order._id}>
              <th>{index + 1}</th>
              <td>{<img src="order.orderItems[0].image" />}</td>
              <td>{order.orderItems[0].name}</td>
              <td>{new Date(order.updatedAt).toLocaleDateString()}</td>
              <td>{order.user?.username}</td>
              <td>{order.totalPrice}</td>
              <td>
                {order.isPaid ? (
                  <button className="btn btn-sm btn-success mx-3">
                    <p>پرداخت شده</p>
                  </button>
                ) : (
                  <button className="btn btn-sm btn-error mx-3">
                    <p>پرداخت نشده</p>
                  </button>
                )}
              </td>
              <td>
                {order.isDelivered ? (
                  <button className="btn btn-sm btn-success mx-3">
                    <p>ارسال شده</p>
                  </button>
                ) : (
                  <button className="btn btn-sm btn-error mx-3">
                    <p>ارسال نشده</p>
                  </button>
                )}
              </td>
              <td>
                <button className="btn btn-sm btn-warning mx-3">جزئیات</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
