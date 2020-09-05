import faker from 'faker'

export default (req, res) => {
  const chats = []

  for (let i = 0; i < 20; i++) {
    chats.push({
      profilePic: 'https://picsum.photos/200/200',
      name: faker.name.firstName(),
      text: faker.lorem.words(),
      date: faker.date.past()
    })
  }
  res.statusCode = 200
  res.json({
    chats
  })
}
