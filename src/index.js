import DMX from './dmx'
import { pan, tilt, open, color, gobo, cw, ccw, strobe } from './devices/ayra-ero-540-mk2'

const universe = new DMX().register('demo', 'enttec-usb-dmx-pro', '/dev/cu.usbserial-6A0JKBLF')

universe.update(pan(37))
universe.update(tilt(65))
universe.update(open())
universe.update(color('pink'))
// universe.update(gobo(5))
universe.update(cw(20))
// universe.update(dim(24))
// universe.update(strobe(100))

// universe.update({
// 	/**
// 	 * Pan & tilt controls
// 	 * - Pan (right-left) (resolution 2.5s)
// 	 * - Pan fine
// 	 * - Tilt (down-up)
// 	 * - Tilt fine
// 	 * - Speed (fast-slow)
// 	 */
// 	0: 30,
// 	1: 0,
// 	2: 160,
// 	3: 0,
// 	4: 0,
//
// 	/**
// 	 * Shutter control
// 	 * 	0-7 		shutter closed
// 	 *  8-134 	dimmer
// 	 *  135-239	strobe (slow-fast)
// 	 *  240-255	shutter open (rgb mode)
// 	 */
// 	5: 255,
//
// 	/**
// 	 * Color controls
// 	 * - Red
// 	 * - Green
// 	 * - Blue
// 	 * - Macro
// 	 * - Macro speed (slow-fast)
// 	 */
// 	6: 90,
// 	// 7: 5,
// 	// 8: 120,
// 	// 9: 210,
// 	// 10: 0,
//
// 	/**
// 	 * Operating mode
// 	 * 	0-127: 		auto
// 	 * 	128-255: 	sound controlled
// 	 */
// 	11: 0,
//
// 	/**
// 	 * Gobo control
// 	 * 	0-12: 		gobo 1 (open)
// 	 *  13-25: 		gobo 2 (fan)
// 	 *  26-38: 		gobo 3
// 	 *  39-51: 		gobo 4 (flower)
// 	 *  52-65: 		gobo 5 (whirl)
// 	 *  66-77: 		gobo 6
// 	 *  78-90: 		gobo 7
// 	 *  91-103: 	gobo 8 (sun)
// 	 *  104-116: 	gobo 9 (knot)
// 	 *  117-127: 	gobo 10 (bubbles)
// 	 *  128-191: 	scroll clockwise (slow-fast)
// 	 *  192-255:	scroll counter-clockwise (slow-fast)
// 	 */
//  12: 117
// })
