/* Magic Mirror Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
//	address: "localhost", 	// Address to listen on, can be:
	address: "0.0.0.0", 	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/", 	// The URL path where MagicMirror is hosted. If you are using a Reverse proxy
					// you must set the sub path here. basePath must end with a /
	//ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], 	// Set [] to allow all IP addresses
	ipWhitelist: [], 	// Set [] to allow all IP addresses
															// or add a specific IPv4 of 192.168.1.5 :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
															// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"],
	timeFormat: 24,
	units: "metric",
	// serverOnly:  true/false/"local" ,
	// local for armv6l processors, default
	//   starts serveronly and then starts chrome browser
	// false, default for all NON-armv6l devices
	// true, force serveronly mode, because you want to.. no UI on this device

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left",
			classes: 'default everyone',
		},
		{
			module: "calendar",
			header: "Canada Holiday",
			position: "top_left",
			//classes: 'jim',
			classes: 'default everyone',
			config: {
				maximumEntries: '5',
				calendars: [
					{
						symbol: "calendar-Canada",
						//url: "webcal://www.calendarlabs.com/ical-calendar/ics/76/US_Holidays.ics",
						url:"https://www.calendarlabs.com/ical-calendar/ics/39/Canada_Holidays.ics",
					},
					//{
					//	symbol: "calendar-Zhanjun",
					//	url:"https://calendar.google.com/calendar/ical/guozhan1722%40gmail.com/public/basic.ics",
					//},
				],
			},
		},
		//{
		//	module: "compliments",
		//	position: "lower_third"
		//},
		{
			module: "currentweather",
			position: "top_right",
			classes: 'default everyone',
			config: {
				location: "Calgary",
				locationID: "5913490", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "e576e3dc11df6d365b2010de596acffe"
			}
		},
		{
			module: "weatherforecast",
			position: "bottom_right",
			header: "Weather Forecast",
			classes: 'default everyone',
			config: {
				location: "Calgary",
				locationID: "5913490", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "e576e3dc11df6d365b2010de596acffe"
			}
		},
//		{
//			module: "newsfeed",
//			position: "bottom_bar",
//			config: {
//				feeds: [
//					{
//						title: "New York Times",
//						url: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml"
//					}
//				],
//				showSourceTitle: true,
//				showPublishDate: true,
//				broadcastNewsFeeds: true,
//				broadcastNewsUpdates: true
//			}
//		},
		{	
	  		module: "MMM-GooglePhotos",
			position: "fullscreen_below",
			classes: 'jim xueyan su jonathon',
			config: {
				albums: ["Family_2020",], // Set your album name. like ["My wedding", "family share", "Travle to Paris"]
				updateInterval: 1000 * 20, // minimum 10 seconds.
				sort: "new", // "old", "random"
				uploadAlbum: null, // Only album created by `create_uploadable_album.js`.
				condition: {
					fromDate: null, // Or "2018-03", RFC ... format available
					toDate: null, // Or "2019-12-25",
					minWidth: null, // Or 400
					maxWidth: null, // Or 8000
					minHeight: null, // Or 400
					maxHeight: null, // Or 8000
					minWHRatio: null,
					maxWHRatio: null,
					// WHRatio = Width/Height ratio ( ==1 : Squared Photo,   < 1 : Portraited Photo, > 1 : Landscaped Photo)
				},
				//showWidth: 1080, // These values will be used for quality of downloaded photos to show. real size to show in your MagicMirror region is recommended.
				//showHeight: 1920,
				showWidth: 640, // These values will be used for quality of downloaded photos to show. real size to show in your MagicMirror region is recommended.
				showHeight: 1080,
				timeFormat: "YYYY/MM/DD HH:mm", // Or `relative` can be used.
			}
		},
		{
			module: 'MMM-Screencast',
			position: 'bottom_right', // This position is for a hidden <div /> and not the screencast window
			config: {
				position: 'bottomRight',
				height: 640,
				width: 1080,
			}
		},	
		{
			module: 'MMM-DailyBibleVerse',
			position: 'bottom_bar',	// This can be any of the regions. Best result is in the bottom_bar as verses can take multiple lines in a day.
			classes: 'default everyone',
			config: {
				version: 'NIV', // This can be changed to any version you want that is offered by Bible Gateway. For a list, go here: https://www.biblegateway.com/versions/,
	    		size: 'medium' // default value is medium, but can be changed. 
			}
		},
		{
			module: 'MMM-SmartWebDisplay',
			position: 'bottom_left',	// This can be any of the regions.
			config: {
				// See 'Configuration options' for more information.
				logDebug: false, //set to true to get detailed debug logs. To see them : "Ctrl+Shift+i"
				height:"100%", //hauteur du cadre en pixel ou %
				width:"100%", //largeur
             			updateInterval: 0, //in min. Set it to 0 for no refresh (for videos)
                		NextURLInterval: 0, //in min, set it to 0 not to have automatic URL change. If only 1 URL given, it will be updated
                		displayLastUpdate: true, //to display the last update of the URL 
				displayLastUpdateFormat: 'ddd - HH:mm:ss', //format of the date and time to display
                		url: ["https://www.costco.ca/"], //source of the URL to be displayed
                		//url: ["http://magicmirror.builders/", "https://www.youtube.com/embed/Qwc2Eq6YXTQ?autoplay=1"], //source of the URL to be displayed
				scrolling: "no", // allow scrolling or not. html 4 only
				shutoffDelay: 10000 //delay in miliseconds to video shut-off while using together with MMM-PIR-Sensor 
			}
		},
		{
    			module: 'MMM-Remote-Control',
    			// uncomment the following line to show the URL of the remote control on the mirror
    			// position: 'bottom_left',
    			// you can hide this module afterwards from the remote control itself
    			config: {
        			customCommand: {},  // Optional, See "Using Custom Commands" below
        			showModuleApiMenu: true, // Optional, Enable the Module Controls menu
        			secureEndpoints: true, // Optional, See API/README.md
        			// uncomment any of the lines below if you're gonna use it
        			// customMenu: "custom_menu.json", // Optional, See "Custom Menu Items" below
        			// apiKey: "", // Optional, See API/README.md for details
        			// classes: {} // Optional, See "Custom Classes" below
    			}
		},
		{
			module: 'MMM-Facial-Recognition-OCV3',
			config: {
				// Threshold for the confidence of a recognized face before it's considered a
				// positive match.  Confidence values below this threshold will be considered
				// a positive match because the lower the confidence value, or distance, the
				// more confident the algorithm is that the face was correctly detected.
				threshold: 60,
				// force the use of a usb webcam on raspberry pi (on other platforms this is always true automatically)
				useUSBCam: true,
				// Path to your training xml
				trainingFile: '/home/jim/SmartJim/modules/MMM-Facial-Recognition-OCV3/training.xml',
				// recognition intervall in seconds (smaller number = faster but CPU intens!)
				interval: 2,
				// Logout delay after last recognition so that a user does not get instantly logged out if he turns away from the mirror for a few seconds
				logoutDelay: 20,
				// Array with usernames (copy and paste from training script)
				users: ["xueyan","jonathon","jim","su",],
				//Module set used for strangers and if no user is detected
				defaultClass: "default",
				//Set of modules which should be shown for every user
				everyoneClass: "everyone",
				// Boolean to toggle welcomeMessage
				welcomeMessage: true
			}
		},
		{
			module: 'MMM-awesome-alexa',
			position: 'bottom_bar',
			classes: 'default everyone',
			config: {
			  wakeWord: 'Smart Mirror',
			  clientId: 'amzn1.application-oa2-client.21e8ddcd5c0445b59fddaca7435986fb',
			  clientSecret: '61c998f4231435e9d3d0c37e6c295ae00148159beb74b8547032d02070ffcabc',
			  deviceId: 'MyDevice',
			  refreshToken: 'Atzr|IwEBIHC7_u4fwh1k7kNjGRU1qs9m0_pFOXvunYm1uzqVcxFTt0F3lOjECzXKZse0szurc1l_rOd5V0XeAT9MWdn3ru3lP6IIUCGeiO4ENEXRjxTckd1YbgyI8p8zmw7rnysNRqDxavp4g57qZHAS2UOVTxGm88bulTJlwR6ivvro_k1O6OZ0mmcT2w_lEr8c9LUOlSjoZvd6ag7vOVCOCgQdD1iIry-xSpHHPGSje1NisQIxNOj6jGYGIJUkj2lGT79KHpGCsy5wUVRvODxdDLfQbrHPsBxBwdYKebhkBQyYrMpuIqal4hunvVZDXz7KkTIH22uLILt8-VJ2bBzm_SSLONpieyTXZrqVXjjxyKAqlqsrng',
			  lite: true,
			  isSpeechVisualizationEnabled: false
			  //isSpeechVisualizationEnabled: true
			}
		},
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
