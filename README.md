💸 WalletFlow App
Version: 1.0.0
API Standard: OpenAPI 3.1
License: Apache 2.0

WalletFlow App — це API-додаток для керування особистими фінансами. Ви можете реєструватися, входити, додавати транзакції, переглядати звіти та отримувати статистику по категоріях.

🌐 Server
https://moneydashboard-back.onrender.com

🔐 Authorization
Деякі запити вимагають авторизації через JWT токен. Використовуйте Bearer <token> у заголовку Authorization.

📁 Endpoints
🔄 Transactions
GET /api/transactions
Отримати всі транзакції користувача.

POST /api/transactions
Створити нову транзакцію.

PATCH /api/transactions/{transactionId}
Оновити транзакцію за ID.

DELETE /api/transactions/{transactionId}
Видалити транзакцію за ID.

🔑 Auth
POST /api/auth/register
Реєстрація нового користувача.

POST /api/auth/login
Авторизація користувача.

POST /api/auth/logout
Вихід користувача.

👤 Users
GET /api/users/current
Отримати інформацію про поточного користувача.

🗂️ Categories
GET /api/transaction-categories
Отримати список категорій транзакцій.

📊 Transactions Summary
GET /api/transactions-summary/categories
Отримати статистику витрат за категоріями.

GET /api/transactions-summary-by-period
Отримати підсумок доходів і витрат за період.
