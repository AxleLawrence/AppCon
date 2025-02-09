/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./views/**/*.ejs"],
    theme: {
      extend: {
        animation: {
          'leaf-float': 'float 5s ease-in-out infinite',
        },
        keyframes: {
          float: {
            '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
            '50%': { transform: 'translateY(-10px) rotate(3deg)' },
          },
        },
      },
    },
    plugins: [],
  };
  