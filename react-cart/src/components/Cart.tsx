import { Offcanvas, Stack } from "react-bootstrap";
import { useCartContext } from "../contexts/CartContext";
import { CartItem } from "./CartItem";
import { formatCurrency } from "../utils/formatCurrency";
import storeItems from "../data/items.json";

export function Cart({ isOpen }: { isOpen: boolean }) {
  const { closeCart, cartItems } = useCartContext();

  return (
    <Offcanvas show={isOpen} placement="end">
      <Offcanvas.Header closeButton onHide={closeCart}>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {cartItems.length > 0 ? (
          <Stack gap={3}>
            {cartItems.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
            <div className="mt-auto ms-auto fw-bold fs-5">
              Total{" "}
              {formatCurrency(
                cartItems.reduce((total, cartItem) => {
                  const item = storeItems.find((i) => i.id === cartItem.id);
                  return total + (item?.price || 0) * cartItem.quantity;
                }, 0)
              )}
            </div>
          </Stack>
        ) : (
          <p className="text-muted">Cart Empty!</p>
        )}
      </Offcanvas.Body>
    </Offcanvas>
  );
}
