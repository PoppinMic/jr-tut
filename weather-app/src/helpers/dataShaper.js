const sampleData = [
  {
    "dt": 1566108000,
    "main": {
      "temp": 21.01,
      "temp_min": 20.25,
      "temp_max": 21.01,
      "pressure": 1011.65,
      "sea_level": 1011.65,
      "grnd_level": 1001.58,
      "humidity": 49,
      "temp_kf": 0.76
    },
    "weather": [
      {
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }
    ],
    "clouds": { "all": 0 },
    "wind": { "speed": 5.43, "deg": 55.83 },
    "sys": { "pod": "d" },
    "dt_txt": "2019-08-18 06:00:00"
  },
  {
    "dt": 1566118800,
    "main": {
      "temp": 17.82,
      "temp_min": 17.25,
      "temp_max": 17.82,
      "pressure": 1010.18,
      "sea_level": 1010.18,
      "grnd_level": 1000.66,
      "humidity": 61,
      "temp_kf": 0.57
    },
    "weather": [
      {
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }
    ],
    "clouds": { "all": 0 },
    "wind": { "speed": 4.59, "deg": 24.481 },
    "sys": { "pod": "n" },
    "dt_txt": "2019-08-18 09:00:00"
  },
  {
    "dt": 1566129600,
    "main": {
      "temp": 17.31,
      "temp_min": 16.93,
      "temp_max": 17.31,
      "pressure": 1008.54,
      "sea_level": 1008.54,
      "grnd_level": 998.51,
      "humidity": 45,
      "temp_kf": 0.38
    },
    "weather": [
      {
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }
    ],
    "clouds": { "all": 0 },
    "wind": { "speed": 4.33, "deg": 352.226 },
    "sys": { "pod": "n" },
    "dt_txt": "2019-08-18 12:00:00"
  },
  {
    "dt": 1566140400,
    "main": {
      "temp": 12.74,
      "temp_min": 12.55,
      "temp_max": 12.74,
      "pressure": 1010.79,
      "sea_level": 1010.79,
      "grnd_level": 1002.33,
      "humidity": 59,
      "temp_kf": 0.19
    },
    "weather": [
      {
        "id": 500,
        "main": "Rain",
        "description": "light rain",
        "icon": "10n"
      }
    ],
    "clouds": { "all": 93 },
    "wind": { "speed": 9.07, "deg": 245.65 },
    "rain": { "3h": 0.125 },
    "sys": { "pod": "n" },
    "dt_txt": "2019-08-18 15:00:00"
  },
  {
    "dt": 1566151200,
    "main": {
      "temp": 9.29,
      "temp_min": 9.29,
      "temp_max": 9.29,
      "pressure": 1012.29,
      "sea_level": 1012.29,
      "grnd_level": 1002.14,
      "humidity": 55,
      "temp_kf": 0
    },
    "weather": [
      {
        "id": 803,
        "main": "Clouds",
        "description": "broken clouds",
        "icon": "04n"
      }
    ],
    "clouds": { "all": 77 },
    "wind": { "speed": 4.43, "deg": 276.322 },
    "sys": { "pod": "n" },
    "dt_txt": "2019-08-18 18:00:00"
  },
  {
    "dt": 1566162000,
    "main": {
      "temp": 7.84,
      "temp_min": 7.84,
      "temp_max": 7.84,
      "pressure": 1014.74,
      "sea_level": 1014.74,
      "grnd_level": 1005.17,
      "humidity": 56,
      "temp_kf": 0
    },
    "weather": [
      {
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }
    ],
    "clouds": { "all": 0 },
    "wind": { "speed": 4.34, "deg": 273.805 },
    "sys": { "pod": "d" },
    "dt_txt": "2019-08-18 21:00:00"
  },
  {
    "dt": 1566172800,
    "main": {
      "temp": 12.25,
      "temp_min": 12.25,
      "temp_max": 12.25,
      "pressure": 1016.12,
      "sea_level": 1016.12,
      "grnd_level": 1006.68,
      "humidity": 33,
      "temp_kf": 0
    },
    "weather": [
      {
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }
    ],
    "clouds": { "all": 0 },
    "wind": { "speed": 6.72, "deg": 268.977 },
    "sys": { "pod": "d" },
    "dt_txt": "2019-08-19 00:00:00"
  },
  {
    "dt": 1566183600,
    "main": {
      "temp": 13.98,
      "temp_min": 13.98,
      "temp_max": 13.98,
      "pressure": 1015.9,
      "sea_level": 1015.9,
      "grnd_level": 1006.36,
      "humidity": 23,
      "temp_kf": 0
    },
    "weather": [
      {
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }
    ],
    "clouds": { "all": 0 },
    "wind": { "speed": 8.31, "deg": 260.301 },
    "sys": { "pod": "d" },
    "dt_txt": "2019-08-19 03:00:00"
  },
  {
    "dt": 1566194400,
    "main": {
      "temp": 11.9,
      "temp_min": 11.9,
      "temp_max": 11.9,
      "pressure": 1017.32,
      "sea_level": 1017.32,
      "grnd_level": 1008.12,
      "humidity": 31,
      "temp_kf": 0
    },
    "weather": [
      {
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }
    ],
    "clouds": { "all": 0 },
    "wind": { "speed": 7.43, "deg": 253.547 },
    "sys": { "pod": "d" },
    "dt_txt": "2019-08-19 06:00:00"
  },
  {
    "dt": 1566205200,
    "main": {
      "temp": 8.39,
      "temp_min": 8.39,
      "temp_max": 8.39,
      "pressure": 1020.72,
      "sea_level": 1020.72,
      "grnd_level": 1010.78,
      "humidity": 44,
      "temp_kf": 0
    },
    "weather": [
      {
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }
    ],
    "clouds": { "all": 0 },
    "wind": { "speed": 5.62, "deg": 256.003 },
    "sys": { "pod": "n" },
    "dt_txt": "2019-08-19 09:00:00"
  },
  {
    "dt": 1566216000,
    "main": {
      "temp": 7.42,
      "temp_min": 7.42,
      "temp_max": 7.42,
      "pressure": 1022.79,
      "sea_level": 1022.79,
      "grnd_level": 1012.91,
      "humidity": 53,
      "temp_kf": 0
    },
    "weather": [
      {
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }
    ],
    "clouds": { "all": 0 },
    "wind": { "speed": 5.35, "deg": 251.799 },
    "sys": { "pod": "n" },
    "dt_txt": "2019-08-19 12:00:00"
  },
  {
    "dt": 1566226800,
    "main": {
      "temp": 6.95,
      "temp_min": 6.95,
      "temp_max": 6.95,
      "pressure": 1023.24,
      "sea_level": 1023.24,
      "grnd_level": 1013.42,
      "humidity": 57,
      "temp_kf": 0
    },
    "weather": [
      {
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }
    ],
    "clouds": { "all": 0 },
    "wind": { "speed": 5.45, "deg": 253.219 },
    "sys": { "pod": "n" },
    "dt_txt": "2019-08-19 15:00:00"
  },
  {
    "dt": 1566237600,
    "main": {
      "temp": 6.83,
      "temp_min": 6.83,
      "temp_max": 6.83,
      "pressure": 1022.76,
      "sea_level": 1022.76,
      "grnd_level": 1012.61,
      "humidity": 59,
      "temp_kf": 0
    },
    "weather": [
      {
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }
    ],
    "clouds": { "all": 0 },
    "wind": { "speed": 4.89, "deg": 257.984 },
    "sys": { "pod": "n" },
    "dt_txt": "2019-08-19 18:00:00"
  },
  {
    "dt": 1566248400,
    "main": {
      "temp": 6.27,
      "temp_min": 6.27,
      "temp_max": 6.27,
      "pressure": 1023.45,
      "sea_level": 1023.45,
      "grnd_level": 1013.39,
      "humidity": 61,
      "temp_kf": 0
    },
    "weather": [
      {
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }
    ],
    "clouds": { "all": 0 },
    "wind": { "speed": 4.87, "deg": 269.506 },
    "sys": { "pod": "d" },
    "dt_txt": "2019-08-19 21:00:00"
  },
  {
    "dt": 1566259200,
    "main": {
      "temp": 12.73,
      "temp_min": 12.73,
      "temp_max": 12.73,
      "pressure": 1022.64,
      "sea_level": 1022.64,
      "grnd_level": 1012.82,
      "humidity": 41,
      "temp_kf": 0
    },
    "weather": [
      {
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }
    ],
    "clouds": { "all": 0 },
    "wind": { "speed": 7.19, "deg": 255.923 },
    "sys": { "pod": "d" },
    "dt_txt": "2019-08-20 00:00:00"
  },
  {
    "dt": 1566270000,
    "main": {
      "temp": 15.55,
      "temp_min": 15.55,
      "temp_max": 15.55,
      "pressure": 1019.76,
      "sea_level": 1019.76,
      "grnd_level": 1010.25,
      "humidity": 34,
      "temp_kf": 0
    },
    "weather": [
      {
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }
    ],
    "clouds": { "all": 0 },
    "wind": { "speed": 6.98, "deg": 255.203 },
    "sys": { "pod": "d" },
    "dt_txt": "2019-08-20 03:00:00"
  },
  {
    "dt": 1566280800,
    "main": {
      "temp": 14.31,
      "temp_min": 14.31,
      "temp_max": 14.31,
      "pressure": 1018.63,
      "sea_level": 1018.63,
      "grnd_level": 1009.51,
      "humidity": 39,
      "temp_kf": 0
    },
    "weather": [
      {
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }
    ],
    "clouds": { "all": 0 },
    "wind": { "speed": 6.77, "deg": 256.471 },
    "sys": { "pod": "d" },
    "dt_txt": "2019-08-20 06:00:00"
  },
  {
    "dt": 1566291600,
    "main": {
      "temp": 9.83,
      "temp_min": 9.83,
      "temp_max": 9.83,
      "pressure": 1019.64,
      "sea_level": 1019.64,
      "grnd_level": 1009.97,
      "humidity": 55,
      "temp_kf": 0
    },
    "weather": [
      {
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }
    ],
    "clouds": { "all": 0 },
    "wind": { "speed": 4.07, "deg": 270.014 },
    "sys": { "pod": "n" },
    "dt_txt": "2019-08-20 09:00:00"
  },
  {
    "dt": 1566302400,
    "main": {
      "temp": 9.75,
      "temp_min": 9.75,
      "temp_max": 9.75,
      "pressure": 1019.55,
      "sea_level": 1019.55,
      "grnd_level": 1009.83,
      "humidity": 56,
      "temp_kf": 0
    },
    "weather": [
      {
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }
    ],
    "clouds": { "all": 0 },
    "wind": { "speed": 5.84, "deg": 273.9 },
    "sys": { "pod": "n" },
    "dt_txt": "2019-08-20 12:00:00"
  },
  {
    "dt": 1566313200,
    "main": {
      "temp": 8.26,
      "temp_min": 8.26,
      "temp_max": 8.26,
      "pressure": 1017.34,
      "sea_level": 1017.34,
      "grnd_level": 1008.02,
      "humidity": 63,
      "temp_kf": 0
    },
    "weather": [
      {
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }
    ],
    "clouds": { "all": 0 },
    "wind": { "speed": 3.43, "deg": 308.08 },
    "sys": { "pod": "n" },
    "dt_txt": "2019-08-20 15:00:00"
  },
  {
    "dt": 1566324000,
    "main": {
      "temp": 8.46,
      "temp_min": 8.46,
      "temp_max": 8.46,
      "pressure": 1014.73,
      "sea_level": 1014.73,
      "grnd_level": 1005.79,
      "humidity": 63,
      "temp_kf": 0
    },
    "weather": [
      {
        "id": 801,
        "main": "Clouds",
        "description": "few clouds",
        "icon": "02n"
      }
    ],
    "clouds": { "all": 15 },
    "wind": { "speed": 2.49, "deg": 323.277 },
    "sys": { "pod": "n" },
    "dt_txt": "2019-08-20 18:00:00"
  },
  {
    "dt": 1566334800,
    "main": {
      "temp": 9.65,
      "temp_min": 9.65,
      "temp_max": 9.65,
      "pressure": 1014.16,
      "sea_level": 1014.16,
      "grnd_level": 1005.51,
      "humidity": 61,
      "temp_kf": 0
    },
    "weather": [
      {
        "id": 803,
        "main": "Clouds",
        "description": "broken clouds",
        "icon": "04d"
      }
    ],
    "clouds": { "all": 84 },
    "wind": { "speed": 2.11, "deg": 338.214 },
    "sys": { "pod": "d" },
    "dt_txt": "2019-08-20 21:00:00"
  },
  {
    "dt": 1566345600,
    "main": {
      "temp": 15.25,
      "temp_min": 15.25,
      "temp_max": 15.25,
      "pressure": 1013.47,
      "sea_level": 1013.47,
      "grnd_level": 1004.5,
      "humidity": 43,
      "temp_kf": 0
    },
    "weather": [
      {
        "id": 804,
        "main": "Clouds",
        "description": "overcast clouds",
        "icon": "04d"
      }
    ],
    "clouds": { "all": 91 },
    "wind": { "speed": 5.82, "deg": 266.629 },
    "sys": { "pod": "d" },
    "dt_txt": "2019-08-21 00:00:00"
  },
  {
    "dt": 1566356400,
    "main": {
      "temp": 16.95,
      "temp_min": 16.95,
      "temp_max": 16.95,
      "pressure": 1010.82,
      "sea_level": 1010.82,
      "grnd_level": 1002.2,
      "humidity": 39,
      "temp_kf": 0
    },
    "weather": [
      {
        "id": 803,
        "main": "Clouds",
        "description": "broken clouds",
        "icon": "04d"
      }
    ],
    "clouds": { "all": 68 },
    "wind": { "speed": 8.09, "deg": 253.93 },
    "sys": { "pod": "d" },
    "dt_txt": "2019-08-21 03:00:00"
  },
  {
    "dt": 1566367200,
    "main": {
      "temp": 17.67,
      "temp_min": 17.67,
      "temp_max": 17.67,
      "pressure": 1009.82,
      "sea_level": 1009.82,
      "grnd_level": 1000.82,
      "humidity": 38,
      "temp_kf": 0
    },
    "weather": [
      {
        "id": 803,
        "main": "Clouds",
        "description": "broken clouds",
        "icon": "04d"
      }
    ],
    "clouds": { "all": 56 },
    "wind": { "speed": 7.68, "deg": 253.712 },
    "sys": { "pod": "d" },
    "dt_txt": "2019-08-21 06:00:00"
  },
  {
    "dt": 1566378000,
    "main": {
      "temp": 12.23,
      "temp_min": 12.23,
      "temp_max": 12.23,
      "pressure": 1012.76,
      "sea_level": 1012.76,
      "grnd_level": 1003.44,
      "humidity": 53,
      "temp_kf": 0
    },
    "weather": [
      {
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }
    ],
    "clouds": { "all": 0 },
    "wind": { "speed": 3.33, "deg": 246.095 },
    "sys": { "pod": "n" },
    "dt_txt": "2019-08-21 09:00:00"
  },
  {
    "dt": 1566388800,
    "main": {
      "temp": 9.95,
      "temp_min": 9.95,
      "temp_max": 9.95,
      "pressure": 1014.81,
      "sea_level": 1014.81,
      "grnd_level": 1005.16,
      "humidity": 54,
      "temp_kf": 0
    },
    "weather": [
      {
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }
    ],
    "clouds": { "all": 0 },
    "wind": { "speed": 3.75, "deg": 246.163 },
    "sys": { "pod": "n" },
    "dt_txt": "2019-08-21 12:00:00"
  },
  {
    "dt": 1566399600,
    "main": {
      "temp": 8.25,
      "temp_min": 8.25,
      "temp_max": 8.25,
      "pressure": 1015.03,
      "sea_level": 1015.03,
      "grnd_level": 1004.98,
      "humidity": 51,
      "temp_kf": 0
    },
    "weather": [
      {
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }
    ],
    "clouds": { "all": 0 },
    "wind": { "speed": 4.05, "deg": 254.105 },
    "sys": { "pod": "n" },
    "dt_txt": "2019-08-21 15:00:00"
  },
  {
    "dt": 1566410400,
    "main": {
      "temp": 7.75,
      "temp_min": 7.75,
      "temp_max": 7.75,
      "pressure": 1014.88,
      "sea_level": 1014.88,
      "grnd_level": 1005.33,
      "humidity": 53,
      "temp_kf": 0
    },
    "weather": [
      {
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }
    ],
    "clouds": { "all": 0 },
    "wind": { "speed": 5.4, "deg": 245.243 },
    "sys": { "pod": "n" },
    "dt_txt": "2019-08-21 18:00:00"
  },
  {
    "dt": 1566421200,
    "main": {
      "temp": 7.31,
      "temp_min": 7.31,
      "temp_max": 7.31,
      "pressure": 1016.5,
      "sea_level": 1016.5,
      "grnd_level": 1006.75,
      "humidity": 57,
      "temp_kf": 0
    },
    "weather": [
      {
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }
    ],
    "clouds": { "all": 0 },
    "wind": { "speed": 4.78, "deg": 255.827 },
    "sys": { "pod": "d" },
    "dt_txt": "2019-08-21 21:00:00"
  },
  {
    "dt": 1566432000,
    "main": {
      "temp": 14.67,
      "temp_min": 14.67,
      "temp_max": 14.67,
      "pressure": 1016.33,
      "sea_level": 1016.33,
      "grnd_level": 1006.46,
      "humidity": 34,
      "temp_kf": 0
    },
    "weather": [
      {
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }
    ],
    "clouds": { "all": 0 },
    "wind": { "speed": 5.44, "deg": 248.545 },
    "sys": { "pod": "d" },
    "dt_txt": "2019-08-22 00:00:00"
  },
  {
    "dt": 1566442800,
    "main": {
      "temp": 15.75,
      "temp_min": 15.75,
      "temp_max": 15.75,
      "pressure": 1014.41,
      "sea_level": 1014.41,
      "grnd_level": 1004.68,
      "humidity": 36,
      "temp_kf": 0
    },
    "weather": [
      {
        "id": 802,
        "main": "Clouds",
        "description": "scattered clouds",
        "icon": "03d"
      }
    ],
    "clouds": { "all": 43 },
    "wind": { "speed": 7.09, "deg": 262.735 },
    "sys": { "pod": "d" },
    "dt_txt": "2019-08-22 03:00:00"
  },
  {
    "dt": 1566453600,
    "main": {
      "temp": 17.15,
      "temp_min": 17.15,
      "temp_max": 17.15,
      "pressure": 1015.04,
      "sea_level": 1015.04,
      "grnd_level": 1004.56,
      "humidity": 39,
      "temp_kf": 0
    },
    "weather": [
      {
        "id": 803,
        "main": "Clouds",
        "description": "broken clouds",
        "icon": "04d"
      }
    ],
    "clouds": { "all": 57 },
    "wind": { "speed": 2.38, "deg": 167.626 },
    "sys": { "pod": "d" },
    "dt_txt": "2019-08-22 06:00:00"
  },
  {
    "dt": 1566464400,
    "main": {
      "temp": 13.38,
      "temp_min": 13.38,
      "temp_max": 13.38,
      "pressure": 1019,
      "sea_level": 1019,
      "grnd_level": 1009.37,
      "humidity": 52,
      "temp_kf": 0
    },
    "weather": [
      {
        "id": 804,
        "main": "Clouds",
        "description": "overcast clouds",
        "icon": "04n"
      }
    ],
    "clouds": { "all": 100 },
    "wind": { "speed": 4.85, "deg": 180.911 },
    "sys": { "pod": "n" },
    "dt_txt": "2019-08-22 09:00:00"
  },
  {
    "dt": 1566475200,
    "main": {
      "temp": 10.19,
      "temp_min": 10.19,
      "temp_max": 10.19,
      "pressure": 1021.89,
      "sea_level": 1021.89,
      "grnd_level": 1012.18,
      "humidity": 58,
      "temp_kf": 0
    },
    "weather": [
      {
        "id": 803,
        "main": "Clouds",
        "description": "broken clouds",
        "icon": "04n"
      }
    ],
    "clouds": { "all": 74 },
    "wind": { "speed": 4.06, "deg": 195.523 },
    "sys": { "pod": "n" },
    "dt_txt": "2019-08-22 12:00:00"
  },
  {
    "dt": 1566486000,
    "main": {
      "temp": 7.96,
      "temp_min": 7.96,
      "temp_max": 7.96,
      "pressure": 1022.57,
      "sea_level": 1022.57,
      "grnd_level": 1013.11,
      "humidity": 62,
      "temp_kf": 0
    },
    "weather": [
      {
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }
    ],
    "clouds": { "all": 0 },
    "wind": { "speed": 3.91, "deg": 212.959 },
    "sys": { "pod": "n" },
    "dt_txt": "2019-08-22 15:00:00"
  },
  {
    "dt": 1566496800,
    "main": {
      "temp": 6.06,
      "temp_min": 6.06,
      "temp_max": 6.06,
      "pressure": 1023.11,
      "sea_level": 1023.11,
      "grnd_level": 1013.68,
      "humidity": 67,
      "temp_kf": 0
    },
    "weather": [
      {
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }
    ],
    "clouds": { "all": 0 },
    "wind": { "speed": 3.46, "deg": 229.803 },
    "sys": { "pod": "n" },
    "dt_txt": "2019-08-22 18:00:00"
  },
  {
    "dt": 1566507600,
    "main": {
      "temp": 4.33,
      "temp_min": 4.33,
      "temp_max": 4.33,
      "pressure": 1024.92,
      "sea_level": 1024.92,
      "grnd_level": 1015.39,
      "humidity": 72,
      "temp_kf": 0
    },
    "weather": [
      {
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }
    ],
    "clouds": { "all": 0 },
    "wind": { "speed": 2.58, "deg": 247.199 },
    "sys": { "pod": "d" },
    "dt_txt": "2019-08-22 21:00:00"
  },
  {
    "dt": 1566518400,
    "main": {
      "temp": 14.05,
      "temp_min": 14.05,
      "temp_max": 14.05,
      "pressure": 1025.07,
      "sea_level": 1025.07,
      "grnd_level": 1015.85,
      "humidity": 39,
      "temp_kf": 0
    },
    "weather": [
      {
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }
    ],
    "clouds": { "all": 0 },
    "wind": { "speed": 1.85, "deg": 233.664 },
    "sys": { "pod": "d" },
    "dt_txt": "2019-08-23 00:00:00"
  },
  {
    "dt": 1566529200,
    "main": {
      "temp": 17.55,
      "temp_min": 17.55,
      "temp_max": 17.55,
      "pressure": 1022.28,
      "sea_level": 1022.28,
      "grnd_level": 1013.07,
      "humidity": 29,
      "temp_kf": 0
    },
    "weather": [
      {
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }
    ],
    "clouds": { "all": 0 },
    "wind": { "speed": 1.6, "deg": 16.72 },
    "sys": { "pod": "d" },
    "dt_txt": "2019-08-23 03:00:00"
  }
]

export const shapeForecastData = data => {

}