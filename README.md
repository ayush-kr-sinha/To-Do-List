# Professional To-Do List Application

A sleek, responsive, and minimalist **To-Do List Web Application** designed to streamline daily task management. Built entirely with vanilla web technologies, this project emphasizes performance, accessibility, and clean user interface design.

## 🚀 Features

*   **Task Management:** Easily add, complete, and delete tasks in real-time.
*   **Persistent Storage:** Utilizes browser local storage to save your tasks so you never lose them on refresh.
*   **Responsive UI:** Fully optimized for desktop, tablet, and mobile displays.
*   **Custom Vector Assets:** Crisp SVG-based iconography for checkboxes, deletion, and task creation interfaces.
*   **Automated Workflows:** Built-in GitHub Actions configurations for seamless static hosting deployment (e.g., GitHub Pages).

## 🛠️ Tech Stack

*   **HTML5:** Semantic structure for optimal accessibility and SEO ranking.
*   **CSS3:** Custom modern UI layout, custom properties (variables), transitions, and flexbox configurations.
*   **Vanilla JavaScript:** Lightweight DOM manipulation, state handling, and client-side data persistence.

## 📂 Repository Structure

```text
├── .github/
│   └── workflows/
│       ├── static.yml      # GitHub Actions CI/CD deployment configuration
│       └── statics.yml     # Alternative fallback workflow configuration
├── assets/
│   ├── checkbox-svgrepo-com.svg          # Default state checkbox icon
│   ├── checkbox-checked-filled-svgrepo-com.svg # Completed state checkbox icon
│   ├── delete-svgrepo-com.svg            # Task deletion icon
│   └── plus-svgrepo-com.svg              # Task addition icon
├── index.html              # Main application markup entry point
├── style.css               # Core presentation and responsive design sheets
├── script.js              # Application state and local storage logic
└── README.md               # Project documentation
```

## 💻 Getting Started

To run this application locally, you do not need any complex build configurations, package managers, or server engines.

1.  **Clone the Repository:**
    ```bash
    git clone https://github.com/your-username/To-Do-List.git
    ```
2.  **Navigate to the Directory:**
    ```bash
    cd To-Do-List
    ```
3.  **Launch the App:**
    Simply open the `index.html` file in any modern web browser or serve it using an editor extension like Live Server.

## 🤖 CI/CD Automation

This repository comes pre-packaged with a GitHub Actions workflow under `.github/workflows/static.yml`. Upon pushing updates to your production branch, the runner will automatically bundle, verify, and host your project using **GitHub Pages** or your static web engine of choice.

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.
