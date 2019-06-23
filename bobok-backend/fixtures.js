const mongoose = require('mongoose');
const nanoid = require('nanoid');
const config = require('./config');

const Information = require('./models/Information');
const Category = require('./models/Category');
const User = require('./models/User');

const run = async () => {
  await mongoose.connect(config.infoDb, config.mongoOptions);
  const connection = mongoose.connection;
  const collections = await connection.db.collections();

    for(let collection of collections){
        await collection.drop();
    }

    await User.create(
        {
            username: 'user@gmail.com',
            password: "123",
            role: 'user',
            token: nanoid()
        },
        {
            username: 'aidaraliuulu@gmail.com',
            password: "123",
            role: 'aidaraliuulu@gmail.com',
            token: nanoid()
        },
    );

    const category = await Category.create(
        {title: "Ооруканалар"},
        {title: "Бала-бакчалар"},
        {title: "Ресторандар"},
        {title: "Стоматологиялык клиникалар"},
        {title: "Бассейндер"},
        {title: "Мамлекеттик каттоо жайлары"},
        {title: "Супер маркеттер"},
    );

    await Information.create(
        {
            category: category[1]._id,
            name: "Монтессори-сад \"СемьЯ\"",
            address: 'г. Бишкек, ул.Узун-Булак 65, верхний мкр.Джал, Бишкек 720000',
            phone: '0704 153 777',
            image: "semya.png"
        },
        {
            category: category[1]._id,
            name: "Детский сад №53",
            address: 'г. Бишкек, Медина Алыбаева',
            phone: '0312 927 237',
            image: "garden53.jpg"
        },
        {
            category: category[1]._id,
            name: "Академия Роста - Джал",
            address: 'г. Бишкек, ул.Узун-Булак 65, верхний мкр.Джал, Бишкек 720000',
            phone: '0554 782 828',
            image: "academy.jpg"
        },
        {
            category: category[1]._id,
            name: "Детский Сад \"Зерек\"",
            address: 'г. Бишкек, ул. А. Бакаева',
            phone: '0312 883 902',
            image: "academy.jpg"
        },
        {
            category: category[0]._id,
            name: 'Национальный госпиталь',
            address: 'г. Бишкек',
            phone: '0312 621 014',
            image: "gos.jpg"
        },
        {
            category: category[1]._id,
            name: 'Поликлиника 312',
            address: 'г. Бишкек, 60 ул. Исанова',
            phone: '0312 312 554',
            image: "polic312.jpg"
        },
        {
            category: category[2]._id,
            name: 'Тюбетейка',
            address: 'г. Бишкек, 31 ул. Турусбекова',
            phone: '0312 317 979',
            image: "tubeika.jpg"
        },
        {
            category: category[2]._id,
            name: 'Банкетный зал "SALTANAT PALACE\'',
            address: 'г. Бишкек, 260 ул. Э. Матыева',
            phone: '0707 350 777',
            image: "saltanat.jpg"
        },
        {
            category: category[4]._id,
            name: 'Дельфин',
            address: 'г. Бишкек, 2 Молодой Гвардии',
            phone: '0779 344 194',
            image: "delfin.jpg"
        },
        {
            category: category[4]._id,
            name: 'Royal sport',
            address: 'г. Бишкек, 32 просп. Чуй',
            phone: '0312 689 489',
            image: "royalSport.jpg"
        },
        {
            category: category[6]._id,
            name: '7 дней',
            address: 'г. Бишкек, 28 просп. Манаса',
            phone: '0312 312 844',
            image: "7days.jpg"
        },

    );

    await connection.close();
};

run().catch(error => {
    console.log('Something went wrong', error);
});