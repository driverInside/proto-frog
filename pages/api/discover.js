import faker from 'faker'

export default (req, res) => {
  const discover = {
    main: [
      {
        pic: 'https://picsum.photos/400/400?foo=1',
        user: {
          pic: 'https://picsum.photos/200/200?foo=2',
          name: faker.name.firstName(),
          userName: faker.internet.userName()
        }
      },
      {
        pic: 'https://picsum.photos/400/400?foo=3',
        user: {
          pic: 'https://picsum.photos/200/200?foo=4',
          name: faker.name.firstName(),
          userName: faker.internet.userName()
        }
      },
      {
        pic: 'https://picsum.photos/400/400?foo=5',
        user: {
          pic: 'https://picsum.photos/200/200?foo=6',
          name: faker.name.firstName(),
          userName: faker.internet.userName()
        }
      },
      {
        pic: 'https://picsum.photos/400/400?foo=7',
        user: {
          pic: 'https://picsum.photos/200/200?foo=8',
          name: faker.name.firstName(),
          userName: faker.internet.userName()
        }
      },
      {
        pic: 'https://picsum.photos/400/400?foo=9',
        user: {
          pic: 'https://picsum.photos/200/200?foo=i',
          name: faker.name.firstName(),
          userName: faker.internet.userName()
        }
      },
      {
        pic: 'https://picsum.photos/400/400?foo=11',
        user: {
          pic: 'https://picsum.photos/200/200?foo=22',
          name: faker.name.firstName(),
          userName: faker.internet.userName()
        }
      }
    ],
    pics: []
  }

  for (let i = 0; i < 20; i++) {
    discover.pics.push({
      url: `https://picsum.photos/300/300?foo=${i}`
    })
  }

  res.statusCode = 200
  res.json({
    discover
  })
}
