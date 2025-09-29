# Live_Weather_Dashboard
Live Weather Dashboard built with HTML, CSS, JavaScript, and ReactJS. Fetches real-time data from OpenWeatherMap API with city search, dynamic weather icons, and error handling. Features a clean, responsive UI and lightweight state management for fast performance.


# Live Weather Dashboard

A responsive and interactive weather application built with React and Vite that fetches real-time weather data from the OpenWeatherMap API. Get instant weather updates for any city around the globe, including temperature, humidity, wind speed, and geographical coordinates.

## ✨ Features

* **Real-time Weather Data:** Displays current temperature, humidity, and wind speed.
* **City Search:** Search for weather information for any city worldwide.
* **Geographical Coordinates:** Shows Latitude and Longitude for the searched city.
* **Dynamic Icons:** Weather icons change based on current weather conditions (e.g., clear, clouds, rain, snow, drizzle).
* **Responsive Design:** Optimized for a seamless experience across various devices and screen sizes.
* **Error Handling:** Provides clear messages for city not found or API fetching errors.

## 🚀 Live Demo

Experience the app live here: [Live_Link](https://eclectic-boba-7c5a79.netlify.app/)


## 🛠️ Technologies Used

* **Frontend:** React.js (with Vite)
* **Styling:** CSS
* **API:** OpenWeatherMap API

## ⚙️ Installation & Local Development

Follow these steps to set up the project locally:

### Prerequisites

* Node.js (LTS version recommended)
* npm (comes with Node.js) or Yarn
* A code editor (e.g., VS Code)
* An API key from [OpenWeatherMap](https://openweathermap.org/api) (sign up for a free account)

### Steps

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/KARTHIKAKRISHNA123/Live_Weather_Dashboard.git](https://github.com/KARTHIKAKRISHNA123/Live_Weather_Dashboard.git)
    cd Live_Weather_Dashboard/Live_Weather_Dashboard # Navigate into the correct project folder
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or if you use yarn
    # yarn install
    ```

3.  **Set up Environment Variables:**
    * Create a file named `.env` in the root of your project (same level as `package.json`).
    * Add your OpenWeatherMap API key to this file:
        ```
        VITE_API_KEY="YOUR_OPENWEATHERMAP_API_KEY"
        ```
        Replace `YOUR_OPENWEATHERMAP_API_KEY` with the key you obtained from OpenWeatherMap.

4.  **Start the development server:**
    ```bash
    npm run dev
    # or if you use yarn
    # yarn dev
    ```

    The application should now be running on `http://localhost:5173` (or another port if 5173 is in use).

## 🌍 Deployment

This application is deployed using Netlify. The `VITE_API_KEY` is securely stored as an environment variable in Netlify's build settings.

## 🤝 Contributing

Contributions are welcome! If you have suggestions for improvements or find a bug, please open an issue or submit a pull request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---