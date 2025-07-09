import { Select, MenuItem, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import { useCartStore } from "../stores/cartstore";

const CartPage = () => {
  const { cartItems, updateQuantity, removeFromCart } = useCartStore();
  const navigate = useNavigate();

  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div
      dir="ltr"
      className="min-h-screen flex items-center justify-center px-4"
    >
      <div className="w-[1350px] flex gap-24 p-12 mx-auto">
        <div className="flex flex-col gap-10">
          {cartItems.map((item) => (
            <div
              key={item._id}
              className="flex justify-between items-center gap-4"
            >
              <div className="flex items-center gap-2">
                <IconButton onClick={() => removeFromCart(item._id)}>
                  <DeleteIcon className="text-error" />
                </IconButton>
                <Select
                  value={item.quantity}
                  onChange={(e) =>
                    updateQuantity(item._id, Number(e.target.value))
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

              <div className="flex items-center gap-3 justify-end text-sm">
                <div className="text-right">
                  <p className="text-secondary font-medium">{item.name}</p>
                  <p>{item.category?.name}</p>
                  <p>{item.price.toLocaleString()} تومان</p>
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
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-6 items-end flex-grow">
          {cartItems.length === 0 ? (
            <p className="text-4xl font-bold">! سبد خرید شما خالی است</p>
          ) : (
            <>
              <div className="mt-4 text-right">
                <p>تعداد ({totalQuantity})</p>
                <p className="font-bold text-lg mt-1">
                  {totalPrice.toLocaleString()} تومان
                </p>
              </div>

              <button
                onClick={() => navigate("/cart/process")}
                className="btn bg-secondary w-lg rounded-full mt-2"
              >
                تکمیل خرید
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
