import { Link } from "react-router-dom";

import logoPath from "@assets/images/logo.png";
import MapPinPurpleIcon from "@assets/icons/map-pin-purple.svg";
import CartYellowIcon from "@assets/icons/cart-yellow.svg";

export default function Layout() {
  return (
    <div className="w-full px-40 py-8 flex items-center justify-between">
      <Link to="/">
        <img src={logoPath} alt="Coffee Delivery" />
      </Link>
      <div className="flex items-center gap-3">
        <div className="p-2 flex items-center gap-1 bg-primary-light rounded-md">
          <MapPinPurpleIcon />
          <span className="text-primary-dark text-sm">Porto Alegre, RS</span>
        </div>
        <div className="p-2 bg-secondary-light rounded-md relative cursor-pointer">
          <CartYellowIcon />
          <span className="w-5 h-5 flex items-center justify-center absolute -top-2 -right-2 bg-secondary-dark text-xs text-base-white font-bold rounded-full">
            3
          </span>
        </div>
      </div>
    </div>
  );
}
