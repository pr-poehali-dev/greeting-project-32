import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";

const FAQ = () => {
  const faqs = [
    {
      question: "Как оформить заказ?",
      answer:
        "Выберите товары в каталоге, добавьте их в корзину и нажмите 'Оформить заказ'. Заполните форму с контактными данными и адресом доставки, выберите способ оплаты и подтвердите заказ.",
    },
    {
      question: "Какие способы оплаты доступны?",
      answer:
        "Мы принимаем оплату банковскими картами, электронными кошельками и наличными при получении. Все платежи защищены и проходят по безопасному каналу.",
    },
    {
      question: "Сколько времени занимает доставка?",
      answer:
        "Доставка по Москве и Московской области осуществляется в течение 1-2 дней. В другие регионы России — от 3 до 7 дней в зависимости от удаленности.",
    },
    {
      question: "Можно ли вернуть товар?",
      answer:
        "Да, вы можете вернуть товар в течение 14 дней с момента получения, если он не был в употреблении и сохранил товарный вид. Возврат денег происходит в течение 7-10 рабочих дней.",
    },
    {
      question: "Есть ли гарантия на товары?",
      answer:
        "Все товары имеют гарантию от производителя. Срок гарантии зависит от категории товара и указан в описании каждого продукта.",
    },
    {
      question: "Как отследить мой заказ?",
      answer:
        "После отправки заказа вы получите трек-номер на указанный email. Статус доставки можно отслеживать в личном кабинете в разделе 'Мои заказы'.",
    },
    {
      question: "Что делать, если товар пришел поврежденным?",
      answer:
        "Свяжитесь с нашей службой поддержки в течение 24 часов после получения заказа. Мы оперативно заменим товар или вернем деньги.",
    },
    {
      question: "Можно ли изменить или отменить заказ?",
      answer:
        "Вы можете изменить или отменить заказ до момента его отправки. Для этого свяжитесь с нашей службой поддержки по телефону или email.",
    },
  ];

  const categories = [
    {
      icon: "ShoppingCart",
      title: "Оформление заказа",
      count: 3,
      color: "from-primary to-purple-500",
    },
    {
      icon: "CreditCard",
      title: "Оплата",
      count: 2,
      color: "from-secondary to-pink-500",
    },
    {
      icon: "Truck",
      title: "Доставка",
      count: 4,
      color: "from-accent to-teal-500",
    },
    {
      icon: "RotateCcw",
      title: "Возврат",
      count: 2,
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-20">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Часто задаваемые вопросы
              </h1>
              <p className="text-lg text-muted-foreground">
                Найдите ответы на самые популярные вопросы о нашем сервисе
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {categories.map((category, index) => (
                <Card
                  key={index}
                  className="text-center hover:shadow-lg transition-shadow cursor-pointer"
                >
                  <CardContent className="pt-6">
                    <div
                      className={`h-16 w-16 rounded-full bg-gradient-to-br ${category.color} flex items-center justify-center mx-auto mb-4`}
                    >
                      <Icon name={category.icon} className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-semibold mb-1">{category.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {category.count} вопросов
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border rounded-lg px-6"
                  >
                    <AccordionTrigger className="text-left font-semibold hover:text-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              <Card className="mt-16 bg-gradient-to-br from-primary/10 to-secondary/10 border-none">
                <CardContent className="pt-6 text-center">
                  <Icon
                    name="HelpCircle"
                    className="h-12 w-12 mx-auto text-primary mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2">
                    Не нашли ответ на свой вопрос?
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Наша служба поддержки всегда готова помочь
                  </p>
                  <Link to="/contacts">
                    <Button size="lg">
                      Связаться с нами
                      <Icon name="ArrowRight" className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;
