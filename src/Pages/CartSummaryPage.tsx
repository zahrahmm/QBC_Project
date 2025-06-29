import Stepper from "../components/Cart/Stepper";

const sampleProducts = [
  {
    id: 1,
    name: "Apple iPhone 14 Pro",
    image: "/images/iphone-14.png",
    quantity: 1,
    price: 999,
  },
  {
    id: 2,
    name: "Apple MacBook Air M2",
    image: "/images/macbook-air-m2.png",
    quantity: 1,
    price: 999,
  },
  {
    id: 3,
    name: "Apple iPad Pro 12.9-inch",
    image: "/images/ipad-pro.png",
    quantity: 1,
    price: 999,
  },
];

const SummaryPage = () => {
  return (
    <div
      className="bg-[#181818] min-h-screen flex flex-col items-center py-8 px-4 text-right"
      dir="rtl"
    >
      <div className="w-full flex justify-center">
        <Stepper activeStep={2} />
      </div>

      <div className="w-full max-w-6xl mx-auto bg-transparent mt-8 overflow-x-auto">
        <table
          className="w-full text-right border-separate"
          style={{ borderSpacing: "0 6px" }}
        >
          <thead>
            <tr className="text-white text-base">
              <th className="font-bold pb-2 pr-2 whitespace-nowrap">عکس</th>
              <th className="font-bold pb-2 pr-2 whitespace-nowrap">
                نام محصول
              </th>
              <th className="font-bold pb-2 pr-2 whitespace-nowrap">تعداد</th>
              <th className="font-bold pb-2 pr-2 whitespace-nowrap">قیمت</th>
              <th className="font-bold pb-2 pr-2 whitespace-nowrap">
                قیمت نهایی
              </th>
            </tr>
          </thead>
          <tbody>
            {sampleProducts.map((item) => (
              <tr key={item.id} className="text-white bg-transparent">
                <td className="align-middle pr-2 py-2">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded object-cover mx-auto"
                  />
                </td>
                <td className="align-middle pr-2 py-2">{item.name}</td>
                <td className="align-middle pr-2 py-2">{item.quantity}</td>
                <td className="align-middle pr-2 py-2">${item.price}</td>
                <td className="align-middle pr-2 py-2">
                  ${item.price * item.quantity}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="w-full max-w-6xl mx-auto mt-6">
        <h3 className="font-bold text-lg text-white mb-2 text-right">
          خلاصه خرید
        </h3>
        <div className="bg-[#1f1f1f] rounded-xl p-5 flex flex-col md:flex-row justify-between items-start md:items-center gap-5 shadow-md">
          <div className="flex-1 text-right min-w-[160px]">
            <div className="font-bold text-white mb-1">روش پرداخت</div>
            <div className="text-gray-300">روش : درگاه پرداخت پاسارگاد</div>
          </div>
          <div className="flex-1 text-right min-w-[200px]">
            <div className="font-bold text-white mb-1">آدرس دریافت</div>
            <div className="text-gray-300">
              آدرس : تهران، آزادی، نبش کوچه قندی، پلاک ۱۹۳
            </div>
          </div>
          <div className="flex-1 text-right min-w-[180px] flex flex-col gap-1">
            <div>
              {/* all prices are hard coded only for demo & overview  */}
              قیمت محصولات :{" "}
              <span className="font-bold text-white">{3 * 999}$</span>
            </div>
            <div>
              هزینه ارسال :{" "}
              <span className="font-bold text-white">{0.01 * 999}$</span>
            </div>
            <div>
              مالیات :{" "}
              <span className="font-bold text-white">{0.05 * 999}$</span>
            </div>
            <div>
              مبلغ نهایی :{" "}
              <span className="font-bold text-white">
                {`${Math.round(3 * 999 - 0.01 * 999 - 0.05 * 999)}$`}
              </span>
            </div>
          </div>
        </div>
      </div>

      <button className="btn bg-[#db2777] text-[#ffffff] w-full max-w-6xl mt-6 rounded-full text-md ">
        ثبت سفارش
      </button>
    </div>
  );
};

export default SummaryPage;
