import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Icon name="ShoppingBag" className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                ShopHub
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Современный интернет-магазин с широким ассортиментом качественных товаров
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/catalog" className="text-muted-foreground hover:text-primary transition-colors">
                  Каталог
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  О нас
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                  Блог
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Информация</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/faq" className="text-muted-foreground hover:text-primary transition-colors">
                  Вопросы и ответы
                </Link>
              </li>
              <li>
                <Link to="/contacts" className="text-muted-foreground hover:text-primary transition-colors">
                  Контакты
                </Link>
              </li>
              <li>
                <Link to="/cart" className="text-muted-foreground hover:text-primary transition-colors">
                  Корзина
                </Link>
              </li>
              <li>
                <Link to="/profile" className="text-muted-foreground hover:text-primary transition-colors">
                  Профиль
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Контакты</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center space-x-2">
                <Icon name="Mail" className="h-4 w-4" />
                <span>info@shophub.ru</span>
              </li>
              <li className="flex items-center space-x-2">
                <Icon name="Phone" className="h-4 w-4" />
                <span>+7 (495) 123-45-67</span>
              </li>
              <li className="flex items-center space-x-2">
                <Icon name="MapPin" className="h-4 w-4" />
                <span>Москва, ул. Примерная, 1</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© 2024 ShopHub. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
