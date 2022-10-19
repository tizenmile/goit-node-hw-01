# Отримуємо і виводимо весь список контактів у вигляді таблиці (console.table)

node index.js --action="list"
https://monosnap.com/file/aNsxvSuayEB5kY6VILZqbsVCjPd3Fr

# Отримуємо контакт по id

node index.js --action="get" --id=5
https://monosnap.com/file/CSoGxdsvK3qCAYK5DbPBIzQJy6VN72

# Додаємо контакт

node index.js --action="add" --name="Mango" --email="mango@gmail.com" --phone="322-22-22"
https://monosnap.com/file/Kw5NGrda7PeOWKvHiGHoL2KiUQGEQX

# Видаляємо контакт

node index.js --action="remove" --id=3
https://monosnap.com/file/OpPgl952EsqUvFF1PBb7iSNTsIvjzS
