import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import Icon from "@/components/ui/icon";

const Profile = () => {
  const orders = [
    {
      id: "12345",
      date: "15.11.2024",
      status: "Доставлен",
      total: 24990,
      items: 2,
    },
    {
      id: "12344",
      date: "10.11.2024",
      status: "В пути",
      total: 8999,
      items: 1,
    },
    {
      id: "12343",
      date: "05.11.2024",
      status: "Обрабатывается",
      total: 45990,
      items: 3,
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Доставлен":
        return "text-green-600 bg-green-50";
      case "В пути":
        return "text-blue-600 bg-blue-50";
      case "Обрабатывается":
        return "text-orange-600 bg-orange-50";
      default:
        return "text-gray-600 bg-gray-50";
    }
  };

  return (
    <div>
        <h1 className="text-4xl font-bold mb-8">Профиль</h1>

        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList>
            <TabsTrigger value="profile">Личные данные</TabsTrigger>
            <TabsTrigger value="orders">Мои заказы</TabsTrigger>
            <TabsTrigger value="favorites">Избранное</TabsTrigger>
          </TabsList>

          <TabsContent value="profile">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="md:col-span-1">
                <CardContent className="pt-6 text-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-secondary mx-auto mb-4 flex items-center justify-center">
                    <Icon name="User" className="h-16 w-16 text-white" />
                  </div>
                  <h2 className="text-xl font-semibold mb-2">Иван Иванов</h2>
                  <p className="text-muted-foreground">ivan@example.com</p>
                  <Button className="w-full mt-4">Изменить фото</Button>
                </CardContent>
              </Card>

              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>Личная информация</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">Имя</Label>
                      <Input id="firstName" defaultValue="Иван" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Фамилия</Label>
                      <Input id="lastName" defaultValue="Иванов" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      defaultValue="ivan@example.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон</Label>
                    <Input
                      id="phone"
                      type="tel"
                      defaultValue="+7 (999) 123-45-67"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Адрес доставки</Label>
                    <Input
                      id="address"
                      defaultValue="г. Москва, ул. Примерная, д. 1, кв. 10"
                    />
                  </div>

                  <Button>Сохранить изменения</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="orders">
            <Card>
              <CardHeader>
                <CardTitle>История заказов</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {orders.map((order) => (
                    <Card key={order.id} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="space-y-1">
                            <p className="font-semibold">Заказ #{order.id}</p>
                            <p className="text-sm text-muted-foreground">
                              {order.date} • {order.items}{" "}
                              {order.items === 1
                                ? "товар"
                                : order.items < 5
                                ? "товара"
                                : "товаров"}
                            </p>
                          </div>
                          <div className="text-right space-y-2">
                            <p className="font-bold text-lg">
                              {order.total.toLocaleString()} ₽
                            </p>
                            <span
                              className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                                order.status
                              )}`}
                            >
                              {order.status}
                            </span>
                          </div>
                        </div>
                        <div className="mt-4 flex gap-2">
                          <Button variant="outline" size="sm">
                            Подробнее
                          </Button>
                          <Button variant="outline" size="sm">
                            Повторить заказ
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="favorites">
            <Card>
              <CardHeader>
                <CardTitle>Избранные товары</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <Icon
                    name="Heart"
                    className="h-16 w-16 mx-auto text-muted-foreground mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2">
                    Список избранного пуст
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Добавляйте товары в избранное, чтобы не потерять их
                  </p>
                  <Button>Перейти в каталог</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
    </div>
  );
};

export default Profile;