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

const data = [
  { name: "محصول اول", مقدار: 125, pv: 2000, amt: 2400 },
  { name: "محصول دوم", مقدار: 876, pv: 2400, amt: 2400 },
  { name: "محصول سوم", مقدار: 34, pv: 2400, amt: 2400 },
  { name: "محصول چهارم", مقدار: 345, pv: 2400, amt: 2400 },
  { name: "محصول پنجم", مقدار: 675, pv: 2400, amt: 2400 },
];

const renderCustomBarLabel = ({ payload, x, y, width, height, value }) => {
  return (
    <text
      x={x + width / 2}
      y={y - width / 2}
      fill="currentColor"
      textAnchor="middle"
    >{`مقدار: ${value}`}</text>
  );
};

const renderBarChart = (
  <ResponsiveContainer width={"100%"} height={"100%"}>
    <BarChart width={600} height={300} data={data}>
      <XAxis dataKey="name" stroke="currentColor" />
      <YAxis stroke="currentColor" />
      {/* <Tooltip /> */}
      <CartesianGrid stroke="#ccc" strokeDasharray="1 15" />
      <Bar
        dataKey="مقدار"
        fill="Primaty"
        barSize={30}
        label={renderCustomBarLabel}
      />
    </BarChart>
  </ResponsiveContainer>
);

function Dashboard() {
  const { data } = useTotalsales();

  const {
    data: users,
    isLoading: isUsersLoading,
    isError: isUsersError,
  } = useUsers();
  const {
    data: orders,
    isLoading: isOrdersLoading,
    isError: isOrdersError,
  } = useOrders();

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
            <p>{data?.totalSales} تومان</p>
          </div>
          <div>
            <h3>مشتری ها</h3>
            <p>{users?.length ?? 0}</p>
          </div>
          <div>
            <h3>سفارشات</h3>
            <p>{orders?.length ?? 0}</p>
          </div>
        </div>
        <div className="h-180" dir="left">
          {renderBarChart}
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
