const express = require('express');
const app = express();
const port = 3000;


app.use(express.static(__dirname+'/public'));
app.set('view engine', 'ejs');

function year(){
  let d=new Date();
  let yearDate = d.getFullYear();
  console.log(yearDate);
  return yearDate;
}
let json=`<script type="application/ld+json">
{
  "@context" : "http://schema.org",
  "@type" : "Article",
  "name" : "Web developer",
  "headline": "web developer",
  "author" : {
    "@type" : "Person",
    "name" : "Amir Navrutdinov",
    "alternateName": ["Amir Shikarno", "Амир Наврутдинов","Amir SuperCoder","ChikChicly Spacehands ForsmazHorowich"],
    "url" : "https://qucu.ru/resume/Amir.html"
  },
  "datePublished" : "2025-06-09T14:07:37+07:00",
  "dateModified":"2025-06-09T16:07:37+07:00",
  "image" : "https://chikchicly.qucu.ru/nodejs.svg",
  "articleSection" : "web developer",
  "articleBody" : "Супер быстрый сайт на современных технологиях с SEO оптимизацией и продвижением в контекстной рекламе.",
  "url" : "https://chikchicly.qucu.ru",
  "publisher" : {
    "@type" : "Organization",
    "name" : "web workshop named after Baron Saytoverstauzen",
    "logo": {
        "@type": "ImageObject",
        "url": "https://qucu.ru/images/logo.png"
      }
  }
}
</script>`;
app.use('/services', (req, res) => {
  res.render('page',{
    title: "Freelancer",
    description : "Заказать лендинг пейдж по макету с SEO оптимизацией и продвижением.",
    name: "Services",
    article : 'Адаптивный лендинг пейдж по макету из фигмы с SEO оптимизацией и продвижением в контекстной рекламе.',
    year : year(),
    json: json
  })
});
app.use('/projects', (req, res) => {
  res.render('page',{
    title: "What I've done",
    description : "Идеальный хостинг это свой собственный домашний сервер, потому что это дешевле чем платить в мАаскву!",
    name: "Projects",
    article : 'Запустить супер шикарный сервер из подручных средств, а это на старом компьютере с установленной debain server, фаерволом, эсесейч, нодой на NGINX с проброской необходимых портов на роутере, а это: 80, 443, 22.',
    year : year(),
    json: json
  })
});
app.use('/about', (req, res) => {
  res.render('page',{
    title: "My beginnings",
    description : "Пишу сайты на великой троице веб технологий: HTML,CSS,JS(node.js);",
    name: "about",
    article : 'Первый язык программирования который я изучал в лахматом 2017 был PHP, потому что все трубили что php - это светлое будущеее, php - незаменим, php - крут, селен, невминяем. Но в реальной жизни JS - используется на всех сайтах, а с node.js он рабоатет еще и на вервере. Таким образом JS - основа любого хорошего сайта и все современные фреймворки: react, angular, vue - имеют под капотом node.js.',
    year : year(),
    json: json
  })
});
app.use('/page', (req, res) => {
  res.render('page',{
    title: "FullStack Web Developer",
    description : "description",
    name: "Amir Navrutdinov ",
    article : 'Профессиональный FullStack разработчик с опытом создания масштабируемых веб-приложений. Специализируюсь на разработке как frontend, так и backend решений. JS and NODE.JS',
    year : year(),
    json: json
  })
});

app.use('/', (req, res) => {
  res.render('page',{
    title: "FullStack Web Developer",
    description : "заказать лендинг пейдж, сайт визитку, одностраничник, по супер шикарной технологии, которая современная",
    name: "Amir Navrutdinov",
    article : 'Профессиональный FullStack разработчик с опытом создания масштабируемых веб-приложений. Специализируюсь на разработке как frontend, так и backend решений. JS and NODE.JS',
    year : year(),
    json: json
  })
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});