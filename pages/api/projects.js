export default function handler(req, res) {
  // Get data submitted in request's body.
  const body = req.body;
  // Found the name.
  // Sends a HTTP success code
  res.status(200).json([
    {
      title: 'Countries',
      image: '/image@2x.png',
      description: 'Создание сайта с краткой информацией о каждой стране',
      repository: 'https://github.com/A14X4Y',
      site: '',
    },
    {
      title: 'Pics to words',
      image: '/projectimage@2x.png',
      description: 'Игра на запомниние слов и картинок на иностранном языке',
      repository: '',
      site: '',
    },
    {
      title: 'Jobs listing',
      image: '/projectimage1@2x.png',
      description: 'Сайт поиска сотрудников с фильтрацией скиллов',
      repository: '',
      site: '',
    },
  ]);
}

