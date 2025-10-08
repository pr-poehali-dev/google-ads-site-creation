import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    budget: '50000'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: '', email: '', phone: '', message: '', budget: '50000' });
  };

  const services = [
    {
      icon: "Target",
      title: "Настройка Google Ads",
      description: "Профессиональная настройка рекламных кампаний с максимальной конверсией"
    },
    {
      icon: "TrendingUp",
      title: "Оптимизация кампаний",
      description: "Постоянный анализ и улучшение показателей для снижения стоимости лида"
    },
    {
      icon: "BarChart3",
      title: "Аналитика и отчетность",
      description: "Подробные отчеты о результатах с рекомендациями по улучшению"
    },
    {
      icon: "Search",
      title: "Аудит рекламы",
      description: "Глубокий анализ текущих кампаний и поиск точек роста"
    },
    {
      icon: "Zap",
      title: "A/B тестирование",
      description: "Тестирование объявлений и посадочных страниц для максимальной эффективности"
    },
    {
      icon: "Users",
      title: "Ремаркетинг",
      description: "Возврат заинтересованных пользователей и увеличение продаж"
    }
  ];

  const cases = [
    {
      client: "Интернет-магазин электроники",
      result: "Рост продаж на 340%",
      metric: "ROI 520%",
      description: "За 3 месяца снизили стоимость заказа на 45% и увеличили конверсию в 2.5 раза"
    },
    {
      client: "Сеть стоматологических клиник",
      result: "Лидов +280%",
      metric: "CPA -60%",
      description: "Настроили таргетинг по районам, получили стабильный поток качественных заявок"
    },
    {
      client: "B2B платформа для строителей",
      result: "Заявки +190%",
      metric: "Конверсия 12%",
      description: "Запустили поисковую рекламу с узким таргетингом на ЛПР компаний"
    }
  ];

  const reviews = [
    {
      name: "Алексей Морозов",
      company: "ООО \"ТехноСнаб\"",
      text: "Работаем с агентством уже год. Результаты превзошли все ожидания - окупаемость рекламы выросла в 3 раза!",
      rating: 5
    },
    {
      name: "Мария Соколова",
      company: "Стоматология \"Смайл\"",
      text: "Профессиональный подход, прозрачная отчетность. Поток пациентов стабильно растет каждый месяц.",
      rating: 5
    },
    {
      name: "Дмитрий Волков",
      company: "Интернет-магазин \"Электро\"",
      text: "Отличная команда! Помогли с нуля запустить рекламу и быстро вышли на прибыльные показатели.",
      rating: 5
    }
  ];

  const team = [
    { name: "Сергей Иванов", role: "Руководитель отдела", experience: "8 лет в Google Ads" },
    { name: "Анна Петрова", role: "Специалист по аналитике", experience: "6 лет в digital" },
    { name: "Михаил Сидоров", role: "PPC-специалист", experience: "5 лет в контекстной рекламе" }
  ];

  return (
    <div className="min-h-screen">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Target" className="text-primary" size={32} />
              <h1 className="text-2xl font-bold">ADS Agency</h1>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
              <a href="#cases" className="hover:text-primary transition-colors">Кейсы</a>
              <a href="#reviews" className="hover:text-primary transition-colors">Отзывы</a>
              <a href="#team" className="hover:text-primary transition-colors">Команда</a>
              <a href="#blog" className="hover:text-primary transition-colors">Блог</a>
              <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
            </nav>
            <div className="flex items-center gap-3">
              <a href="tel:+79991234567" className="hidden sm:flex items-center gap-2 text-primary font-semibold hover:opacity-80 transition-opacity">
                <Icon name="Phone" size={20} />
                +7 (999) 123-45-67
              </a>
              <Button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Консультация
              </Button>
            </div>
          </div>
        </div>
      </header>

      <section className="bg-gradient-to-br from-primary/5 via-secondary/5 to-background py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Увеличим продажи с помощью Google Ads
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in">
              Профессиональная настройка контекстной рекламы с гарантией результата
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Button size="lg" className="text-lg px-8" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                <Icon name="Rocket" size={20} className="mr-2" />
                Запустить рекламу
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8" onClick={() => document.getElementById('cases')?.scrollIntoView({ behavior: 'smooth' })}>
                Смотреть кейсы
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">340%</div>
                <div className="text-muted-foreground">Средний рост продаж</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary mb-2">-60%</div>
                <div className="text-muted-foreground">Снижение стоимости лида</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">150+</div>
                <div className="text-muted-foreground">Успешных проектов</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Наши услуги</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Полный спектр услуг по контекстной рекламе для вашего бизнеса
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow hover-scale">
                <CardContent className="p-6">
                  <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} className="text-primary" size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="cases" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Кейсы и результаты</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Реальные результаты наших клиентов
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cases.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="bg-secondary/10 px-3 py-1 rounded-full">
                      <span className="text-secondary font-semibold text-sm">{item.metric}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.client}</h3>
                  <div className="text-2xl font-bold text-primary mb-3">{item.result}</div>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Отзывы клиентов</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Что говорят о нас наши партнеры
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-yellow-500 fill-yellow-500" size={20} />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">{review.text}</p>
                  <div className="border-t pt-4">
                    <div className="font-semibold">{review.name}</div>
                    <div className="text-sm text-muted-foreground">{review.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Наша команда</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Профессионалы с многолетним опытом в контекстной рекламе
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Icon name="User" className="text-primary" size={40} />
                  </div>
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <div className="text-primary font-semibold mb-2">{member.role}</div>
                  <div className="text-sm text-muted-foreground">{member.experience}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="blog" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Блог</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Полезные материалы о контекстной рекламе
            </p>
          </div>
          <Accordion type="single" collapsible className="max-w-3xl mx-auto">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-semibold">
                Как снизить стоимость клика в Google Ads?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Используйте точное соответствие ключевых слов, улучшайте показатель качества объявлений, тестируйте различные варианты текстов и следите за релевантностью посадочных страниц.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-semibold">
                Какой бюджет нужен для старта?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Рекомендуем начинать от 50 000 руб/мес для тестирования гипотез. Это позволит собрать достаточно данных для оптимизации кампаний и выхода на стабильные результаты.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-semibold">
                Сколько времени занимает настройка?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Полная настройка занимает 3-5 рабочих дней. Это включает анализ ниши, подбор ключевых слов, создание объявлений, настройку конверсий и запуск тестовых кампаний.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Оставьте заявку</h2>
              <p className="text-lg text-muted-foreground">
                Получите бесплатную консультацию и расчет стоимости
              </p>
            </div>
            
            <Card>
              <CardContent className="p-8">
                <Tabs defaultValue="form" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-8">
                    <TabsTrigger value="form">Быстрая заявка</TabsTrigger>
                    <TabsTrigger value="calculator">Калькулятор</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="form">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium mb-2">Ваше имя</label>
                          <Input
                            required
                            placeholder="Иван Иванов"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Email</label>
                          <Input
                            required
                            type="email"
                            placeholder="email@example.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Телефон</label>
                        <Input
                          required
                          type="tel"
                          placeholder="+7 (999) 123-45-67"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Сообщение</label>
                        <Textarea
                          placeholder="Расскажите о вашем проекте..."
                          rows={4}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        />
                      </div>
                      <Button type="submit" size="lg" className="w-full">
                        Отправить заявку
                      </Button>
                    </form>
                  </TabsContent>
                  
                  <TabsContent value="calculator">
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">Планируемый бюджет (руб/мес)</label>
                        <Input
                          type="number"
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          min="10000"
                          step="10000"
                        />
                      </div>
                      <div className="bg-muted/50 p-6 rounded-lg space-y-3">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Бюджет на рекламу:</span>
                          <span className="font-semibold">{Number(formData.budget).toLocaleString()} ₽</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Стоимость настройки:</span>
                          <span className="font-semibold">{Math.round(Number(formData.budget) * 0.2).toLocaleString()} ₽</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Ведение (месяц):</span>
                          <span className="font-semibold">{Math.round(Number(formData.budget) * 0.15).toLocaleString()} ₽</span>
                        </div>
                        <div className="border-t pt-3 mt-3">
                          <div className="flex justify-between text-lg">
                            <span className="font-bold">Итого в месяц:</span>
                            <span className="font-bold text-primary">{Math.round(Number(formData.budget) * 1.15).toLocaleString()} ₽</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground text-center">
                        Это предварительный расчет. Точная стоимость определяется после анализа проекта.
                      </p>
                      <Button size="lg" className="w-full" onClick={() => document.querySelector('[value="form"]')?.dispatchEvent(new MouseEvent('click', { bubbles: true }))}>
                        Оформить заявку
                      </Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            <div className="mt-12 text-center">
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                <a href="https://wa.me/79991234567" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-lg hover:opacity-90 transition-opacity">
                  <Icon name="MessageCircle" size={20} />
                  WhatsApp
                </a>
                <a href="https://t.me/youragency" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-[#0088cc] text-white rounded-lg hover:opacity-90 transition-opacity">
                  <Icon name="Send" size={20} />
                  Telegram
                </a>
              </div>
              <div className="text-muted-foreground space-y-2">
                <div className="flex items-center justify-center gap-2">
                  <Icon name="Mail" size={18} />
                  <a href="mailto:info@adsagency.ru" className="hover:text-primary">info@adsagency.ru</a>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Icon name="MapPin" size={18} />
                  <span>г. Москва, ул. Примерная, д. 1</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-card py-12 border-t">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Target" className="text-primary" size={28} />
                <span className="text-xl font-bold">ADS Agency</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Профессиональное агентство по настройке рекламы в Google Ads
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#services" className="hover:text-primary">Настройка Google Ads</a></li>
                <li><a href="#services" className="hover:text-primary">Оптимизация кампаний</a></li>
                <li><a href="#services" className="hover:text-primary">Аналитика</a></li>
                <li><a href="#services" className="hover:text-primary">Аудит рекламы</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#team" className="hover:text-primary">О нас</a></li>
                <li><a href="#cases" className="hover:text-primary">Кейсы</a></li>
                <li><a href="#reviews" className="hover:text-primary">Отзывы</a></li>
                <li><a href="#blog" className="hover:text-primary">Блог</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>+7 (999) 123-45-67</li>
                <li>info@adsagency.ru</li>
                <li>г. Москва</li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>© 2024 ADS Agency. Все права защищены. | <a href="#" className="hover:text-primary">Политика конфиденциальности</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
