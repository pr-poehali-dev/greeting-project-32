import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

import Icon from "@/components/ui/icon";

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  brand: string;
  inStock: boolean;
}

const Catalog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  const products: Product[] = [
    {
      id: 1,
      name: "Беспроводные наушники Premium",
      price: 8999,
      category: "electronics",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
      brand: "TechBrand",
      inStock: true
    },
    {
      id: 2,
      name: "Умные часы Pro",
      price: 15999,
      category: "electronics",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
      brand: "SmartWatch",
      inStock: true
    },
    {
      id: 3,
      name: "Спортивный рюкзак",
      price: 4999,
      category: "accessories",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
      brand: "OutdoorGear",
      inStock: true
    },
    {
      id: 4,
      name: "Термос для напитков",
      price: 1299,
      category: "sport",
      image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400",
      brand: "Hydro",
      inStock: true
    },
    {
      id: 5,
      name: "Bluetooth колонка",
      price: 3499,
      category: "electronics",
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400",
      brand: "AudioMax",
      inStock: true
    },
    {
      id: 6,
      name: "Фитнес-браслет",
      price: 2999,
      category: "sport",
      image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400",
      brand: "FitTrack",
      inStock: false
    },
  ];

  const categories = [
    { id: "electronics", label: "Электроника" },
    { id: "sport", label: "Спорт" },
    { id: "accessories", label: "Аксессуары" },
    { id: "home", label: "Дом и сад" },
  ];

  const brands = [
    { id: "TechBrand", label: "TechBrand" },
    { id: "SmartWatch", label: "SmartWatch" },
    { id: "OutdoorGear", label: "OutdoorGear" },
    { id: "Hydro", label: "Hydro" },
    { id: "AudioMax", label: "AudioMax" },
    { id: "FitTrack", label: "FitTrack" },
  ];

  const toggleCategory = (categoryId: string) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((c) => c !== categoryId)
        : [...prev, categoryId]
    );
  };

  const toggleBrand = (brandId: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brandId)
        ? prev.filter((b) => b !== brandId)
        : [...prev, brandId]
    );
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesPrice =
      product.price >= priceRange[0] && product.price <= priceRange[1];
    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.category);
    const matchesBrand =
      selectedBrands.length === 0 || selectedBrands.includes(product.brand);

    return matchesSearch && matchesPrice && matchesCategory && matchesBrand;
  });

  return (
    <div>
        <h1 className="text-4xl font-bold mb-8">Каталог товаров</h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <aside className="lg:col-span-1 space-y-6">
            <Card>
              <CardContent className="p-6 space-y-6">
                <div>
                  <h3 className="font-semibold mb-4">Поиск</h3>
                  <Input
                    placeholder="Найти товар..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                <div>
                  <h3 className="font-semibold mb-4">Цена</h3>
                  <Slider
                    min={0}
                    max={100000}
                    step={1000}
                    value={priceRange}
                    onValueChange={setPriceRange}
                    className="mb-4"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>{priceRange[0].toLocaleString()} ₽</span>
                    <span>{priceRange[1].toLocaleString()} ₽</span>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-4">Категории</h3>
                  <div className="space-y-3">
                    {categories.map((category) => (
                      <div key={category.id} className="flex items-center space-x-2">
                        <Checkbox
                          id={category.id}
                          checked={selectedCategories.includes(category.id)}
                          onCheckedChange={() => toggleCategory(category.id)}
                        />
                        <Label
                          htmlFor={category.id}
                          className="text-sm cursor-pointer"
                        >
                          {category.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-4">Бренды</h3>
                  <div className="space-y-3">
                    {brands.map((brand) => (
                      <div key={brand.id} className="flex items-center space-x-2">
                        <Checkbox
                          id={brand.id}
                          checked={selectedBrands.includes(brand.id)}
                          onCheckedChange={() => toggleBrand(brand.id)}
                        />
                        <Label htmlFor={brand.id} className="text-sm cursor-pointer">
                          {brand.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => {
                    setSearchQuery("");
                    setPriceRange([0, 100000]);
                    setSelectedCategories([]);
                    setSelectedBrands([]);
                  }}
                >
                  Сбросить фильтры
                </Button>
              </CardContent>
            </Card>
          </aside>

          <div className="lg:col-span-3">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-muted-foreground">
                Найдено товаров: {filteredProducts.length}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <Card
                  key={product.id}
                  className="group hover:shadow-xl transition-all overflow-hidden"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    {!product.inStock && (
                      <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                        <span className="text-white font-semibold">Нет в наличии</span>
                      </div>
                    )}
                    <div className="absolute top-2 right-2">
                      <Button size="icon" variant="secondary" className="rounded-full">
                        <Icon name="Heart" className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <p className="text-xs text-muted-foreground mb-1">
                      {product.brand}
                    </p>
                    <h3 className="font-semibold mb-2">{product.name}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-primary">
                        {product.price.toLocaleString()} ₽
                      </span>
                      <Button size="sm" disabled={!product.inStock}>
                        <Icon name="ShoppingCart" className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <Icon name="Search" className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-xl font-semibold mb-2">Товары не найдены</h3>
                <p className="text-muted-foreground">
                  Попробуйте изменить параметры фильтрации
                </p>
              </div>
            )}
          </div>
        </div>
    </div>
  );
};

export default Catalog;