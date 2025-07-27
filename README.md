# Intro Section with Dropdown Navigation

A modern, responsive landing page featuring an interactive navigation system with dropdown menus and mobile-first design. This project demonstrates advanced CSS techniques, JavaScript interactivity, and professional web development practices.

![Design preview for the Intro section with dropdown navigation](preview.jpg)




## 🎯 Overview

This project is a solution to the [Frontend Mentor Intro Section with Dropdown Navigation challenge](https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5). It showcases a professional landing page with sophisticated navigation patterns commonly found in modern web applications.

### The Challenge

Users should be able to:

- ✅ View relevant dropdown menus on desktop and mobile when interacting with navigation links
- ✅ Experience optimal layout across all device screen sizes
- ✅ See hover states and smooth transitions for all interactive elements
- ✅ Navigate using keyboard controls (accessibility)
- ✅ Use the mobile hamburger menu with overlay functionality

## ✨ Features

### Navigation System
- **Dropdown Menus**: Interactive dropdowns for "Features" and "Company" with icons
- **Mobile Menu**: Slide-in navigation with hamburger toggle and overlay
- **Keyboard Navigation**: Full keyboard accessibility with ESC key support
- **Click Outside**: Automatic menu closure when clicking outside

### Responsive Design
- **Mobile-First**: Optimized for mobile devices (375px) and scales up
- **Desktop Layout**: Side-by-side hero content with professional spacing
- **Flexible Grid**: CSS Grid and Flexbox for robust layouts
- **Responsive Images**: Optimized images for different screen sizes

### User Experience
- **Smooth Animations**: CSS transitions for all interactive elements
- **Loading Performance**: Optimized assets and efficient code structure
- **Cross-Browser**: Compatible with all modern browsers
- **Accessibility**: Semantic HTML and ARIA considerations

## 🛠 Technologies Used

### Frontend
- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Modern CSS with Grid, Flexbox, and custom properties
- **JavaScript (ES6+)**: Vanilla JS for interactive functionality

### Design & Assets
- **Google Fonts**: Epilogue font family (500, 700 weights)
- **SVG Icons**: Scalable vector graphics for crisp display
- **Responsive Images**: WebP format with fallbacks

### Development Tools
- **Git**: Version control
- **VS Code**: Development environment
- **Browser DevTools**: Testing and debugging

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Ayokanmi-Adejola/intro-section-dropdown-navigation.git
   ```

2. **Navigate to project directory**
   ```bash
   cd intro-section-dropdown-navigation
   ```

3. **Open in browser**
   ```bash
   # Simply open index.html in your preferred browser
   # Or use a local server like Live Server in VS Code
   ```

## 🎮 Usage

### Development
- Open `index.html` in your browser to view the project
- Modify `styles.css` for styling changes
- Update `script.js` for functionality enhancements

### Customization
- **Colors**: Update CSS custom properties in `styles.css`
- **Typography**: Modify font imports and CSS font declarations
- **Content**: Edit HTML content in `index.html`
- **Images**: Replace images in the `/images` folder

## 📁 Project Structure

```
intro-section-dropdown-navigation/
├── index.html              # Main HTML file
├── styles.css              # CSS styles and responsive design
├── script.js               # JavaScript functionality
├── images/                 # Image assets
│   ├── logo.svg
│   ├── icon-*.svg
│   ├── client-*.svg
│   ├── image-hero-*.png
│   └── favicon-32x32.png
├── design/                 # Design reference files
└── README.md              # Project documentation
```

## 🎨 Design Specifications

### Layout Breakpoints
- **Mobile**: 375px (minimum)
- **Desktop**: 1440px (optimal)
- **Responsive Range**: 320px - 1920px+

### Color Palette
```css
/* Neutral Colors */
--gray-50: hsl(0, 0%, 98%)    /* Background */
--gray-500: hsl(0, 0%, 41%)   /* Text Secondary */
--gray-950: hsl(0, 0%, 8%)    /* Text Primary */
```

### Typography
- **Font Family**: Epilogue (Google Fonts)
- **Font Weights**: 500 (Medium), 700 (Bold)
- **Base Font Size**: 18px
- **Line Height**: 1.6

### Spacing System
- **Base Unit**: 1rem (16px)
- **Scale**: 0.5rem, 1rem, 1.5rem, 2rem, 3rem, 4rem

## 🌐 Browser Support

| Browser | Version |
|---------|---------|
| Chrome  | 90+     |
| Firefox | 88+     |
| Safari  | 14+     |
| Edge    | 90+     |

### Progressive Enhancement
- Core functionality works without JavaScript
- Enhanced experience with JavaScript enabled
- Graceful degradation for older browsers


### Development Guidelines
1. Follow existing code style and conventions
2. Test across multiple browsers and devices
3. Ensure accessibility standards are maintained
4. Update documentation for significant changes

### Reporting Issues
- Use GitHub Issues for bug reports
- Include browser version and steps to reproduce
- Provide screenshots for visual issues



## 👨‍💻 Author

**Ayokanmi Adejola**

- Frontend Mentor: [@Ayokanmi-Adejola](https://www.frontendmentor.io/profile/Ayokanmi-Adejola)

## 🙏 Acknowledgments

- [Frontend Mentor](https://www.frontendmentor.io) for providing the design challenge
- [Google Fonts](https://fonts.google.com) for the Epilogue font family
- The web development community for inspiration and best practices
