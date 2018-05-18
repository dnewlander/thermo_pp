var secrets = require('./secrets');

module.exports = {
    "downstairs_thermo"  :  {
		"thermostat" : "downstairs",
		"location" : "Living Room Thermostat Sensor",
		"deviceId" : secrets.livingThermoDeviceId,
		"readings" : {
			"last_read_time" : 0,
			"frame" : "office",
			"temperature" : 0,
			"last_temperature" : 0,
			"humidity" : 0,
			"last_humidity" : 0
      },
    },    "office"  :  {
		"thermostat" : "downstairs",
		"location" : "Office Sensor",
		"deviceId" : secrets.officeSensorDeviceId,
		"readings" : {  
			"last_read_time" : 0,
			"frame" : "office",
			"temperature" : 0,
			"last_temperature" : 0,
			"humidity" : 0,
			"last_humidity" : 0
      },
    },
    "living"  :  {
		"thermostat" : "downstairs",
		"location" : "Living Room Sensor",
		"deviceId" : secrets.livingSensorDeviceId,
		"readings" : {  
			"last_read_time" : 0,
			"frame" : "living",
			"temperature" : 0,
			"last_temperature" : 0,
			"humidity" : 0,
			"last_humidity" : 0
      },
    },
    "upstairs_thermo"  :  {
		"thermostat" : "upstairs",
		"location" : "Office Thermostat Sensor",
		"deviceId" : secrets.upstairsThermoDeviceId,
		"readings" : {  
			"last_read_time" : 0,
			"frame" : "ben",
			"temperature" : 0,
			"last_temperature" : 0,
			"humidity" : 0,
			"last_humidity" : 0
      },
    },
    "ben"  :  {
		"thermostat" : "upstairs",
		"location" : "Office Sensor",
		"deviceId" : secrets.benSensorDeviceId,
		"readings" : {  
			"last_read_time" : 0,
			"frame" : "ben",
			"temperature" : 0,
			"last_temperature" : 0,
			"humidity" : 0,
			"last_humidity" : 0
      },
    },
    "jordan"  :  {
		"thermostat" : "upstairs",
		"location" : "Office Sensor",
		"deviceId" : secrets.jordanSensorDeviceId,
		"readings" : {  
			"last_read_time" : 0,
			"frame" : "jordan",
			"temperature" : 0,
			"last_temperature" : 0,
			"humidity" : 0,
			"last_humidity" : 0
      },
    }
}