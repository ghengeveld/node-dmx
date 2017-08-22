import { hslToRgb } from "../utils/colors"
import { pan, tilt, rgb } from "../devices/ayra-ero-540-mk2"

export default universe => {
  setInterval(() => {
    const randomColor = hslToRgb(Math.random(), 1, 0.5)
    universe.update(rgb(...randomColor))
    universe.update(pan(Math.random() * 100))
    universe.update(tilt(Math.random() * 100))
  }, 1000)
}
