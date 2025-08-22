
<img width="1898" height="872" alt="image" src="https://github.com/user-attachments/assets/09f1b1ec-8b29-44a6-bdeb-a9b317674a5f" />



# MoneyWeaver Dashboard

A modern, responsive dashboard application for MoneyWeaver, inspired by the xiaodianpu design. This is a single-page React application that provides a comprehensive e-commerce management interface.

## Features

- **Modern UI Design**: Clean, professional interface with gradients, rounded corners, and subtle shadows
- **Responsive Layout**: Adapts gracefully to desktop, tablet, and mobile screen sizes
- **Component-Based Architecture**: Modular React components for maintainability
- **Data Visualization**: Interactive charts using Chart.js for sales analytics
- **Real-time Statistics**: Key metrics display with comparison data
- **Operations Assistant**: Quick access to essential e-commerce tools

## Components

### Layout Components
- **Layout**: Main container with sidebar and content area
- **Sidebar**: Navigation menu with icons and active states
- **Header**: Top bar with user profile and quick links

### Content Components
- **OnboardingSteps**: Three-step setup process with gradient cards
- **StatCards**: Key metrics display with icons and comparison data
- **OperationsCards**: Operations assistant tools grid
- **SalesAnalytics**: Interactive charts for data visualization

## Technology Stack

- **React 18**: Modern React with hooks and functional components
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Chart.js**: Data visualization library
- **React Chart.js 2**: React wrapper for Chart.js

## Installation

1. **Clone the repository** (if applicable) or navigate to the project directory

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```

4. **Open your browser** and navigate to `http://localhost:3000`

## Project Structure

```
moneyweaver-dashboard/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Layout.js
│   │   ├── Sidebar.js
│   │   ├── Header.js
│   │   ├── OnboardingSteps.js
│   │   ├── StatCard.js
│   │   ├── StatCards.js
│   │   ├── OperationsCard.js
│   │   ├── OperationsCards.js
│   │   └── SalesAnalytics.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## Available Scripts

- `npm start`: Runs the app in development mode
- `npm build`: Builds the app for production
- `npm test`: Launches the test runner
- `npm eject`: Ejects from Create React App (not recommended)

## Key Features

### Responsive Design
- Mobile-first approach with Tailwind CSS
- Collapsible sidebar on smaller screens
- Adaptive grid layouts
- Touch-friendly interface

### Data Visualization
- Bar chart showing revenue and orders over time
- Interactive tooltips and legends
- Responsive chart sizing
- Sample data for demonstration

### Modern UI Elements
- Gradient backgrounds
- Soft shadows and rounded corners
- Hover effects and transitions
- Professional color scheme

## Customization

### Colors
The application uses a custom color palette defined in `tailwind.config.js`:
- Primary: Red tones for branding
- Secondary: Blue tones for accents
- Purple, Green, Pink: Additional accent colors

### Data
All data is currently hardcoded for demonstration. To integrate with real data:
1. Replace static data in component files
2. Add API calls or data fetching logic
3. Implement state management if needed

### Styling
The application uses Tailwind CSS classes. To modify styles:
1. Edit the `tailwind.config.js` file for global changes
2. Modify component-specific classes in individual files
3. Add custom CSS in `src/index.css` if needed

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Optimized bundle size
- Lazy loading ready
- Efficient re-renders with React
- Optimized images and assets

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is created for educational and demonstration purposes.

---

**Note**: This is a frontend assignment for MoneyWeaver. The application demonstrates modern React development practices, responsive design, and data visualization capabilities.
