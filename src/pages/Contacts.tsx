import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";

const Contacts = () => {
  const contacts = [
    {
      icon: "Phone",
      title: "Телефон",
      value: "+7 (495) 123-45-67",
      color: "from-primary to-purple-500",
    },
    {
      icon: "Mail",
      title: "Email",
      value: "info@shophub.ru",
      color: "from-secondary to-pink-500",
    },
    {
      icon: "MapPin",
      title: "Адрес",
      value: "Москва, ул. Примерная, д. 1",
      color: "from-accent to-teal-500",
    },
    {
      icon: "Clock",
      title: "Часы работы",
      value: "Пн-Вс: 9:00 - 21:00",
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Контакты</h1>
              <p className="text-lg text-muted-foreground">
                Свяжитесь с нами любым удобным способом. Мы всегда рады помочь!
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contacts.map((contact, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div
                      className={`h-16 w-16 rounded-full bg-gradient-to-br ${contact.color} flex items-center justify-center mx-auto mb-4`}
                    >
                      <Icon name={contact.icon} className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-semibold mb-2">{contact.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {contact.value}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Напишите нам</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Имя</Label>
                      <Input id="name" placeholder="Ваше имя" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Телефон</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+7 (999) 123-45-67"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Сообщение</Label>
                      <Textarea
                        id="message"
                        placeholder="Ваше сообщение..."
                        rows={4}
                      />
                    </div>
                    <Button className="w-full">
                      Отправить сообщение
                      <Icon name="Send" className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Где нас найти</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                      <Icon name="Map" className="h-16 w-16 text-muted-foreground" />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Социальные сети</CardTitle>
                  </CardHeader>
                  <CardContent className="flex gap-4">
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Icon name="MessageCircle" className="h-5 w-5" />
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Icon name="Send" className="h-5 w-5" />
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Icon name="Share2" className="h-5 w-5" />
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contacts;
