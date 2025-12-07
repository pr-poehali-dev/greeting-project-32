import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  rating: number;
  brand: string;
  inStock: boolean;
}

interface CartItem extends Product {
  quantity: number;
}

const products: Product[] = [
  { id: 1, name: 'Смартфон Galaxy X Pro', price: 79990, category: 'electronics', image: '/placeholder.svg', rating: 4.8, brand: 'Samsung', inStock: true },
  { id: 2, name: 'Беспроводные наушники AirPods', price: 19990, category: 'electronics', image: '/placeholder.svg', rating: 4.9, brand: 'Apple', inStock: true },
  { id: 3, name: 'Умные часы Watch Series 9', price: 45990, category: 'electronics', image: '/placeholder.svg', rating: 4.7, brand: 'Apple', inStock: true },
  { id: 4, name: 'Ноутбук MacBook Air M3', price: 129990, category: 'electronics', image: '/placeholder.svg', rating: 4.9, brand: 'Apple', inStock: true },
  { id: 5, name: 'Планшет iPad Pro 12.9"', price: 99990, category: 'electronics', image: '/placeholder.svg', rating: 4.8, brand: 'Apple', inStock: true },
  { id: 6, name: 'Игровая консоль PlayStation 5', price: 54990, category: 'gaming', image: '/placeholder.svg', rating: 4.9, brand: 'Sony', inStock: false },
  { id: 7, name: 'Кофемашина Deluxe', price: 34990, category: 'home', image: '/placeholder.svg', rating: 4.6, brand: 'DeLonghi', inStock: true },
  { id: 8, name: 'Робот-пылесос Smart Clean', price: 29990, category: 'home', image: '/placeholder.svg', rating: 4.5, brand: 'Xiaomi', inStock: true },
];

type PageType = 'home' | 'catalog' | 'cart' | 'profile' | 'about' | 'contacts' | 'faq' | 'blog';

export default function Index() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [priceRange, setPriceRange] = useState([0, 150000]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    setCart(prev => prev.map(item => 
      item.id === id ? { ...item, quantity } : item
    ));
  };

  const filteredProducts = products.filter(product => {
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
    const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesPrice && matchesCategory && matchesBrand && matchesSearch;
  });

  const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const cartItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
    );
  };

  const toggleBrand = (brand: string) => {
    setSelectedBrands(prev => 
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => setCurrentPage('home')}>
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                <Icon name="ShoppingBag" size={24} className="text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                ShopVibe
              </span>
            </div>

            <nav className="hidden md:flex items-center gap-6">
              <button onClick={() => setCurrentPage('home')} className={`transition-colors hover:text-primary ${currentPage === 'home' ? 'text-primary font-semibold' : 'text-muted-foreground'}`}>
                Главная
              </button>
              <button onClick={() => setCurrentPage('catalog')} className={`transition-colors hover:text-primary ${currentPage === 'catalog' ? 'text-primary font-semibold' : 'text-muted-foreground'}`}>
                Каталог
              </button>
              <button onClick={() => setCurrentPage('about')} className={`transition-colors hover:text-primary ${currentPage === 'about' ? 'text-primary font-semibold' : 'text-muted-foreground'}`}>
                О нас
              </button>
              <button onClick={() => setCurrentPage('blog')} className={`transition-colors hover:text-primary ${currentPage === 'blog' ? 'text-primary font-semibold' : 'text-muted-foreground'}`}>
                Блог
              </button>
              <button onClick={() => setCurrentPage('contacts')} className={`transition-colors hover:text-primary ${currentPage === 'contacts' ? 'text-primary font-semibold' : 'text-muted-foreground'}`}>
                Контакты
              </button>
            </nav>

            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" onClick={() => setCurrentPage('profile')}>
                <Icon name="User" size={20} />
              </Button>
              
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="relative">
                    <Icon name="ShoppingCart" size={20} />
                    {cartItemsCount > 0 && (
                      <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs">
                        {cartItemsCount}
                      </Badge>
                    )}
                  </Button>
                </SheetTrigger>
                <SheetContent className="w-full sm:max-w-lg">
                  <SheetHeader>
                    <SheetTitle>Корзина ({cartItemsCount})</SheetTitle>
                  </SheetHeader>
                  <div className="mt-8 space-y-4">
                    {cart.length === 0 ? (
                      <div className="text-center py-12">
                        <Icon name="ShoppingCart" size={48} className="mx-auto text-muted-foreground mb-4" />
                        <p className="text-muted-foreground">Корзина пуста</p>
                      </div>
                    ) : (
                      <>
                        <div className="space-y-4 max-h-[60vh] overflow-auto">
                          {cart.map(item => (
                            <Card key={item.id}>
                              <CardContent className="p-4">
                                <div className="flex gap-4">
                                  <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />
                                  <div className="flex-1">
                                    <h4 className="font-semibold mb-1">{item.name}</h4>
                                    <p className="text-primary font-bold">{item.price.toLocaleString('ru-RU')} ₽</p>
                                    <div className="flex items-center gap-2 mt-2">
                                      <Button size="icon" variant="outline" className="h-8 w-8" onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                                        <Icon name="Minus" size={14} />
                                      </Button>
                                      <span className="w-8 text-center font-semibold">{item.quantity}</span>
                                      <Button size="icon" variant="outline" className="h-8 w-8" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                                        <Icon name="Plus" size={14} />
                                      </Button>
                                      <Button size="icon" variant="ghost" className="h-8 w-8 ml-auto" onClick={() => removeFromCart(item.id)}>
                                        <Icon name="Trash2" size={14} />
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                        <div className="border-t pt-4 space-y-4">
                          <div className="flex justify-between text-lg font-bold">
                            <span>Итого:</span>
                            <span className="text-primary">{totalAmount.toLocaleString('ru-RU')} ₽</span>
                          </div>
                          <Button className="w-full" size="lg">
                            Оформить заказ
                          </Button>
                        </div>
                      </>
                    )}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {currentPage === 'home' && (
          <div className="animate-fade-in">
            <section className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 py-20">
              <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center">
                  <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                    Яркие покупки каждый день
                  </h1>
                  <p className="text-xl text-muted-foreground mb-8">
                    Откройте для себя мир стильных товаров по лучшим ценам
                  </p>
                  <div className="flex gap-4 justify-center">
                    <Button size="lg" onClick={() => setCurrentPage('catalog')} className="text-lg px-8">
                      Смотреть каталог
                      <Icon name="ArrowRight" size={20} className="ml-2" />
                    </Button>
                    <Button size="lg" variant="outline" onClick={() => setCurrentPage('about')} className="text-lg px-8">
                      Узнать больше
                    </Button>
                  </div>
                </div>
              </div>
            </section>

            <section className="py-20">
              <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12">Популярные товары</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {products.slice(0, 4).map(product => (
                    <Card key={product.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 animate-scale-in">
                      <CardHeader className="p-0">
                        <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                      </CardHeader>
                      <CardContent className="p-4">
                        <CardTitle className="text-lg mb-2">{product.name}</CardTitle>
                        <div className="flex items-center gap-1 mb-2">
                          <Icon name="Star" size={16} className="text-accent fill-accent" />
                          <span className="text-sm font-semibold">{product.rating}</span>
                        </div>
                        <p className="text-2xl font-bold text-primary">{product.price.toLocaleString('ru-RU')} ₽</p>
                      </CardContent>
                      <CardFooter className="p-4 pt-0">
                        <Button className="w-full" onClick={() => addToCart(product)}>
                          <Icon name="ShoppingCart" size={16} className="mr-2" />
                          В корзину
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </div>
            </section>

            <section className="py-20 bg-muted/30">
              <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12">Наши преимущества</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <Card className="text-center p-8 hover:shadow-lg transition-shadow">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Icon name="Truck" size={32} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Быстрая доставка</h3>
                    <p className="text-muted-foreground">Доставим ваш заказ в течение 24 часов</p>
                  </Card>
                  <Card className="text-center p-8 hover:shadow-lg transition-shadow">
                    <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Icon name="Shield" size={32} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Гарантия качества</h3>
                    <p className="text-muted-foreground">Все товары сертифицированы и проверены</p>
                  </Card>
                  <Card className="text-center p-8 hover:shadow-lg transition-shadow">
                    <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Icon name="Percent" size={32} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Выгодные цены</h3>
                    <p className="text-muted-foreground">Регулярные акции и скидки до 50%</p>
                  </Card>
                </div>
              </div>
            </section>
          </div>
        )}

        {currentPage === 'catalog' && (
          <div className="container mx-auto px-4 py-8 animate-fade-in">
            <h1 className="text-4xl font-bold mb-8">Каталог товаров</h1>
            <div className="flex flex-col lg:flex-row gap-8">
              <aside className="lg:w-80 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Фильтры</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <label className="text-sm font-semibold mb-3 block">Поиск</label>
                      <Input 
                        placeholder="Найти товар..." 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>

                    <div>
                      <label className="text-sm font-semibold mb-3 block">
                        Цена: {priceRange[0].toLocaleString('ru-RU')} - {priceRange[1].toLocaleString('ru-RU')} ₽
                      </label>
                      <Slider
                        value={priceRange}
                        onValueChange={setPriceRange}
                        max={150000}
                        step={1000}
                        className="mb-2"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-semibold mb-3 block">Категория</label>
                      <div className="space-y-2">
                        {['electronics', 'gaming', 'home'].map(category => (
                          <div key={category} className="flex items-center space-x-2">
                            <Checkbox 
                              id={category}
                              checked={selectedCategories.includes(category)}
                              onCheckedChange={() => toggleCategory(category)}
                            />
                            <label htmlFor={category} className="text-sm cursor-pointer">
                              {category === 'electronics' ? 'Электроника' : category === 'gaming' ? 'Игры' : 'Для дома'}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-semibold mb-3 block">Бренд</label>
                      <div className="space-y-2">
                        {['Apple', 'Samsung', 'Sony', 'Xiaomi', 'DeLonghi'].map(brand => (
                          <div key={brand} className="flex items-center space-x-2">
                            <Checkbox 
                              id={brand}
                              checked={selectedBrands.includes(brand)}
                              onCheckedChange={() => toggleBrand(brand)}
                            />
                            <label htmlFor={brand} className="text-sm cursor-pointer">
                              {brand}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => {
                        setPriceRange([0, 150000]);
                        setSelectedCategories([]);
                        setSelectedBrands([]);
                        setSearchQuery('');
                      }}
                    >
                      Сбросить фильтры
                    </Button>
                  </CardContent>
                </Card>
              </aside>

              <div className="flex-1">
                <div className="mb-4 flex items-center justify-between">
                  <p className="text-muted-foreground">
                    Найдено товаров: <span className="font-semibold text-foreground">{filteredProducts.length}</span>
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map(product => (
                    <Card key={product.id} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                      <CardHeader className="p-0 relative">
                        <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                        {!product.inStock && (
                          <Badge className="absolute top-2 right-2" variant="destructive">
                            Нет в наличии
                          </Badge>
                        )}
                      </CardHeader>
                      <CardContent className="p-4">
                        <div className="text-xs text-muted-foreground mb-1">{product.brand}</div>
                        <CardTitle className="text-lg mb-2">{product.name}</CardTitle>
                        <div className="flex items-center gap-1 mb-2">
                          <Icon name="Star" size={16} className="text-accent fill-accent" />
                          <span className="text-sm font-semibold">{product.rating}</span>
                        </div>
                        <p className="text-2xl font-bold text-primary">{product.price.toLocaleString('ru-RU')} ₽</p>
                      </CardContent>
                      <CardFooter className="p-4 pt-0">
                        <Button 
                          className="w-full" 
                          onClick={() => addToCart(product)}
                          disabled={!product.inStock}
                        >
                          <Icon name="ShoppingCart" size={16} className="mr-2" />
                          {product.inStock ? 'В корзину' : 'Недоступно'}
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {currentPage === 'profile' && (
          <div className="container mx-auto px-4 py-12 animate-fade-in">
            <div className="max-w-2xl mx-auto">
              <h1 className="text-4xl font-bold mb-8">Мой профиль</h1>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                      <Icon name="User" size={40} className="text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">Иван Иванов</CardTitle>
                      <p className="text-muted-foreground">ivan@example.com</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Card className="p-4 text-center">
                      <div className="text-3xl font-bold text-primary mb-1">12</div>
                      <div className="text-sm text-muted-foreground">Заказов</div>
                    </Card>
                    <Card className="p-4 text-center">
                      <div className="text-3xl font-bold text-secondary mb-1">3</div>
                      <div className="text-sm text-muted-foreground">В избранном</div>
                    </Card>
                  </div>
                  <Button className="w-full">Редактировать профиль</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {currentPage === 'about' && (
          <div className="container mx-auto px-4 py-12 animate-fade-in">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold mb-8">О нас</h1>
              <Card className="p-8 space-y-6">
                <p className="text-lg leading-relaxed">
                  <span className="text-primary font-bold text-2xl">ShopVibe</span> — это современный интернет-магазин, 
                  созданный для тех, кто ценит качество, стиль и удобство покупок онлайн.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Мы тщательно отбираем товары от проверенных производителей и предлагаем только то, 
                  что сами бы купили для себя. Наша миссия — сделать онлайн-шопинг ярким, 
                  простым и приятным опытом для каждого клиента.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">5+</div>
                    <div className="text-muted-foreground">лет на рынке</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-secondary mb-2">10K+</div>
                    <div className="text-muted-foreground">довольных клиентов</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-accent mb-2">500+</div>
                    <div className="text-muted-foreground">товаров в каталоге</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        )}

        {currentPage === 'contacts' && (
          <div className="container mx-auto px-4 py-12 animate-fade-in">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold mb-8">Контакты</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="p-6 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Адрес</h3>
                      <p className="text-muted-foreground">г. Москва, ул. Примерная, д. 123</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" size={24} className="text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Телефон</h3>
                      <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" size={24} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-muted-foreground">info@shopvibe.ru</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold text-lg mb-4">Напишите нам</h3>
                  <div className="space-y-4">
                    <Input placeholder="Ваше имя" />
                    <Input placeholder="Email" type="email" />
                    <Input placeholder="Сообщение" />
                    <Button className="w-full">Отправить</Button>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        )}

        {currentPage === 'faq' && (
          <div className="container mx-auto px-4 py-12 animate-fade-in">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold mb-8">Вопросы и ответы</h1>
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left font-semibold">
                    Как оформить заказ?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Выберите товары, добавьте их в корзину, заполните данные для доставки и оплатите удобным способом.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left font-semibold">
                    Какие способы оплаты доступны?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Мы принимаем оплату картами Visa, MasterCard, Mir, а также через СБП и электронные кошельки.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left font-semibold">
                    Сколько времени занимает доставка?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Доставка по Москве занимает 1-2 дня, в другие регионы — 3-7 дней в зависимости от расстояния.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left font-semibold">
                    Можно ли вернуть товар?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Да, вы можете вернуть товар в течение 14 дней с момента получения, если он не был в употреблении.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-left font-semibold">
                    Есть ли гарантия на товары?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Все товары имеют официальную гарантию производителя. Срок гарантии указан в описании каждого товара.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        )}

        {currentPage === 'blog' && (
          <div className="container mx-auto px-4 py-12 animate-fade-in">
            <h1 className="text-4xl font-bold mb-8">Блог</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Как выбрать идеальный смартфон в 2024 году', date: '15 ноября 2024', image: '/placeholder.svg' },
                { title: 'Топ-10 гаджетов для дома', date: '10 ноября 2024', image: '/placeholder.svg' },
                { title: 'Тренды в мире техники: что купить?', date: '5 ноября 2024', image: '/placeholder.svg' },
              ].map((post, idx) => (
                <Card key={idx} className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer">
                  <CardHeader className="p-0">
                    <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                  </CardHeader>
                  <CardContent className="p-6">
                    <p className="text-sm text-muted-foreground mb-2">{post.date}</p>
                    <CardTitle className="text-xl mb-3">{post.title}</CardTitle>
                    <Button variant="link" className="p-0">
                      Читать далее
                      <Icon name="ArrowRight" size={16} className="ml-1" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </main>

      <footer className="bg-muted/30 border-t mt-auto">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                  <Icon name="ShoppingBag" size={24} className="text-white" />
                </div>
                <span className="text-xl font-bold">ShopVibe</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Яркие покупки каждый день
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Навигация</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <button onClick={() => setCurrentPage('catalog')} className="block hover:text-primary">Каталог</button>
                <button onClick={() => setCurrentPage('about')} className="block hover:text-primary">О нас</button>
                <button onClick={() => setCurrentPage('blog')} className="block hover:text-primary">Блог</button>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Помощь</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <button onClick={() => setCurrentPage('faq')} className="block hover:text-primary">Вопросы и ответы</button>
                <button onClick={() => setCurrentPage('contacts')} className="block hover:text-primary">Контакты</button>
                <a href="#" className="block hover:text-primary">Доставка и оплата</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>+7 (495) 123-45-67</p>
                <p>info@shopvibe.ru</p>
              </div>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            © 2024 ShopVibe. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}
