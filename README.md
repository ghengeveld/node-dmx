# node-dmx

DMX-512 controller library for Node.js

## Installation

```bash
git clone https://github.com/ghengeveld/node-dmx.git
cd node-dmx
npm install
```

### Find Device ID / Serial Number

```bash
system_profiler SPUSBDataType
```

Find the device named "DMX USB PRO" and copy its Serial Number. Then update
src/index.js to configure the universe to use that Serial Number

```js
const universe = new DMX().register('demo', 'enttec-usb-dmx-pro', '/dev/cu.usbserial-<SERIALNUMBER>')
```

## Starting

```bash
npm start
```

You can make edits in your file and it will automatically restart the Node process.
