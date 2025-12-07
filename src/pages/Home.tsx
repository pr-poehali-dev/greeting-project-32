import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'Летняя коллекция 2024',
      description: 'Скидки до 50% на все товары',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=600&fit=crop'
    },
    {
      title: 'Новинки недели',
      description: 'Эксклюзивные предложения для вас',
      image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&h=600&fit=crop'
    }
  ];

  const categories = [
    { name: 'Электроника', icon: 'Laptop', color: 'bg-primary' },
    { name: 'Одежда', icon: 'ShoppingBag', color: 'bg-secondary' },
    { name: 'Дом и сад', icon: 'Home', color: 'bg-accent' },
    { name: 'Спорт', icon: 'Dumbbell', color: 'bg-primary' }
  ];

  const featuredProducts = [
    {
      id: 1,
      name: 'Беспроводные наушники',
      price: 3499,
      oldPrice: 4999,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
      badge: 'Хит продаж'
    },
    {
      id: 2,
      name: 'Умные часы',
      price: 8999,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
      badge: 'Новинка'
    },
    {
      id: 3,
      name: 'Рюкзак для ноутбука',
      price: 2499,
      oldPrice: 3499,
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop',
      badge: '-30%'
    },
    {
      id: 4,
      name: 'Портативная колонка',
      price: 1999,
      image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop',
      badge: 'Популярное'
    }
  ];

  return (
    <div className="min-h-screen">
      <div className="relative h-[500px] overflow-hidden rounded-xl mb-12">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ${
              currentSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
              <div className="max-w-2xl mx-8 text-white">
                <h1 className="text-5xl font-bold mb-4">{slide.title}</h1>
                <p className="text-xl mb-8">{slide.description}</p>
                <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                  Смотреть каталог
                </Button>
              </div>
            </div>
          </div>
        ))}
        
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentSlide === index ? 'bg-white w-8' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Популярные категории</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-xl transition-shadow cursor-pointer group"
              onClick={() => navigate('/catalog')}
            >
              <div className={`${category.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <Icon name={category.icon} size={32} className="text-white" />
              </div>
              <h3 className="font-semibold text-lg">{category.name}</h3>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Рекомендуем</h2>
          <Button variant="ghost" onClick={() => navigate('/catalog')}>
            Все товары <Icon name="ArrowRight" size={20} className="ml-2" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-xl transition-shadow group cursor-pointer">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-4 left-4 bg-secondary text-white">
                  {product.badge}
                </Badge>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl font-bold text-primary">{product.price} ₽</span>
                  {product.oldPrice && (
                    <span className="text-muted-foreground line-through">{product.oldPrice} ₽</span>
                  )}
                </div>
                <Button className="w-full" onClick={() => navigate('/catalog')}>
                  <Icon name="ShoppingCart" size={18} className="mr-2" />
                  В корзину
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-12 text-white text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Подпишитесь на рассылку</h2>
        <p className="text-xl mb-8 opacity-90">Получайте эксклюзивные предложения и новости о новинках</p>
        <div className="flex max-w-md mx-auto gap-4">
          <input
            type="email"
            placeholder="Ваш email"
            className="flex-1 px-6 py-3 rounded-lg text-foreground"
          />
          <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
            Подписаться
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
