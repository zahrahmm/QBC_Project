import OrderTableHeader from "./orderTableHeader.tsx";
import OrderTableBody from "./orderTableBody.tsx";

const OrderTable = () => {
    return (
        // user orders table
        <table className="w-full border-collapse">
            <OrderTableHeader />
            <OrderTableBody />
        </table>
    );
}

export default OrderTable;