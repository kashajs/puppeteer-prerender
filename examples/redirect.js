/* eslint no-console: "off" */

const Prerenderer = require('../')

async function main() {
  const prerender = new Prerenderer({
    debug: true,
    puppeteerLaunchOptions: {
      headless: false
    }
  })

  try {
    const result = await prerender.render('http://localhost:8080/')
    console.log(result)

    const result2 = await prerender.render('http://localhost:8080/', {
      followRedirect: true
    })
    console.log(result2)
  } catch (e) {
    console.error(e)
  }

  await prerender.close()
}

main()
