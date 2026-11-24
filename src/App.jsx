import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-pastelblue text-gray-800 font-sans">
      {/* Шапка сайта */}
      <header className="flex justify-between items-center p-6 bg-white shadow-sm">
        <div className="text-2xl font-extrabold text-deepblue flex items-center gap-2">
          Polina <span className="text-accent">| Languages</span>
        </div>
        <div className="flex gap-4">
          <button className="px-6 py-2 rounded-full text-deepblue font-bold hover:bg-pastelblue transition">
            Войти
          </button>
          <button className="px-6 py-2 rounded-full bg-deepblue text-white font-bold hover:bg-blue-800 transition shadow-lg">
            Зарегистрироваться
          </button>
        </div>
      </header>

      {/* Главный экран */}
      <main className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* Текстовая часть */}
          <div className="md:w-1/2 space-y-6">
            <div className="flex gap-4 text-3xl">
              <span title="Английский язык">🇬🇧</span>
              <span title="Японский язык">🇯🇵</span>
              <span className="text-2xl text-gray-400">🌸</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-extrabold text-deepblue leading-tight">
              Hello! Меня зовут <span className="text-blue-500">Полина</span>
            </h1>
            <h2 className="text-xl text-gray-600 font-semibold">
              Преподаватель английского и японского языков
            </h2>
            
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-blue-100 text-gray-700 leading-relaxed space-y-4">
              <p>
                Всю свою жизнь я занималась изучением языков и до сих пор продолжаю изучение. 
                Сейчас я знаю уже 4 языка, но не планирую на этом останавливаться.
              </p>
              <p>
                Уже почти год преподаю английский язык для детей, могу найти подход к каждому ребенку 
                и помочь ему полюбить язык.
              </p>
              <p className="font-bold text-deepblue italic">
                Буду рада познакомиться с Вами и помочь говорить на языке, также как и я сама.
              </p>
            </div>
          </div>

          {/* Фотографии */}
          <div className="md:w-1/2 flex flex-col gap-6 relative">
            {/* Декоративные элементы */}
            <div className="absolute -top-10 -right-10 text-8xl opacity-20 select-none pointer-events-none">🌸</div>
            
            {/* Профессиональное фото */}
            <div className="bg-gray-200 w-full h-64 rounded-3xl shadow-md overflow-hidden flex items-center justify-center border-4 border-white relative z-10">
              <span className="text-gray-500 font-semibold">[Здесь будет профессиональное фото]</span>
            </div>
            
            {/* Фото из Японии */}
            <div className="bg-gray-300 w-3/4 h-56 rounded-3xl shadow-md overflow-hidden flex items-center justify-center border-4 border-white ml-auto -mt-12 relative z-20">
              <span className="text-gray-600 font-semibold">[Здесь будет фото из Японии]</span>
            </div>
          </div>
          
        </div>

        {/* Блок "Почему я" (кратко) */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
             <div className="text-3xl mb-4">🗣️</div>
             <h3 className="font-bold text-deepblue mb-2">Разговорный английский</h3>
             <p className="text-sm text-gray-600">Помогу преодолеть языковой барьер и начать говорить уверенно.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
             <div className="text-3xl mb-4">🎮</div>
             <h3 className="font-bold text-deepblue mb-2">Интерактивные уроки</h3>
             <p className="text-sm text-gray-600">Учимся играя. Нахожу подход к каждому ребенку.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
             <div className="text-3xl mb-4">📚</div>
             <h3 className="font-bold text-deepblue mb-2">Современные материалы</h3>
             <p className="text-sm text-gray-600">Использую актуальные пособия и интерактивные платформы.</p>
          </div>
        </div>
      </main>

      <footer className="text-center py-8 text-gray-500 text-sm">
        © 2024 Полина. Все права защищены.
      </footer>
    </div>
  );
}

export default App;
