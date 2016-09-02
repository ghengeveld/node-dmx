import cssColors from '../css-colors'

export function pan(percentage) {
  var pan = percentage * 255 / 100
  return {
    0: Math.floor(pan),
    1: Math.ceil(pan % 1 * 255)
  }
}

export function tilt(percentage) {
  var tilt = percentage * 255 / 100
  return {
    2: Math.floor(tilt),
    3: Math.ceil(tilt % 1 * 255)
  }
}

export function close() {
  return { 5: 0 }
}

export function open() {
  return { 5: 255 }
}

export function dim(percentage) {
  return { 5: pctToRange(percentage, 8, 134) }
}

export function strobe(speed_pct) {
  return { 5: pctToRange(speed_pct, 135, 239) } // 135-239
}

export function rgb(r, g, b) {
  return { 6: r, 7: g, 8: b }
}

export function hex(hex) {
  return { 6: hexToR(hex), 7: hexToG(hex), 8: hexToB(hex) }
}

export function color(colorname) {
  return hex(cssColors[colorname])
}

export function gobo(number) {
  return { 12: ({ 1: 0, 2: 13, 3: 25, 4: 39, 5: 52, 6: 66, 7: 78, 8: 91, 9: 104, 10: 117 })[number] }
  // 0-12: 		gobo 1 (open)
  // 13-25: 	gobo 2 (fan)
  // 26-38: 	gobo 3
  // 39-51: 	gobo 4 (flower)
  // 52-65:		gobo 5 (whirl)
  // 66-77: 	gobo 6
  // 78-90: 	gobo 7
  // 91-103: 	gobo 8 (sun)
  // 104-116: gobo 9 (knot)
  // 117-127:	gobo 10 (bubbles)
}

export function cw(speed_pct) {
  return { 12: pctToRange(speed_pct, 128, 191) }
}

export function ccw(speed_pct) {
  return { 12: pctToRange(speed_pct, 192, 255) }
}

function pctToRange(pct, a, b) {return (b-a)*pct/100+a}
function hexToR(h) {return parseInt((cutHex(h)).substring(0,2),16)}
function hexToG(h) {return parseInt((cutHex(h)).substring(2,4),16)}
function hexToB(h) {return parseInt((cutHex(h)).substring(4,6),16)}
function cutHex(h) {return (h.charAt(0)=="#") ? h.substring(1,7):h}
