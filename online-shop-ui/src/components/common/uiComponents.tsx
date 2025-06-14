export const OrderStatusButtons = ({isPaid}: {isPaid: boolean}) => {

    const color = isPaid ? "bg-pink-800 rounded-lg" : "bg-green-800";

    return (
        <button className={`btn btn-primary text-white ${color} text-nowrap`}>
            {
                isPaid ? "جزئیات" : "پرداخت"
            }
        </button>
    )
}


export const PaymentBadge = ({isPaid}: {isPaid: boolean}) => {

    const badgeClass = isPaid ? "badge-success" : "badge-error";

    return (
        <div className={`badge ${badgeClass} p-2 text-white rounded-4xl text-nowrap`} >
            {isPaid ? "پرداخت شده" : "پرداخت نشده"}
        </div>
    )
}

export const DeliverBadge = ({deliverState} : {deliverState: string}) => {

    const badgeClass = deliverState === "delivering"
        ? "badge-info"
        : (deliverState === "delivered"
            ? "badge-success"
            : "badge-warning");

    return (
        <div className={`badge ${badgeClass} p-3 rounded-4xl text-white`}>
            {
                deliverState === "delivering"
                    ? "در حال ارسال"
                    : (deliverState === "delivered"
                        ? "ارسال شده"
                        : "در انتظار پرداخت")
            }
        </div>
    )
}

export const CheckIcon = () => {
    return (
        <img src="src/assets/check.png" alt="check" className="w-5 h-5" />
    );
}

export const XIcon = () => {
    return (
        <img src="src/assets/close.png" alt="X" className="w-5 h-5" />
    );
}

export const TrashCan = () => {
    return (
        <img src="src/assets/bin.png" alt="bin" className="w-10 h-10 p-2 rounded-lg bg-red-300"/>
    )
}

export const EditIcon = () => {
    return (
        <img src="src/assets/edit-text.png" alt="edit" width={20}/>
    )
}