# node-dmx

DMX-512 controller library for Node.js

## Find device ID / serial number

```bash
system_profiler SPUSBDataType
```

DMX USB PRO -> Serial Number

In src/index.js configure the universe to use this device ID:

```js
'/dev/cu.usbserial-<DEVICEID>'
```
