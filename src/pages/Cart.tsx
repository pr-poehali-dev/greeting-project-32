import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

import Icon from "@/components/ui/icon";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Беспроводные наушники Premium",
      price: 8999,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
    },
    {
      id: 2,
      name: "Умные часы Pro",
      price: 15999,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
    },
  ]);

  const [promoCode, setPromoCode] = useState("");

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(id);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const delivery = 500;
  const total = subtotal + delivery;

  return (
    <div>
        <h1 className="text-4xl font-bold mb-8">Корзина</h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <Icon
              name="ShoppingCart"
              className="h-24 w-24 mx-auto text-muted-foreground mb-4"
            />
            <h2 className="text-2xl font-semibold mb-2">Корзина пуста</h2>
            <p className="text-muted-foreground mb-6">
              Добавьте товары из каталога
            </p>
            <Link to="/catalog">
              <Button size="lg">
                Перейти в каталог
                <Icon name="ArrowRight" className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <Card key={item.id}>
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-24 h-24 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold mb-2">{item.name}</h3>
                        <p className="text-primary font-bold text-lg mb-4">
                          {item.price.toLocaleString()} ₽
                        </p>
                        <div className="flex items-center gap-3">
                          <Button
                            size="icon"
                            variant="outline"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                          >
                            <Icon name="Minus" className="h-4 w-4" />
                          </Button>
                          <span className="w-12 text-center font-semibold">
                            {item.quantity}
                          </span>
                          <Button
                            size="icon"
                            variant="outline"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                          >
                            <Icon name="Plus" className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <div className="flex flex-col items-end justify-between">
                        <Button
                          size="icon"
                          variant="ghost"
                          onClick={() => removeItem(item.id)}
                        >
                          <Icon name="Trash2" className="h-5 w-5 text-destructive" />
                        </Button>
                        <p className="font-bold text-xl">
                          {(item.price * item.quantity).toLocaleString()} ₽
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle>Итого</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Товары:</span>
                      <span>{subtotal.toLocaleString()} ₽</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Доставка:</span>
                      <span>{delivery.toLocaleString()} ₽</span>
                    </div>
                  </div>

                  <Separator />

                  <div className="flex justify-between text-lg font-bold">
                    <span>Итого:</span>
                    <span className="text-primary">
                      {total.toLocaleString()} ₽
                    </span>
                  </div>

                  <div className="space-y-2">
                    <Input
                      placeholder="Промокод"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                    />
                    <Button variant="outline" className="w-full">
                      Применить промокод
                    </Button>
                  </div>

                  <Button size="lg" className="w-full">
                    Оформить заказ
                    <Icon name="ShoppingBag" className="ml-2 h-5 w-5" />
                  </Button>

                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Icon name="Shield" className="h-4 w-4" />
                      <span>Безопасная оплата</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Truck" className="h-4 w-4" />
                      <span>Доставка 1-3 дня</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="RotateCcw" className="h-4 w-4" />
                      <span>Возврат 14 дней</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
    </div>
  );
};

export default Cart;