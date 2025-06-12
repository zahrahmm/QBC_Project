export const PaymentBadge = ({isPaid}: {isPaid: boolean}) => {

    const badgeClass = isPaid ? "badge-success" : "badge-error";

    return (
        <div className={`badge ${badgeClass} p-3 text-white rounded-4xl`} >
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