var secrets = require('./secrets');

module.exports = {
	"downstairs":{
		"name": "Downstairs Thermostat",
		"location": "Living Room",
		"deviceId": secrets.livingThermoDeviceId,
        "settings":{
			"last_set_time" : 0,
			"frame" : "set1",
			"function_frame" : "function1",
			"fan_frame" : "fan1",
			"temperature" : 0,
			"offset" : 0,
			"override" : 0
      },
	},
	"upstairs":{
		"name": "Upstairs Thermostat",
		"location": "Hall",
		"deviceId": secrets.upstairsThermoDeviceId,
        "settings":{  
			"last_set_time" : 0,
			"frame" : "set2",
			"function_frame" : "function2",
			"fan_frame" : "fan2",
			"temperature" : 0,
			"offset" : 0,
			"override" : 0
      },
	}
}