import {DeliverBadge, PaymentBadge} from "./badges.tsx";
import type {Order} from "../models/Order.ts";
import {OrderStatusButtons} from "./buttons.tsx";


const OrderRow = ({order}: {order: Order}) => {

    return (
        <tr>
            <td className="px-1 py-4">
                <div className="flex justify-start">
                    <img src={order.getProduct.getImageUrl} alt="product" className="w-16"/>
                </div>
            </td>
            <td className="px-1 py-4 text-right">
                <p>{order.getProduct.getName}</p>
            </td>
            <td className="px-2 py-4">
                <p>{order.getTimeStamp}</p>
            </td>
            <td>
                <p>{order.getProduct.getPrice}</p>
            </td>
            <td className="px-2 py-4">
                <PaymentBadge isPaid={order.getIsPaid} />
            </td>
            <td className="px-2 py-4">
                <DeliverBadge deliverState={order.getDeliverState} />
            </td>
            <td className="px-2 py-4">
                <OrderStatusButtons isPaid={order.getIsPaid} />
            </td>
        </tr>
    );
}

export default OrderRow;