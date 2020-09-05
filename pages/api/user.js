export default (req, res) => {
  res.statusCode = 200
  res.json({
    name: 'Jane Doe',
    firstName: 'Jane',
    location: 'San Francisco, CA',
    profilePic: 'https://picsum.photos/id/237/400/400',
    pics: [
      {
        url: 'https://picsum.photos/id/0/200/300'
      },
      {
        url: 'https://picsum.photos/id/1/500/500'
      },
      {
        url: 'https://picsum.photos/id/10/600/300'
      },
      {
        url: 'https://picsum.photos/id/100/400/300'
      },
      {
        url: 'https://picsum.photos/id/1001/800/500'
      },
      {
        url: 'https://picsum.photos/id/1004/500/300'
      },
      {
        url: 'https://picsum.photos/id/1002/300/300'
      },
      {
        url: 'https://picsum.photos/id/1/200/300'
      },
      {
        url: 'https://picsum.photos/id/1011/200/300'
      },
      {
        url: 'https://picsum.photos/id/1015/600/300'
      },
      {
        url: 'https://picsum.photos/id/1/200/300'
      }
    ]
  })
}
