export default function (section) {
  const routesObj = {
    global: [
      {
        path: '/home',
        name: 'home',
        component: require('../components/Home')
      },
      {
        path: '/yixuan',
        name: 'yixuan',
        component: require('../components/Yixuan')
      }
    ]
  }

  return routesObj[section]
}
