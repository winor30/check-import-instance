import { parent1 } from "./parents/parent1"
import { parent2 } from "./parents/parent2"

const main = async () => {
  parent1()
  await new Promise(resolve => setTimeout(resolve, 3000))
  parent2()
}

main().then().catch()
