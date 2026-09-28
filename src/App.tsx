import { useState } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3000);
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🇫🇷</span>
            <span className="text-xl font-bold text-gray-800">Арина</span>
            <span className="text-sm text-gray-500 hidden sm:inline">| Визовый консультант</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-gray-600 hover:text-blue-700 transition-colors">Обо мне</a>
            <a href="#services" className="text-gray-600 hover:text-blue-700 transition-colors">Услуги</a>
            <a href="#process" className="text-gray-600 hover:text-blue-700 transition-colors">Как это работает</a>
            <a href="#reviews" className="text-gray-600 hover:text-blue-700 transition-colors">Отзывы</a>
            <a href="#faq" className="text-gray-600 hover:text-blue-700 transition-colors">FAQ</a>
            <a href="#contact" className="bg-blue-700 text-white px-5 py-2 rounded-full hover:bg-blue-800 transition-colors">Записаться</a>
          </div>
          <button className="md:hidden text-gray-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t px-4 py-4 space-y-3">
            <a href="#about" className="block text-gray-600 hover:text-blue-700" onClick={() => setIsMenuOpen(false)}>Обо мне</a>
            <a href="#services" className="block text-gray-600 hover:text-blue-700" onClick={() => setIsMenuOpen(false)}>Услуги</a>
            <a href="#process" className="block text-gray-600 hover:text-blue-700" onClick={() => setIsMenuOpen(false)}>Как это работает</a>
            <a href="#reviews" className="block text-gray-600 hover:text-blue-700" onClick={() => setIsMenuOpen(false)}>Отзывы</a>
            <a href="#faq" className="block text-gray-600 hover:text-blue-700" onClick={() => setIsMenuOpen(false)}>FAQ</a>
            <a href="#contact" className="block bg-blue-700 text-white px-5 py-2 rounded-full text-center hover:bg-blue-800" onClick={() => setIsMenuOpen(false)}>Записаться</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-red-50"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-red-100 rounded-full opacity-20 blur-3xl"></div>
        
        <div className="relative max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-sm text-blue-700">Принимаю заявки на консультации</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Шенгенская виза<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500">во Францию</span><br />
              без стресса и нервов
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
              Помогу собрать документы, заполнить анкету и пройти все этапы оформления визы. 
              Съела на шенгене не одну собаку — более 500 успешных случаев за 4 года работы.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#contact" className="bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-blue-800 transition-all hover:shadow-lg hover:shadow-blue-200">
                Записаться на консультацию
              </a>
              <a href="#services" className="border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-full text-lg font-medium hover:border-blue-300 hover:text-blue-700 transition-all">
                Узнать подробнее
              </a>
            </div>
            <div className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-2xl p-4 mb-8 max-w-lg">
              <p className="text-gray-700 text-sm">
                <span className="font-semibold">💡 Могу объяснить за любой шенген и визу</span> — от первого заграничного паспорта до мультивизы на 5 лет. Спрашивайте что угодно!
              </p>
            </div>
            <div className="flex items-center gap-8 mt-10 justify-center md:justify-start">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-500">виз одобрено</div>
              </div>
              <div className="w-px h-10 bg-gray-200"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">98%</div>
                <div className="text-sm text-gray-500">успешных случаев</div>
              </div>
              <div className="w-px h-10 bg-gray-200"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">4 года</div>
                <div className="text-sm text-gray-500">опыта</div>
              </div>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl rotate-6 opacity-20"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl -rotate-3"></div>
              <div className="relative bg-white rounded-3xl shadow-xl p-8 h-full flex flex-col items-center justify-center">
                <div className="text-6xl mb-4">🏛️</div>
                <div className="text-center">
                  <p className="text-gray-800 font-semibold text-lg">Ним ждёт вас!</p>
                  <p className="text-gray-500 text-sm mt-2">Древний Рим на юге Франции</p>
                </div>
                <div className="mt-6 flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Средний срок — 5-7 дней</span>
                </div>
                <div className="mt-3 text-xs text-gray-400 italic">* Париж тоже, конечно 🗼</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl mx-auto flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-7xl mb-2">👩‍🎨</div>
                    <p className="text-blue-700 font-semibold">Арина, 26</p>
                    <p className="text-blue-500 text-sm">Визовый консультант</p>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 bg-white shadow-lg rounded-2xl px-4 py-3 hidden md:block">
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
                    <span className="text-sm text-gray-600">5.0</span>
                  </div>
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white shadow-lg rounded-2xl px-4 py-3 hidden md:block">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🏓</span>
                    <span className="text-sm text-gray-600">Настольный теннис</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <span className="text-blue-700 font-medium text-sm uppercase tracking-wider">Обо мне</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-6">
                Привет! Я Арина — ваш проводник в мир французских виз
              </h2>
              <p className="text-gray-600 text-lg mb-4">
                Мне 26, и я уже 4 года помогаю путешественникам получать шенгенские визы во Францию. 
                За это время я съела на этом не одну собаку — знаю все нюансы, типичные ошибки и способы их избежать.
              </p>
              <p className="text-gray-600 text-lg mb-4">
                Обожаю французский город <span className="font-semibold text-blue-700">Ним</span> — этот древний римский город 
                с его амфитеатром и атмосферой юга Франции стал для меня вторым домом. 
                Именно там я поняла, что хочу помогать другим открывать для себя Францию.
              </p>
              <p className="text-gray-600 text-lg mb-6">
                Когда не занимаюсь визами, рисую картины (изобразительное искусство — моя страсть!) 
                и играю в настольный теннис 🏓. А ещё могу уработать вертушечкой на раз-два, 
                если клиент будет неласков и невежлив 😄
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600">🎨</span>
                  </div>
                  <span className="text-gray-700">Художница</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600">🏓</span>
                  </div>
                  <span className="text-gray-700">Теннисистка</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600">🏛️</span>
                  </div>
                  <span className="text-gray-700">Знаю Ним как свои 5 пальцев</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600">🥊</span>
                  </div>
                  <span className="text-gray-700">Мастер вертушечек</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-blue-700 font-medium text-sm uppercase tracking-wider">Услуги</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
              Выберите подходящий формат
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Каждый пакет включает персональную работу со мной. Никаких шаблонов — только индивидуальный подход к вашей ситуации.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Basic */}
            <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-2xl">💬</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Консультация</h3>
              <p className="text-gray-500 mb-4">Разовая онлайн-встреча</p>
              <div className="text-3xl font-bold text-gray-900 mb-6">
                3 500 <span className="text-lg font-normal text-gray-500">₽</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-gray-600">
                  <span className="text-green-500">✓</span> Онлайн-встреча 45 минут
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <span className="text-green-500">✓</span> Разбор вашей ситуации
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <span className="text-green-500">✓</span> Чек-лист документов
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <span className="text-green-500">✓</span> Рекомендации по заполнению
                </li>
                <li className="flex items-center gap-3 text-gray-400">
                  <span>—</span> Проверка документов
                </li>
                <li className="flex items-center gap-3 text-gray-400">
                  <span>—</span> Запись в визовый центр
                </li>
              </ul>
              <a href="#contact" className="block text-center border-2 border-blue-700 text-blue-700 px-6 py-3 rounded-full font-medium hover:bg-blue-50 transition-colors">
                Выбрать
              </a>
            </div>

            {/* Popular */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-blue-700 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-700 text-white px-4 py-1 rounded-full text-sm font-medium">
                Популярный
              </div>
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-2xl">📋</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Полное сопровождение</h3>
              <p className="text-gray-500 mb-4">От А до Я под ключ</p>
              <div className="text-3xl font-bold text-gray-900 mb-6">
                8 900 <span className="text-lg font-normal text-gray-500">₽</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-gray-600">
                  <span className="text-green-500">✓</span> Всё из «Консультации»
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <span className="text-green-500">✓</span> Заполнение анкеты за вас
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <span className="text-green-500">✓</span> Проверка всех документов
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <span className="text-green-500">✓</span> Запись в визовый центр
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <span className="text-green-500">✓</span> Поддержка в чате 24/7
                </li>
                <li className="flex items-center gap-3 text-gray-400">
                  <span>—</span> Помощь при отказе
                </li>
              </ul>
              <a href="#contact" className="block text-center bg-blue-700 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-800 transition-colors">
                Выбрать
              </a>
            </div>

            {/* Premium */}
            <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-2xl">👑</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">VIP-пакет</h3>
              <p className="text-gray-500 mb-4">Максимальная поддержка</p>
              <div className="text-3xl font-bold text-gray-900 mb-6">
                14 900 <span className="text-lg font-normal text-gray-500">₽</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-gray-600">
                  <span className="text-green-500">✓</span> Всё из «Сопровождения»
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <span className="text-green-500">✓</span> Помощь при отказе (апелляция)
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <span className="text-green-500">✓</span> Приоритетная запись
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <span className="text-green-500">✓</span> Подготовка cover letter
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <span className="text-green-500">✓</span> Страхование поездки
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <span className="text-green-500">✓</span> Личный курьер документов
                </li>
              </ul>
              <a href="#contact" className="block text-center border-2 border-blue-700 text-blue-700 px-6 py-3 rounded-full font-medium hover:bg-blue-50 transition-colors">
                Выбрать
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-blue-700 font-medium text-sm uppercase tracking-wider">Процесс</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
              Как проходит работа
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Простой и понятный процесс — от первого сообщения до получения визы
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-700 text-white rounded-2xl flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
              <h3 className="font-bold text-gray-900 mb-2">Заявка</h3>
              <p className="text-gray-600 text-sm">Вы оставляете заявку, и я связываюсь с вами в течение 2 часов</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-700 text-white rounded-2xl flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
              <h3 className="font-bold text-gray-900 mb-2">Анализ</h3>
              <p className="text-gray-600 text-sm">Разбираем вашу ситуацию, определяем стратегию и список документов</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-700 text-white rounded-2xl flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
              <h3 className="font-bold text-gray-900 mb-2">Подготовка</h3>
              <p className="text-gray-600 text-sm">Собираем и проверяем документы, заполняем анкету, записываем на подачу</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-700 text-white rounded-2xl flex items-center justify-center text-xl font-bold mx-auto mb-4">4</div>
              <h3 className="font-bold text-gray-900 mb-2">Виза!</h3>
              <p className="text-gray-600 text-sm">Вы подаёте документы и получаете визу. Bon voyage! 🎉</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-blue-700 font-medium text-sm uppercase tracking-wider">Отзывы</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
              Что говорят клиенты
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => <span key={i} className="text-yellow-400">★</span>)}
              </div>
              <p className="text-gray-600 mb-6">
                «Арина — огонь! 🔥 Собрала все документы за 3 дня, заполнила анкету без единой ошибки. 
                Визу дали на 6 месяцев. А ещё рассказала кучу интересного про Ним — теперь тоже хочу туда!»
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold">М</div>
                <div>
                  <p className="font-medium text-gray-900">Мария К.</p>
                  <p className="text-sm text-gray-500">Туристическая виза, март 2024</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => <span key={i} className="text-yellow-400">★</span>)}
              </div>
              <p className="text-gray-600 mb-6">
                «До Арины уже получала отказ. Она разобралась в ситуации, помогла с апелляцией — и вуаля, виза в паспорте! 
                Кстати, я сначала написала ей немного грубо, но она всё равно помогла. Больше так не буду 😅»
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center text-pink-700 font-bold">А</div>
                <div>
                  <p className="font-medium text-gray-900">Анна С.</p>
                  <p className="text-sm text-gray-500">Повторная подача, январь 2024</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => <span key={i} className="text-yellow-400">★</span>)}
              </div>
              <p className="text-gray-600 mb-6">
                «Обращался всей семьёй — жена, двое детей. Арина учла все нюансы, подготовила идеальный пакет документов. 
                Визы получили за неделю. А ещё она нарисовала дочке картинку — талант!»
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-700 font-bold">Д</div>
                <div>
                  <p className="font-medium text-gray-900">Дмитрий Л.</p>
                  <p className="text-sm text-gray-500">Семейная виза, февраль 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-blue-700 font-medium text-sm uppercase tracking-wider">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
              Частые вопросы
            </h2>
          </div>

          <div className="space-y-4">
            <FAQItem 
              question="Сколько времени занимает оформление визы?"
              answer="Стандартный срок рассмотрения — 5-15 рабочих дней. Срочная виза оформляется за 3 рабочих дня. Я рекомендую подавать документы минимум за 3-4 недели до поездки."
            />
            <FAQItem 
              question="Что если мне откажут в визе?"
              answer="В моём VIP-пакете предусмотрена помощь при отказе — я помогу подготовить апелляцию. В пакете «Полное сопровождение» вероятность отказа минимальна (менее 2%), так как я тщательно проверяю все документы."
            />
            <FAQItem 
              question="Нужно ли мне приезжать к вам?"
              answer="Нет, вся работа проходит онлайн. Мы созваниваемся в Zoom/Telegram, обмениваемся документами через защищённые каналы. Это удобно и экономит ваше время."
            />
            <FAQItem 
              question="Какие документы нужны для визы?"
              answer="Базовый пакет: загранпаспорт, фото, справка с работы, выписка из банка, бронь отеля и билетов, страховка. На консультации я составлю индивидуальный список для вашей ситуации."
            />
            <FAQItem 
              question="Работаете ли вы с другими городами?"
              answer="Да, я работаю с клиентами из любого города России и стран СНГ. Вся коммуникация происходит онлайн, а документы можно отправить курьерской службой."
            />
            <FAQItem 
              question="Можно ли получить мультивизу?"
              answer="Да, при правильной подаче документов можно получить мультивизу на 1-5 лет. Я помогу подготовить пакет так, чтобы максимизировать шансы на длительную визу."
            />
            <FAQItem 
              question="А правда, что вы можете уработать вертушечкой?"
              answer="Абсолютная правда! 🥋 Но только если клиент будет неласков и невежлив. А с нормальными людьми я очень милая и добрая. Так что ведите себя хорошо, и всё будет отлично! 😊"
            />
            <FAQItem 
              question="Почему именно Ним, а не Париж?"
              answer="Париж прекрасен, но Ним — это моя любовь! Древнеримский амфитеатр, который до сих пор используется для корриды и концертов, уютные улочки, proximity к морю и Провансу. Это настоящая жемчужина юга Франции, которую незаслуженно обходят туристы. Обязательно покажу вам этот город, если захотите!"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="flex-1">
              <span className="text-blue-700 font-medium text-sm uppercase tracking-wider">Контакты</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-6">
                Запишитесь на консультацию
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Оставьте заявку, и я свяжусь с вами в течение 2 часов. 
                Первая мини-консультация (10 минут) — бесплатно!
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center">
                    <span className="text-xl">📱</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Telegram / WhatsApp</p>
                    <p className="font-medium text-gray-900">@arina_visa_fr</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center">
                    <span className="text-xl">📧</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-medium text-gray-900">arina@visa-france.ru</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center">
                    <span className="text-xl">📸</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Instagram</p>
                    <p className="font-medium text-gray-900">@arina.visa.france</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 w-full max-w-md">
              {formSubmitted ? (
                <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Заявка отправлена!</h3>
                  <p className="text-gray-600">Я свяжусь с вами в течение 2 часов</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Оставить заявку</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Имя</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        placeholder="Ваше имя"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Телефон</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        placeholder="+7 (___) ___-__-__"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        placeholder="email@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Сообщение</label>
                      <textarea
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                        rows={3}
                        placeholder="Расскажите о вашей ситуации..."
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-blue-700 text-white py-4 rounded-xl font-medium text-lg hover:bg-blue-800 transition-colors hover:shadow-lg"
                    >
                      Отправить заявку
                    </button>
                    <p className="text-xs text-gray-400 text-center">
                      Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🇫🇷</span>
              <span className="text-xl font-bold">Арина</span>
              <span className="text-gray-400">| Визовый консультант</span>
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Telegram</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">WhatsApp</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Instagram</a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
            <p>© 2024 Арина — Консультации по визам во Францию. Все права защищены.</p>
            <p className="mt-2">Данный сайт не является официальным ресурсом визового центра Франции.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
      >
        <span className="font-medium text-gray-900 pr-4">{question}</span>
        <span className={`text-blue-700 text-xl transition-transform ${isOpen ? 'rotate-45' : ''}`}>+</span>
      </button>
      {isOpen && (
        <div className="px-6 pb-6 text-gray-600 border-t border-gray-100 pt-4">
          {answer}
        </div>
      )}
    </div>
  );
}

export default App;
