import { Component, ViewChild, OnInit } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TestService } from '../test.service';
import {Test} from '../Models/Test';
import 'brace';
import 'brace/mode/sql';
import 'brace/theme/dracula';
var id = '';
var browsers = [
	{
		api_name: 'Nexus9-And60',
		device: 'mobile',
		device_type: 'tablet',
		name: 'Android Nexus 9 / 6.0',
		version: '6.0',
		type: 'Android',
		icon_class: 'android',
		upload_file_enabled: false,
		sort_order: 0.62,
		is_webrtc_enabled: true,
		caps:
			{
				deviceName: 'Nexus 9',
				platformName: 'Android',
				platformVersion: '6.0'
			},
		browsers:
			[
				{
					name: 'Chrome Mobile 63',
					type: 'Chrome Mobile',
					version: '63',
					api_name: 'MblChrome63',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'mobile',
					selenium_version: '2.25.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.34',
					can_mobile_debug: true,
					caps:
						{
							browserName: 'Chrome'
						},
					default_config: 'Nexus9-And60'
				}
			],
		resolutions:
			[
				{
					width: 1536,
					height: 2048,
					name: '1536x2048',
					desktop_width: 1536,
					desktop_height: 2048,
					default: true,
					orientation: 'portrait',
					caps:
						{
							deviceOrientation: 'portrait'
						}
				}
			],
		a: false
	},
	{
		api_name: 'Pixel2-And90',
		device: 'mobile',
		device_type: 'phone',
		name: 'Android Google Pixel 2 / 9.0',
		version: '9.0',
		type: 'Android',
		icon_class: 'android',
		upload_file_enabled: false,
		sort_order: 0.64,
		is_webrtc_enabled: false,
		caps:
			{
				deviceName: 'Pixel 2',
				platformName: 'Android',
				platformVersion: '9.0'
			},
		browsers:
			[
				{
					name: 'Chrome Mobile 74',
					type: 'Chrome Mobile',
					version: '74',
					api_name: 'MblChrome74',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'mobile',
					selenium_version: '3.14.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '74.0',
					can_mobile_debug: true,
					caps:
						{
							browserName: 'Chrome'
						},
					default_config: 'Pixel2-And90'
				}
			],
		resolutions:
			[
				{
					width: 1080,
					height: 1920,
					name: '1080x1920',
					desktop_width: 540,
					desktop_height: 960,
					default: true,
					orientation: 'portrait',
					caps:
						{
							deviceOrientation: 'portrait'
						}
				},
				{
					width: 1920,
					height: 1080,
					name: '1920x1080',
					desktop_width: 960,
					desktop_height: 540,
					default: false,
					orientation: 'landscape',
					caps:
						{
							deviceOrientation: 'landscape'
						}
				}
			],
		a: false
	},
	{
		api_name: 'Pixel3-And90',
		device: 'mobile',
		device_type: 'phone',
		name: 'Android Google Pixel 3 / 9.0',
		version: '9.0',
		type: 'Android',
		icon_class: 'android',
		upload_file_enabled: false,
		sort_order: 0.65,
		is_webrtc_enabled: false,
		caps:
			{
				deviceName: 'Pixel 3',
				platformName: 'Android',
				platformVersion: '9.0'
			},
		browsers:
			[
				{
					name: 'Chrome Mobile 77',
					type: 'Chrome Mobile',
					version: '77',
					api_name: 'MblChrome',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'mobile',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '77.0',
					can_mobile_debug: true,
					caps:
						{
							browserName: 'Chrome'
						},
					default_config: 'Pixel3-And90'
				}
			],
		resolutions:
			[
				{
					width: 1080,
					height: 2160,
					name: '1080x2160',
					desktop_width: 540,
					desktop_height: 1080,
					default: true,
					orientation: 'portrait',
					caps:
						{
							deviceOrientation: 'portrait'
						}
				},
				{
					width: 2160,
					height: 1080,
					name: '2160x1080',
					desktop_width: 1080,
					desktop_height: 560,
					default: false,
					orientation: 'landscape',
					caps:
						{
							deviceOrientation: 'landscape'
						}
				}
			],
		a: false
	},
	{
		api_name: 'GalaxyS8-And80',
		device: 'mobile',
		device_type: 'phone',
		name: 'Android Galaxy S8 / 8.0',
		version: '8.0',
		type: 'Android',
		icon_class: 'android',
		upload_file_enabled: false,
		sort_order: 0.66,
		is_webrtc_enabled: false,
		caps:
			{
				deviceName: 'Galaxy S8',
				platformName: 'Android',
				platformVersion: '8.0'
			},
		browsers:
			[
				{
					name: 'Chrome Mobile 75',
					type: 'Chrome Mobile',
					version: '75',
					api_name: 'MblChrome75',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'mobile',
					selenium_version: '3.14.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '75.0',
					can_mobile_debug: true,
					caps:
						{
							browserName: 'Chrome'
						},
					default_config: 'GalaxyS9-And90'
				}
			],
		resolutions:
			[
				{
					width: 1080,
					height: 2220,
					name: '1080x2220',
					desktop_width: 540,
					desktop_height: 1110,
					default: true,
					orientation: 'portrait',
					caps:
						{
							deviceOrientation: 'portrait'
						}
				},
				{
					width: 2220,
					height: 1080,
					name: '2220x1080',
					desktop_width: 1110,
					desktop_height: 540,
					default: false,
					orientation: 'landscape',
					caps:
						{
							deviceOrientation: 'landscape'
						}
				}
			],
		a: false
	},
	{
		api_name: 'Nexus6-And50',
		device: 'mobile',
		device_type: 'phone',
		name: 'Android Nexus 6 / 5.0',
		version: '5.0',
		type: 'Android',
		icon_class: 'android',
		upload_file_enabled: false,
		sort_order: 0.67,
		is_webrtc_enabled: true,
		caps:
			{
				deviceName: 'Nexus 6',
				platformName: 'Android',
				platformVersion: '5.0'
			},
		browsers:
			[
				{
					name: 'Chrome Mobile 61',
					type: 'Chrome Mobile',
					version: '61',
					api_name: 'MblChrome61',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'mobile',
					selenium_version: '2.25.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.33',
					can_mobile_debug: true,
					caps:
						{
							browserName: 'Chrome'
						},
					default_config: 'Nexus6-And50'
				}
			],
		resolutions:
			[
				{
					width: 1440,
					height: 2560,
					name: '1440x2560',
					desktop_width: 1440,
					desktop_height: 2560,
					default: true,
					orientation: 'portrait',
					caps:
						{
							deviceOrientation: 'portrait'
						}
				},
				{
					width: 2560,
					height: 1440,
					name: '2560x1440',
					desktop_width: 2560,
					desktop_height: 1440,
					default: false,
					orientation: 'landscape',
					caps:
						{
							deviceOrientation: 'landscape'
						}
				}
			],
		a: true
	},
	{
		api_name: 'GalaxyS9-And90',
		device: 'mobile',
		device_type: 'phone',
		name: 'Android Galaxy S9 / 9.0',
		version: '9.0',
		type: 'Android',
		icon_class: 'android',
		upload_file_enabled: false,
		sort_order: 0.67,
		is_webrtc_enabled: false,
		caps:
			{
				deviceName: 'Galaxy S9',
				platformName: 'Android',
				platformVersion: '9.0'
			},
		browsers:
			[
				{
					name: 'Chrome Mobile 75',
					type: 'Chrome Mobile',
					version: '75',
					api_name: 'MblChrome75',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'mobile',
					selenium_version: '3.14.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '75.0',
					can_mobile_debug: true,
					caps:
						{
							browserName: 'Chrome'
						},
					default_config: 'GalaxyS9-And90'
				}
			],
		resolutions:
			[
				{
					width: 1080,
					height: 2220,
					name: '1080x2220',
					desktop_width: 540,
					desktop_height: 1110,
					default: true,
					orientation: 'portrait',
					caps:
						{
							deviceOrientation: 'portrait'
						}
				},
				{
					width: 2220,
					height: 1080,
					name: '2220x1080',
					desktop_width: 1110,
					desktop_height: 540,
					default: false,
					orientation: 'landscape',
					caps:
						{
							deviceOrientation: 'landscape'
						}
				}
			],
		a: false
	},
	{
		api_name: 'GalaxyS7-And70',
		device: 'mobile',
		device_type: 'phone',
		name: 'Android Galaxy S7 / 7.0',
		version: '7.0',
		type: 'Android',
		icon_class: 'android',
		upload_file_enabled: false,
		sort_order: 0.74,
		is_webrtc_enabled: true,
		caps:
			{
				deviceName: 'Galaxy S7',
				platformName: 'Android',
				platformVersion: '7.0'
			},
		browsers:
			[
				{
					name: 'Chrome Mobile 73',
					type: 'Chrome Mobile',
					version: '73',
					api_name: 'MblChrome73',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'mobile',
					selenium_version: '2.25.0',
					webdriver_type: null,
					webdriver_version: null,
					can_mobile_debug: true,
					caps:
						{
							browserName: 'Chrome'
						},
					default_config: 'GalaxyS7-And70'
				}
			],
		resolutions:
			[
				{
					width: 1080,
					height: 1920,
					name: '1080x1920',
					desktop_width: 1080,
					desktop_height: 1920,
					default: true,
					orientation: 'portrait',
					caps:
						{
							deviceOrientation: 'portrait'
						}
				}
			],
		a: false
	},
	{
		api_name: 'iPad6thGenSim',
		device: 'mobile',
		device_type: 'tablet',
		name: 'iPad 6th Gen Simulator',
		version: '12.0',
		type: 'iPad',
		icon_class: 'ipad-landscape',
		upload_file_enabled: true,
		sort_order: 1.502,
		is_webrtc_enabled: false,
		caps:
			{
				deviceName: 'iPad 6th Generation Simulator',
				platformName: 'iOS',
				platformVersion: '12.0'
			},
		browsers:
			[
				{
					name: 'Mobile Safari 12.0',
					type: 'Mobile Safari',
					version: '12.0',
					api_name: 'MblSafari12.0',
					default_live_test_browser: false,
					icon_class: 'safari-mobile',
					major_browser: true,
					device: 'mobile',
					selenium_version: '3.11.0',
					webdriver_type: 'appium',
					webdriver_version: '1.9.1',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Safari'
						},
					default_config: 'iPad6thGenSim'
				}
			],
		resolutions:
			[
				{
					width: 2048,
					height: 2732,
					name: '2048x2732',
					desktop_width: 1200,
					desktop_height: 900,
					default: false,
					orientation: 'portrait',
					caps:
						{
							deviceOrientation: 'portrait'
						}
				},
				{
					width: 2732,
					height: 2048,
					name: '2732x2048',
					desktop_width: 1200,
					desktop_height: 900,
					default: true,
					orientation: 'landscape',
					caps:
						{
							deviceOrientation: 'landscape'
						}
				}
			],
		a: false
	},
	{
		api_name: 'iPadPro-iOS11',
		device: 'mobile',
		device_type: 'tablet',
		name: 'iPad Pro / 11.0 Simulator',
		version: '11.0',
		type: 'iPad',
		icon_class: 'ipad-portrait',
		upload_file_enabled: true,
		sort_order: 1.503,
		is_webrtc_enabled: false,
		caps:
			{
				deviceName: 'iPad Pro Simulator',
				platformName: 'iOS',
				platformVersion: '11.0'
			},
		browsers:
			[
				{
					name: 'Mobile Safari 11.0',
					type: 'Mobile Safari',
					version: '11.0',
					api_name: 'MblSafari11.0',
					default_live_test_browser: false,
					icon_class: 'safari-mobile',
					major_browser: true,
					device: 'mobile',
					selenium_version: '3.4.0',
					webdriver_type: 'appium',
					webdriver_version: '1.7.2',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Safari'
						},
					default_config: 'iPadPro-iOS11'
				}
			],
		resolutions:
			[
				{
					width: 2048,
					height: 2732,
					name: '2048x2732',
					desktop_width: 1200,
					desktop_height: 900,
					default: false,
					orientation: 'portrait',
					caps:
						{
							deviceOrientation: 'portrait'
						}
				},
				{
					width: 2732,
					height: 2048,
					name: '2732x2048',
					desktop_width: 1200,
					desktop_height: 900,
					default: true,
					orientation: 'landscape',
					caps:
						{
							deviceOrientation: 'landscape'
						}
				}
			],
		a: false
	},
	{
		api_name: 'iPadPro-iOS102Sim',
		device: 'mobile',
		device_type: 'tablet',
		name: 'iPad Pro / 10.2 Simulator',
		version: '10.2',
		type: 'iPad',
		icon_class: 'ipad-landscape',
		upload_file_enabled: true,
		sort_order: 1.504,
		is_webrtc_enabled: false,
		caps:
			{
				deviceName: 'iPad Pro Simulator',
				platformName: 'iOS',
				platformVersion: '10.2'
			},
		browsers:
			[
				{
					name: 'Mobile Safari 10.0',
					type: 'Mobile Safari',
					version: '10.0',
					api_name: 'MblSafari10.0',
					default_live_test_browser: false,
					icon_class: 'safari-mobile',
					major_browser: true,
					device: 'mobile',
					selenium_version: '3.3.1',
					webdriver_type: 'appium',
					webdriver_version: '1.6.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Safari'
						},
					default_config: 'iPhone7-iOS102Sim'
				}
			],
		resolutions:
			[
				{
					width: 2048,
					height: 2732,
					name: '2048x2732',
					desktop_width: 1500,
					desktop_height: 1500,
					default: false,
					orientation: 'portrait',
					caps:
						{
							deviceOrientation: 'portrait'
						}
				},
				{
					width: 2732,
					height: 2048,
					name: '2732x2048',
					desktop_width: 1500,
					desktop_height: 1500,
					default: true,
					orientation: 'landscape',
					caps:
						{
							deviceOrientation: 'landscape'
						}
				}
			],
		a: false
	},
	{
		api_name: 'iPadPro-iOS9Sim',
		device: 'mobile',
		device_type: 'tablet',
		name: 'iPad Pro / 9.3 Simulator',
		version: '9.3',
		type: 'iPad',
		icon_class: 'ipad-landscape',
		upload_file_enabled: true,
		sort_order: 1.505,
		is_webrtc_enabled: false,
		caps:
			{
				deviceName: 'iPad Pro Simulator',
				platformName: 'iOS',
				platformVersion: '9.3'
			},
		browsers:
			[
				{
					name: 'Mobile Safari 9.0',
					type: 'Mobile Safari',
					version: '9.0',
					api_name: 'MblSafari9.0',
					default_live_test_browser: true,
					icon_class: 'safari-mobile',
					major_browser: true,
					device: 'mobile',
					selenium_version: '3.4.0',
					webdriver_type: 'appium',
					webdriver_version: '1.5.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Safari'
						},
					default_config: 'iPadPro-iOS9Sim'
				}
			],
		resolutions:
			[
				{
					width: 2048,
					height: 2732,
					name: '2048x2732',
					desktop_width: 1500,
					desktop_height: 1500,
					default: false,
					orientation: 'portrait',
					caps:
						{
							deviceOrientation: 'portrait'
						}
				},
				{
					width: 2732,
					height: 2048,
					name: '2732x2048',
					desktop_width: 1500,
					desktop_height: 1500,
					default: true,
					orientation: 'landscape',
					caps:
						{
							deviceOrientation: 'landscape'
						}
				}
			],
		a: false
	},
	{
		api_name: 'iPadAir2-iOS9Sim',
		device: 'mobile',
		device_type: 'tablet',
		name: 'iPad Air 2 / 9.3 Simulator',
		version: '9.3',
		type: 'iPad',
		icon_class: 'ipad-landscape',
		upload_file_enabled: true,
		sort_order: 1.506,
		is_webrtc_enabled: false,
		caps:
			{
				deviceName: 'iPad Air 2 Simulator',
				platformName: 'iOS',
				platformVersion: '9.3'
			},
		browsers:
			[
				{
					name: 'Mobile Safari 9.0',
					type: 'Mobile Safari',
					version: '9.0',
					api_name: 'MblSafari9.0',
					default_live_test_browser: true,
					icon_class: 'safari-mobile',
					major_browser: true,
					device: 'mobile',
					selenium_version: '3.4.0',
					webdriver_type: 'appium',
					webdriver_version: '1.5.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Safari'
						},
					default_config: 'iPadPro-iOS9Sim'
				}
			],
		resolutions:
			[
				{
					width: 1536,
					height: 2048,
					name: '1536x2048',
					desktop_width: 1600,
					desktop_height: 1200,
					default: false,
					orientation: 'portrait',
					caps:
						{
							deviceOrientation: 'portrait'
						}
				},
				{
					width: 2048,
					height: 1536,
					name: '2048x1536',
					desktop_width: 1600,
					desktop_height: 1200,
					default: true,
					orientation: 'landscape',
					caps:
						{
							deviceOrientation: 'landscape'
						}
				}
			],
		a: false
	},
	{
		api_name: 'iPhoneXRSim',
		device: 'mobile',
		device_type: 'phone',
		name: 'iPhone XR Simulator',
		version: '12.0',
		type: 'iPhone',
		icon_class: 'iphone-portrait',
		upload_file_enabled: true,
		sort_order: 2.4,
		is_webrtc_enabled: false,
		caps:
			{
				deviceName: 'iPhone XR Simulator',
				platformName: 'iOS',
				platformVersion: '12.0'
			},
		browsers:
			[
				{
					name: 'Mobile Safari 12.0',
					type: 'Mobile Safari',
					version: '12.0',
					api_name: 'MblSafari12.0',
					default_live_test_browser: false,
					icon_class: 'safari-mobile',
					major_browser: true,
					device: 'mobile',
					selenium_version: '3.14.0',
					webdriver_type: 'appium',
					webdriver_version: '1.9.1',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Safari'
						},
					default_config: 'iPad6thGenSim'
				}
			],
		resolutions:
			[
				{
					width: 1125,
					height: 2436,
					name: '1125x2436',
					desktop_width: 1600,
					desktop_height: 1200,
					default: true,
					orientation: 'portrait',
					caps:
						{
							deviceOrientation: 'portrait'
						}
				},
				{
					width: 2436,
					height: 1125,
					name: '2436x1125',
					desktop_width: 1600,
					desktop_height: 1200,
					default: false,
					orientation: 'landscape',
					caps:
						{
							deviceOrientation: 'landscape'
						}
				}
			],
		a: false
	},
	{
		api_name: 'iPhoneX-iOS11sim',
		device: 'mobile',
		device_type: 'phone',
		name: 'iPhone X / 11.0 Simulator',
		version: '11.0',
		type: 'iPhone',
		icon_class: 'iphone-portrait',
		upload_file_enabled: true,
		sort_order: 2.42,
		is_webrtc_enabled: false,
		caps:
			{
				deviceName: 'iPhone X Simulator',
				platformName: 'iOS',
				platformVersion: '11.0'
			},
		browsers:
			[
				{
					name: 'Mobile Safari 11.0',
					type: 'Mobile Safari',
					version: '11.0',
					api_name: 'MblSafari11.0',
					default_live_test_browser: false,
					icon_class: 'safari-mobile',
					major_browser: true,
					device: 'mobile',
					selenium_version: '3.4.0',
					webdriver_type: 'appium',
					webdriver_version: '1.7.2',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Safari'
						},
					default_config: 'iPadPro-iOS11'
				}
			],
		resolutions:
			[
				{
					width: 1125,
					height: 2436,
					name: '1125x2436',
					desktop_width: 1600,
					desktop_height: 1200,
					default: true,
					orientation: 'portrait',
					caps:
						{
							deviceOrientation: 'portrait'
						}
				},
				{
					width: 2436,
					height: 1125,
					name: '2436x1125',
					desktop_width: 1600,
					desktop_height: 1200,
					default: false,
					orientation: 'landscape',
					caps:
						{
							deviceOrientation: 'landscape'
						}
				}
			],
		a: true
	},
	{
		api_name: 'iPhone8-iOS11Sim',
		device: 'mobile',
		device_type: 'phone',
		name: 'iPhone 8 / 11.0 Simulator',
		version: '11.0',
		type: 'iPhone',
		icon_class: 'iphone-portrait',
		upload_file_enabled: true,
		sort_order: 2.44,
		is_webrtc_enabled: false,
		caps:
			{
				deviceName: 'iPhone 8 Simulator',
				platformName: 'iOS',
				platformVersion: '11.0'
			},
		browsers:
			[
				{
					name: 'Mobile Safari 11.0',
					type: 'Mobile Safari',
					version: '11.0',
					api_name: 'MblSafari11.0',
					default_live_test_browser: false,
					icon_class: 'safari-mobile',
					major_browser: true,
					device: 'mobile',
					selenium_version: '3.4.0',
					webdriver_type: 'appium',
					webdriver_version: '1.7.2',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Safari'
						},
					default_config: 'iPadPro-iOS11'
				}
			],
		resolutions:
			[
				{
					width: 750,
					height: 1334,
					name: '750x1334',
					desktop_width: 1600,
					desktop_height: 1200,
					default: true,
					orientation: 'portrait',
					caps:
						{
							deviceOrientation: 'portrait'
						}
				},
				{
					width: 1334,
					height: 750,
					name: '1334x750',
					desktop_width: 1600,
					desktop_height: 1200,
					default: false,
					orientation: 'landscape',
					caps:
						{
							deviceOrientation: 'landscape'
						}
				}
			],
		a: false
	},
	{
		api_name: 'iPhone7-iOS102Sim',
		device: 'mobile',
		device_type: 'phone',
		name: 'iPhone 7 / 10.2 Simulator',
		version: '10.2',
		type: 'iPhone',
		icon_class: 'iphone-portrait',
		upload_file_enabled: true,
		sort_order: 2.45,
		is_webrtc_enabled: false,
		caps:
			{
				deviceName: 'iPhone 7 Simulator',
				platformName: 'iOS',
				platformVersion: '10.2'
			},
		browsers:
			[
				{
					name: 'Mobile Safari 10.0',
					type: 'Mobile Safari',
					version: '10.0',
					api_name: 'MblSafari10.0',
					default_live_test_browser: false,
					icon_class: 'safari-mobile',
					major_browser: true,
					device: 'mobile',
					selenium_version: '3.3.1',
					webdriver_type: 'appium',
					webdriver_version: '1.6.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Safari'
						},
					default_config: 'iPhone7-iOS102Sim'
				}
			],
		resolutions:
			[
				{
					width: 750,
					height: 1334,
					name: '750x1334',
					desktop_width: 1600,
					desktop_height: 1200,
					default: true,
					orientation: 'portrait',
					caps:
						{
							deviceOrientation: 'portrait'
						}
				},
				{
					width: 1334,
					height: 750,
					name: '1334x750',
					desktop_width: 1600,
					desktop_height: 1200,
					default: false,
					orientation: 'landscape',
					caps:
						{
							deviceOrientation: 'landscape'
						}
				}
			],
		a: false
	},
	{
		api_name: 'iPhone7Plus-iOS10sim',
		device: 'mobile',
		device_type: 'phone',
		name: 'iPhone 7 Plus / 10.0 Simulator',
		version: '10.0',
		type: 'iPhone',
		icon_class: 'iphone-portrait',
		upload_file_enabled: true,
		sort_order: 2.54,
		is_webrtc_enabled: false,
		caps:
			{
				deviceName: 'iPhone 7 Plus Simulator',
				platformName: 'iOS',
				platformVersion: '10.0'
			},
		browsers:
			[
				{
					name: 'Mobile Safari 10.0',
					type: 'Mobile Safari',
					version: '10.0',
					api_name: 'MblSafari10.0',
					default_live_test_browser: false,
					icon_class: 'safari-mobile',
					major_browser: true,
					device: 'mobile',
					selenium_version: '3.4.0',
					webdriver_type: 'appium',
					webdriver_version: '1.6.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Safari'
						},
					default_config: 'iPhone7-iOS102Sim'
				}
			],
		resolutions:
			[
				{
					width: 1080,
					height: 1920,
					name: '1080x1920',
					desktop_width: 1600,
					desktop_height: 1200,
					default: true,
					orientation: 'portrait',
					caps:
						{
							deviceOrientation: 'portrait'
						}
				},
				{
					width: 1920,
					height: 1080,
					name: '1920x1080',
					desktop_width: 1600,
					desktop_height: 1200,
					default: false,
					orientation: 'landscape',
					caps:
						{
							deviceOrientation: 'landscape'
						}
				}
			],
		a: false
	},
	{
		api_name: 'iPhone7-iOS10sim',
		device: 'mobile',
		device_type: 'phone',
		name: 'iPhone 7 / 10.0 Simulator',
		version: '10.0',
		type: 'iPhone',
		icon_class: 'iphone-portrait',
		upload_file_enabled: true,
		sort_order: 2.55,
		is_webrtc_enabled: false,
		caps:
			{
				deviceName: 'iPhone 7 Simulator',
				platformName: 'iOS',
				platformVersion: '10.0'
			},
		browsers:
			[
				{
					name: 'Mobile Safari 10.0',
					type: 'Mobile Safari',
					version: '10.0',
					api_name: 'MblSafari10.0',
					default_live_test_browser: true,
					icon_class: 'safari-mobile',
					major_browser: true,
					device: 'mobile',
					selenium_version: '3.4.0',
					webdriver_type: 'appium',
					webdriver_version: '1.6.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Safari'
						},
					default_config: 'iPhone7-iOS102Sim'
				}
			],
		resolutions:
			[
				{
					width: 750,
					height: 1334,
					name: '750x1334',
					desktop_width: 1600,
					desktop_height: 1200,
					default: true,
					orientation: 'portrait',
					caps:
						{
							deviceOrientation: 'portrait'
						}
				},
				{
					width: 1334,
					height: 750,
					name: '1334x750',
					desktop_width: 1600,
					desktop_height: 1200,
					default: false,
					orientation: 'landscape',
					caps:
						{
							deviceOrientation: 'landscape'
						}
				}
			],
		a: false
	},
	{
		api_name: 'iPhone6sPlus-iOS9sim',
		device: 'mobile',
		device_type: 'phone',
		name: 'iPhone 6s Plus / 9.3 Simulator',
		version: '9.3',
		type: 'iPhone',
		icon_class: 'iphone-portrait',
		upload_file_enabled: true,
		sort_order: 2.64,
		is_webrtc_enabled: false,
		caps:
			{
				deviceName: 'iPhone 6s Plus Simulator',
				platformName: 'iOS',
				platformVersion: '9.3'
			},
		browsers:
			[
				{
					name: 'Mobile Safari 9.0',
					type: 'Mobile Safari',
					version: '9.0',
					api_name: 'MblSafari9.0',
					default_live_test_browser: false,
					icon_class: 'safari-mobile',
					major_browser: true,
					device: 'mobile',
					selenium_version: '3.4.0',
					webdriver_type: 'appium',
					webdriver_version: '1.5.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Safari'
						},
					default_config: 'iPadPro-iOS9Sim'
				}
			],
		resolutions:
			[
				{
					width: 1242,
					height: 2208,
					name: '1242x2208',
					desktop_width: 1600,
					desktop_height: 1200,
					default: true,
					orientation: 'portrait',
					caps:
						{
							deviceOrientation: 'portrait'
						}
				},
				{
					width: 2208,
					height: 1242,
					name: '2208x1242',
					desktop_width: 1600,
					desktop_height: 1200,
					default: false,
					orientation: 'landscape',
					caps:
						{
							deviceOrientation: 'landscape'
						}
				}
			],
		a: false
	},
	{
		api_name: 'iPhone6s-iOS9sim',
		device: 'mobile',
		device_type: 'phone',
		name: 'iPhone 6s / 9.3 Simulator',
		version: '9.3',
		type: 'iPhone',
		icon_class: 'iphone-portrait',
		upload_file_enabled: true,
		sort_order: 2.65,
		is_webrtc_enabled: false,
		caps:
			{
				deviceName: 'iPhone 6s Simulator',
				platformName: 'iOS',
				platformVersion: '9.3'
			},
		browsers:
			[
				{
					name: 'Mobile Safari 9.0',
					type: 'Mobile Safari',
					version: '9.0',
					api_name: 'MblSafari9.0',
					default_live_test_browser: true,
					icon_class: 'safari-mobile',
					major_browser: true,
					device: 'mobile',
					selenium_version: '3.4.0',
					webdriver_type: 'appium',
					webdriver_version: '1.5.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Safari'
						},
					default_config: 'iPadPro-iOS9Sim'
				}
			],
		resolutions:
			[
				{
					width: 750,
					height: 1334,
					name: '750x1334',
					desktop_width: 1600,
					desktop_height: 1200,
					default: true,
					orientation: 'portrait',
					caps:
						{
							deviceOrientation: 'portrait'
						}
				},
				{
					width: 1334,
					height: 750,
					name: '1334x750',
					desktop_width: 1600,
					desktop_height: 1200,
					default: false,
					orientation: 'landscape',
					caps:
						{
							deviceOrientation: 'landscape'
						}
				}
			],
		a: false
	},
	{
		api_name: 'Mac10.14',
		device: 'desktop',
		device_type: null,
		name: 'Mac OSX 10.14',
		version: 'Mac OSX 10.14',
		type: 'Mac',
		icon_class: 'mac',
		upload_file_enabled: true,
		sort_order: 4.3,
		is_webrtc_enabled: true,
		caps:
			{
				platform: 'Mac OSX 10.14'
			},
		browsers:
			[
				{
					name: 'Google Chrome 70 (64-bit)',
					type: 'Chrome',
					version: '70',
					api_name: 'Chrome70x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.11.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.44',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '70x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 71 (64-bit)',
					type: 'Chrome',
					version: '71',
					api_name: 'Chrome71x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.44',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '71x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 72 (64-bit)',
					type: 'Chrome',
					version: '72',
					api_name: 'Chrome72x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.11.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '72.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '72x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 73 (64-bit)',
					type: 'Chrome',
					version: '73',
					api_name: 'Chrome73x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.11.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '73.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '73x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 74 (64-bit)',
					type: 'Chrome',
					version: '74',
					api_name: 'Chrome74x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.11.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '74.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '74x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 75 (64-bit)',
					type: 'Chrome',
					version: '75',
					api_name: 'Chrome75x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.11.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '75.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '75x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 76 (64-bit)',
					type: 'Chrome',
					version: '76',
					api_name: 'Chrome76x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.14.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '75.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '76x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 77 (64-bit)',
					type: 'Chrome',
					version: '77',
					api_name: 'Chrome77x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.141.59',
					webdriver_type: 'chromedriver',
					webdriver_version: '77.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '77x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 63',
					type: 'Firefox',
					version: '63',
					api_name: 'FF63',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.11.0',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.23.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '63'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 64',
					type: 'Firefox',
					version: '64',
					api_name: 'FF64',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.11.0',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.23.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 67',
					type: 'Firefox',
					version: '67',
					api_name: 'FF67',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.11.0',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.23.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '67'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 68',
					type: 'Firefox',
					version: '68',
					api_name: 'FF68',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.11.0',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.23.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '68'
						},
					default_config: 'Mac10.14'
				},
				{
					name: 'Firefox 69',
					type: 'Firefox',
					version: '69',
					api_name: 'FF69',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.11.0',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.23.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '69'
						},
					default_config: 'Win10'
				},
				{
					name: 'Safari 12',
					type: 'Safari',
					version: '12',
					api_name: 'Safari12',
					default_live_test_browser: true,
					icon_class: 'safari',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.11.0',
					webdriver_type: 'safaridriver',
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Safari',
							version: '12'
						},
					default_config: 'Mac10.14'
				}
			],
		resolutions:
			[
				{
					width: 1024,
					height: 768,
					name: '1024x768',
					desktop_width: 1024,
					desktop_height: 768,
					default: false,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '1024x768'
						}
				},
				{
					width: 1152,
					height: 864,
					name: '1152x864',
					desktop_width: 1152,
					desktop_height: 864,
					default: false,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '1152x864'
						}
				},
				{
					width: 1152,
					height: 900,
					name: '1152x900',
					desktop_width: 1152,
					desktop_height: 900,
					default: false,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '1152x900'
						}
				},
				{
					width: 1280,
					height: 800,
					name: '1280x800',
					desktop_width: 1280,
					desktop_height: 800,
					default: false,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '1280x800'
						}
				},
				{
					width: 1280,
					height: 1024,
					name: '1280x1024',
					desktop_width: 1280,
					desktop_height: 1024,
					default: false,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '1280x1024'
						}
				},
				{
					width: 1366,
					height: 768,
					name: '1366x768',
					desktop_width: 1366,
					desktop_height: 768,
					default: true,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '1366x768'
						}
				},
				{
					width: 1400,
					height: 900,
					name: '1400x900',
					desktop_width: 1400,
					desktop_height: 900,
					default: false,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '1400x900'
						}
				},
				{
					width: 1440,
					height: 1050,
					name: '1440x1050',
					desktop_width: 1440,
					desktop_height: 1050,
					default: false,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '1440x1050'
						}
				},
				{
					width: 1920,
					height: 1080,
					name: '1920x1080',
					desktop_width: 1920,
					desktop_height: 1080,
					default: false,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '1920x1080'
						}
				},
				{
					width: 1920,
					height: 1200,
					name: '1920x1200',
					desktop_width: 1920,
					desktop_height: 1200,
					default: false,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '1920x1200'
						}
				},
				{
					width: 2560,
					height: 1600,
					name: '2560x1600',
					desktop_width: 2560,
					desktop_height: 1600,
					default: false,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '2560x1600'
						}
				},
				{
					width: 2560,
					height: 1920,
					name: '2560x1920',
					desktop_width: 2560,
					desktop_height: 1920,
					default: false,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '2560x1920'
						}
				}
			],
		a: true
	},
	{
		api_name: 'Mac10.13',
		device: 'desktop',
		device_type: null,
		name: 'Mac OSX 10.13',
		version: 'Mac OSX 10.13',
		type: 'Mac',
		icon_class: 'mac',
		upload_file_enabled: true,
		sort_order: 4.4,
		is_webrtc_enabled: true,
		caps:
			{
				platform: 'Mac OSX 10.13'
			},
		browsers:
			[
				{
					name: 'Google Chrome 62 (64-bit)',
					type: 'Chrome',
					version: '62',
					api_name: 'Chrome62x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.33',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '62x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 63 (64-bit)',
					type: 'Chrome',
					version: '63',
					api_name: 'Chrome63x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.11.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.33',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '63x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 64 (64-bit)',
					type: 'Chrome',
					version: '64',
					api_name: 'Chrome64x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.11.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.37',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '64x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 65 (64-bit)',
					type: 'Chrome',
					version: '65',
					api_name: 'Chrome65x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.11.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.37',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '65x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 66 (64-bit)',
					type: 'Chrome',
					version: '66',
					api_name: 'Chrome66x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.11.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.38',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '66x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 67 (64-bit)',
					type: 'Chrome',
					version: '67',
					api_name: 'Chrome67x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.41',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '67x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 68 (64-bit)',
					type: 'Chrome',
					version: '68',
					api_name: 'Chrome68x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.42',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '68x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 69 (64-bit)',
					type: 'Chrome',
					version: '69',
					api_name: 'Chrome69x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.42',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '69x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 70 (64-bit)',
					type: 'Chrome',
					version: '70',
					api_name: 'Chrome70x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.11.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.44',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '70x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 71 (64-bit)',
					type: 'Chrome',
					version: '71',
					api_name: 'Chrome71x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.44',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '71x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 72 (64-bit)',
					type: 'Chrome',
					version: '72',
					api_name: 'Chrome72x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '72.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '72x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 73 (64-bit)',
					type: 'Chrome',
					version: '73',
					api_name: 'Chrome73x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '73.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '73x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 74 (64-bit)',
					type: 'Chrome',
					version: '74',
					api_name: 'Chrome74x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '74.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '74x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 75 (64-bit)',
					type: 'Chrome',
					version: '75',
					api_name: 'Chrome75x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.14.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '75.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '75x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 76 (64-bit)',
					type: 'Chrome',
					version: '76',
					api_name: 'Chrome76x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.14.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '75.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '76x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 77 (64-bit)',
					type: 'Chrome',
					version: '77',
					api_name: 'Chrome77x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.141.59',
					webdriver_type: 'chromedriver',
					webdriver_version: '77.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '77x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 56',
					type: 'Firefox',
					version: '56',
					api_name: 'FF56',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.8.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.19.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '56'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 57',
					type: 'Firefox',
					version: '57',
					api_name: 'FF57',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.8.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.19.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '57'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 58',
					type: 'Firefox',
					version: '58',
					api_name: 'FF58',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.8.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.19.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '58'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 59',
					type: 'Firefox',
					version: '59',
					api_name: 'FF59',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.8.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.20.1',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '59'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 60',
					type: 'Firefox',
					version: '60',
					api_name: 'FF60',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.8.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.19.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '60'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 61',
					type: 'Firefox',
					version: '61',
					api_name: 'FF61',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.8.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.19.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '61'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 62',
					type: 'Firefox',
					version: '62',
					api_name: 'FF62',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.8.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.19.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '62'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 63',
					type: 'Firefox',
					version: '63',
					api_name: 'FF63',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.11.0',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.23.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '63'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 64',
					type: 'Firefox',
					version: '64',
					api_name: 'FF64',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.11.0',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.22.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 65',
					type: 'Firefox',
					version: '65',
					api_name: 'FF65',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.11.0',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.22.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '65'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 66',
					type: 'Firefox',
					version: '66',
					api_name: 'FF66',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.11.0',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.22.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '66'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 67',
					type: 'Firefox',
					version: '67',
					api_name: 'FF67',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.11.0',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.22.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '67'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 68',
					type: 'Firefox',
					version: '68',
					api_name: 'FF68',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.11.0',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.22.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '68'
						},
					default_config: 'Mac10.14'
				},
				{
					name: 'Safari 11',
					type: 'Safari',
					version: '11',
					api_name: 'Safari11',
					default_live_test_browser: true,
					icon_class: 'safari',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.11.0',
					webdriver_type: 'safaridriver',
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Safari',
							version: '11'
						},
					default_config: 'Mac10.13'
				}
			],
		resolutions:
			[
				{
					width: 1024,
					height: 768,
					name: '1024x768',
					desktop_width: 1024,
					desktop_height: 768,
					default: false,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '1024x768'
						}
				},
				{
					width: 1152,
					height: 864,
					name: '1152x864',
					desktop_width: 1152,
					desktop_height: 864,
					default: false,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '1152x864'
						}
				},
				{
					width: 1152,
					height: 900,
					name: '1152x900',
					desktop_width: 1152,
					desktop_height: 900,
					default: false,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '1152x900'
						}
				},
				{
					width: 1280,
					height: 800,
					name: '1280x800',
					desktop_width: 1280,
					desktop_height: 800,
					default: false,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '1280x800'
						}
				},
				{
					width: 1280,
					height: 1024,
					name: '1280x1024',
					desktop_width: 1280,
					desktop_height: 1024,
					default: false,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '1280x1024'
						}
				},
				{
					width: 1366,
					height: 768,
					name: '1366x768',
					desktop_width: 1366,
					desktop_height: 768,
					default: true,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '1366x768'
						}
				},
				{
					width: 1400,
					height: 900,
					name: '1400x900',
					desktop_width: 1400,
					desktop_height: 900,
					default: false,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '1400x900'
						}
				},
				{
					width: 1920,
					height: 1200,
					name: '1920x1200',
					desktop_width: 1920,
					desktop_height: 1200,
					default: false,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '1920x1200'
						}
				},
				{
					width: 2560,
					height: 1600,
					name: '2560x1600',
					desktop_width: 2560,
					desktop_height: 1600,
					default: false,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '2560x1600'
						}
				}
			],
		a: false
	},
	{
		api_name: 'Mac10.12',
		device: 'desktop',
		device_type: null,
		name: 'Mac OSX 10.12',
		version: 'Mac OSX 10.12',
		type: 'Mac',
		icon_class: 'mac',
		upload_file_enabled: true,
		sort_order: 4.5,
		is_webrtc_enabled: true,
		caps:
			{
				platform: 'Mac OSX 10.12'
			},
		browsers:
			[
				{
					name: 'Google Chrome 52 (64-bit)',
					type: 'Chrome',
					version: '52',
					api_name: 'Chrome52x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.22',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '52x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 53 (64-bit)',
					type: 'Chrome',
					version: '53',
					api_name: 'Chrome53x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.22',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '53x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 54 (64-bit)',
					type: 'Chrome',
					version: '54',
					api_name: 'Chrome54x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.27',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '54x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 55 (64-bit)',
					type: 'Chrome',
					version: '55',
					api_name: 'Chrome55x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.28',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '55x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 56 (64-bit)',
					type: 'Chrome',
					version: '56',
					api_name: 'Chrome56x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.29',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '56x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 57 (64-bit)',
					type: 'Chrome',
					version: '57',
					api_name: 'Chrome57x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.29',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '57x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 58 (64-bit)',
					type: 'Chrome',
					version: '58',
					api_name: 'Chrome58x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.30',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '58x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 59 (64-bit)',
					type: 'Chrome',
					version: '59',
					api_name: 'Chrome59x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.30',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '59x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 60 (64-bit)',
					type: 'Chrome',
					version: '60',
					api_name: 'Chrome60x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.30',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '60x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 61 (64-bit)',
					type: 'Chrome',
					version: '61',
					api_name: 'Chrome61x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.33',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '61x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 62 (64-bit)',
					type: 'Chrome',
					version: '62',
					api_name: 'Chrome62x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.33',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '62x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 63 (64-bit)',
					type: 'Chrome',
					version: '63',
					api_name: 'Chrome63x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.11.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.33',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '63x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 64 (64-bit)',
					type: 'Chrome',
					version: '64',
					api_name: 'Chrome64x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.11.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.37',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '64x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 65 (64-bit)',
					type: 'Chrome',
					version: '65',
					api_name: 'Chrome65x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.11.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.37',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '65x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 66 (64-bit)',
					type: 'Chrome',
					version: '66',
					api_name: 'Chrome66x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.11.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.38',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '66x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 67 (64-bit)',
					type: 'Chrome',
					version: '67',
					api_name: 'Chrome67x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.11.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.41',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '67x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 68 (64-bit)',
					type: 'Chrome',
					version: '68',
					api_name: 'Chrome68x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.11.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.42',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '68x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 69 (64-bit)',
					type: 'Chrome',
					version: '69',
					api_name: 'Chrome69x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.11.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.42',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '69x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 70 (64-bit)',
					type: 'Chrome',
					version: '70',
					api_name: 'Chrome70x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.11.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.44',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '70x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 71 (64-bit)',
					type: 'Chrome',
					version: '71',
					api_name: 'Chrome71x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.44',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '71x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 72 (64-bit)',
					type: 'Chrome',
					version: '72',
					api_name: 'Chrome72x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '72.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '72x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 73 (64-bit)',
					type: 'Chrome',
					version: '73',
					api_name: 'Chrome73x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '73.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '73x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 74 (64-bit)',
					type: 'Chrome',
					version: '74',
					api_name: 'Chrome74x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '74.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '74x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 75 (64-bit)',
					type: 'Chrome',
					version: '75',
					api_name: 'Chrome75x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.14.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '75.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '75x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 77 (64-bit)',
					type: 'Chrome',
					version: '77',
					api_name: 'Chrome77x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.141.59',
					webdriver_type: 'chromedriver',
					webdriver_version: '77.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '77x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 47',
					type: 'Firefox',
					version: '47',
					api_name: 'FF47',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.0.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.11.1',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '47'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 48',
					type: 'Firefox',
					version: '48',
					api_name: 'FF48',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.0.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.11.1',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '48'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 49',
					type: 'Firefox',
					version: '49',
					api_name: 'FF49',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.0.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.11.1',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '49'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 50',
					type: 'Firefox',
					version: '50',
					api_name: 'FF50',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.0.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.11.1',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '50'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 51',
					type: 'Firefox',
					version: '51',
					api_name: 'FF51',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.0.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.11.1',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '51'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 52',
					type: 'Firefox',
					version: '52',
					api_name: 'FF52',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.17.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '52'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 53',
					type: 'Firefox',
					version: '53',
					api_name: 'FF53',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.17.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '53'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 54',
					type: 'Firefox',
					version: '54',
					api_name: 'FF54',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.17.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '54'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 55',
					type: 'Firefox',
					version: '55',
					api_name: 'FF55',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.8.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.19.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '55'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 56',
					type: 'Firefox',
					version: '56',
					api_name: 'FF56',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.8.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.19.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '56'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 57',
					type: 'Firefox',
					version: '57',
					api_name: 'FF57',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.8.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.19.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '57'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 58',
					type: 'Firefox',
					version: '58',
					api_name: 'FF58',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.8.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.19.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '58'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 59',
					type: 'Firefox',
					version: '59',
					api_name: 'FF59',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.8.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.20.1',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '59'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 60',
					type: 'Firefox',
					version: '60',
					api_name: 'FF60',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.8.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.19.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '60'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 61',
					type: 'Firefox',
					version: '61',
					api_name: 'FF61',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.8.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.19.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '61'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 62',
					type: 'Firefox',
					version: '62',
					api_name: 'FF62',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.8.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.19.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '62'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 63',
					type: 'Firefox',
					version: '63',
					api_name: 'FF63',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.11.0',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.23.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '63'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 64',
					type: 'Firefox',
					version: '64',
					api_name: 'FF64',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.11.0',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.23.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 65',
					type: 'Firefox',
					version: '65',
					api_name: 'FF65',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.11.0',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.23.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '65'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 66',
					type: 'Firefox',
					version: '66',
					api_name: 'FF66',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.11.0',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.23.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '66'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 67',
					type: 'Firefox',
					version: '67',
					api_name: 'FF67',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.11.0',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.23.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '67'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 68',
					type: 'Firefox',
					version: '68',
					api_name: 'FF68',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.11.0',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.23.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '68'
						},
					default_config: 'Mac10.14'
				},
				{
					name: 'Safari 10',
					type: 'Safari',
					version: '10',
					api_name: 'Safari10',
					default_live_test_browser: true,
					icon_class: 'safari',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'safaridriver',
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Safari',
							version: '10'
						},
					default_config: 'Mac10.12'
				}
			],
		resolutions:
			[
				{
					width: 1024,
					height: 768,
					name: '1024x768',
					desktop_width: 1024,
					desktop_height: 768,
					default: false,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '1024x768'
						}
				},
				{
					width: 1152,
					height: 864,
					name: '1152x864',
					desktop_width: 1152,
					desktop_height: 864,
					default: false,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '1152x864'
						}
				},
				{
					width: 1152,
					height: 900,
					name: '1152x900',
					desktop_width: 1152,
					desktop_height: 900,
					default: false,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '1152x900'
						}
				},
				{
					width: 1280,
					height: 800,
					name: '1280x800',
					desktop_width: 1280,
					desktop_height: 800,
					default: false,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '1280x800'
						}
				},
				{
					width: 1280,
					height: 1024,
					name: '1280x1024',
					desktop_width: 1280,
					desktop_height: 1024,
					default: false,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '1280x1024'
						}
				},
				{
					width: 1366,
					height: 768,
					name: '1366x768',
					desktop_width: 1366,
					desktop_height: 768,
					default: true,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '1366x768'
						}
				},
				{
					width: 1400,
					height: 900,
					name: '1400x900',
					desktop_width: 1400,
					desktop_height: 900,
					default: false,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '1400x900'
						}
				},
				{
					width: 1920,
					height: 1200,
					name: '1920x1200',
					desktop_width: 1920,
					desktop_height: 1200,
					default: false,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '1920x1200'
						}
				},
				{
					width: 2560,
					height: 1600,
					name: '2560x1600',
					desktop_width: 2560,
					desktop_height: 1600,
					default: false,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '2560x1600'
						}
				}
			],
		a: false
	},
	{
		api_name: 'Mac10.11',
		device: 'desktop',
		device_type: null,
		name: 'Mac OSX 10.11',
		version: 'Mac OSX 10.11',
		type: 'Mac',
		icon_class: 'mac',
		upload_file_enabled: true,
		sort_order: 4.6,
		is_webrtc_enabled: true,
		caps:
			{
				platform: 'Mac OSX 10.11'
			},
		browsers:
			[
				{
					name: 'Google Chrome 45 (64-bit)',
					type: 'Chrome',
					version: '45',
					api_name: 'Chrome45x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.47.1',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.20',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '45x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 46 (64-bit)',
					type: 'Chrome',
					version: '46',
					api_name: 'Chrome46x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.21',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '46x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 47 (64-bit)',
					type: 'Chrome',
					version: '47',
					api_name: 'Chrome47x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.21',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '47x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 48 (64-bit)',
					type: 'Chrome',
					version: '48',
					api_name: 'Chrome48x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.21',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '48x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 49 (64-bit)',
					type: 'Chrome',
					version: '49',
					api_name: 'Chrome49x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.22',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '49x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 50 (64-bit)',
					type: 'Chrome',
					version: '50',
					api_name: 'Chrome50x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.22',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '50x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 51 (64-bit)',
					type: 'Chrome',
					version: '51',
					api_name: 'Chrome51x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.22',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '51x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 52 (64-bit)',
					type: 'Chrome',
					version: '52',
					api_name: 'Chrome52x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.22',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '52x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 53 (64-bit)',
					type: 'Chrome',
					version: '53',
					api_name: 'Chrome53x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.22',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '53x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 54 (64-bit)',
					type: 'Chrome',
					version: '54',
					api_name: 'Chrome54x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.27',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '54x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 55 (64-bit)',
					type: 'Chrome',
					version: '55',
					api_name: 'Chrome55x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.28',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '55x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 56 (64-bit)',
					type: 'Chrome',
					version: '56',
					api_name: 'Chrome56x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.29',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '56x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 57 (64-bit)',
					type: 'Chrome',
					version: '57',
					api_name: 'Chrome57x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.29',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '57x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 58 (64-bit)',
					type: 'Chrome',
					version: '58',
					api_name: 'Chrome58x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.30',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '58x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 59 (64-bit)',
					type: 'Chrome',
					version: '59',
					api_name: 'Chrome59x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.30',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '59x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 60 (64-bit)',
					type: 'Chrome',
					version: '60',
					api_name: 'Chrome60x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.30',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '60x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 61 (64-bit)',
					type: 'Chrome',
					version: '61',
					api_name: 'Chrome61x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.33',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '61x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 62 (64-bit)',
					type: 'Chrome',
					version: '62',
					api_name: 'Chrome62x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.33',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '62x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 63 (64-bit)',
					type: 'Chrome',
					version: '63',
					api_name: 'Chrome63x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.11.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.33',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '63x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 64 (64-bit)',
					type: 'Chrome',
					version: '64',
					api_name: 'Chrome64x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.11.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.37',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '64x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 65 (64-bit)',
					type: 'Chrome',
					version: '65',
					api_name: 'Chrome65x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.11.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.37',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '65x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 66 (64-bit)',
					type: 'Chrome',
					version: '66',
					api_name: 'Chrome66x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.11.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.38',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '66x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 67 (64-bit)',
					type: 'Chrome',
					version: '67',
					api_name: 'Chrome67x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.41',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '67x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 68 (64-bit)',
					type: 'Chrome',
					version: '68',
					api_name: 'Chrome68x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.42',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '68x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 69 (64-bit)',
					type: 'Chrome',
					version: '69',
					api_name: 'Chrome69x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.42',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '69x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 70 (64-bit)',
					type: 'Chrome',
					version: '70',
					api_name: 'Chrome70x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.11.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.44',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '70x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 71 (64-bit)',
					type: 'Chrome',
					version: '71',
					api_name: 'Chrome71x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.44',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '71x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 72 (64-bit)',
					type: 'Chrome',
					version: '72',
					api_name: 'Chrome72x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '72.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '72x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 73 (64-bit)',
					type: 'Chrome',
					version: '73',
					api_name: 'Chrome73x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '73.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '73x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 74 (64-bit)',
					type: 'Chrome',
					version: '74',
					api_name: 'Chrome74x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '74.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '74x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 75 (64-bit)',
					type: 'Chrome',
					version: '75',
					api_name: 'Chrome75x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.14.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '75.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '75x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 76 (64-bit)',
					type: 'Chrome',
					version: '76',
					api_name: 'Chrome76x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.14.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '75.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '76x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 40',
					type: 'Firefox',
					version: '40',
					api_name: 'FF40',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.46.0',
					webdriver_type: null,
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '40'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 41',
					type: 'Firefox',
					version: '41',
					api_name: 'FF41',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.48.2',
					webdriver_type: null,
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '41'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 42',
					type: 'Firefox',
					version: '42',
					api_name: 'FF42',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.48.2',
					webdriver_type: null,
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '42'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 43',
					type: 'Firefox',
					version: '43',
					api_name: 'FF43',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.48.2',
					webdriver_type: null,
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '43'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 44',
					type: 'Firefox',
					version: '44',
					api_name: 'FF44',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.48.2',
					webdriver_type: null,
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '44'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 45',
					type: 'Firefox',
					version: '45',
					api_name: 'FF45',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: null,
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '45'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 46',
					type: 'Firefox',
					version: '46',
					api_name: 'FF46',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: null,
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '46'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 47',
					type: 'Firefox',
					version: '47',
					api_name: 'FF47',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.0.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.11.1',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '47'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 48',
					type: 'Firefox',
					version: '48',
					api_name: 'FF48',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.0.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.11.1',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '48'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 49',
					type: 'Firefox',
					version: '49',
					api_name: 'FF49',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.0.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.11.1',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '49'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 50',
					type: 'Firefox',
					version: '50',
					api_name: 'FF50',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.0.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.11.1',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '50'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 51',
					type: 'Firefox',
					version: '51',
					api_name: 'FF51',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.0.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.11.1',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '51'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 52',
					type: 'Firefox',
					version: '52',
					api_name: 'FF52',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.17.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '52'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 53',
					type: 'Firefox',
					version: '53',
					api_name: 'FF53',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.17.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '53'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 54',
					type: 'Firefox',
					version: '54',
					api_name: 'FF54',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.17.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '54'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 55',
					type: 'Firefox',
					version: '55',
					api_name: 'FF55',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.8.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.19.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '55'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 56',
					type: 'Firefox',
					version: '56',
					api_name: 'FF56',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.8.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.19.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '56'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 57',
					type: 'Firefox',
					version: '57',
					api_name: 'FF57',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.8.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.19.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '57'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 58',
					type: 'Firefox',
					version: '58',
					api_name: 'FF58',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.8.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.19.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '58'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 59',
					type: 'Firefox',
					version: '59',
					api_name: 'FF59',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.8.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.20.1',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '59'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 60',
					type: 'Firefox',
					version: '60',
					api_name: 'FF60',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.8.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.19.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '60'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 61',
					type: 'Firefox',
					version: '61',
					api_name: 'FF61',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.8.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.19.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '61'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 62',
					type: 'Firefox',
					version: '62',
					api_name: 'FF62',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.8.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.19.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '62'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 63',
					type: 'Firefox',
					version: '63',
					api_name: 'FF63',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.11.0',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.23.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '63'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 64',
					type: 'Firefox',
					version: '64',
					api_name: 'FF64',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.11.0',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.23.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 65',
					type: 'Firefox',
					version: '65',
					api_name: 'FF65',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.11.0',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.23.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '65'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 66',
					type: 'Firefox',
					version: '66',
					api_name: 'FF66',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.11.0',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.23.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '66'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 67',
					type: 'Firefox',
					version: '67',
					api_name: 'FF67',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.11.0',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.23.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '67'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 68',
					type: 'Firefox',
					version: '68',
					api_name: 'FF68',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.11.0',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.23.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '68'
						},
					default_config: 'Mac10.14'
				},
				{
					name: 'Safari 9',
					type: 'Safari',
					version: '9',
					api_name: 'Safari9',
					default_live_test_browser: true,
					icon_class: 'safari',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.48.2',
					webdriver_type: 'safaridriver',
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Safari',
							version: '9'
						},
					default_config: 'Mac10.11'
				}
			],
		resolutions:
			[
				{
					width: 1024,
					height: 768,
					name: '1024x768',
					desktop_width: 1024,
					desktop_height: 768,
					default: false,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '1024x768'
						}
				},
				{
					width: 1152,
					height: 864,
					name: '1152x864',
					desktop_width: 1152,
					desktop_height: 864,
					default: false,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '1152x864'
						}
				},
				{
					width: 1152,
					height: 900,
					name: '1152x900',
					desktop_width: 1152,
					desktop_height: 900,
					default: false,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '1152x900'
						}
				},
				{
					width: 1280,
					height: 800,
					name: '1280x800',
					desktop_width: 1280,
					desktop_height: 800,
					default: false,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '1280x800'
						}
				},
				{
					width: 1280,
					height: 1024,
					name: '1280x1024',
					desktop_width: 1280,
					desktop_height: 1024,
					default: false,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '1280x1024'
						}
				},
				{
					width: 1366,
					height: 768,
					name: '1366x768',
					desktop_width: 1366,
					desktop_height: 768,
					default: true,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '1366x768'
						}
				},
				{
					width: 1400,
					height: 900,
					name: '1400x900',
					desktop_width: 1400,
					desktop_height: 900,
					default: false,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '1400x900'
						}
				},
				{
					width: 1400,
					height: 1050,
					name: '1400x1050',
					desktop_width: 1400,
					desktop_height: 1050,
					default: false,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '1400x1050'
						}
				},
				{
					width: 1600,
					height: 1200,
					name: '1600x1200',
					desktop_width: 1600,
					desktop_height: 1200,
					default: false,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '1600x1200'
						}
				},
				{
					width: 1920,
					height: 1200,
					name: '1920x1200',
					desktop_width: 1920,
					desktop_height: 1200,
					default: false,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '1920x1200'
						}
				},
				{
					width: 2560,
					height: 1440,
					name: '2560x1440',
					desktop_width: 2560,
					desktop_height: 1440,
					default: false,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '2560x1440'
						}
				},
				{
					width: 2560,
					height: 1600,
					name: '2560x1600',
					desktop_width: 2560,
					desktop_height: 1600,
					default: false,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '2560x1600'
						}
				}
			],
		a: false
	},
	{
		api_name: 'Mac10.10',
		device: 'desktop',
		device_type: null,
		name: 'Mac OSX 10.10',
		version: 'Mac OSX 10.10',
		type: 'Mac',
		icon_class: 'mac',
		upload_file_enabled: true,
		sort_order: 4.7,
		is_webrtc_enabled: true,
		caps:
			{
				platform: 'Mac OSX 10.10'
			},
		browsers:
			[
				{
					name: 'Google Chrome 50 (64-bit)',
					type: 'Chrome',
					version: '50',
					api_name: 'Chrome50x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.22',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '50x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 51 (64-bit)',
					type: 'Chrome',
					version: '51',
					api_name: 'Chrome51x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.22',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '51x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 52 (64-bit)',
					type: 'Chrome',
					version: '52',
					api_name: 'Chrome52x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.22',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '52x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 53 (64-bit)',
					type: 'Chrome',
					version: '53',
					api_name: 'Chrome53x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.22',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '53x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 54 (64-bit)',
					type: 'Chrome',
					version: '54',
					api_name: 'Chrome54x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.27',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '54x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 55 (64-bit)',
					type: 'Chrome',
					version: '55',
					api_name: 'Chrome55x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.28',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '55x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 56 (64-bit)',
					type: 'Chrome',
					version: '56',
					api_name: 'Chrome56x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.29',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '56x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 57 (64-bit)',
					type: 'Chrome',
					version: '57',
					api_name: 'Chrome57x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.29',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '57x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 58 (64-bit)',
					type: 'Chrome',
					version: '58',
					api_name: 'Chrome58x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.30',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '58x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 59 (64-bit)',
					type: 'Chrome',
					version: '59',
					api_name: 'Chrome59x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.30',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '59x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 60 (64-bit)',
					type: 'Chrome',
					version: '60',
					api_name: 'Chrome60x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.30',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '60x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 61 (64-bit)',
					type: 'Chrome',
					version: '61',
					api_name: 'Chrome61x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.33',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '61x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 62 (64-bit)',
					type: 'Chrome',
					version: '62',
					api_name: 'Chrome62x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.33',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '62x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 63 (64-bit)',
					type: 'Chrome',
					version: '63',
					api_name: 'Chrome63x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.11.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.33',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '63x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 64 (64-bit)',
					type: 'Chrome',
					version: '64',
					api_name: 'Chrome64x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.11.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.37',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '64x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 65 (64-bit)',
					type: 'Chrome',
					version: '65',
					api_name: 'Chrome65x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.11.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.37',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '65x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 66 (64-bit)',
					type: 'Chrome',
					version: '66',
					api_name: 'Chrome66x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.11.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.38',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '66x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 67 (64-bit)',
					type: 'Chrome',
					version: '67',
					api_name: 'Chrome67x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.41',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '67x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 68 (64-bit)',
					type: 'Chrome',
					version: '68',
					api_name: 'Chrome68x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.42',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '68x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 69 (64-bit)',
					type: 'Chrome',
					version: '69',
					api_name: 'Chrome69x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.42',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '69x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 70 (64-bit)',
					type: 'Chrome',
					version: '70',
					api_name: 'Chrome70x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.11.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.44',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '70x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 71 (64-bit)',
					type: 'Chrome',
					version: '71',
					api_name: 'Chrome71x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.44',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '71x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 72 (64-bit)',
					type: 'Chrome',
					version: '72',
					api_name: 'Chrome72x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '72.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '72x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 73 (64-bit)',
					type: 'Chrome',
					version: '73',
					api_name: 'Chrome73x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '73.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '73x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 74 (64-bit)',
					type: 'Chrome',
					version: '74',
					api_name: 'Chrome74x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '74.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '74x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 75 (64-bit)',
					type: 'Chrome',
					version: '75',
					api_name: 'Chrome75x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.14.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '75.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '75x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 77 (64-bit)',
					type: 'Chrome',
					version: '77',
					api_name: 'Chrome77x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.141.59',
					webdriver_type: 'chromedriver',
					webdriver_version: '77.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '77x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 37',
					type: 'Firefox',
					version: '37',
					api_name: 'FF37',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: null,
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '37'
						},
					default_config: 'Win8.1'
				},
				{
					name: 'Firefox 38',
					type: 'Firefox',
					version: '38',
					api_name: 'FF38',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: null,
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '38'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 40',
					type: 'Firefox',
					version: '40',
					api_name: 'FF40',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: null,
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '40'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 41',
					type: 'Firefox',
					version: '41',
					api_name: 'FF41',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: null,
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '41'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 42',
					type: 'Firefox',
					version: '42',
					api_name: 'FF42',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: null,
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '42'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 43',
					type: 'Firefox',
					version: '43',
					api_name: 'FF43',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: null,
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '43'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 44',
					type: 'Firefox',
					version: '44',
					api_name: 'FF44',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: null,
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '44'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 45',
					type: 'Firefox',
					version: '45',
					api_name: 'FF45',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: null,
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '45'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 46',
					type: 'Firefox',
					version: '46',
					api_name: 'FF46',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: null,
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '46'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 47',
					type: 'Firefox',
					version: '47',
					api_name: 'FF47',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.0.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.11.1',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '47'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 48',
					type: 'Firefox',
					version: '48',
					api_name: 'FF48',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.0.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.11.1',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '48'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 49',
					type: 'Firefox',
					version: '49',
					api_name: 'FF49',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.0.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.11.1',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '49'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 50',
					type: 'Firefox',
					version: '50',
					api_name: 'FF50',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.0.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.11.1',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '50'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 51',
					type: 'Firefox',
					version: '51',
					api_name: 'FF51',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.0.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.11.1',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '51'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 52',
					type: 'Firefox',
					version: '52',
					api_name: 'FF52',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.17.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '52'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 53',
					type: 'Firefox',
					version: '53',
					api_name: 'FF53',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.17.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '53'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 54',
					type: 'Firefox',
					version: '54',
					api_name: 'FF54',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.17.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '54'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 55',
					type: 'Firefox',
					version: '55',
					api_name: 'FF55',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.8.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.19.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '55'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 56',
					type: 'Firefox',
					version: '56',
					api_name: 'FF56',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.8.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.19.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '56'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 57',
					type: 'Firefox',
					version: '57',
					api_name: 'FF57',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.8.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.19.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '57'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 58',
					type: 'Firefox',
					version: '58',
					api_name: 'FF58',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.8.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.19.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '58'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 59',
					type: 'Firefox',
					version: '59',
					api_name: 'FF59',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.8.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.20.1',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '59'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 60',
					type: 'Firefox',
					version: '60',
					api_name: 'FF60',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.8.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.19.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '60'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 61',
					type: 'Firefox',
					version: '61',
					api_name: 'FF61',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.8.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.19.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '61'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 62',
					type: 'Firefox',
					version: '62',
					api_name: 'FF62',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.8.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.19.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '62'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 63',
					type: 'Firefox',
					version: '63',
					api_name: 'FF63',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.11.0',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.23.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '63'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 65',
					type: 'Firefox',
					version: '65',
					api_name: 'FF65',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.11.0',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.23.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '65'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 66',
					type: 'Firefox',
					version: '66',
					api_name: 'FF66',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.11.0',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.23.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '66'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 67',
					type: 'Firefox',
					version: '67',
					api_name: 'FF67',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.11.0',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.23.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '67'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 68',
					type: 'Firefox',
					version: '68',
					api_name: 'FF68',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.11.0',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.23.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '68'
						},
					default_config: 'Mac10.14'
				},
				{
					name: 'Firefox 69',
					type: 'Firefox',
					version: '69',
					api_name: 'FF69',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.11.0',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.23.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '69'
						},
					default_config: 'Win10'
				},
				{
					name: 'Safari 8',
					type: 'Safari',
					version: '8',
					api_name: 'Safari8',
					default_live_test_browser: true,
					icon_class: 'safari',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.48.2',
					webdriver_type: 'safaridriver',
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Safari',
							version: '8'
						},
					default_config: 'Mac10.10'
				}
			],
		resolutions:
			[
				{
					width: 1024,
					height: 768,
					name: '1024x768',
					desktop_width: 1024,
					desktop_height: 768,
					default: false,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '1024x768'
						}
				},
				{
					width: 1152,
					height: 864,
					name: '1152x864',
					desktop_width: 1152,
					desktop_height: 864,
					default: false,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '1152x864'
						}
				},
				{
					width: 1152,
					height: 900,
					name: '1152x900',
					desktop_width: 1152,
					desktop_height: 900,
					default: false,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '1152x900'
						}
				},
				{
					width: 1280,
					height: 800,
					name: '1280x800',
					desktop_width: 1280,
					desktop_height: 800,
					default: false,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '1280x800'
						}
				},
				{
					width: 1280,
					height: 1024,
					name: '1280x1024',
					desktop_width: 1280,
					desktop_height: 1024,
					default: false,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '1280x1024'
						}
				},
				{
					width: 1366,
					height: 768,
					name: '1366x768',
					desktop_width: 1366,
					desktop_height: 768,
					default: true,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '1366x768'
						}
				},
				{
					width: 1400,
					height: 900,
					name: '1400x900',
					desktop_width: 1400,
					desktop_height: 900,
					default: false,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '1400x900'
						}
				},
				{
					width: 1400,
					height: 1050,
					name: '1400x1050',
					desktop_width: 1400,
					desktop_height: 1050,
					default: false,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '1400x1050'
						}
				},
				{
					width: 1600,
					height: 1200,
					name: '1600x1200',
					desktop_width: 1600,
					desktop_height: 1200,
					default: false,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '1600x1200'
						}
				},
				{
					width: 1920,
					height: 1200,
					name: '1920x1200',
					desktop_width: 1920,
					desktop_height: 1200,
					default: false,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '1920x1200'
						}
				},
				{
					width: 2560,
					height: 1440,
					name: '2560x1440',
					desktop_width: 2560,
					desktop_height: 1440,
					default: false,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '2560x1440'
						}
				},
				{
					width: 2560,
					height: 1600,
					name: '2560x1600',
					desktop_width: 2560,
					desktop_height: 1600,
					default: false,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '2560x1600'
						}
				}
			],
		a: false
	},
	{
		api_name: 'UbuntuHeadless',
		device: 'desktop',
		device_type: null,
		name: 'Ubuntu Headless',
		version: 'Headless',
		type: 'Ubuntu',
		icon_class: 'ubuntu',
		upload_file_enabled: true,
		sort_order: 9.3,
		is_webrtc_enabled: false,
		caps:
			{
				platform: 'Headless'
			},
		browsers:
			[
				{
					name: 'Google Chrome 76 (64-bit)',
					type: 'Chrome',
					version: '76',
					api_name: 'Chrome76x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.141.59',
					webdriver_type: 'chromedriver',
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '76x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 69 (64-bit)',
					type: 'Firefox',
					version: '69',
					api_name: 'FF69x64',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.141.59',
					webdriver_type: 'geckodriver',
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '69x64'
						},
					default_config: 'Win10'
				}
			],
		resolutions:
			[
				{
					width: 800,
					height: 600,
					name: '800x600',
					desktop_width: 800,
					desktop_height: 600,
					default: false,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '800x600'
						}
				},
				{
					width: 1024,
					height: 768,
					name: '1024x768',
					desktop_width: 1024,
					desktop_height: 768,
					default: false,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '1024x768'
						}
				},
				{
					width: 1152,
					height: 864,
					name: '1152x864',
					desktop_width: 1152,
					desktop_height: 864,
					default: false,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '1152x864'
						}
				},
				{
					width: 1280,
					height: 1024,
					name: '1280x1024',
					desktop_width: 1280,
					desktop_height: 1024,
					default: false,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '1280x1024'
						}
				},
				{
					width: 1360,
					height: 768,
					name: '1360x768',
					desktop_width: 1360,
					desktop_height: 768,
					default: true,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '1360x768'
						}
				},
				{
					width: 1600,
					height: 1200,
					name: '1600x1200',
					desktop_width: 1600,
					desktop_height: 1200,
					default: false,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '1600x1200'
						}
				},
				{
					width: 1920,
					height: 1080,
					name: '1920x1080',
					desktop_width: 1920,
					desktop_height: 1080,
					default: false,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '1920x1080'
						}
				},
				{
					width: 1920,
					height: 1200,
					name: '1920x1200',
					desktop_width: 1920,
					desktop_height: 1200,
					default: false,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '1920x1200'
						}
				},
				{
					width: 1920,
					height: 1440,
					name: '1920x1440',
					desktop_width: 1920,
					desktop_height: 1440,
					default: false,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '1920x1440'
						}
				},
				{
					width: 2048,
					height: 1536,
					name: '2048x1536',
					desktop_width: 2048,
					desktop_height: 1536,
					default: false,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '2048x1536'
						}
				},
				{
					width: 2560,
					height: 1600,
					name: '2560x1600',
					desktop_width: 2560,
					desktop_height: 1600,
					default: false,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '2560x1600'
						}
				},
				{
					width: 2560,
					height: 1920,
					name: '2560x1920',
					desktop_width: 2560,
					desktop_height: 1920,
					default: false,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '2560x1920'
						}
				}
			],
		a: false
	},
	{
		api_name: 'Win10',
		device: 'desktop',
		device_type: null,
		name: 'Windows 10',
		version: 'Windows 10',
		type: 'Windows',
		icon_class: 'windows-8',
		upload_file_enabled: true,
		sort_order: 12,
		is_webrtc_enabled: true,
		caps:
			{
				platform: 'Windows 10'
			},
		browsers:
			[
				{
					name: 'Google Chrome 43',
					type: 'Chrome',
					version: '43',
					api_name: 'Chrome43',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.46.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.20',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '43'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 44',
					type: 'Chrome',
					version: '44',
					api_name: 'Chrome44',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.46.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.20',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '44'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 45',
					type: 'Chrome',
					version: '45',
					api_name: 'Chrome45',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.48.2',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.20',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '45'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 45 (64-bit)',
					type: 'Chrome',
					version: '45',
					api_name: 'Chrome45x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.48.2',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.20',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '45x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 46',
					type: 'Chrome',
					version: '46',
					api_name: 'Chrome46',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.21',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '46'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 46 (64-bit)',
					type: 'Chrome',
					version: '46',
					api_name: 'Chrome46x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.21',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '46x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 47 (64-bit)',
					type: 'Chrome',
					version: '47',
					api_name: 'Chrome47x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.21',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '47x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 47',
					type: 'Chrome',
					version: '47',
					api_name: 'Chrome47',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.21',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '47'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 48',
					type: 'Chrome',
					version: '48',
					api_name: 'Chrome48',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.21',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '48'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 48 (64-bit)',
					type: 'Chrome',
					version: '48',
					api_name: 'Chrome48x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.21',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '48x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 49',
					type: 'Chrome',
					version: '49',
					api_name: 'Chrome49',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.22',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '49'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 49 (64-bit)',
					type: 'Chrome',
					version: '49',
					api_name: 'Chrome49x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.22',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '49x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 50',
					type: 'Chrome',
					version: '50',
					api_name: 'Chrome50',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.22',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '50'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 50 (64-bit)',
					type: 'Chrome',
					version: '50',
					api_name: 'Chrome50x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.22',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '50x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 51 (64-bit)',
					type: 'Chrome',
					version: '51',
					api_name: 'Chrome51x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.22',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '51x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 51',
					type: 'Chrome',
					version: '51',
					api_name: 'Chrome51',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.22',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '51'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 52',
					type: 'Chrome',
					version: '52',
					api_name: 'Chrome52',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.22',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '52'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 52 (64-bit)',
					type: 'Chrome',
					version: '52',
					api_name: 'Chrome52x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.22',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '52x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 53 (64-bit)',
					type: 'Chrome',
					version: '53',
					api_name: 'Chrome53x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.22',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '53x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 53',
					type: 'Chrome',
					version: '53',
					api_name: 'Chrome53',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.22',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '53'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 54',
					type: 'Chrome',
					version: '54',
					api_name: 'Chrome54',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.27',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '54'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 54 (64-bit)',
					type: 'Chrome',
					version: '54',
					api_name: 'Chrome54x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.27',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '54x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 55',
					type: 'Chrome',
					version: '55',
					api_name: 'Chrome55',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.28',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '55'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 55 (64-bit)',
					type: 'Chrome',
					version: '55',
					api_name: 'Chrome55x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.28',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '55x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 56 (64-bit)',
					type: 'Chrome',
					version: '56',
					api_name: 'Chrome56x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.29',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '56x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 56',
					type: 'Chrome',
					version: '56',
					api_name: 'Chrome56',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.29',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '56'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 57 (64-bit)',
					type: 'Chrome',
					version: '57',
					api_name: 'Chrome57x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.29',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '57x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 57',
					type: 'Chrome',
					version: '57',
					api_name: 'Chrome57',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.29',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '57'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 58 (64-bit)',
					type: 'Chrome',
					version: '58',
					api_name: 'Chrome58x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.30',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '58x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 58',
					type: 'Chrome',
					version: '58',
					api_name: 'Chrome58',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.30',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '58'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 59 (64-bit)',
					type: 'Chrome',
					version: '59',
					api_name: 'Chrome59x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.30',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '59x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 59',
					type: 'Chrome',
					version: '59',
					api_name: 'Chrome59',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.30',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '59'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 60',
					type: 'Chrome',
					version: '60',
					api_name: 'Chrome60',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.33',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '60'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 60 (64-bit)',
					type: 'Chrome',
					version: '60',
					api_name: 'Chrome60x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.33',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '60x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 61 (64-bit)',
					type: 'Chrome',
					version: '61',
					api_name: 'Chrome61x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.33',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '61x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 61',
					type: 'Chrome',
					version: '61',
					api_name: 'Chrome61',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.33',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '61'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 62',
					type: 'Chrome',
					version: '62',
					api_name: 'Chrome62',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.34',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '62'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 62 (64-bit)',
					type: 'Chrome',
					version: '62',
					api_name: 'Chrome62x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.34',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '62x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 63 (64-bit)',
					type: 'Chrome',
					version: '63',
					api_name: 'Chrome63x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.34',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '63x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 63',
					type: 'Chrome',
					version: '63',
					api_name: 'Chrome63',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.34',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '63'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 64',
					type: 'Chrome',
					version: '64',
					api_name: 'Chrome64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.37',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 64 (64-bit)',
					type: 'Chrome',
					version: '64',
					api_name: 'Chrome64x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.37',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '64x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 65 (64-bit)',
					type: 'Chrome',
					version: '65',
					api_name: 'Chrome65x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.37',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '65x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 65',
					type: 'Chrome',
					version: '65',
					api_name: 'Chrome65',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.37',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '65'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 66',
					type: 'Chrome',
					version: '66',
					api_name: 'Chrome66',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.37',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '66'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 66 (64-bit)',
					type: 'Chrome',
					version: '66',
					api_name: 'Chrome66x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.37',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '66x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 67 (64-bit)',
					type: 'Chrome',
					version: '67',
					api_name: 'Chrome67x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.37',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '67x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 67',
					type: 'Chrome',
					version: '67',
					api_name: 'Chrome67',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.37',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '67'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 68',
					type: 'Chrome',
					version: '68',
					api_name: 'Chrome68',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.11.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.42',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '68'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 68 (64-bit)',
					type: 'Chrome',
					version: '68',
					api_name: 'Chrome68x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.11.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.42',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '68x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 69 (64-bit)',
					type: 'Chrome',
					version: '69',
					api_name: 'Chrome69x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.43',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '69x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 69',
					type: 'Chrome',
					version: '69',
					api_name: 'Chrome69',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.41',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '69'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 70 (64-bit)',
					type: 'Chrome',
					version: '70',
					api_name: 'Chrome70x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.41',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '70x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 70',
					type: 'Chrome',
					version: '70',
					api_name: 'Chrome70',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.41',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '70'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 71',
					type: 'Chrome',
					version: '71',
					api_name: 'Chrome71',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.41',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '71'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 71 (64-bit)',
					type: 'Chrome',
					version: '71',
					api_name: 'Chrome71x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.41',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '71x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 72',
					type: 'Chrome',
					version: '72',
					api_name: 'Chrome72',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '72.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '72'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 72 (64-bit)',
					type: 'Chrome',
					version: '72',
					api_name: 'Chrome72x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '72.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '72x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 73 (64-bit)',
					type: 'Chrome',
					version: '73',
					api_name: 'Chrome73x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.11.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '73.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '73x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 73',
					type: 'Chrome',
					version: '73',
					api_name: 'Chrome73',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.11.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '73.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '73'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 74 (64-bit)',
					type: 'Chrome',
					version: '74',
					api_name: 'Chrome74x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '74.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '74x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 74',
					type: 'Chrome',
					version: '74',
					api_name: 'Chrome74',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '74.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '74'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 75',
					type: 'Chrome',
					version: '75',
					api_name: 'Chrome75',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.14.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '75.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '75'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 75 (64-bit)',
					type: 'Chrome',
					version: '75',
					api_name: 'Chrome75x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.14.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '75.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '75x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 76 (64-bit)',
					type: 'Chrome',
					version: '76',
					api_name: 'Chrome76x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.11.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '76.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '76x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 76',
					type: 'Chrome',
					version: '76',
					api_name: 'Chrome76',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.11.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '76.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '76'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 77',
					type: 'Chrome',
					version: '77',
					api_name: 'Chrome77',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.141.59',
					webdriver_type: 'chromedriver',
					webdriver_version: '77.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '77'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 77 (64-bit)',
					type: 'Chrome',
					version: '77',
					api_name: 'Chrome77x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.141.59',
					webdriver_type: 'chromedriver',
					webdriver_version: '77.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '77x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 38',
					type: 'Firefox',
					version: '38',
					api_name: 'FF38',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.46.0',
					webdriver_type: null,
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '38'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 39',
					type: 'Firefox',
					version: '39',
					api_name: 'FF39',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.47.1',
					webdriver_type: null,
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '39'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 40',
					type: 'Firefox',
					version: '40',
					api_name: 'FF40',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.47.1',
					webdriver_type: null,
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '40'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 41',
					type: 'Firefox',
					version: '41',
					api_name: 'FF41',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.48.2',
					webdriver_type: null,
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '41'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 42',
					type: 'Firefox',
					version: '42',
					api_name: 'FF42',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.48.2',
					webdriver_type: null,
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '42'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 42 (64-bit)',
					type: 'Firefox',
					version: '42',
					api_name: 'FF42x64',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: null,
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '42x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 43',
					type: 'Firefox',
					version: '43',
					api_name: 'FF43',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.48.2',
					webdriver_type: null,
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '43'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 43 (64-bit)',
					type: 'Firefox',
					version: '43',
					api_name: 'FF43x64',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: null,
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '43x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 44',
					type: 'Firefox',
					version: '44',
					api_name: 'FF44',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.48.2',
					webdriver_type: null,
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '44'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 44 (64-bit)',
					type: 'Firefox',
					version: '44',
					api_name: 'FF44x64',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: null,
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '44x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 45',
					type: 'Firefox',
					version: '45',
					api_name: 'FF45',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: null,
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '45'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 45 (64-bit)',
					type: 'Firefox',
					version: '45',
					api_name: 'FF45x64',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: null,
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '45x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 46',
					type: 'Firefox',
					version: '46',
					api_name: 'FF46',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: null,
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '46'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 46 (64-bit)',
					type: 'Firefox',
					version: '46',
					api_name: 'FF46x64',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: null,
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '46x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 47',
					type: 'Firefox',
					version: '47',
					api_name: 'FF47',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.0.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.11.1',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '47'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 47 (64-bit)',
					type: 'Firefox',
					version: '47',
					api_name: 'FF47x64',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.0.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.11.1',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '47x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 48 (64-bit)',
					type: 'Firefox',
					version: '48',
					api_name: 'FF48x64',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.0.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.11.1',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '48x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 48',
					type: 'Firefox',
					version: '48',
					api_name: 'FF48',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.0.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.11.1',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '48'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 49',
					type: 'Firefox',
					version: '49',
					api_name: 'FF49',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.0.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.11.1',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '49'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 49 (64-bit)',
					type: 'Firefox',
					version: '49',
					api_name: 'FF49x64',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.0.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.11.1',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '49x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 50 (64-bit)',
					type: 'Firefox',
					version: '50',
					api_name: 'FF50x64',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.0.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.11.1',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '50x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 50',
					type: 'Firefox',
					version: '50',
					api_name: 'FF50',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.0.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.11.1',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '50'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 51',
					type: 'Firefox',
					version: '51',
					api_name: 'FF51',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.0.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.11.1',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '51'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 51 (64-bit)',
					type: 'Firefox',
					version: '51',
					api_name: 'FF51x64',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.0.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.11.1',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '51x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 52 (64-bit)',
					type: 'Firefox',
					version: '52',
					api_name: 'FF52x64',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.17.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '52x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 52',
					type: 'Firefox',
					version: '52',
					api_name: 'FF52',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.17.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '52'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 53 (64-bit)',
					type: 'Firefox',
					version: '53',
					api_name: 'FF53x64',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.17.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '53x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 53',
					type: 'Firefox',
					version: '53',
					api_name: 'FF53',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.17.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '53'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 54',
					type: 'Firefox',
					version: '54',
					api_name: 'FF54',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.17.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '54'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 54 (64-bit)',
					type: 'Firefox',
					version: '54',
					api_name: 'FF54x64',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.17.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '54x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 55 (64-bit)',
					type: 'Firefox',
					version: '55',
					api_name: 'FF55x64',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.8.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.19.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '55x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 55',
					type: 'Firefox',
					version: '55',
					api_name: 'FF55',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.8.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.19.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '55'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 56 (64-bit)',
					type: 'Firefox',
					version: '56',
					api_name: 'FF56x64',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.8.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.19.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '56x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 56',
					type: 'Firefox',
					version: '56',
					api_name: 'FF56',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.8.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.19.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '56'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 57 (64-bit)',
					type: 'Firefox',
					version: '57',
					api_name: 'FF57x64',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.8.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.19.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '57x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 57',
					type: 'Firefox',
					version: '57',
					api_name: 'FF57',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.8.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.19.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '57'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 58 (64-bit)',
					type: 'Firefox',
					version: '58',
					api_name: 'FF58x64',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.8.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.19.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '58x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 58',
					type: 'Firefox',
					version: '58',
					api_name: 'FF58',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.8.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.19.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '58'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 59 (64-bit)',
					type: 'Firefox',
					version: '59',
					api_name: 'FF59x64',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.8.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.20.1',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '59x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 59',
					type: 'Firefox',
					version: '59',
					api_name: 'FF59',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.8.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.20.1',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '59'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 60 (64-bit)',
					type: 'Firefox',
					version: '60',
					api_name: 'FF60x64',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.8.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.19.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '60x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 60',
					type: 'Firefox',
					version: '60',
					api_name: 'FF60',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.8.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.19.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '60'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 61 (64-bit)',
					type: 'Firefox',
					version: '61',
					api_name: 'FF61x64',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.8.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.19.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '61x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 61',
					type: 'Firefox',
					version: '61',
					api_name: 'FF61',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.8.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.19.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '61'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 62',
					type: 'Firefox',
					version: '62',
					api_name: 'FF62',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.8.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.19.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '62'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 62 (64-bit)',
					type: 'Firefox',
					version: '62',
					api_name: 'FF62x64',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.8.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.19.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '62x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 63 (64-bit)',
					type: 'Firefox',
					version: '63',
					api_name: 'FF63x64',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.11.0',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.23.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '63x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 63',
					type: 'Firefox',
					version: '63',
					api_name: 'FF63',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.11.0',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.23.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '63'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 64',
					type: 'Firefox',
					version: '64',
					api_name: 'FF64',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.11.0',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.23.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 64 (64-bit)',
					type: 'Firefox',
					version: '64',
					api_name: 'FF64x64',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.11.0',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.23.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '64x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 65 (64-bit)',
					type: 'Firefox',
					version: '65',
					api_name: 'FF65x64',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.11.0',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.23.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '65x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 65',
					type: 'Firefox',
					version: '65',
					api_name: 'FF65',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.11.0',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.23.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '65'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 66',
					type: 'Firefox',
					version: '66',
					api_name: 'FF66',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.11.0',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.23.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '66'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 67 (64-bit)',
					type: 'Firefox',
					version: '67',
					api_name: 'FF67x64',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.11.0',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.23.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '67x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 67',
					type: 'Firefox',
					version: '67',
					api_name: 'FF67',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.11.0',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.23.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '67'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 69 (64-bit)',
					type: 'Firefox',
					version: '69',
					api_name: 'FF69x64',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.11.0',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.23.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '69x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 69',
					type: 'Firefox',
					version: '69',
					api_name: 'FF69',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.11.0',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.23.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '69'
						},
					default_config: 'Win10'
				},
				{
					name: 'Internet Explorer 11',
					type: 'Internet Explorer',
					version: '11',
					api_name: 'IE11',
					default_live_test_browser: false,
					icon_class: 'ie',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'iedriver',
					webdriver_version: '2.46.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Internet Explorer',
							version: '11'
						},
					default_config: 'Win10'
				},
				{
					name: 'Microsoft Edge 14',
					type: 'Microsoft Edge',
					version: '14',
					api_name: 'Edge14',
					default_live_test_browser: false,
					icon_class: 'edge',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'microsoftwebdriver',
					webdriver_version: '14',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'MicrosoftEdge',
							version: '14'
						},
					default_config: 'Win10'
				},
				{
					name: 'Microsoft Edge 15',
					type: 'Microsoft Edge',
					version: '15',
					api_name: 'Edge15',
					default_live_test_browser: false,
					icon_class: 'edge',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'microsoftwebdriver',
					webdriver_version: '15',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'MicrosoftEdge',
							version: '15'
						},
					default_config: 'Win10'
				},
				{
					name: 'Microsoft Edge 16',
					type: 'Microsoft Edge',
					version: '16',
					api_name: 'Edge16',
					default_live_test_browser: false,
					icon_class: 'edge',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'microsoftwebdriver',
					webdriver_version: '16',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'MicrosoftEdge',
							version: '16'
						},
					default_config: 'Win10'
				},
				{
					name: 'Microsoft Edge 17',
					type: 'Microsoft Edge',
					version: '17',
					api_name: 'Edge17',
					default_live_test_browser: true,
					icon_class: 'edge',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'microsoftwebdriver',
					webdriver_version: '17',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'MicrosoftEdge',
							version: '17'
						},
					default_config: 'Win10'
				},
				{
					name: 'Microsoft Edge 18',
					type: 'Microsoft Edge',
					version: '18',
					api_name: 'Edge18',
					default_live_test_browser: true,
					icon_class: 'edge',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: null,
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'MicrosoftEdge',
							version: '18'
						},
					default_config: 'Win10'
				}
			],
		resolutions:
			[
				{
					width: 800,
					height: 480,
					name: '800x480',
					desktop_width: 800,
					desktop_height: 480,
					default: false,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '800x480'
						}
				},
				{
					width: 800,
					height: 600,
					name: '800x600',
					desktop_width: 800,
					desktop_height: 600,
					default: false,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '800x600'
						}
				},
				{
					width: 854,
					height: 480,
					name: '854x480',
					desktop_width: 854,
					desktop_height: 480,
					default: false,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '854x480'
						}
				},
				{
					width: 1024,
					height: 768,
					name: '1024x768',
					desktop_width: 1024,
					desktop_height: 768,
					default: false,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '1024x768'
						}
				},
				{
					width: 1152,
					height: 864,
					name: '1152x864',
					desktop_width: 1152,
					desktop_height: 864,
					default: false,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '1152x864'
						}
				},
				{
					width: 1280,
					height: 720,
					name: '1280x720',
					desktop_width: 1280,
					desktop_height: 720,
					default: false,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '1280x720'
						}
				},
				{
					width: 1280,
					height: 768,
					name: '1280x768',
					desktop_width: 1280,
					desktop_height: 768,
					default: false,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '1280x768'
						}
				},
				{
					width: 1280,
					height: 800,
					name: '1280x800',
					desktop_width: 1280,
					desktop_height: 800,
					default: false,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '1280x800'
						}
				},
				{
					width: 1280,
					height: 960,
					name: '1280x960',
					desktop_width: 1280,
					desktop_height: 960,
					default: false,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '1280x960'
						}
				},
				{
					width: 1280,
					height: 1024,
					name: '1280x1024',
					desktop_width: 1280,
					desktop_height: 1024,
					default: false,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '1280x1024'
						}
				},
				{
					width: 1366,
					height: 768,
					name: '1366x768',
					desktop_width: 1366,
					desktop_height: 768,
					default: true,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '1366x768'
						}
				},
				{
					width: 1400,
					height: 1050,
					name: '1400x1050',
					desktop_width: 1400,
					desktop_height: 1050,
					default: false,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '1400x1050'
						}
				},
				{
					width: 1440,
					height: 900,
					name: '1440x900',
					desktop_width: 1440,
					desktop_height: 900,
					default: false,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '1440x900'
						}
				},
				{
					width: 1600,
					height: 1200,
					name: '1600x1200',
					desktop_width: 1600,
					desktop_height: 1200,
					default: false,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '1600x1200'
						}
				},
				{
					width: 1680,
					height: 1050,
					name: '1680x1050',
					desktop_width: 1680,
					desktop_height: 1050,
					default: false,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '1680x1050'
						}
				},
				{
					width: 1920,
					height: 1080,
					name: '1920x1080',
					desktop_width: 1920,
					desktop_height: 1080,
					default: false,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '1920x1080'
						}
				},
				{
					width: 1920,
					height: 1200,
					name: '1920x1200',
					desktop_width: 1920,
					desktop_height: 1200,
					default: false,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '1920x1200'
						}
				},
				{
					width: 1920,
					height: 1440,
					name: '1920x1440',
					desktop_width: 1920,
					desktop_height: 1440,
					default: false,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '1920x1440'
						}
				},
				{
					width: 2560,
					height: 1600,
					name: '2560x1600',
					desktop_width: 2560,
					desktop_height: 1600,
					default: false,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '2560x1600'
						}
				},
				{
					width: 2560,
					height: 1920,
					name: '2560x1920',
					desktop_width: 2560,
					desktop_height: 1920,
					default: false,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '2560x1920'
						}
				}
			],
		a: true
	},
	{
		api_name: 'Win8.1',
		device: 'desktop',
		device_type: null,
		name: 'Windows 8.1',
		version: 'Windows 8.1',
		type: 'Windows',
		icon_class: 'windows-8',
		upload_file_enabled: true,
		sort_order: 12.08,
		is_webrtc_enabled: true,
		caps:
			{
				platform: 'Windows 8.1'
			},
		browsers:
			[
				{
					name: 'Google Chrome 30',
					type: 'Chrome',
					version: '30',
					api_name: 'Chrome30',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.42.2',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.8',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '30'
						},
					default_config: 'Win8.1'
				},
				{
					name: 'Google Chrome 31',
					type: 'Chrome',
					version: '31',
					api_name: 'Chrome31',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.42.2',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.8',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '31'
						},
					default_config: 'Win8.1'
				},
				{
					name: 'Google Chrome 32',
					type: 'Chrome',
					version: '32',
					api_name: 'Chrome32',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.42.2',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.8',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '32'
						},
					default_config: 'Win8.1'
				},
				{
					name: 'Google Chrome 33',
					type: 'Chrome',
					version: '33',
					api_name: 'Chrome33',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.42.2',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.8',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '33'
						},
					default_config: 'Win8.1'
				},
				{
					name: 'Google Chrome 34',
					type: 'Chrome',
					version: '34',
					api_name: 'Chrome34',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.42.2',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.8',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '34'
						},
					default_config: 'Win8.1'
				},
				{
					name: 'Google Chrome 35',
					type: 'Chrome',
					version: '35',
					api_name: 'Chrome35',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.42.2',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.8',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '35'
						},
					default_config: 'Win8.1'
				},
				{
					name: 'Google Chrome 36',
					type: 'Chrome',
					version: '36',
					api_name: 'Chrome36',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.42.2',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.12',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '36'
						},
					default_config: 'Win8.1'
				},
				{
					name: 'Google Chrome 37',
					type: 'Chrome',
					version: '37',
					api_name: 'Chrome37',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.42.2',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.12',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '37'
						},
					default_config: 'Win8.1'
				},
				{
					name: 'Google Chrome 38',
					type: 'Chrome',
					version: '38',
					api_name: 'Chrome38',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.43.1',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.12',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '38'
						},
					default_config: 'Win8.1'
				},
				{
					name: 'Google Chrome 38 (64-bit)',
					type: 'Chrome',
					version: '38',
					api_name: 'Chrome38x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.43.1',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.12',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '38x64'
						},
					default_config: 'Win8.1'
				},
				{
					name: 'Google Chrome 39 (64-bit)',
					type: 'Chrome',
					version: '39',
					api_name: 'Chrome39x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.43.1',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.12',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '39x64'
						},
					default_config: 'Win8.1'
				},
				{
					name: 'Google Chrome 39',
					type: 'Chrome',
					version: '39',
					api_name: 'Chrome39',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.43.1',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.12',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '39'
						},
					default_config: 'Win8.1'
				},
				{
					name: 'Google Chrome 40',
					type: 'Chrome',
					version: '40',
					api_name: 'Chrome40',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.44.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.15',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '40'
						},
					default_config: 'Win8.1'
				},
				{
					name: 'Google Chrome 40 (64-bit)',
					type: 'Chrome',
					version: '40',
					api_name: 'Chrome40x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.44.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.15',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '40x64'
						},
					default_config: 'Win8.1'
				},
				{
					name: 'Google Chrome 41',
					type: 'Chrome',
					version: '41',
					api_name: 'Chrome41',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.45.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.15',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '41'
						},
					default_config: 'Win8.1'
				},
				{
					name: 'Google Chrome 41 (64-bit)',
					type: 'Chrome',
					version: '41',
					api_name: 'Chrome41x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.45.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.15',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '41x64'
						},
					default_config: 'Win8.1'
				},
				{
					name: 'Google Chrome 42',
					type: 'Chrome',
					version: '42',
					api_name: 'Chrome42',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.45.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.15',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '42'
						},
					default_config: 'Win8.1'
				},
				{
					name: 'Google Chrome 42 (64-bit)',
					type: 'Chrome',
					version: '42',
					api_name: 'Chrome42x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.45.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.15',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '42x64'
						},
					default_config: 'Win8.1'
				},
				{
					name: 'Google Chrome 43',
					type: 'Chrome',
					version: '43',
					api_name: 'Chrome43',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.45.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.20',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '43'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 43 (64-bit)',
					type: 'Chrome',
					version: '43',
					api_name: 'Chrome43x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.45.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.20',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '43x64'
						},
					default_config: 'Win8.1'
				},
				{
					name: 'Google Chrome 44',
					type: 'Chrome',
					version: '44',
					api_name: 'Chrome44',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.46.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.20',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '44'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 44 (64-bit)',
					type: 'Chrome',
					version: '44',
					api_name: 'Chrome44x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.46.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.20',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '44x64'
						},
					default_config: 'Win8.1'
				},
				{
					name: 'Google Chrome 45 (64-bit)',
					type: 'Chrome',
					version: '45',
					api_name: 'Chrome45x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.47.1',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.20',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '45x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 45',
					type: 'Chrome',
					version: '45',
					api_name: 'Chrome45',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.47.1',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.20',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '45'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 46 (64-bit)',
					type: 'Chrome',
					version: '46',
					api_name: 'Chrome46x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.21',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '46x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 46',
					type: 'Chrome',
					version: '46',
					api_name: 'Chrome46',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.21',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '46'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 47',
					type: 'Chrome',
					version: '47',
					api_name: 'Chrome47',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.21',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '47'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 47 (64-bit)',
					type: 'Chrome',
					version: '47',
					api_name: 'Chrome47x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.21',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '47x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 48',
					type: 'Chrome',
					version: '48',
					api_name: 'Chrome48',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.21',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '48'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 49',
					type: 'Chrome',
					version: '49',
					api_name: 'Chrome49',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.22',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '49'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 49 (64-bit)',
					type: 'Chrome',
					version: '49',
					api_name: 'Chrome49x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.22',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '49x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 50 (64-bit)',
					type: 'Chrome',
					version: '50',
					api_name: 'Chrome50x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.22',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '50x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 50',
					type: 'Chrome',
					version: '50',
					api_name: 'Chrome50',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.22',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '50'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 51',
					type: 'Chrome',
					version: '51',
					api_name: 'Chrome51',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.22',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '51'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 51 (64-bit)',
					type: 'Chrome',
					version: '51',
					api_name: 'Chrome51x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.22',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '51x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 52',
					type: 'Chrome',
					version: '52',
					api_name: 'Chrome52',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.22',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '52'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 52 (64-bit)',
					type: 'Chrome',
					version: '52',
					api_name: 'Chrome52x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.22',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '52x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 53 (64-bit)',
					type: 'Chrome',
					version: '53',
					api_name: 'Chrome53x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.22',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '53x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 53',
					type: 'Chrome',
					version: '53',
					api_name: 'Chrome53',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.22',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '53'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 54',
					type: 'Chrome',
					version: '54',
					api_name: 'Chrome54',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.27',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '54'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 54 (64-bit)',
					type: 'Chrome',
					version: '54',
					api_name: 'Chrome54x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.27',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '54x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 55 (64-bit)',
					type: 'Chrome',
					version: '55',
					api_name: 'Chrome55x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.28',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '55x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 55',
					type: 'Chrome',
					version: '55',
					api_name: 'Chrome55',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.28',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '55'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 56',
					type: 'Chrome',
					version: '56',
					api_name: 'Chrome56',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.29',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '56'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 56 (64-bit)',
					type: 'Chrome',
					version: '56',
					api_name: 'Chrome56x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.29',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '56x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 57 (64-bit)',
					type: 'Chrome',
					version: '57',
					api_name: 'Chrome57x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.29',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '57x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 57',
					type: 'Chrome',
					version: '57',
					api_name: 'Chrome57',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.29',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '57'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 58',
					type: 'Chrome',
					version: '58',
					api_name: 'Chrome58',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.30',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '58'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 58 (64-bit)',
					type: 'Chrome',
					version: '58',
					api_name: 'Chrome58x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.30',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '58x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 59',
					type: 'Chrome',
					version: '59',
					api_name: 'Chrome59',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.30',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '59'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 59 (64-bit)',
					type: 'Chrome',
					version: '59',
					api_name: 'Chrome59x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.30',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '59x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 60 (64-bit)',
					type: 'Chrome',
					version: '60',
					api_name: 'Chrome60x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.33',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '60x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 60',
					type: 'Chrome',
					version: '60',
					api_name: 'Chrome60',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.33',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '60'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 61',
					type: 'Chrome',
					version: '61',
					api_name: 'Chrome61',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.33',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '61'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 61 (64-bit)',
					type: 'Chrome',
					version: '61',
					api_name: 'Chrome61x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.33',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '61x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 62 (64-bit)',
					type: 'Chrome',
					version: '62',
					api_name: 'Chrome62x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.34',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '62x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 62',
					type: 'Chrome',
					version: '62',
					api_name: 'Chrome62',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.34',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '62'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 63',
					type: 'Chrome',
					version: '63',
					api_name: 'Chrome63',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.34',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '63'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 63 (64-bit)',
					type: 'Chrome',
					version: '63',
					api_name: 'Chrome63x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.34',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '63x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 64',
					type: 'Chrome',
					version: '64',
					api_name: 'Chrome64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.37',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 64 (64-bit)',
					type: 'Chrome',
					version: '64',
					api_name: 'Chrome64x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.37',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '64x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 65',
					type: 'Chrome',
					version: '65',
					api_name: 'Chrome65',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.37',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '65'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 65 (64-bit)',
					type: 'Chrome',
					version: '65',
					api_name: 'Chrome65x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.37',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '65x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 66',
					type: 'Chrome',
					version: '66',
					api_name: 'Chrome66',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.37',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '66'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 66 (64-bit)',
					type: 'Chrome',
					version: '66',
					api_name: 'Chrome66x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.37',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '66x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 67 (64-bit)',
					type: 'Chrome',
					version: '67',
					api_name: 'Chrome67x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.37',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '67x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 67',
					type: 'Chrome',
					version: '67',
					api_name: 'Chrome67',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.37',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '67'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 68',
					type: 'Chrome',
					version: '68',
					api_name: 'Chrome68',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.41',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '68'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 68 (64-bit)',
					type: 'Chrome',
					version: '68',
					api_name: 'Chrome68x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.41',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '68x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 69',
					type: 'Chrome',
					version: '69',
					api_name: 'Chrome69',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.41',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '69'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 69 (64-bit)',
					type: 'Chrome',
					version: '69',
					api_name: 'Chrome69x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.41',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '69x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 70 (64-bit)',
					type: 'Chrome',
					version: '70',
					api_name: 'Chrome70x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.41',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '70x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 70',
					type: 'Chrome',
					version: '70',
					api_name: 'Chrome70',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.41',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '70'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 71',
					type: 'Chrome',
					version: '71',
					api_name: 'Chrome71',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.41',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '71'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 71 (64-bit)',
					type: 'Chrome',
					version: '71',
					api_name: 'Chrome71x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.41',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '71x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 72 (64-bit)',
					type: 'Chrome',
					version: '72',
					api_name: 'Chrome72x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '72.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '72x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 72',
					type: 'Chrome',
					version: '72',
					api_name: 'Chrome72',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '72.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '72'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 73',
					type: 'Chrome',
					version: '73',
					api_name: 'Chrome73',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '73.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '73'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 73 (64-bit)',
					type: 'Chrome',
					version: '73',
					api_name: 'Chrome73x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '73.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '73x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 74',
					type: 'Chrome',
					version: '74',
					api_name: 'Chrome74',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '74.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '74'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 74 (64-bit)',
					type: 'Chrome',
					version: '74',
					api_name: 'Chrome74x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '74.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '74x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 75',
					type: 'Chrome',
					version: '75',
					api_name: 'Chrome75',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.11.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '75.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '75'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 75 (64-bit)',
					type: 'Chrome',
					version: '75',
					api_name: 'Chrome75x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.11.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '75.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '75x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 76',
					type: 'Chrome',
					version: '76',
					api_name: 'Chrome76',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.11.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '76.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '76'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 76 (64-bit)',
					type: 'Chrome',
					version: '76',
					api_name: 'Chrome76x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.11.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '76.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '76x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 77',
					type: 'Chrome',
					version: '77',
					api_name: 'Chrome77',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.141.59',
					webdriver_type: 'chromedriver',
					webdriver_version: '77.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '77'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 77 (64-bit)',
					type: 'Chrome',
					version: '77',
					api_name: 'Chrome77x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.141.59',
					webdriver_type: 'chromedriver',
					webdriver_version: '77.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '77x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 27',
					type: 'Firefox',
					version: '27',
					api_name: 'FF27',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.42.2',
					webdriver_type: null,
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '27'
						},
					default_config: 'Win8.1'
				},
				{
					name: 'Firefox 28',
					type: 'Firefox',
					version: '28',
					api_name: 'FF28',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.42.2',
					webdriver_type: null,
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '28'
						},
					default_config: 'Win8.1'
				},
				{
					name: 'Firefox 29',
					type: 'Firefox',
					version: '29',
					api_name: 'FF29',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.42.2',
					webdriver_type: null,
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '29'
						},
					default_config: 'Win8.1'
				},
				{
					name: 'Firefox 30',
					type: 'Firefox',
					version: '30',
					api_name: 'FF30',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.42.2',
					webdriver_type: null,
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '30'
						},
					default_config: 'Win8.1'
				},
				{
					name: 'Firefox 31',
					type: 'Firefox',
					version: '31',
					api_name: 'FF31',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.42.2',
					webdriver_type: null,
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '31'
						},
					default_config: 'Win8.1'
				},
				{
					name: 'Firefox 32',
					type: 'Firefox',
					version: '32',
					api_name: 'FF32',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.43.1',
					webdriver_type: null,
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '32'
						},
					default_config: 'Win8.1'
				},
				{
					name: 'Firefox 33',
					type: 'Firefox',
					version: '33',
					api_name: 'FF33',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.43.1',
					webdriver_type: null,
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '33'
						},
					default_config: 'Win8.1'
				},
				{
					name: 'Firefox 34',
					type: 'Firefox',
					version: '34',
					api_name: 'FF34',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.44.0',
					webdriver_type: null,
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '34'
						},
					default_config: 'Win8.1'
				},
				{
					name: 'Firefox 35',
					type: 'Firefox',
					version: '35',
					api_name: 'FF35',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.44.0',
					webdriver_type: null,
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '35'
						},
					default_config: 'Win8.1'
				},
				{
					name: 'Firefox 36',
					type: 'Firefox',
					version: '36',
					api_name: 'FF36',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.45.0',
					webdriver_type: null,
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '36'
						},
					default_config: 'Win8.1'
				},
				{
					name: 'Firefox 37',
					type: 'Firefox',
					version: '37',
					api_name: 'FF37',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.45.0',
					webdriver_type: null,
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '37'
						},
					default_config: 'Win8.1'
				},
				{
					name: 'Firefox 38',
					type: 'Firefox',
					version: '38',
					api_name: 'FF38',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.46.0',
					webdriver_type: null,
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '38'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 39',
					type: 'Firefox',
					version: '39',
					api_name: 'FF39',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.46.0',
					webdriver_type: null,
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '39'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 40',
					type: 'Firefox',
					version: '40',
					api_name: 'FF40',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.47.1',
					webdriver_type: null,
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '40'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 41',
					type: 'Firefox',
					version: '41',
					api_name: 'FF41',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.48.2',
					webdriver_type: null,
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '41'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 42',
					type: 'Firefox',
					version: '42',
					api_name: 'FF42',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.48.2',
					webdriver_type: null,
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '42'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 42 (64-bit)',
					type: 'Firefox',
					version: '42',
					api_name: 'FF42x64',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: null,
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '42x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 43 (64-bit)',
					type: 'Firefox',
					version: '43',
					api_name: 'FF43x64',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: null,
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '43x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 43',
					type: 'Firefox',
					version: '43',
					api_name: 'FF43',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: null,
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '43'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 44 (64-bit)',
					type: 'Firefox',
					version: '44',
					api_name: 'FF44x64',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: null,
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '44x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 44',
					type: 'Firefox',
					version: '44',
					api_name: 'FF44',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: null,
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '44'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 45 (64-bit)',
					type: 'Firefox',
					version: '45',
					api_name: 'FF45x64',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: null,
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '45x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 45',
					type: 'Firefox',
					version: '45',
					api_name: 'FF45',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: null,
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '45'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 46',
					type: 'Firefox',
					version: '46',
					api_name: 'FF46',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: null,
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '46'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 46 (64-bit)',
					type: 'Firefox',
					version: '46',
					api_name: 'FF46x64',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: null,
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '46x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 47 (64-bit)',
					type: 'Firefox',
					version: '47',
					api_name: 'FF47x64',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.0.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.11.1',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '47x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 47',
					type: 'Firefox',
					version: '47',
					api_name: 'FF47',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.0.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.11.1',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '47'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 48',
					type: 'Firefox',
					version: '48',
					api_name: 'FF48',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.0.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.11.1',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '48'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 48 (64-bit)',
					type: 'Firefox',
					version: '48',
					api_name: 'FF48x64',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.0.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.11.1',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '48x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 49 (64-bit)',
					type: 'Firefox',
					version: '49',
					api_name: 'FF49x64',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.0.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.11.1',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '49x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 49',
					type: 'Firefox',
					version: '49',
					api_name: 'FF49',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.0.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.11.1',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '49'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 50',
					type: 'Firefox',
					version: '50',
					api_name: 'FF50',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.0.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.11.1',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '50'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 50 (64-bit)',
					type: 'Firefox',
					version: '50',
					api_name: 'FF50x64',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.0.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.11.1',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '50x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 51',
					type: 'Firefox',
					version: '51',
					api_name: 'FF51',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.0.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.11.1',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '51'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 51 (64-bit)',
					type: 'Firefox',
					version: '51',
					api_name: 'FF51x64',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.0.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.11.1',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '51x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 52',
					type: 'Firefox',
					version: '52',
					api_name: 'FF52',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.17.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '52'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 52 (64-bit)',
					type: 'Firefox',
					version: '52',
					api_name: 'FF52x64',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.17.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '52x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 53 (64-bit)',
					type: 'Firefox',
					version: '53',
					api_name: 'FF53x64',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.17.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '53x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 53',
					type: 'Firefox',
					version: '53',
					api_name: 'FF53',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.17.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '53'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 54',
					type: 'Firefox',
					version: '54',
					api_name: 'FF54',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.17.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '54'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 54 (64-bit)',
					type: 'Firefox',
					version: '54',
					api_name: 'FF54x64',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.17.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '54x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 55',
					type: 'Firefox',
					version: '55',
					api_name: 'FF55',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.8.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.19.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '55'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 55 (64-bit)',
					type: 'Firefox',
					version: '55',
					api_name: 'FF55x64',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.8.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.19.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '55x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 56',
					type: 'Firefox',
					version: '56',
					api_name: 'FF56',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.8.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.19.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '56'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 56 (64-bit)',
					type: 'Firefox',
					version: '56',
					api_name: 'FF56x64',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.8.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.19.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '56x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 57 (64-bit)',
					type: 'Firefox',
					version: '57',
					api_name: 'FF57x64',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.8.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.19.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '57x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 57',
					type: 'Firefox',
					version: '57',
					api_name: 'FF57',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.8.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.19.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '57'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 58',
					type: 'Firefox',
					version: '58',
					api_name: 'FF58',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.8.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.19.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '58'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 58 (64-bit)',
					type: 'Firefox',
					version: '58',
					api_name: 'FF58x64',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.8.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.19.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '58x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 59',
					type: 'Firefox',
					version: '59',
					api_name: 'FF59',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.8.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.20.1',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '59'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 59 (64-bit)',
					type: 'Firefox',
					version: '59',
					api_name: 'FF59x64',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.8.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.20.1',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '59x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 60 (64-bit)',
					type: 'Firefox',
					version: '60',
					api_name: 'FF60x64',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.8.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.19.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '60x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 60',
					type: 'Firefox',
					version: '60',
					api_name: 'FF60',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.8.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.19.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '60'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 61 (64-bit)',
					type: 'Firefox',
					version: '61',
					api_name: 'FF61x64',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.8.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.19.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '61x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 61',
					type: 'Firefox',
					version: '61',
					api_name: 'FF61',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.8.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.19.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '61'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 62 (64-bit)',
					type: 'Firefox',
					version: '62',
					api_name: 'FF62x64',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.8.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.19.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '62x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 63 (64-bit)',
					type: 'Firefox',
					version: '63',
					api_name: 'FF63x64',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.11.0',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.23.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '63x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 63',
					type: 'Firefox',
					version: '63',
					api_name: 'FF63',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.11.0',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.23.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '63'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 64 (64-bit)',
					type: 'Firefox',
					version: '64',
					api_name: 'FF64x64',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.11.0',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.23.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '64x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 64',
					type: 'Firefox',
					version: '64',
					api_name: 'FF64',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.11.0',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.23.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 65 (64-bit)',
					type: 'Firefox',
					version: '65',
					api_name: 'FF65x64',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.11.0',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.23.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '65x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 65',
					type: 'Firefox',
					version: '65',
					api_name: 'FF65',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.11.0',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.23.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '65'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 66',
					type: 'Firefox',
					version: '66',
					api_name: 'FF66',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.11.0',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.23.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '66'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 67',
					type: 'Firefox',
					version: '67',
					api_name: 'FF67',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.11.0',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.23.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '67'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 67 (64-bit)',
					type: 'Firefox',
					version: '67',
					api_name: 'FF67x64',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.11.0',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.23.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '67x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 69',
					type: 'Firefox',
					version: '69',
					api_name: 'FF69',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.11.0',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.23.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '69'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 69 (64-bit)',
					type: 'Firefox',
					version: '69',
					api_name: 'FF69x64',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.11.0',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.23.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '69x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Internet Explorer 11',
					type: 'Internet Explorer',
					version: '11',
					api_name: 'IE11',
					default_live_test_browser: true,
					icon_class: 'ie',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.46.0',
					webdriver_type: 'iedriver',
					webdriver_version: '2.46.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Internet Explorer',
							version: '11'
						},
					default_config: 'Win10'
				}
			],
		resolutions:
			[
				{
					width: 800,
					height: 600,
					name: '800x600',
					desktop_width: 800,
					desktop_height: 600,
					default: false,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '800x600'
						}
				},
				{
					width: 1024,
					height: 768,
					name: '1024x768',
					desktop_width: 1024,
					desktop_height: 768,
					default: false,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '1024x768'
						}
				},
				{
					width: 1152,
					height: 864,
					name: '1152x864',
					desktop_width: 1152,
					desktop_height: 864,
					default: false,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '1152x864'
						}
				},
				{
					width: 1280,
					height: 768,
					name: '1280x768',
					desktop_width: 1280,
					desktop_height: 768,
					default: false,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '1280x768'
						}
				},
				{
					width: 1280,
					height: 960,
					name: '1280x960',
					desktop_width: 1280,
					desktop_height: 960,
					default: false,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '1280x960'
						}
				},
				{
					width: 1280,
					height: 1024,
					name: '1280x1024',
					desktop_width: 1280,
					desktop_height: 1024,
					default: false,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '1280x1024'
						}
				},
				{
					width: 1366,
					height: 768,
					name: '1366x768',
					desktop_width: 1366,
					desktop_height: 768,
					default: true,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '1366x768'
						}
				},
				{
					width: 1400,
					height: 1050,
					name: '1400x1050',
					desktop_width: 1400,
					desktop_height: 1050,
					default: false,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '1400x1050'
						}
				},
				{
					width: 1600,
					height: 1200,
					name: '1600x1200',
					desktop_width: 1600,
					desktop_height: 1200,
					default: false,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '1600x1200'
						}
				},
				{
					width: 1920,
					height: 1080,
					name: '1920x1080',
					desktop_width: 1920,
					desktop_height: 1080,
					default: false,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '1920x1080'
						}
				},
				{
					width: 2560,
					height: 1600,
					name: '2560x1600',
					desktop_width: 2560,
					desktop_height: 1600,
					default: false,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '2560x1600'
						}
				},
				{
					width: 2560,
					height: 1920,
					name: '2560x1920',
					desktop_width: 2560,
					desktop_height: 1920,
					default: false,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '2560x1920'
						}
				}
			],
		a: false
	},
	{
		api_name: 'Win8',
		device: 'desktop',
		device_type: null,
		name: 'Windows 8',
		version: 'Windows 8 Preview',
		type: 'Windows',
		icon_class: 'windows-8',
		upload_file_enabled: true,
		sort_order: 12.1,
		is_webrtc_enabled: true,
		caps:
			{
				platform: 'Windows 8'
			},
		browsers:
			[
				{
					name: 'Google Chrome 30',
					type: 'Chrome',
					version: '30',
					api_name: 'Chrome30',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.42.2',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.8',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '30'
						},
					default_config: 'Win8.1'
				},
				{
					name: 'Google Chrome 31',
					type: 'Chrome',
					version: '31',
					api_name: 'Chrome31',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.42.2',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.8',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '31'
						},
					default_config: 'Win8.1'
				},
				{
					name: 'Google Chrome 32',
					type: 'Chrome',
					version: '32',
					api_name: 'Chrome32',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.42.2',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.8',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '32'
						},
					default_config: 'Win8.1'
				},
				{
					name: 'Google Chrome 33',
					type: 'Chrome',
					version: '33',
					api_name: 'Chrome33',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.42.2',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.8',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '33'
						},
					default_config: 'Win8.1'
				},
				{
					name: 'Google Chrome 34',
					type: 'Chrome',
					version: '34',
					api_name: 'Chrome34',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.42.2',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.8',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '34'
						},
					default_config: 'Win8.1'
				},
				{
					name: 'Google Chrome 35',
					type: 'Chrome',
					version: '35',
					api_name: 'Chrome35',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.42.2',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.8',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '35'
						},
					default_config: 'Win8.1'
				},
				{
					name: 'Google Chrome 36',
					type: 'Chrome',
					version: '36',
					api_name: 'Chrome36',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.42.2',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.12',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '36'
						},
					default_config: 'Win8.1'
				},
				{
					name: 'Google Chrome 37 (64-bit)',
					type: 'Chrome',
					version: '37',
					api_name: 'Chrome37x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.42.2',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.12',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '37x64'
						},
					default_config: 'Win8'
				},
				{
					name: 'Google Chrome 37',
					type: 'Chrome',
					version: '37',
					api_name: 'Chrome37',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.42.2',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.12',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '37'
						},
					default_config: 'Win8.1'
				},
				{
					name: 'Google Chrome 38',
					type: 'Chrome',
					version: '38',
					api_name: 'Chrome38',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.43.1',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.12',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '38'
						},
					default_config: 'Win8.1'
				},
				{
					name: 'Google Chrome 38 (64-bit)',
					type: 'Chrome',
					version: '38',
					api_name: 'Chrome38x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.43.1',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.12',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '38x64'
						},
					default_config: 'Win8.1'
				},
				{
					name: 'Google Chrome 39 (64-bit)',
					type: 'Chrome',
					version: '39',
					api_name: 'Chrome39x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.43.1',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.12',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '39x64'
						},
					default_config: 'Win8.1'
				},
				{
					name: 'Google Chrome 39',
					type: 'Chrome',
					version: '39',
					api_name: 'Chrome39',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.43.1',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.12',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '39'
						},
					default_config: 'Win8.1'
				},
				{
					name: 'Google Chrome 40',
					type: 'Chrome',
					version: '40',
					api_name: 'Chrome40',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.44.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.15',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '40'
						},
					default_config: 'Win8.1'
				},
				{
					name: 'Google Chrome 40 (64-bit)',
					type: 'Chrome',
					version: '40',
					api_name: 'Chrome40x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.44.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.15',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '40x64'
						},
					default_config: 'Win8.1'
				},
				{
					name: 'Google Chrome 41',
					type: 'Chrome',
					version: '41',
					api_name: 'Chrome41',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.45.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.15',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '41'
						},
					default_config: 'Win8.1'
				},
				{
					name: 'Google Chrome 41 (64-bit)',
					type: 'Chrome',
					version: '41',
					api_name: 'Chrome41x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.45.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.15',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '41x64'
						},
					default_config: 'Win8.1'
				},
				{
					name: 'Google Chrome 42 (64-bit)',
					type: 'Chrome',
					version: '42',
					api_name: 'Chrome42x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.45.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.15',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '42x64'
						},
					default_config: 'Win8.1'
				},
				{
					name: 'Google Chrome 42',
					type: 'Chrome',
					version: '42',
					api_name: 'Chrome42',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.45.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.15',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '42'
						},
					default_config: 'Win8.1'
				},
				{
					name: 'Google Chrome 43',
					type: 'Chrome',
					version: '43',
					api_name: 'Chrome43',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.45.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.20',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '43'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 43 (64-bit)',
					type: 'Chrome',
					version: '43',
					api_name: 'Chrome43x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.45.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.20',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '43x64'
						},
					default_config: 'Win8.1'
				},
				{
					name: 'Google Chrome 44',
					type: 'Chrome',
					version: '44',
					api_name: 'Chrome44',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.46.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.20',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '44'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 44 (64-bit)',
					type: 'Chrome',
					version: '44',
					api_name: 'Chrome44x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.46.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.20',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '44x64'
						},
					default_config: 'Win8.1'
				},
				{
					name: 'Google Chrome 45',
					type: 'Chrome',
					version: '45',
					api_name: 'Chrome45',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.47.1',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.20',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '45'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 45 (64-bit)',
					type: 'Chrome',
					version: '45',
					api_name: 'Chrome45x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.47.1',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.20',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '45x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 46',
					type: 'Chrome',
					version: '46',
					api_name: 'Chrome46',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.21',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '46'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 46 (64-bit)',
					type: 'Chrome',
					version: '46',
					api_name: 'Chrome46x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.21',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '46x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 47',
					type: 'Chrome',
					version: '47',
					api_name: 'Chrome47',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.21',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '47'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 47 (64-bit)',
					type: 'Chrome',
					version: '47',
					api_name: 'Chrome47x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.21',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '47x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 48',
					type: 'Chrome',
					version: '48',
					api_name: 'Chrome48',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.21',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '48'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 48 (64-bit)',
					type: 'Chrome',
					version: '48',
					api_name: 'Chrome48x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.21',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '48x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 49',
					type: 'Chrome',
					version: '49',
					api_name: 'Chrome49',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.22',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '49'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 49 (64-bit)',
					type: 'Chrome',
					version: '49',
					api_name: 'Chrome49x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.22',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '49x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 50',
					type: 'Chrome',
					version: '50',
					api_name: 'Chrome50',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.22',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '50'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 50 (64-bit)',
					type: 'Chrome',
					version: '50',
					api_name: 'Chrome50x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.22',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '50x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 51 (64-bit)',
					type: 'Chrome',
					version: '51',
					api_name: 'Chrome51x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.22',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '51x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 51',
					type: 'Chrome',
					version: '51',
					api_name: 'Chrome51',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.22',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '51'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 52',
					type: 'Chrome',
					version: '52',
					api_name: 'Chrome52',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.22',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '52'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 52 (64-bit)',
					type: 'Chrome',
					version: '52',
					api_name: 'Chrome52x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.22',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '52x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 53',
					type: 'Chrome',
					version: '53',
					api_name: 'Chrome53',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.22',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '53'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 53 (64-bit)',
					type: 'Chrome',
					version: '53',
					api_name: 'Chrome53x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.22',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '53x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 54 (64-bit)',
					type: 'Chrome',
					version: '54',
					api_name: 'Chrome54x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.27',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '54x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 54',
					type: 'Chrome',
					version: '54',
					api_name: 'Chrome54',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.27',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '54'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 55',
					type: 'Chrome',
					version: '55',
					api_name: 'Chrome55',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.28',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '55'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 55 (64-bit)',
					type: 'Chrome',
					version: '55',
					api_name: 'Chrome55x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.28',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '55x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 56 (64-bit)',
					type: 'Chrome',
					version: '56',
					api_name: 'Chrome56x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.29',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '56x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 56',
					type: 'Chrome',
					version: '56',
					api_name: 'Chrome56',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.29',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '56'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 57 (64-bit)',
					type: 'Chrome',
					version: '57',
					api_name: 'Chrome57x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.29',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '57x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 57',
					type: 'Chrome',
					version: '57',
					api_name: 'Chrome57',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.29',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '57'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 58 (64-bit)',
					type: 'Chrome',
					version: '58',
					api_name: 'Chrome58x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.30',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '58x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 58',
					type: 'Chrome',
					version: '58',
					api_name: 'Chrome58',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.30',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '58'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 59',
					type: 'Chrome',
					version: '59',
					api_name: 'Chrome59',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.30',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '59'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 59 (64-bit)',
					type: 'Chrome',
					version: '59',
					api_name: 'Chrome59x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.30',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '59x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 60',
					type: 'Chrome',
					version: '60',
					api_name: 'Chrome60',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.33',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '60'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 60 (64-bit)',
					type: 'Chrome',
					version: '60',
					api_name: 'Chrome60x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.33',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '60x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 61 (64-bit)',
					type: 'Chrome',
					version: '61',
					api_name: 'Chrome61x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.33',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '61x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 61',
					type: 'Chrome',
					version: '61',
					api_name: 'Chrome61',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.33',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '61'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 62',
					type: 'Chrome',
					version: '62',
					api_name: 'Chrome62',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.34',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '62'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 62 (64-bit)',
					type: 'Chrome',
					version: '62',
					api_name: 'Chrome62x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.34',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '62x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 63',
					type: 'Chrome',
					version: '63',
					api_name: 'Chrome63',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.34',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '63'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 63 (64-bit)',
					type: 'Chrome',
					version: '63',
					api_name: 'Chrome63x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.34',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '63x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 64 (64-bit)',
					type: 'Chrome',
					version: '64',
					api_name: 'Chrome64x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.37',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '64x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 64',
					type: 'Chrome',
					version: '64',
					api_name: 'Chrome64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.37',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 65',
					type: 'Chrome',
					version: '65',
					api_name: 'Chrome65',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.37',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '65'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 65 (64-bit)',
					type: 'Chrome',
					version: '65',
					api_name: 'Chrome65x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.37',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '65x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 66',
					type: 'Chrome',
					version: '66',
					api_name: 'Chrome66',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.37',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '66'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 66 (64-bit)',
					type: 'Chrome',
					version: '66',
					api_name: 'Chrome66x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.37',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '66x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 67',
					type: 'Chrome',
					version: '67',
					api_name: 'Chrome67',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.37',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '67'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 67 (64-bit)',
					type: 'Chrome',
					version: '67',
					api_name: 'Chrome67x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.37',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '67x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 68 (64-bit)',
					type: 'Chrome',
					version: '68',
					api_name: 'Chrome68x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.41',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '68x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 68',
					type: 'Chrome',
					version: '68',
					api_name: 'Chrome68',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.41',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '68'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 69',
					type: 'Chrome',
					version: '69',
					api_name: 'Chrome69',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.41',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '69'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 69 (64-bit)',
					type: 'Chrome',
					version: '69',
					api_name: 'Chrome69x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.41',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '69x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 70 (64-bit)',
					type: 'Chrome',
					version: '70',
					api_name: 'Chrome70x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.41',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '70x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 70',
					type: 'Chrome',
					version: '70',
					api_name: 'Chrome70',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.41',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '70'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 71',
					type: 'Chrome',
					version: '71',
					api_name: 'Chrome71',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.41',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '71'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 71 (64-bit)',
					type: 'Chrome',
					version: '71',
					api_name: 'Chrome71x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.41',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '71x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 72',
					type: 'Chrome',
					version: '72',
					api_name: 'Chrome72',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '72.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '72'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 72 (64-bit)',
					type: 'Chrome',
					version: '72',
					api_name: 'Chrome72x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '72.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '72x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 73 (64-bit)',
					type: 'Chrome',
					version: '73',
					api_name: 'Chrome73x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '73.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '73x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 73',
					type: 'Chrome',
					version: '73',
					api_name: 'Chrome73',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '73.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '73'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 74 (64-bit)',
					type: 'Chrome',
					version: '74',
					api_name: 'Chrome74x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '74.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '74x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 74',
					type: 'Chrome',
					version: '74',
					api_name: 'Chrome74',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '74.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '74'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 75',
					type: 'Chrome',
					version: '75',
					api_name: 'Chrome75',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.11.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '75.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '75'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 75 (64-bit)',
					type: 'Chrome',
					version: '75',
					api_name: 'Chrome75x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.11.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '75.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '75x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 76',
					type: 'Chrome',
					version: '76',
					api_name: 'Chrome76',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.11.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '76.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '76'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 76 (64-bit)',
					type: 'Chrome',
					version: '76',
					api_name: 'Chrome76x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.11.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '76.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '76x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 77 (64-bit)',
					type: 'Chrome',
					version: '77',
					api_name: 'Chrome77x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.141.59',
					webdriver_type: 'chromedriver',
					webdriver_version: '77.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '77x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 77',
					type: 'Chrome',
					version: '77',
					api_name: 'Chrome77',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.141.59',
					webdriver_type: 'chromedriver',
					webdriver_version: '77.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '77'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 27',
					type: 'Firefox',
					version: '27',
					api_name: 'FF27',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.42.2',
					webdriver_type: null,
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '27'
						},
					default_config: 'Win8.1'
				},
				{
					name: 'Firefox 28',
					type: 'Firefox',
					version: '28',
					api_name: 'FF28',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.42.2',
					webdriver_type: null,
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '28'
						},
					default_config: 'Win8.1'
				},
				{
					name: 'Firefox 29',
					type: 'Firefox',
					version: '29',
					api_name: 'FF29',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.42.2',
					webdriver_type: null,
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '29'
						},
					default_config: 'Win8.1'
				},
				{
					name: 'Firefox 30',
					type: 'Firefox',
					version: '30',
					api_name: 'FF30',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.42.2',
					webdriver_type: null,
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '30'
						},
					default_config: 'Win8.1'
				},
				{
					name: 'Firefox 31',
					type: 'Firefox',
					version: '31',
					api_name: 'FF31',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.42.2',
					webdriver_type: null,
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '31'
						},
					default_config: 'Win8.1'
				},
				{
					name: 'Firefox 32',
					type: 'Firefox',
					version: '32',
					api_name: 'FF32',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.43.1',
					webdriver_type: null,
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '32'
						},
					default_config: 'Win8.1'
				},
				{
					name: 'Firefox 33',
					type: 'Firefox',
					version: '33',
					api_name: 'FF33',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.43.1',
					webdriver_type: null,
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '33'
						},
					default_config: 'Win8.1'
				},
				{
					name: 'Firefox 34',
					type: 'Firefox',
					version: '34',
					api_name: 'FF34',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.44.0',
					webdriver_type: null,
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '34'
						},
					default_config: 'Win8.1'
				},
				{
					name: 'Firefox 35',
					type: 'Firefox',
					version: '35',
					api_name: 'FF35',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.44.0',
					webdriver_type: null,
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '35'
						},
					default_config: 'Win8.1'
				},
				{
					name: 'Firefox 36',
					type: 'Firefox',
					version: '36',
					api_name: 'FF36',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.45.0',
					webdriver_type: null,
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '36'
						},
					default_config: 'Win8.1'
				},
				{
					name: 'Firefox 37',
					type: 'Firefox',
					version: '37',
					api_name: 'FF37',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.45.0',
					webdriver_type: null,
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '37'
						},
					default_config: 'Win8.1'
				},
				{
					name: 'Firefox 38',
					type: 'Firefox',
					version: '38',
					api_name: 'FF38',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.46.0',
					webdriver_type: null,
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '38'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 39',
					type: 'Firefox',
					version: '39',
					api_name: 'FF39',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.46.0',
					webdriver_type: null,
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '39'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 40',
					type: 'Firefox',
					version: '40',
					api_name: 'FF40',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.47.1',
					webdriver_type: null,
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '40'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 41',
					type: 'Firefox',
					version: '41',
					api_name: 'FF41',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.48.2',
					webdriver_type: null,
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '41'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 42 (64-bit)',
					type: 'Firefox',
					version: '42',
					api_name: 'FF42x64',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: null,
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '42x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 42',
					type: 'Firefox',
					version: '42',
					api_name: 'FF42',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: null,
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '42'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 43',
					type: 'Firefox',
					version: '43',
					api_name: 'FF43',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: null,
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '43'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 44 (64-bit)',
					type: 'Firefox',
					version: '44',
					api_name: 'FF44x64',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: null,
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '44x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 44',
					type: 'Firefox',
					version: '44',
					api_name: 'FF44',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: null,
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '44'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 45',
					type: 'Firefox',
					version: '45',
					api_name: 'FF45',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: null,
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '45'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 45 (64-bit)',
					type: 'Firefox',
					version: '45',
					api_name: 'FF45x64',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: null,
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '45x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 46',
					type: 'Firefox',
					version: '46',
					api_name: 'FF46',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: null,
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '46'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 46 (64-bit)',
					type: 'Firefox',
					version: '46',
					api_name: 'FF46x64',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: null,
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '46x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 47',
					type: 'Firefox',
					version: '47',
					api_name: 'FF47',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.0.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.11.1',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '47'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 47 (64-bit)',
					type: 'Firefox',
					version: '47',
					api_name: 'FF47x64',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.0.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.11.1',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '47x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 48 (64-bit)',
					type: 'Firefox',
					version: '48',
					api_name: 'FF48x64',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.0.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.11.1',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '48x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 48',
					type: 'Firefox',
					version: '48',
					api_name: 'FF48',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.0.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.11.1',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '48'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 49',
					type: 'Firefox',
					version: '49',
					api_name: 'FF49',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.0.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.11.1',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '49'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 49 (64-bit)',
					type: 'Firefox',
					version: '49',
					api_name: 'FF49x64',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.0.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.11.1',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '49x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 50',
					type: 'Firefox',
					version: '50',
					api_name: 'FF50',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.0.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.11.1',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '50'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 50 (64-bit)',
					type: 'Firefox',
					version: '50',
					api_name: 'FF50x64',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.0.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.11.1',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '50x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 51 (64-bit)',
					type: 'Firefox',
					version: '51',
					api_name: 'FF51x64',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.0.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.11.1',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '51x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 51',
					type: 'Firefox',
					version: '51',
					api_name: 'FF51',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.0.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.11.1',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '51'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 52',
					type: 'Firefox',
					version: '52',
					api_name: 'FF52',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.17.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '52'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 52 (64-bit)',
					type: 'Firefox',
					version: '52',
					api_name: 'FF52x64',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.17.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '52x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 53',
					type: 'Firefox',
					version: '53',
					api_name: 'FF53',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.17.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '53'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 53 (64-bit)',
					type: 'Firefox',
					version: '53',
					api_name: 'FF53x64',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.17.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '53x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 54 (64-bit)',
					type: 'Firefox',
					version: '54',
					api_name: 'FF54x64',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.17.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '54x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 54',
					type: 'Firefox',
					version: '54',
					api_name: 'FF54',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.17.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '54'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 55',
					type: 'Firefox',
					version: '55',
					api_name: 'FF55',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.8.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.19.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '55'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 55 (64-bit)',
					type: 'Firefox',
					version: '55',
					api_name: 'FF55x64',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.8.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.19.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '55x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 56 (64-bit)',
					type: 'Firefox',
					version: '56',
					api_name: 'FF56x64',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.8.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.19.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '56x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 56',
					type: 'Firefox',
					version: '56',
					api_name: 'FF56',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.8.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.19.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '56'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 57',
					type: 'Firefox',
					version: '57',
					api_name: 'FF57',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.8.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.19.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '57'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 57 (64-bit)',
					type: 'Firefox',
					version: '57',
					api_name: 'FF57x64',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.8.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.19.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '57x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 58 (64-bit)',
					type: 'Firefox',
					version: '58',
					api_name: 'FF58x64',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.8.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.19.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '58x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 58',
					type: 'Firefox',
					version: '58',
					api_name: 'FF58',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.8.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.19.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '58'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 59 (64-bit)',
					type: 'Firefox',
					version: '59',
					api_name: 'FF59x64',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.8.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.20.1',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '59x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 59',
					type: 'Firefox',
					version: '59',
					api_name: 'FF59',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.8.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.20.1',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '59'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 60',
					type: 'Firefox',
					version: '60',
					api_name: 'FF60',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.8.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.19.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '60'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 60 (64-bit)',
					type: 'Firefox',
					version: '60',
					api_name: 'FF60x64',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.8.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.19.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '60x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 61 (64-bit)',
					type: 'Firefox',
					version: '61',
					api_name: 'FF61x64',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.8.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.19.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '61x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 61',
					type: 'Firefox',
					version: '61',
					api_name: 'FF61',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.8.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.19.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '61'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 62 (64-bit)',
					type: 'Firefox',
					version: '62',
					api_name: 'FF62x64',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.8.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.19.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '62x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 62',
					type: 'Firefox',
					version: '62',
					api_name: 'FF62',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.8.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.19.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '62'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 63 (64-bit)',
					type: 'Firefox',
					version: '63',
					api_name: 'FF63x64',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.11.0',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.23.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '63x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 63',
					type: 'Firefox',
					version: '63',
					api_name: 'FF63',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.11.0',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.23.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '63'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 64',
					type: 'Firefox',
					version: '64',
					api_name: 'FF64',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.11.0',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.23.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 64 (64-bit)',
					type: 'Firefox',
					version: '64',
					api_name: 'FF64x64',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.11.0',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.23.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '64x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 65 (64-bit)',
					type: 'Firefox',
					version: '65',
					api_name: 'FF65x64',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.11.0',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.23.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '65x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 65',
					type: 'Firefox',
					version: '65',
					api_name: 'FF65',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.11.0',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.23.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '65'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 66',
					type: 'Firefox',
					version: '66',
					api_name: 'FF66',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.11.0',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.23.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '66'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 67',
					type: 'Firefox',
					version: '67',
					api_name: 'FF67',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.11.0',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.23.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '67'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 67 (64-bit)',
					type: 'Firefox',
					version: '67',
					api_name: 'FF67x64',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.11.0',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.23.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '67x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Internet Explorer 10',
					type: 'Internet Explorer',
					version: '10',
					api_name: 'IE10',
					default_live_test_browser: true,
					icon_class: 'ie',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.46.0',
					webdriver_type: 'iedriver',
					webdriver_version: '2.46.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Internet Explorer',
							version: '10'
						},
					default_config: 'Win7x64'
				}
			],
		resolutions:
			[
				{
					width: 800,
					height: 600,
					name: '800x600',
					desktop_width: 800,
					desktop_height: 600,
					default: false,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '800x600'
						}
				},
				{
					width: 1024,
					height: 768,
					name: '1024x768',
					desktop_width: 1024,
					desktop_height: 768,
					default: false,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '1024x768'
						}
				},
				{
					width: 1152,
					height: 864,
					name: '1152x864',
					desktop_width: 1152,
					desktop_height: 864,
					default: false,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '1152x864'
						}
				},
				{
					width: 1280,
					height: 768,
					name: '1280x768',
					desktop_width: 1280,
					desktop_height: 768,
					default: false,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '1280x768'
						}
				},
				{
					width: 1280,
					height: 960,
					name: '1280x960',
					desktop_width: 1280,
					desktop_height: 960,
					default: false,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '1280x960'
						}
				},
				{
					width: 1280,
					height: 1024,
					name: '1280x1024',
					desktop_width: 1280,
					desktop_height: 1024,
					default: false,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '1280x1024'
						}
				},
				{
					width: 1366,
					height: 768,
					name: '1366x768',
					desktop_width: 1366,
					desktop_height: 768,
					default: true,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '1366x768'
						}
				},
				{
					width: 1400,
					height: 1050,
					name: '1400x1050',
					desktop_width: 1400,
					desktop_height: 1050,
					default: false,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '1400x1050'
						}
				},
				{
					width: 1600,
					height: 1200,
					name: '1600x1200',
					desktop_width: 1600,
					desktop_height: 1200,
					default: false,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '1600x1200'
						}
				},
				{
					width: 1920,
					height: 1080,
					name: '1920x1080',
					desktop_width: 1920,
					desktop_height: 1080,
					default: false,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '1920x1080'
						}
				},
				{
					width: 2560,
					height: 1600,
					name: '2560x1600',
					desktop_width: 2560,
					desktop_height: 1600,
					default: false,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '2560x1600'
						}
				},
				{
					width: 2560,
					height: 1920,
					name: '2560x1920',
					desktop_width: 2560,
					desktop_height: 1920,
					default: false,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '2560x1920'
						}
				}
			],
		a: false
	},
	{
		api_name: 'Win7x64',
		device: 'desktop',
		device_type: null,
		name: 'Windows 7 64-Bit',
		version: 'Windows 7 64-bit',
		type: 'Windows',
		icon_class: 'windows-7',
		upload_file_enabled: true,
		sort_order: 12.15,
		is_webrtc_enabled: true,
		caps:
			{
				platform: 'Windows 7 64-Bit'
			},
		browsers:
			[
				{
					name: 'Google Chrome 30',
					type: 'Chrome',
					version: '30',
					api_name: 'Chrome30',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.42.2',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.8',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '30'
						},
					default_config: 'Win8.1'
				},
				{
					name: 'Google Chrome 31',
					type: 'Chrome',
					version: '31',
					api_name: 'Chrome31',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.42.2',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.8',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '31'
						},
					default_config: 'Win8.1'
				},
				{
					name: 'Google Chrome 32',
					type: 'Chrome',
					version: '32',
					api_name: 'Chrome32',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.42.2',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.8',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '32'
						},
					default_config: 'Win8.1'
				},
				{
					name: 'Google Chrome 33',
					type: 'Chrome',
					version: '33',
					api_name: 'Chrome33',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.42.2',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.8',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '33'
						},
					default_config: 'Win8.1'
				},
				{
					name: 'Google Chrome 34',
					type: 'Chrome',
					version: '34',
					api_name: 'Chrome34',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.42.2',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.8',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '34'
						},
					default_config: 'Win8.1'
				},
				{
					name: 'Google Chrome 35',
					type: 'Chrome',
					version: '35',
					api_name: 'Chrome35',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.42.2',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.8',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '35'
						},
					default_config: 'Win8.1'
				},
				{
					name: 'Google Chrome 36',
					type: 'Chrome',
					version: '36',
					api_name: 'Chrome36',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.42.2',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.12',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '36'
						},
					default_config: 'Win8.1'
				},
				{
					name: 'Google Chrome 37 (64-bit)',
					type: 'Chrome',
					version: '37',
					api_name: 'Chrome37x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.42.2',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.12',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '37x64'
						},
					default_config: 'Win8'
				},
				{
					name: 'Google Chrome 37',
					type: 'Chrome',
					version: '37',
					api_name: 'Chrome37',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.42.2',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.12',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '37'
						},
					default_config: 'Win8.1'
				},
				{
					name: 'Google Chrome 38 (64-bit)',
					type: 'Chrome',
					version: '38',
					api_name: 'Chrome38x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.43.1',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.12',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '38x64'
						},
					default_config: 'Win8.1'
				},
				{
					name: 'Google Chrome 38',
					type: 'Chrome',
					version: '38',
					api_name: 'Chrome38',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.43.1',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.12',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '38'
						},
					default_config: 'Win8.1'
				},
				{
					name: 'Google Chrome 39 (64-bit)',
					type: 'Chrome',
					version: '39',
					api_name: 'Chrome39x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.43.1',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.12',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '39x64'
						},
					default_config: 'Win8.1'
				},
				{
					name: 'Google Chrome 39',
					type: 'Chrome',
					version: '39',
					api_name: 'Chrome39',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.43.1',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.12',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '39'
						},
					default_config: 'Win8.1'
				},
				{
					name: 'Google Chrome 40',
					type: 'Chrome',
					version: '40',
					api_name: 'Chrome40',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.45.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.15',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '40'
						},
					default_config: 'Win8.1'
				},
				{
					name: 'Google Chrome 40 (64-bit)',
					type: 'Chrome',
					version: '40',
					api_name: 'Chrome40x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.45.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.15',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '40x64'
						},
					default_config: 'Win8.1'
				},
				{
					name: 'Google Chrome 41',
					type: 'Chrome',
					version: '41',
					api_name: 'Chrome41',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.46.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.15',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '41'
						},
					default_config: 'Win8.1'
				},
				{
					name: 'Google Chrome 41 (64-bit)',
					type: 'Chrome',
					version: '41',
					api_name: 'Chrome41x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.46.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.15',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '41x64'
						},
					default_config: 'Win8.1'
				},
				{
					name: 'Google Chrome 42',
					type: 'Chrome',
					version: '42',
					api_name: 'Chrome42',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.46.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.15',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '42'
						},
					default_config: 'Win8.1'
				},
				{
					name: 'Google Chrome 42 (64-bit)',
					type: 'Chrome',
					version: '42',
					api_name: 'Chrome42x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.46.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.15',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '42x64'
						},
					default_config: 'Win8.1'
				},
				{
					name: 'Google Chrome 43',
					type: 'Chrome',
					version: '43',
					api_name: 'Chrome43',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.46.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.20',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '43'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 43 (64-bit)',
					type: 'Chrome',
					version: '43',
					api_name: 'Chrome43x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.46.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.20',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '43x64'
						},
					default_config: 'Win8.1'
				},
				{
					name: 'Google Chrome 44',
					type: 'Chrome',
					version: '44',
					api_name: 'Chrome44',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.46.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.20',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '44'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 44 (64-bit)',
					type: 'Chrome',
					version: '44',
					api_name: 'Chrome44x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.46.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.20',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '44x64'
						},
					default_config: 'Win8.1'
				},
				{
					name: 'Google Chrome 45',
					type: 'Chrome',
					version: '45',
					api_name: 'Chrome45',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.47.1',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.20',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '45'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 45 (64-bit)',
					type: 'Chrome',
					version: '45',
					api_name: 'Chrome45x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.47.1',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.20',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '45x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 46',
					type: 'Chrome',
					version: '46',
					api_name: 'Chrome46',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.21',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '46'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 46 (64-bit)',
					type: 'Chrome',
					version: '46',
					api_name: 'Chrome46x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.21',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '46x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 47',
					type: 'Chrome',
					version: '47',
					api_name: 'Chrome47',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.21',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '47'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 47 (64-bit)',
					type: 'Chrome',
					version: '47',
					api_name: 'Chrome47x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.21',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '47x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 48',
					type: 'Chrome',
					version: '48',
					api_name: 'Chrome48',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.21',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '48'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 48 (64-bit)',
					type: 'Chrome',
					version: '48',
					api_name: 'Chrome48x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.21',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '48x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 49',
					type: 'Chrome',
					version: '49',
					api_name: 'Chrome49',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.22',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '49'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 49 (64-bit)',
					type: 'Chrome',
					version: '49',
					api_name: 'Chrome49x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.22',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '49x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 50 (64-bit)',
					type: 'Chrome',
					version: '50',
					api_name: 'Chrome50x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.22',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '50x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 50',
					type: 'Chrome',
					version: '50',
					api_name: 'Chrome50',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.22',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '50'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 51',
					type: 'Chrome',
					version: '51',
					api_name: 'Chrome51',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.22',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '51'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 51 (64-bit)',
					type: 'Chrome',
					version: '51',
					api_name: 'Chrome51x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.22',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '51x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 52 (64-bit)',
					type: 'Chrome',
					version: '52',
					api_name: 'Chrome52x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.22',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '52x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 52',
					type: 'Chrome',
					version: '52',
					api_name: 'Chrome52',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.22',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '52'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 53',
					type: 'Chrome',
					version: '53',
					api_name: 'Chrome53',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.22',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '53'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 53 (64-bit)',
					type: 'Chrome',
					version: '53',
					api_name: 'Chrome53x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.22',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '53x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 54 (64-bit)',
					type: 'Chrome',
					version: '54',
					api_name: 'Chrome54x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.27',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '54x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 54',
					type: 'Chrome',
					version: '54',
					api_name: 'Chrome54',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.27',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '54'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 55 (64-bit)',
					type: 'Chrome',
					version: '55',
					api_name: 'Chrome55x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.28',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '55x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 55',
					type: 'Chrome',
					version: '55',
					api_name: 'Chrome55',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.28',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '55'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 56',
					type: 'Chrome',
					version: '56',
					api_name: 'Chrome56',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.29',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '56'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 56 (64-bit)',
					type: 'Chrome',
					version: '56',
					api_name: 'Chrome56x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.29',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '56x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 57 (64-bit)',
					type: 'Chrome',
					version: '57',
					api_name: 'Chrome57x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.29',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '57x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 57',
					type: 'Chrome',
					version: '57',
					api_name: 'Chrome57',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.29',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '57'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 58',
					type: 'Chrome',
					version: '58',
					api_name: 'Chrome58',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.30',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '58'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 58 (64-bit)',
					type: 'Chrome',
					version: '58',
					api_name: 'Chrome58x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.30',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '58x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 59',
					type: 'Chrome',
					version: '59',
					api_name: 'Chrome59',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.30',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '59'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 59 (64-bit)',
					type: 'Chrome',
					version: '59',
					api_name: 'Chrome59x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.30',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '59x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 60 (64-bit)',
					type: 'Chrome',
					version: '60',
					api_name: 'Chrome60x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.33',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '60x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 60',
					type: 'Chrome',
					version: '60',
					api_name: 'Chrome60',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.33',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '60'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 61',
					type: 'Chrome',
					version: '61',
					api_name: 'Chrome61',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.33',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '61'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 61 (64-bit)',
					type: 'Chrome',
					version: '61',
					api_name: 'Chrome61x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.33',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '61x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 62 (64-bit)',
					type: 'Chrome',
					version: '62',
					api_name: 'Chrome62x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.34',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '62x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 62',
					type: 'Chrome',
					version: '62',
					api_name: 'Chrome62',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.34',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '62'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 63',
					type: 'Chrome',
					version: '63',
					api_name: 'Chrome63',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.34',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '63'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 63 (64-bit)',
					type: 'Chrome',
					version: '63',
					api_name: 'Chrome63x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.34',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '63x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 64',
					type: 'Chrome',
					version: '64',
					api_name: 'Chrome64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.37',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 64 (64-bit)',
					type: 'Chrome',
					version: '64',
					api_name: 'Chrome64x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.37',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '64x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 65',
					type: 'Chrome',
					version: '65',
					api_name: 'Chrome65',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.37',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '65'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 65 (64-bit)',
					type: 'Chrome',
					version: '65',
					api_name: 'Chrome65x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.37',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '65x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 66',
					type: 'Chrome',
					version: '66',
					api_name: 'Chrome66',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.37',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '66'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 66 (64-bit)',
					type: 'Chrome',
					version: '66',
					api_name: 'Chrome66x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.37',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '66x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 67',
					type: 'Chrome',
					version: '67',
					api_name: 'Chrome67',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.37',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '67'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 67 (64-bit)',
					type: 'Chrome',
					version: '67',
					api_name: 'Chrome67x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.37',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '67x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 68',
					type: 'Chrome',
					version: '68',
					api_name: 'Chrome68',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.41',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '68'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 68 (64-bit)',
					type: 'Chrome',
					version: '68',
					api_name: 'Chrome68x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.41',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '68x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 69',
					type: 'Chrome',
					version: '69',
					api_name: 'Chrome69',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.41',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '69'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 69 (64-bit)',
					type: 'Chrome',
					version: '69',
					api_name: 'Chrome69x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.41',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '69x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 70',
					type: 'Chrome',
					version: '70',
					api_name: 'Chrome70',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.41',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '70'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 70 (64-bit)',
					type: 'Chrome',
					version: '70',
					api_name: 'Chrome70x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.41',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '70x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 71 (64-bit)',
					type: 'Chrome',
					version: '71',
					api_name: 'Chrome71x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.41',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '71x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 71',
					type: 'Chrome',
					version: '71',
					api_name: 'Chrome71',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.41',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '71'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 72',
					type: 'Chrome',
					version: '72',
					api_name: 'Chrome72',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '72.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '72'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 72 (64-bit)',
					type: 'Chrome',
					version: '72',
					api_name: 'Chrome72x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '72.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '72x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 73',
					type: 'Chrome',
					version: '73',
					api_name: 'Chrome73',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '73.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '73'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 73 (64-bit)',
					type: 'Chrome',
					version: '73',
					api_name: 'Chrome73x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '73.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '73x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 74',
					type: 'Chrome',
					version: '74',
					api_name: 'Chrome74',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '74.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '74'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 74 (64-bit)',
					type: 'Chrome',
					version: '74',
					api_name: 'Chrome74x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '74.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '74x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 75 (64-bit)',
					type: 'Chrome',
					version: '75',
					api_name: 'Chrome75x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.11.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '75.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '75x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 75',
					type: 'Chrome',
					version: '75',
					api_name: 'Chrome75',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.11.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '75.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '75'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 76',
					type: 'Chrome',
					version: '76',
					api_name: 'Chrome76',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.11.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '76.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '76'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 76 (64-bit)',
					type: 'Chrome',
					version: '76',
					api_name: 'Chrome76x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.11.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '76.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '76x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 77 (64-bit)',
					type: 'Chrome',
					version: '77',
					api_name: 'Chrome77x64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.141.59',
					webdriver_type: 'chromedriver',
					webdriver_version: '77.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '77x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 77',
					type: 'Chrome',
					version: '77',
					api_name: 'Chrome77',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.141.59',
					webdriver_type: 'chromedriver',
					webdriver_version: '77.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '77'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 27',
					type: 'Firefox',
					version: '27',
					api_name: 'FF27',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.42.2',
					webdriver_type: null,
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '27'
						},
					default_config: 'Win8.1'
				},
				{
					name: 'Firefox 28',
					type: 'Firefox',
					version: '28',
					api_name: 'FF28',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.42.2',
					webdriver_type: null,
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '28'
						},
					default_config: 'Win8.1'
				},
				{
					name: 'Firefox 29',
					type: 'Firefox',
					version: '29',
					api_name: 'FF29',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.42.2',
					webdriver_type: null,
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '29'
						},
					default_config: 'Win8.1'
				},
				{
					name: 'Firefox 30',
					type: 'Firefox',
					version: '30',
					api_name: 'FF30',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.42.2',
					webdriver_type: null,
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '30'
						},
					default_config: 'Win8.1'
				},
				{
					name: 'Firefox 31',
					type: 'Firefox',
					version: '31',
					api_name: 'FF31',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.42.2',
					webdriver_type: null,
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '31'
						},
					default_config: 'Win8.1'
				},
				{
					name: 'Firefox 32',
					type: 'Firefox',
					version: '32',
					api_name: 'FF32',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.43.1',
					webdriver_type: null,
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '32'
						},
					default_config: 'Win8.1'
				},
				{
					name: 'Firefox 33',
					type: 'Firefox',
					version: '33',
					api_name: 'FF33',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.43.1',
					webdriver_type: null,
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '33'
						},
					default_config: 'Win8.1'
				},
				{
					name: 'Firefox 34',
					type: 'Firefox',
					version: '34',
					api_name: 'FF34',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.44.0',
					webdriver_type: null,
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '34'
						},
					default_config: 'Win8.1'
				},
				{
					name: 'Firefox 35',
					type: 'Firefox',
					version: '35',
					api_name: 'FF35',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.44.0',
					webdriver_type: null,
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '35'
						},
					default_config: 'Win8.1'
				},
				{
					name: 'Firefox 36',
					type: 'Firefox',
					version: '36',
					api_name: 'FF36',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.45.0',
					webdriver_type: null,
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '36'
						},
					default_config: 'Win8.1'
				},
				{
					name: 'Firefox 37',
					type: 'Firefox',
					version: '37',
					api_name: 'FF37',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.45.0',
					webdriver_type: null,
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '37'
						},
					default_config: 'Win8.1'
				},
				{
					name: 'Firefox 38',
					type: 'Firefox',
					version: '38',
					api_name: 'FF38',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.46.0',
					webdriver_type: null,
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '38'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 39',
					type: 'Firefox',
					version: '39',
					api_name: 'FF39',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.46.0',
					webdriver_type: null,
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '39'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 40',
					type: 'Firefox',
					version: '40',
					api_name: 'FF40',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.47.1',
					webdriver_type: null,
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '40'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 41',
					type: 'Firefox',
					version: '41',
					api_name: 'FF41',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.48.2',
					webdriver_type: null,
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '41'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 42',
					type: 'Firefox',
					version: '42',
					api_name: 'FF42',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.48.2',
					webdriver_type: null,
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '42'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 43',
					type: 'Firefox',
					version: '43',
					api_name: 'FF43',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.48.2',
					webdriver_type: null,
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '43'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 44',
					type: 'Firefox',
					version: '44',
					api_name: 'FF44',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.48.2',
					webdriver_type: null,
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '44'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 45 (64-bit)',
					type: 'Firefox',
					version: '45',
					api_name: 'FF45x64',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: null,
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '45x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 45',
					type: 'Firefox',
					version: '45',
					api_name: 'FF45',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: null,
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '45'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 46',
					type: 'Firefox',
					version: '46',
					api_name: 'FF46',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: null,
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '46'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 46 (64-bit)',
					type: 'Firefox',
					version: '46',
					api_name: 'FF46x64',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: null,
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '46x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 47 (64-bit)',
					type: 'Firefox',
					version: '47',
					api_name: 'FF47x64',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.0.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.11.1',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '47x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 47',
					type: 'Firefox',
					version: '47',
					api_name: 'FF47',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.0.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.11.1',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '47'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 48',
					type: 'Firefox',
					version: '48',
					api_name: 'FF48',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.0.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.11.1',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '48'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 48 (64-bit)',
					type: 'Firefox',
					version: '48',
					api_name: 'FF48x64',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.0.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.11.1',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '48x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 49 (64-bit)',
					type: 'Firefox',
					version: '49',
					api_name: 'FF49x64',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.0.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.11.1',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '49x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 49',
					type: 'Firefox',
					version: '49',
					api_name: 'FF49',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.0.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.11.1',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '49'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 50',
					type: 'Firefox',
					version: '50',
					api_name: 'FF50',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.0.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.11.1',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '50'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 50 (64-bit)',
					type: 'Firefox',
					version: '50',
					api_name: 'FF50x64',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.0.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.11.1',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '50x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 51',
					type: 'Firefox',
					version: '51',
					api_name: 'FF51',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.0.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.11.1',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '51'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 51 (64-bit)',
					type: 'Firefox',
					version: '51',
					api_name: 'FF51x64',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.0.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.11.1',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '51x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 52',
					type: 'Firefox',
					version: '52',
					api_name: 'FF52',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.17.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '52'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 52 (64-bit)',
					type: 'Firefox',
					version: '52',
					api_name: 'FF52x64',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.17.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '52x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 53 (64-bit)',
					type: 'Firefox',
					version: '53',
					api_name: 'FF53x64',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.17.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '53x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 53',
					type: 'Firefox',
					version: '53',
					api_name: 'FF53',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.17.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '53'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 54',
					type: 'Firefox',
					version: '54',
					api_name: 'FF54',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.17.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '54'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 54 (64-bit)',
					type: 'Firefox',
					version: '54',
					api_name: 'FF54x64',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.17.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '54x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 55',
					type: 'Firefox',
					version: '55',
					api_name: 'FF55',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.8.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.19.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '55'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 55 (64-bit)',
					type: 'Firefox',
					version: '55',
					api_name: 'FF55x64',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.8.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.19.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '55x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 56 (64-bit)',
					type: 'Firefox',
					version: '56',
					api_name: 'FF56x64',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.8.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.19.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '56x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 56',
					type: 'Firefox',
					version: '56',
					api_name: 'FF56',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.8.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.19.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '56'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 57 (64-bit)',
					type: 'Firefox',
					version: '57',
					api_name: 'FF57x64',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.8.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.19.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '57x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 57',
					type: 'Firefox',
					version: '57',
					api_name: 'FF57',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.8.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.19.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '57'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 58',
					type: 'Firefox',
					version: '58',
					api_name: 'FF58',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.8.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.19.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '58'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 58 (64-bit)',
					type: 'Firefox',
					version: '58',
					api_name: 'FF58x64',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.8.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.19.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '58x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 59',
					type: 'Firefox',
					version: '59',
					api_name: 'FF59',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.8.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.20.1',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '59'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 59 (64-bit)',
					type: 'Firefox',
					version: '59',
					api_name: 'FF59x64',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.8.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.20.1',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '59x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 60 (64-bit)',
					type: 'Firefox',
					version: '60',
					api_name: 'FF60x64',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.8.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.19.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '60x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 60',
					type: 'Firefox',
					version: '60',
					api_name: 'FF60',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.8.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.19.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '60'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 61',
					type: 'Firefox',
					version: '61',
					api_name: 'FF61',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.8.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.19.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '61'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 61 (64-bit)',
					type: 'Firefox',
					version: '61',
					api_name: 'FF61x64',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.8.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.19.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '61x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 62',
					type: 'Firefox',
					version: '62',
					api_name: 'FF62',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.8.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.19.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '62'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 62 (64-bit)',
					type: 'Firefox',
					version: '62',
					api_name: 'FF62x64',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.8.1',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.19.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '62x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 63 (64-bit)',
					type: 'Firefox',
					version: '63',
					api_name: 'FF63x64',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.11.0',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.23.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '63x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 63',
					type: 'Firefox',
					version: '63',
					api_name: 'FF63',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.11.0',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.23.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '63'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 64 (64-bit)',
					type: 'Firefox',
					version: '64',
					api_name: 'FF64x64',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.11.0',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.23.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '64x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 64',
					type: 'Firefox',
					version: '64',
					api_name: 'FF64',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.11.0',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.23.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 65',
					type: 'Firefox',
					version: '65',
					api_name: 'FF65',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.11.0',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.23.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '65'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 65 (64-bit)',
					type: 'Firefox',
					version: '65',
					api_name: 'FF65x64',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.11.0',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.23.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '65x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 66',
					type: 'Firefox',
					version: '66',
					api_name: 'FF66',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.11.0',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.23.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '66'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 67 (64-bit)',
					type: 'Firefox',
					version: '67',
					api_name: 'FF67x64',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.11.0',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.23.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '67x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 67',
					type: 'Firefox',
					version: '67',
					api_name: 'FF67',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.11.0',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.23.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '67'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 69 (64-bit)',
					type: 'Firefox',
					version: '69',
					api_name: 'FF69x64',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.11.0',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.23.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '69x64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 69',
					type: 'Firefox',
					version: '69',
					api_name: 'FF69',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.11.0',
					webdriver_type: 'geckodriver',
					webdriver_version: '0.23.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '69'
						},
					default_config: 'Win10'
				},
				{
					name: 'Internet Explorer 10',
					type: 'Internet Explorer',
					version: '10',
					api_name: 'IE10',
					default_live_test_browser: true,
					icon_class: 'ie',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.46.0',
					webdriver_type: 'iedriver',
					webdriver_version: '2.46.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Internet Explorer',
							version: '10'
						},
					default_config: 'Win7x64'
				},
				{
					name: 'Internet Explorer 11',
					type: 'Internet Explorer',
					version: '11',
					api_name: 'IE11',
					default_live_test_browser: true,
					icon_class: 'ie',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.14.0',
					webdriver_type: 'iedriver',
					webdriver_version: '2.46.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Internet Explorer',
							version: '11'
						},
					default_config: 'Win10'
				},
				{
					name: 'Internet Explorer 9',
					type: 'Internet Explorer',
					version: '9',
					api_name: 'IE9',
					default_live_test_browser: true,
					icon_class: 'ie',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.46.0',
					webdriver_type: 'iedriver',
					webdriver_version: '2.46.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Internet Explorer',
							version: '9'
						},
					default_config: 'Win7x64'
				}
			],
		resolutions:
			[
				{
					width: 800,
					height: 600,
					name: '800x600',
					desktop_width: 800,
					desktop_height: 600,
					default: false,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '800x600'
						}
				},
				{
					width: 1024,
					height: 768,
					name: '1024x768',
					desktop_width: 1024,
					desktop_height: 768,
					default: false,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '1024x768'
						}
				},
				{
					width: 1152,
					height: 864,
					name: '1152x864',
					desktop_width: 1152,
					desktop_height: 864,
					default: false,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '1152x864'
						}
				},
				{
					width: 1280,
					height: 768,
					name: '1280x768',
					desktop_width: 1280,
					desktop_height: 768,
					default: false,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '1280x768'
						}
				},
				{
					width: 1280,
					height: 960,
					name: '1280x960',
					desktop_width: 1280,
					desktop_height: 960,
					default: false,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '1280x960'
						}
				},
				{
					width: 1280,
					height: 1024,
					name: '1280x1024',
					desktop_width: 1280,
					desktop_height: 1024,
					default: false,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '1280x1024'
						}
				},
				{
					width: 1366,
					height: 768,
					name: '1366x768',
					desktop_width: 1366,
					desktop_height: 768,
					default: true,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '1366x768'
						}
				},
				{
					width: 1400,
					height: 1050,
					name: '1400x1050',
					desktop_width: 1400,
					desktop_height: 1050,
					default: false,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '1400x1050'
						}
				},
				{
					width: 1600,
					height: 1200,
					name: '1600x1200',
					desktop_width: 1600,
					desktop_height: 1200,
					default: false,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '1600x1200'
						}
				},
				{
					width: 1920,
					height: 1080,
					name: '1920x1080',
					desktop_width: 1920,
					desktop_height: 1080,
					default: false,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '1920x1080'
						}
				},
				{
					width: 2560,
					height: 1600,
					name: '2560x1600',
					desktop_width: 2560,
					desktop_height: 1600,
					default: false,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '2560x1600'
						}
				}
			],
		a: false
	},
	{
		api_name: 'Win7',
		device: 'desktop',
		device_type: null,
		name: 'Windows 7',
		version: 'Windows 7 Beta',
		type: 'Windows',
		icon_class: 'windows-7',
		upload_file_enabled: true,
		sort_order: 13,
		is_webrtc_enabled: false,
		caps:
			{
				platform: 'Windows 7'
			},
		browsers:
			[
				{
					name: 'Google Chrome 30',
					type: 'Chrome',
					version: '30',
					api_name: 'Chrome30',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.42.2',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.8',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '30'
						},
					default_config: 'Win8.1'
				},
				{
					name: 'Google Chrome 31',
					type: 'Chrome',
					version: '31',
					api_name: 'Chrome31',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.42.2',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.8',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '31'
						},
					default_config: 'Win8.1'
				},
				{
					name: 'Google Chrome 32',
					type: 'Chrome',
					version: '32',
					api_name: 'Chrome32',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.42.2',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.8',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '32'
						},
					default_config: 'Win8.1'
				},
				{
					name: 'Google Chrome 33',
					type: 'Chrome',
					version: '33',
					api_name: 'Chrome33',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.42.2',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.8',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '33'
						},
					default_config: 'Win8.1'
				},
				{
					name: 'Google Chrome 34',
					type: 'Chrome',
					version: '34',
					api_name: 'Chrome34',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.42.2',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.8',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '34'
						},
					default_config: 'Win8.1'
				},
				{
					name: 'Google Chrome 35',
					type: 'Chrome',
					version: '35',
					api_name: 'Chrome35',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.42.2',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.8',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '35'
						},
					default_config: 'Win8.1'
				},
				{
					name: 'Google Chrome 36',
					type: 'Chrome',
					version: '36',
					api_name: 'Chrome36',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.42.2',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.12',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '36'
						},
					default_config: 'Win8.1'
				},
				{
					name: 'Google Chrome 37',
					type: 'Chrome',
					version: '37',
					api_name: 'Chrome37',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.42.2',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.12',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '37'
						},
					default_config: 'Win8.1'
				},
				{
					name: 'Google Chrome 38',
					type: 'Chrome',
					version: '38',
					api_name: 'Chrome38',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.43.1',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.12',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '38'
						},
					default_config: 'Win8.1'
				},
				{
					name: 'Google Chrome 39',
					type: 'Chrome',
					version: '39',
					api_name: 'Chrome39',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.43.1',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.12',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '39'
						},
					default_config: 'Win8.1'
				},
				{
					name: 'Google Chrome 40',
					type: 'Chrome',
					version: '40',
					api_name: 'Chrome40',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.44.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.15',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '40'
						},
					default_config: 'Win8.1'
				},
				{
					name: 'Google Chrome 41',
					type: 'Chrome',
					version: '41',
					api_name: 'Chrome41',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.45.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.15',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '41'
						},
					default_config: 'Win8.1'
				},
				{
					name: 'Google Chrome 42',
					type: 'Chrome',
					version: '42',
					api_name: 'Chrome42',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.45.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.15',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '42'
						},
					default_config: 'Win8.1'
				},
				{
					name: 'Google Chrome 43',
					type: 'Chrome',
					version: '43',
					api_name: 'Chrome43',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.45.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.20',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '43'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 44',
					type: 'Chrome',
					version: '44',
					api_name: 'Chrome44',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.46.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.20',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '44'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 45',
					type: 'Chrome',
					version: '45',
					api_name: 'Chrome45',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.47.1',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.20',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '45'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 46',
					type: 'Chrome',
					version: '46',
					api_name: 'Chrome46',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.21',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '46'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 47',
					type: 'Chrome',
					version: '47',
					api_name: 'Chrome47',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.21',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '47'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 48',
					type: 'Chrome',
					version: '48',
					api_name: 'Chrome48',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.21',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '48'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 49',
					type: 'Chrome',
					version: '49',
					api_name: 'Chrome49',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.22',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '49'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 50',
					type: 'Chrome',
					version: '50',
					api_name: 'Chrome50',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.22',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '50'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 51',
					type: 'Chrome',
					version: '51',
					api_name: 'Chrome51',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.22',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '51'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 52',
					type: 'Chrome',
					version: '52',
					api_name: 'Chrome52',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.22',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '52'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 53',
					type: 'Chrome',
					version: '53',
					api_name: 'Chrome53',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.22',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '53'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 54',
					type: 'Chrome',
					version: '54',
					api_name: 'Chrome54',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.27',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '54'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 55',
					type: 'Chrome',
					version: '55',
					api_name: 'Chrome55',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.28',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '55'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 56',
					type: 'Chrome',
					version: '56',
					api_name: 'Chrome56',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.29',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '56'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 57',
					type: 'Chrome',
					version: '57',
					api_name: 'Chrome57',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.29',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '57'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 58',
					type: 'Chrome',
					version: '58',
					api_name: 'Chrome58',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.30',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '58'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 59',
					type: 'Chrome',
					version: '59',
					api_name: 'Chrome59',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.30',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '59'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 60',
					type: 'Chrome',
					version: '60',
					api_name: 'Chrome60',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.33',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '60'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 64',
					type: 'Chrome',
					version: '64',
					api_name: 'Chrome64',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.37',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '64'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 65',
					type: 'Chrome',
					version: '65',
					api_name: 'Chrome65',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.37',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '65'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 68',
					type: 'Chrome',
					version: '68',
					api_name: 'Chrome68',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.41',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '68'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 69',
					type: 'Chrome',
					version: '69',
					api_name: 'Chrome69',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '2.41',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '69'
						},
					default_config: 'Win10'
				},
				{
					name: 'Google Chrome 72',
					type: 'Chrome',
					version: '72',
					api_name: 'Chrome72',
					default_live_test_browser: false,
					icon_class: 'chrome',
					major_browser: true,
					device: 'desktop',
					selenium_version: '3.4.0',
					webdriver_type: 'chromedriver',
					webdriver_version: '72.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Chrome',
							version: '72'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 27',
					type: 'Firefox',
					version: '27',
					api_name: 'FF27',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.42.2',
					webdriver_type: null,
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '27'
						},
					default_config: 'Win8.1'
				},
				{
					name: 'Firefox 28',
					type: 'Firefox',
					version: '28',
					api_name: 'FF28',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.42.2',
					webdriver_type: null,
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '28'
						},
					default_config: 'Win8.1'
				},
				{
					name: 'Firefox 29',
					type: 'Firefox',
					version: '29',
					api_name: 'FF29',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.42.2',
					webdriver_type: null,
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '29'
						},
					default_config: 'Win8.1'
				},
				{
					name: 'Firefox 30',
					type: 'Firefox',
					version: '30',
					api_name: 'FF30',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.42.2',
					webdriver_type: null,
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '30'
						},
					default_config: 'Win8.1'
				},
				{
					name: 'Firefox 31',
					type: 'Firefox',
					version: '31',
					api_name: 'FF31',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.47.1',
					webdriver_type: null,
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '31'
						},
					default_config: 'Win8.1'
				},
				{
					name: 'Firefox 32',
					type: 'Firefox',
					version: '32',
					api_name: 'FF32',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.43.1',
					webdriver_type: null,
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '32'
						},
					default_config: 'Win8.1'
				},
				{
					name: 'Firefox 33',
					type: 'Firefox',
					version: '33',
					api_name: 'FF33',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.43.1',
					webdriver_type: null,
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '33'
						},
					default_config: 'Win8.1'
				},
				{
					name: 'Firefox 34',
					type: 'Firefox',
					version: '34',
					api_name: 'FF34',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.44.0',
					webdriver_type: null,
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '34'
						},
					default_config: 'Win8.1'
				},
				{
					name: 'Firefox 35',
					type: 'Firefox',
					version: '35',
					api_name: 'FF35',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.44.0',
					webdriver_type: null,
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '35'
						},
					default_config: 'Win8.1'
				},
				{
					name: 'Firefox 36',
					type: 'Firefox',
					version: '36',
					api_name: 'FF36',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.45.0',
					webdriver_type: null,
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '36'
						},
					default_config: 'Win8.1'
				},
				{
					name: 'Firefox 37',
					type: 'Firefox',
					version: '37',
					api_name: 'FF37',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.45.0',
					webdriver_type: null,
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '37'
						},
					default_config: 'Win8.1'
				},
				{
					name: 'Firefox 38',
					type: 'Firefox',
					version: '38',
					api_name: 'FF38',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.46.0',
					webdriver_type: null,
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '38'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 39',
					type: 'Firefox',
					version: '39',
					api_name: 'FF39',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.46.0',
					webdriver_type: null,
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '39'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 40',
					type: 'Firefox',
					version: '40',
					api_name: 'FF40',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.47.1',
					webdriver_type: null,
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '40'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 41',
					type: 'Firefox',
					version: '41',
					api_name: 'FF41',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.48.2',
					webdriver_type: null,
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '41'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 42',
					type: 'Firefox',
					version: '42',
					api_name: 'FF42',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.48.2',
					webdriver_type: null,
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '42'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 43',
					type: 'Firefox',
					version: '43',
					api_name: 'FF43',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.48.2',
					webdriver_type: null,
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '43'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 44',
					type: 'Firefox',
					version: '44',
					api_name: 'FF44',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.48.2',
					webdriver_type: null,
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '44'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 45',
					type: 'Firefox',
					version: '45',
					api_name: 'FF45',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: null,
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '45'
						},
					default_config: 'Win10'
				},
				{
					name: 'Firefox 46',
					type: 'Firefox',
					version: '46',
					api_name: 'FF46',
					default_live_test_browser: false,
					icon_class: 'firefox',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.53.0',
					webdriver_type: null,
					webdriver_version: null,
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Firefox',
							version: '46'
						},
					default_config: 'Win10'
				},
				{
					name: 'Internet Explorer 8',
					type: 'Internet Explorer',
					version: '8',
					api_name: 'IE8',
					default_live_test_browser: true,
					icon_class: 'ie',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.46.0',
					webdriver_type: 'iedriver',
					webdriver_version: '2.46.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Internet Explorer',
							version: '8'
						},
					default_config: 'Win7'
				},
				{
					name: 'Internet Explorer 9',
					type: 'Internet Explorer',
					version: '9',
					api_name: 'IE9',
					default_live_test_browser: true,
					icon_class: 'ie',
					major_browser: true,
					device: 'desktop',
					selenium_version: '2.46.0',
					webdriver_type: 'iedriver',
					webdriver_version: '2.46.0',
					can_mobile_debug: false,
					caps:
						{
							browserName: 'Internet Explorer',
							version: '9'
						},
					default_config: 'Win7x64'
				}
			],
		resolutions:
			[
				{
					width: 800,
					height: 600,
					name: '800x600',
					desktop_width: 800,
					desktop_height: 600,
					default: false,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '800x600'
						}
				},
				{
					width: 1024,
					height: 768,
					name: '1024x768',
					desktop_width: 1024,
					desktop_height: 768,
					default: false,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '1024x768'
						}
				},
				{
					width: 1152,
					height: 864,
					name: '1152x864',
					desktop_width: 1152,
					desktop_height: 864,
					default: false,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '1152x864'
						}
				},
				{
					width: 1280,
					height: 768,
					name: '1280x768',
					desktop_width: 1280,
					desktop_height: 768,
					default: false,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '1280x768'
						}
				},
				{
					width: 1280,
					height: 960,
					name: '1280x960',
					desktop_width: 1280,
					desktop_height: 960,
					default: false,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '1280x960'
						}
				},
				{
					width: 1280,
					height: 1024,
					name: '1280x1024',
					desktop_width: 1280,
					desktop_height: 1024,
					default: false,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '1280x1024'
						}
				},
				{
					width: 1366,
					height: 768,
					name: '1366x768',
					desktop_width: 1366,
					desktop_height: 768,
					default: true,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '1366x768'
						}
				},
				{
					width: 1400,
					height: 1050,
					name: '1400x1050',
					desktop_width: 1400,
					desktop_height: 1050,
					default: false,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '1400x1050'
						}
				},
				{
					width: 1600,
					height: 1200,
					name: '1600x1200',
					desktop_width: 1600,
					desktop_height: 1200,
					default: false,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '1600x1200'
						}
				},
				{
					width: 1920,
					height: 1080,
					name: '1920x1080',
					desktop_width: 1920,
					desktop_height: 1080,
					default: false,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '1920x1080'
						}
				},
				{
					width: 2560,
					height: 1600,
					name: '2560x1600',
					desktop_width: 2560,
					desktop_height: 1600,
					default: false,
					orientation: 'landscape',
					caps:
						{
							screenResolution: '2560x1600'
						}
				}
			],
		a: false
	}
];

@Component({
	selector: 'app-test',
	templateUrl: './test.component.html',
	styleUrls:
		[
			'./test.component.css'
		],
	providers:
		[
			TestService
		]
})
export class TestComponent {
	editorOptions = {theme: 'vs-dark', language: 'javascript'};
  	code: string= 'function x() {\nconsole.log("Hello world!");\n}';
	saved = false;
	testArr = [];
  currentTest;
  OS = '';
	OStypes = new Set();
	OSversions = [];
	OSVersion;
	browser;
	resolution;
	startTest = '';
  endTest = '';
  testRun;
  savedMessage = '';
  currentTestName = '';
  url = '';
  accKey = '';
  sfUrl = '';
  testResponce = '';


	constructor(private route: ActivatedRoute, private location: Location, private testService: TestService) {
		id = this.route.snapshot.paramMap.get('id');
		this.url = this.route.snapshot.paramMap.get('url');
		this.accKey = this.route.snapshot.paramMap.get('accKey');
		this.sfUrl = `https://${this.url}/secur/frontdoor.jsp?sid=${this.accKey}&retURL=lightning/page/home`;
		browsers = browsers.filter((el) => el.device === 'desktop');
		browsers.forEach((el) => {
			this.OStypes.add(el.type);
		});
		this.getTestRun(id);
		this.getTests(id);
	}
	//@ViewChild('editor') editor;
	//@ViewChild('editor2') editor2;
	//text: string = "";
	text2 = '';
	private _text: string;
	stateChanged: EventEmitter<string> = new EventEmitter();

	set text(val: string) {
		this._text = val;
		this.text2 = `${this.startTest}
          ${val}              
    ${this.endTest}`;
		//this.stateChanged.emit(this._text);
	}

	get text(): string {
		return this._text;
	}

	// stateChangedEmitter() {
	//   return this.stateChanged;
	// }
	options: any = { maxLines: 1000, printMargin: false };

	onChange(code) {}

	fileNameChange(newValue) {
		this.currentTest.flosum_qa__File_Name__c = newValue;
	}

	testNameChange(newValue) {
		this.currentTest.Name = newValue;
	}

	saveTest() {
    this.currentTest.flosum_qa__selenium_webdriver_JS__c =this.text;
    let testObj = {
      "test":this.currentTest,
      "testRunId": id
    }
		this.testService
			.saveTest(testObj)
			.then((respp) => {
        console.log('RESPPPP', respp);
        this.getTests(id);
        this.savedMessage = 'Test successfully saved!';
				this.saved = true;
				setTimeout(() => {
          this.saved = false;
          this.savedMessage = '';
				}, 3000);
			})
			.catch((er) => {
				console.error('ERRRR', er);
			});
  }
  
  getTests(id){
    this.testService.getTests(id).then((ress) => {
			let aaa = [];
			ress.forEach((element) => {
				aaa.push({
					value: element.flosum_qa__Test__c,
					test: element.Name + ' - ' + element.flosum_qa__Test__r.Name
				});
			});
			this.testArr = aaa;
		});
  }

	changeTEst(value) {
		console.log('VALUE', value);
		if (value === 'Choose...') {
			this.currentTest = undefined;
		}
		else {
			this.testService
				.getTest(value)
				.then((resp) => {
					console.log('RESPP', resp);
					this.currentTest = resp[0];
					//this.startTest = this.currentTest.flosum_qa__selenium_webdriver_JS__c.split('//!-Start test -!')[0];
					//this.endTest = this.currentTest.flosum_qa__selenium_webdriver_JS__c.split('//!-End test -!')[1];
					this.text = this.currentTest.flosum_qa__selenium_webdriver_JS__c;
				})
				.catch((err) => {
					if (err) {
						console.error('ERROR1111111111111', err);
					}
				});
		}
	}

	runTest() {
		let testArr = [];
		this.startTest = this.startTest.split('*testOrganization*').join(this.sfUrl);
		this.startTest = this.startTest.split('*testUnitName*').join(this.currentTest.Name);
		testArr.push({
			fileName: this.currentTest.flosum_qa__File_Name__c,
			body: this.startTest + this.text + this.endTest,
			queue: 1
		});
		let mapp = new Map();
		mapp.set(id,testArr);	
		console.log('mappmapp', mapp);
		let testArr2 = [];
		testArr2.push(mapp);	
		console.log(testArr2);
		this.testService.runTest(testArr2).then((responce) => {
			this.testResponce = responce;
		});
	}

	findOSVersions(val) {
		if (val != 'Choose...') {
			this.OSversions = browsers.filter((el) => el.type === val);
		}
		else {
			this.OSversions = [];
		}
  }
  
  getTestRun(id){
    this.testService
			.getTestRun(id)
			.then((resp) => {
        console.log('TEST RUN', resp);
        this.testRun = resp[0];
				this.startTest = this.testRun.flosum_qa__Start__c.split('<br>').join('\n').split('&#39;').join("'");
        this.endTest = this.testRun.flosum_qa__End__c.split('<br>').join('\n').split('&#39;').join("'");
        if(this.testRun.flosum_qa__Platform__c.includes('Windows')){
          this.OS = 'Windows';          
        }else if(this.testRun.flosum_qa__Platform__c.includes('Mac')){
          this.OS = 'Mac';          
        }else if(this.testRun.flosum_qa__Platform__c.includes('Ubuntu')){
          this.OS = 'Ubuntu';
        }else{
          this.OS = '';
        }
        console.log('this.OS',this.OS);
        this.findOSVersions(this.OS);
        console.log('this.OSversions',this.OSversions);
          this.OSVersion = this.OSversions.find((el) => el.version === this.testRun.flosum_qa__Platform__c);
          console.log('this.OSVersion',this.OSVersion);
          if(this.OSVersion != undefined){
            this.browser = this.OSVersion.browsers.find((el) => el.caps.browserName === this.testRun.flosum_qa__Browser_Name__c && el.caps.version === this.testRun.flosum_qa__Version__c);
            this.resolution = this.OSVersion.resolutions.find((el) => el.name === this.testRun.flosum_qa__Screen_resolution__c);
          }
          let fakeTest = this.text;
        this.text = fakeTest;
			})
			.catch((err) => {
				console.error('ERROR', err);
			});
  }

  createNewTest(){
    this.currentTest = new Test();
    this.text = '';
    this.currentTestName = 'Choose...';
  }

	findBrowsers() {
		console.log('findBrowsers', this.OSVersion);
	}
	selectBrowser() {
		console.log('this.browser', this.browser);
	}
	selectResolutions() {
		console.log('this.resolution', this.resolution);
  }
  
  saveTestRun(){
    this.testRun.flosum_qa__Platform__c = this.OSVersion.caps.platform;
    this.testRun.flosum_qa__Browser_Name__c = this.browser.caps.browserName;
    this.testRun.flosum_qa__Version__c = this.browser.caps.version;
    this.testRun.flosum_qa__Screen_resolution__c = this.resolution.caps.screenResolution;    
    console.log('this.testRun.flosum_qa__Version__c',this.testRun);
    this.testService.saveTestRun(this.testRun).then((respp) => {
      console.log('RESP RESP RESP RESP',respp);
      this.savedMessage = 'Test Run successfully saved!';
				this.saved = true;
				setTimeout(() => {
          this.saved = false;
          this.savedMessage = '';
				}, 3000);
      this.getTestRun(respp.id);
    }).catch((ERR) => {
      console.error('ERRRRRRRRR',ERR);
    });
  }
}
