
import type {Order} from "../../models/Order.ts";
import {DeliverBadge, OrderStatusButtons, PaymentBadge} from "../common/uiComponents.tsx";


const OrderRow = ({order}: {order: Order}) => {

    return (
        <tr>
            <td className="px-1 py-10">
                <div className="flex justify-start">
                    <img src={order.getProduct.getImageUrl} alt="product" className="w-16"/>
                </div>
            </td>
            <td className="px-1 py-10 text-right">
                <p>{order.getProduct.getName}</p>
            </td>
            <td className="px-4 py-10">
                <p>{order.getTimeStamp}</p>
            </td>
            <td className="px-4 py-10">
                <p>{order.getProduct.getPrice}</p>
            </td>
            <td className="px-4 py-10">
                <PaymentBadge isPaid={order.getIsPaid} />
            </td>
            <td className="px-4 py-10">
                <DeliverBadge deliverState={order.getDeliverState} />
            </td>
            <td className="px-4 py-10">
                <OrderStatusButtons isPaid={order.getIsPaid} />
            </td>
        </tr>
    );
}

export default OrderRow;