# Hrithik Ranjan - Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS.

## 🚀 Features

- **Modern UI/UX** - Beautiful animations and transitions
- **Responsive Design** - Works seamlessly on all devices
- **Fast Performance** - Built with Vite for optimal loading speeds
- **Interactive Elements** - Smooth scroll animations and hover effects
- **Dark Theme** - Eye-friendly dark color scheme

## 🛠️ Tech Stack

- React 19
- Vite
- Tailwind CSS v4
- Lucide React (Icons)

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🚀 Deployment to GitHub Pages

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Setup Instructions:

1. **Create a GitHub Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/hrithik-portfolio.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click on **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - Save the settings

3. **Update Base Path** (if needed)
   - If your repository name is different from `hrithik-portfolio`, update the `base` path in `vite.config.js`
   - Change `/hrithik-portfolio/` to match your repository name

4. **Deploy**
   - Push your code to the `main` branch
   - GitHub Actions will automatically build and deploy your site
   - Your site will be available at: `https://YOUR_USERNAME.github.io/hrithik-portfolio/`

### Manual Deployment

If you prefer manual deployment:

```bash
# Build the project
npm run build

# The dist folder contains the production build
# You can deploy the contents of the dist folder to any static hosting service
```

## 📝 Customization

- Update your information in `src/data.js`
- Modify styles in `src/index.css` and component files
- Add/remove sections in `src/App.jsx`

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Hrithik Ranjan**
- GitHub: [@hrithik-09](https://github.com/hrithik-09)
- LinkedIn: [hrithik2209](https://linkedin.com/in/hrithik2209)
- Email: ranjan.hrithikofficial@gmail.com
