import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "10 трендов электроники 2024 года",
      excerpt:
        "Узнайте, какие технологические новинки будут определять рынок электроники в этом году",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600",
      category: "Технологии",
      date: "20 ноября 2024",
      readTime: "5 мин",
    },
    {
      id: 2,
      title: "Как выбрать идеальный подарок",
      excerpt:
        "Практичные советы по выбору подарков для друзей и близких на любой праздник",
      image: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=600",
      category: "Советы",
      date: "18 ноября 2024",
      readTime: "4 мин",
    },
    {
      id: 3,
      title: "Умный дом: с чего начать",
      excerpt:
        "Пошаговое руководство по созданию системы умного дома для новичков",
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=600",
      category: "Технологии",
      date: "15 ноября 2024",
      readTime: "7 мин",
    },
    {
      id: 4,
      title: "Тренды моды: весна 2024",
      excerpt:
        "Обзор главных модных тенденций предстоящего сезона от наших экспертов",
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600",
      category: "Мода",
      date: "12 ноября 2024",
      readTime: "6 мин",
    },
    {
      id: 5,
      title: "Гаджеты для спорта и фитнеса",
      excerpt:
        "Подборка лучших устройств, которые помогут вам достичь спортивных целей",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600",
      category: "Спорт",
      date: "10 ноября 2024",
      readTime: "5 мин",
    },
    {
      id: 6,
      title: "Обзор беспроводных наушников",
      excerpt:
        "Сравниваем популярные модели беспроводных наушников по качеству и цене",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600",
      category: "Обзоры",
      date: "8 ноября 2024",
      readTime: "8 мин",
    },
  ];

  const categories = ["Все", "Технологии", "Советы", "Мода", "Спорт", "Обзоры"];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-20">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Блог</h1>
              <p className="text-lg text-muted-foreground">
                Полезные статьи, обзоры и советы от наших экспертов
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="flex gap-2 mb-8 flex-wrap justify-center">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={index === 0 ? "default" : "outline"}
                  className="rounded-full"
                >
                  {category}
                </Button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <Card
                  key={post.id}
                  className="group hover:shadow-xl transition-all overflow-hidden flex flex-col"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 left-4">
                      {post.category}
                    </Badge>
                  </div>
                  <CardHeader>
                    <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-sm text-muted-foreground">
                      {post.excerpt}
                    </p>
                  </CardContent>
                  <CardFooter className="flex items-center justify-between text-sm text-muted-foreground border-t pt-4">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Icon name="Calendar" className="h-4 w-4" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Icon name="Clock" className="h-4 w-4" />
                        {post.readTime}
                      </span>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="flex justify-center mt-12">
              <Button variant="outline" size="lg">
                Загрузить еще
                <Icon name="ChevronDown" className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
