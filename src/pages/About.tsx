import { Card, CardContent } from "@/components/ui/card";

import Icon from "@/components/ui/icon";

const About = () => {
  const values = [
    {
      icon: "Target",
      title: "Качество",
      description: "Тщательно отбираем товары от проверенных производителей",
    },
    {
      icon: "Heart",
      title: "Забота",
      description: "Каждый клиент для нас важен, мы ценим ваше доверие",
    },
    {
      icon: "Zap",
      title: "Инновации",
      description: "Следим за трендами и предлагаем лучшие новинки",
    },
    {
      icon: "Users",
      title: "Команда",
      description: "Профессионалы, готовые помочь в любой ситуации",
    },
  ];

  const stats = [
    { value: "50K+", label: "Довольных клиентов" },
    { value: "10K+", label: "Товаров в каталоге" },
    { value: "5 лет", label: "На рынке" },
    { value: "24/7", label: "Поддержка" },
  ];

  return (
    <div>
        <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-20">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">О нас</h1>
              <p className="text-lg text-muted-foreground">
                ShopHub — это современный интернет-магазин, созданный для того,
                чтобы сделать онлайн-шопинг удобным, быстрым и приятным. Мы
                предлагаем широкий ассортимент качественных товаров по выгодным
                ценам.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </p>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/50">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">
              Наши ценности
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6 pb-6">
                    <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-4">
                      <Icon name={value.icon} className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-semibold mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Наша миссия</h2>
                <p className="text-muted-foreground mb-4">
                  Мы стремимся сделать качественные товары доступными для
                  каждого. Наша цель — создать максимально удобный и
                  современный сервис для онлайн-покупок.
                </p>
                <p className="text-muted-foreground mb-4">
                  В ShopHub мы верим, что покупки должны приносить радость.
                  Поэтому мы тщательно отбираем товары, следим за качеством
                  обслуживания и постоянно совершенствуем наш сервис.
                </p>
                <p className="text-muted-foreground">
                  Присоединяйтесь к нашему сообществу довольных покупателей и
                  откройте для себя новый уровень онлайн-шопинга!
                </p>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600"
                  alt="О нас"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>
    </div>
  );
};

export default About;