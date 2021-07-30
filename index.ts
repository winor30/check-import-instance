const main = async () => {
  const {parent1} = require('./parents/parent1')
  parent1()
  await new Promise(resolve => setTimeout(resolve, 3000))
  const {parent2} = require('./parents/parent2')
  parent2()
}

main().then().catch()
