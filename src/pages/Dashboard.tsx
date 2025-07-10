import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import useTotalsales from "../utils/useTotalsales";
import useUsers from "../utils/useUsers";
import useOrders from "../utils/useOrders";
import useTotalsalesByDate from "../utils/useTotalSaleByDate";
import {
  persianCurrencyFormatter,
  persianDateFormatter,
  persianNumberFormatter,
} from "../models/PersianLocale";

const renderCustomBarLabel = ({ x, y, width, value }) => (
  <text x={x + width / 2} y={y - 10} fill="currentColor" textAnchor="middle">
    {`مقدار: ${value}`}
  </text>
);

function Dashboard() {
  const { data: salesByDate } = useTotalsalesByDate();
  const data =
    salesByDate?.map((item) => ({
      name: item._id,
      مقدار: item.totalSales,
    })) ?? [];

  const { data: Totalsales } = useTotalsales();
  const {
    data: users,
    isLoading: isUsersLoading,
    isError: isUsersError,
  } = useUsers();

  const {
    data: order,
    isLoading: isOrdersLoading,
    isError: isOrdersError,
  } = useOrders();

  console.log(order);
  console.log(users);
  console.log(Totalsales);

  if (isUsersLoading || isOrdersLoading) {
    return (
      <div className="text-center mt-10">
        در حال بارگذاری...
        <span className="loading loading-spinner loading-md ml-2"></span>
      </div>
    );
  }

  if (isUsersError || isOrdersError) {
    return (
      <div className="text-center text-red-500 mt-10">
        خطا در دریافت اطلاعات!
      </div>
    );
  }

  return (
    <div>
      <div className="m-auto max-w-[1090px] pt-26">
        <div className="flex flex-row gap-3.5 justify-evenly pb-6">
          <div>
            <h3>فروش کل</h3>
            <p>
              {persianCurrencyFormatter.format(Totalsales?.totalSales ?? 0)}
            </p>
          </div>
          <div>
            <h3>مشتری ها</h3>
            <p>{persianNumberFormatter.format(users?.length ?? 0)}</p>
          </div>
          <div>
            <h3>سفارشات</h3>
            <p>{persianNumberFormatter.format(order?.length ?? 0)}</p>
          </div>
        </div>

        <div className="h-180" dir="rtl">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis dataKey="name" stroke="currentColor" />
              <YAxis stroke="currentColor" />
              <CartesianGrid stroke="#ccc" strokeDasharray="1 15" />
              <Bar
                dataKey="مقدار"
                fill="#8884d8"
                barSize={30}
                label={renderCustomBarLabel}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   ResponsiveContainer,
// } from "recharts";
// import useTotalsales from "../utils/useTotalsales";
// import useTotalsalesByDate from "../utils/useTotalSaleByDate";
// import type { totalsalesbydateModel } from "../types/totalsalesbydateModel";
// import useUsers from "../utils/useUsers";
// import useOrders from "../utils/useOrders";

// function Dashboard() {
//   const { data: totalSalesData } = useTotalsales();
//   const { data: salesByDate } = useTotalsalesByDate();
//   const { data: users, isLoading: isUsersLoading, isError: isUsersError } = useUsers();
//   const { data: orders, isLoading: isOrdersLoading, isError: isOrdersError } = useOrders();

//   const data = salesByDate?.map((item: totalsalesbydateModel) => ({
//     name: item._id,
//     مقدار: item.totalSales,
//     pv: 2400,
//     amt: 2400,
//   })) || [];

//   const renderCustomBarLabel = ({ x, y, width, value }) => (
//     <text
//       x={x + width / 2}
//       y={y - 10}
//       fill="currentColor"
//       textAnchor="middle"
//       fontSize="12"
//     >{`مقدار: ${value}`}</text>
//   );

//   if (isUsersLoading || isOrdersLoading) {
//     return (
//       <div className="text-center mt-10">
//         در حال بارگذاری...
//         <span className="loading loading-spinner loading-md ml-2"></span>
//       </div>
//     );
//   }

//   if (isUsersError || isOrdersError) {
//     return <div className="text-center text-red-500 mt-10">خطا در دریافت اطلاعات!</div>;
//   }

//   return (
//     <div>
//       <div className="m-auto max-w-[1090px] pt-26">
//         <div className="flex flex-row gap-3.5 justify-evenly pb-6">
//           <div>
//             <h3>فروش کل</h3>
//             <p>{totalSalesData?.totalSales ?? 0} تومان</p>
//           </div>
//           <div>
//             <h3>مشتری‌ها</h3>
//             <p>{users?.length ?? 0}</p>
//           </div>
//           <div>
//             <h3>سفارشات</h3>
//             <p>{orders?.length ?? 0}</p>
//           </div>
//         </div>

//         <div className="h-180" dir="ltr">
//           <ResponsiveContainer width="100%" height={300}>
//             <BarChart data={data}>
//               <XAxis dataKey="name" stroke="currentColor" />
//               <YAxis stroke="currentColor" />
//               <CartesianGrid stroke="#ccc" strokeDasharray="1 15" />
//               <Bar
//                 dataKey="مقدار"
//                 fill="#8884d8"
//                 barSize={30}
//                 label={renderCustomBarLabel}
//               />
//             </BarChart>
//           </ResponsiveContainer>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;
