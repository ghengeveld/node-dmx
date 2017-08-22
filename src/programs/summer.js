import { color, gobo, pan, tilt } from "../devices/ayra-ero-540-mk2"

export default function program(universe) {
  universe.update(color("orange"))
  universe.update(gobo(2))

  setInterval(() => {
    universe.update(pan(Math.random() * 100))
    universe.update(tilt(Math.random() * 100))
  }, 3000)
}
