import React, { useState, useEffect } from 'react';
import { auth } from './firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';

function App() {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true); // true - вход, false - регистрация
  const [error, setError] = useState('');
  const [showAuthModal, setShowAuthModal] = useState(false);

  // Проверяем, вошел ли пользователь
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleAuth = async (e) => {
    e.preventDefault();
    setError('');
    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
      }
      setShowAuthModal(false); // Закрываем окно после успеха
    } catch (err) {
      setError('Ошибка: ' + (err.code === 'auth/wrong-password' ? 'Неверный пароль' : err.code === 'auth/email-already-in-use' ? 'Этот email уже занят' : err.message));
    }
  };

  const handleLogout = () => {
    signOut(auth);
  };

  // ЕСЛИ ПОЛЬЗОВАТЕЛЬ ВОШЕЛ (Личный кабинет - пока заглушка)
  if (user) {
    return (
      <div className="min-h-screen bg-pastelblue flex flex-col items-center justify-center font-sans">
        <div className="bg-white p-10 rounded-3xl shadow-lg text-center max-w-md w-full">
          <h1 className="text-3xl font-extrabold text-deepblue mb-4">Личный кабинет</h1>
          <p className="text-gray-600 mb-8">Вы вошли как:<br/><span className="font-bold text-blue-500">{user.email}</span></p>
          <p className="text-sm text-gray-400 mb-8 italic">(Здесь скоро появится календарь и расписание)</p>
          <button onClick={handleLogout} className="px-6 py-2 rounded-full bg-red-100 text-red-600 font-bold hover:bg-red-200 transition">
            Выйти
          </button>
        </div>
      </div>
    );
  }

  // ЕСЛИ НЕ ВОШЕЛ (Лендинг + Модальное окно)
  return (
    <div className="min-h-screen bg-pastelblue text-gray-800 font-sans relative">
      <header className="flex justify-between items-center p-6 bg-white shadow-sm">
        <div className="text-2xl font-extrabold text-deepblue flex items-center gap-2">
          Polina <span className="text-accent">| Languages</span>
        </div>
        <div className="flex gap-4">
          <button onClick={() => { setIsLogin(true); setShowAuthModal(true); }} className="px-6 py-2 rounded-full text-deepblue font-bold hover:bg-pastelblue transition">
            Войти
          </button>
          <button onClick={() => { setIsLogin(false); setShowAuthModal(true); }} className="px-6 py-2 rounded-full bg-deepblue text-white font-bold hover:bg-blue-800 transition shadow-lg">
            Зарегистрироваться
          </button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 space-y-6">
            <div className="flex gap-4 text-3xl">
              <span title="Английский язык">🇬🇧</span>
              <span title="Японский язык">🇯🇵</span>
              <span className="text-2xl text-gray-400">🌸</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-deepblue leading-tight">
              Hello! Меня зовут <span className="text-blue-500">Полина</span>
            </h1>
            <h2 className="text-xl text-gray-600 font-semibold">Преподаватель английского и японского языков</h2>
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-blue-100 text-gray-700 leading-relaxed space-y-4">
              <p>Всю свою жизнь я занималась изучением языков и до сих пор продолжаю изучение. Сейчас я знаю уже 4 языка, но не планирую на этом останавливаться.</p>
              <p>Уже почти год преподаю английский язык для детей, могу найти подход к каждому ребенку и помочь ему полюбить язык.</p>
              <p className="font-bold text-deepblue italic">Буду рада познакомиться с Вами и помочь говорить на языке, также как и я сама.</p>
            </div>
          </div>
          <div className="md:w-1/2 flex flex-col gap-6 relative">
            <div className="absolute -top-10 -right-10 text-8xl opacity-20 select-none pointer-events-none">🌸</div>
            <div className="bg-gray-200 w-full h-64 rounded-3xl shadow-md overflow-hidden flex items-center justify-center border-4 border-white relative z-10">
              <span className="text-gray-500 font-semibold">[Здесь будет профессиональное фото]</span>
            </div>
            <div className="bg-gray-300 w-3/4 h-56 rounded-3xl shadow-md overflow-hidden flex items-center justify-center border-4 border-white ml-auto -mt-12 relative z-20">
              <span className="text-gray-600 font-semibold">[Здесь будет фото из Японии]</span>
            </div>
          </div>
        </div>
      </main>

      {/* Модальное окно входа/регистрации */}
      {showAuthModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-8 rounded-3xl shadow-2xl max-w-md w-full relative">
            <button onClick={() => setShowAuthModal(false)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 text-2xl font-bold">&times;</button>
            <h2 className="text-2xl font-bold text-deepblue mb-6 text-center">
              {isLogin ? 'Вход в систему' : 'Регистрация'}
            </h2>
            {error && <div className="bg-red-100 text-red-600 p-3 rounded-xl mb-4 text-sm">{error}</div>}
            <form onSubmit={handleAuth} className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-gray-600 mb-1">Email</label>
                <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-300" placeholder="your@email.com" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-600 mb-1">Пароль</label>
                <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-300" placeholder="••••••••" />
              </div>
              <button type="submit" className="w-full py-3 bg-deepblue text-white font-bold rounded-xl hover:bg-blue-800 transition mt-2">
                {isLogin ? 'Войти' : 'Создать аккаунт'}
              </button>
            </form>
            <div className="mt-4 text-center text-sm text-gray-500">
              {isLogin ? 'Нет аккаунта?' : 'Уже есть аккаунт?'}
              <button onClick={() => { setIsLogin(!isLogin); setError(''); }} className="ml-2 text-blue-500 font-bold hover:underline">
                {isLogin ? 'Зарегистрироваться' : 'Войти'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
