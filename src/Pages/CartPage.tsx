import { useState } from "react";
import { Select, MenuItem, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const CartPage = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Apple iPhone 14 Pro",
      brand: "Apple",
      price: 10000,
      image: "/images/iphone-14.png",
      quantity: 1,
    },
    {
      id: 2,
      name: "Apple iPhone 14 Pro",
      brand: "Apple",
      price: 10000,
      image: "/images/iphone-14.png",
      quantity: 1,
    },
    {
      id: 3,
      name: "Apple iPhone 14 Pro",
      brand: "Apple",
      price: 10000,
      image: "/images/iphone-14.png",
      quantity: 1,
    },
  ]);

  const handleChangeQuantity = (id: number, value: number) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: value } : item))
    );
  };

  const handleDelete = (id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div
      dir="ltr"
      className="bg-[#121212] min-h-screen flex items-center justify-center px-4 "
    >
      <div className="w-[1350px] flex gap-24 p-12 bg-[#121212] mx-auto">
        <div className="flex flex-col gap-10">
          {items.map((item) => (
            <div key={item.id} className="flex items-center gap-4">
              <IconButton onClick={() => handleDelete(item.id)}>
                <DeleteIcon className="text-red-600" />
              </IconButton>
              <Select
                value={item.quantity}
                onChange={(e) =>
                  handleChangeQuantity(item.id, Number(e.target.value))
                }
                size="small"
                sx={{
                  color: "#fff",
                  background: "#303030",
                  ".MuiSvgIcon-root": { color: "#fff" },
                  ".MuiOutlinedInput-notchedOutline": {
                    borderColor: "#606060",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#ea4c89",
                  },
                }}
                MenuProps={{
                  PaperProps: {
                    sx: {
                      bgcolor: "#232323",
                      color: "#fff",
                    },
                  },
                }}
              >
                {[1, 2, 3, 4, 5].map((q) => (
                  <MenuItem key={q} value={q}>
                    {q}
                  </MenuItem>
                ))}
              </Select>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-6 items-end flex-grow">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-3 justify-end text-sm"
            >
              <div className="text-right">
                <p className="text-pink-600 font-medium">{item.name}</p>
                <p className="text-white">{item.brand}</p>
                <p className="text-white">
                  {item.price.toLocaleString()} تومان
                </p>
              </div>
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover rounded"
                onError={(e) =>
                  (e.currentTarget.src = "https://placehold.co/64")
                }
              />
            </div>
          ))}

          <div className="mt-4 text-right text-white">
            <p>تعداد ({totalQuantity})</p>
            <p className="font-bold text-lg mt-1">
              {totalPrice.toLocaleString()} تومان
            </p>
          </div>

          <button className="btn bg-pink-600 hover:bg-pink-700 text-white w-lg rounded-full mt-2">
            تکمیل خرید
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
