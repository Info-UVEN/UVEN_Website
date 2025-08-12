// tailwind.config.js
module.exports = {
    important: true, // makes all Tailwind classes !important
    content: [ //tells where to scroll in from classnames
    "./src/app/**/*.{js,ts,jsx,tsx}",       
    "./src/components/**/*.{js,ts,jsx,tsx}" 
        /* in current directory pages folder 
        ** -> all subdirectories 
        /* -> any file name match 
        ends with {jsx, ...} */
    ],
        theme: {
            extend: {
                colors: {
                    primary: "#1A5439", // rgb(26, 84, 57)
                    secondary: "#ffffff", 
                    red: "#FF0000",
                    green: "#00FF00"
                },
                fontFamily: {
                    heading: ["Poppins", "sans-serif"],
                    body: ["Roboto", "sans-serif"]
                }
            }
    },
    plugins: [],
};

