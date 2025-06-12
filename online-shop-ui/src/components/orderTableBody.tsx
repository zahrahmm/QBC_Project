import OrderRow from "./orderRow.tsx";
import {orders} from "../data/orders.tsx";

const OrderTableBody = () => {
    return (
        <tbody>
        {
            orders.map((order) => (
                <OrderRow order={order} key={order.getId} />
            ))
        }
        </tbody>
    )
}


export default OrderTableBody;