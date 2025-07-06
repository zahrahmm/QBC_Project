import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

import { useEffect, useState } from "react";
import server from "../utils/axios";

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
  const getTotalSales = "/api/orders/total-sales";
  const [totalSales, setTotalSales] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await server.get(getTotalSales);
        setTotalSales(response.data.totalSales);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPost();
  }, []);

  return (
    <div>
      <div className="m-auto max-w-[1090px] pt-26">
        <div className="flex flex-row gap-3.5 justify-evenly pb-6">
          <div>
            <h3>فروش کل</h3>
            <p>{totalSales} تومان</p>
          </div>
          <div>
            <h3>مشتری ها</h3>
            <p>۱۰</p>
          </div>
          <div>
            <h3>سفارشات</h3>
            <p>۱۰۰</p>
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
