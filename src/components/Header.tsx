import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-gray-800 to-black flex items-center justify-center">
            <Icon name="ShoppingBag" className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold text-black">
            ShopHub
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-sm font-medium transition-colors hover:text-primary">
            Главная
          </Link>
          <Link to="/catalog" className="text-sm font-medium transition-colors hover:text-primary">
            Каталог
          </Link>
          <Link to="/about" className="text-sm font-medium transition-colors hover:text-primary">
            О нас
          </Link>

          <Link to="/faq" className="text-sm font-medium transition-colors hover:text-primary">
            FAQ
          </Link>
          <Link to="/contacts" className="text-sm font-medium transition-colors hover:text-primary">
            Контакты
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Link to="/cart">
            <Button variant="ghost" size="icon" className="relative">
              <Icon name="ShoppingCart" className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-secondary text-xs text-white flex items-center justify-center">
                0
              </span>
            </Button>
          </Link>
          <Link to="/profile">
            <Button variant="ghost" size="icon">
              <Icon name="User" className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;