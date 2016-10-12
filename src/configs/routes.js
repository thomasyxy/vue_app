export default function (section) {
  const routesObj = {
    global: [
      {
        path: '/home',
        component: require('../components/Home')
      },
      {
        path: '/yixuan',
        component: require('../components/Yixuan')
      }
    ]
  }

  return routesObj[section]
}
