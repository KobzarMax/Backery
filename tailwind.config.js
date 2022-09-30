/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html', './js/script.js'],
  theme: {
    screens: {
      "megalarge": {'max': "1200px"},
      "large": {'max': "992px"},
      "medium": {'max': "768px"},
      "small": {'max': "480px"},
    },
    fontFamily: {
      cormorant: "'Cormorant', serif",
      euclid: 'Euclid Circular'
    },
    extend: {
      colors: {
        chocolate_main: '#715336',
        light_muted: '#EAD4CE',
        caramel_second: '#B68150'
      },
      backgroundImage: {
        "header-bg": "url(../images/header-bg.jpg)",
        "nav-bg": "url(../images/nav-bg.jpg)",
        "line": "url(../images/underline.jpg)",
        "line2": "url(../images/underline2.jpg)",
        "circle": "url(../images/circle-logo.svg)",
        "header-bg-mobile": "url(../images/header-bg-mobile.jpg)"
      },
      boxShadowColor: {
        shadow_color: '#eed8c459',
      },
      boxShadow: {
        shadow: "4px 4px 25px 5px"
      }
    },
  },
  plugins: [],
}
