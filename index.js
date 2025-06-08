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

app.use('/services', (req, res) => {
  res.render('page',{
    title: "Freelancer",
    description : "description",
    name: "my beginnings",
    article : 'landing page at figma layout',
    year : year()
  })
});
app.use('/projects', (req, res) => {
  res.render('page',{
    title: "What I've done",
    description : "description",
    name: "my beginnings",
    article : 'oK services',
    year : year()
  })
});
app.use('/about', (req, res) => {
  res.render('page',{
    title: "My beginnings",
    description : "description",
    name: "about",
    article : 'oK services',
    year : year()
  })
});
app.use('/page', (req, res) => {
  res.render('page',{
    title: "FullStack Web Developer",
    description : "description",
    name: "Amir Navrutdinov",
    article : 'Профессиональный FullStack разработчик с опытом создания масштабируемых веб-приложений. Специализируюсь на разработке как frontend, так и backend решений. JS and NODE.JS',
    year : year()
  })
});

app.use('/', (req, res) => {
  res.render('page',{
    title: "FullStack Web Developer",
    description : "description",
    name: "Amir Navrutdinov",
    article : 'Профессиональный FullStack разработчик с опытом создания масштабируемых веб-приложений. Специализируюсь на разработке как frontend, так и backend решений. JS and NODE.JS',
    year : year()
  })
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});