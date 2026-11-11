# Daily Hunt – News Search 📰

Daily Hunt is a simple India-focused news search web application built using HTML, CSS and JavaScript. It uses the NewsData.io API to fetch and display the latest news articles.

## Features

- **Latest Indian News:** Browse the latest news from India.
- **Category Navigation:** Explore Home, Technology, Sports and Business news.
- **News Search:** Search for news articles based on keywords.
- **Article Cards:** Display news headlines, descriptions and images.
- **Read Full Story:** Open the original news article.
- **Loading and Error Messages:** Display feedback while fetching news.
- **Responsive Design:** Adapt the layout to different screen sizes.

## Technologies Used

- HTML
- CSS
- JavaScript
- NewsData.io API

## How to Run

1. Clone this repository.
2. Open the project folder in VS Code.
3. Create a `config.js` file.
4. Add your NewsData.io API key:

   ```javascript
   const API_KEY = "YOUR_API_KEY";
   ```

5. Open `index.html` in your browser.

## Project Structure

```text
daily-hunt-news-search/
├── index.html
├── style.css
├── script.js
├── config.js
├── .gitignore
└── README.md
```

**Note:** `config.js` is excluded from Git using `.gitignore`. You need to create it locally and add your own API key to run the application.

## Future Improvements

- Add more news categories.
- Improve article filtering and search.
- Display publication dates and source names.
- Enhance the user interface.