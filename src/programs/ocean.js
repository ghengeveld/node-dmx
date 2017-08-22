import { color, gobo, pan, tilt } from "../devices/ayra-ero-540-mk2"

export default function program(universe) {
  universe.update(color("teal"))
  universe.update(gobo(10))

  setInterval(() => {
    universe.update(pan(Math.random() * 100))
    universe.update(tilt(Math.random() * 100))
  }, 3000)
}
