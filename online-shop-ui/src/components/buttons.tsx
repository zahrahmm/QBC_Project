export const OrderStatusButtons = ({isPaid}: {isPaid: boolean}) => {

    const color = isPaid ? "bg-pink-800 rounded-lg" : "bg-green-800";

    return (
       <button className={`btn btn-primary text-white ${color}`}>
           {
               isPaid ? "جزئیات" : "پرداخت"
           }
       </button>
    )
}
