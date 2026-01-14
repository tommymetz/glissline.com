# Glissline.com

Official website for Glissline, the Colorado-based abstract electronic music project by Tom Metz.

## About

Glissline is an electronic music artist from Denver, Colorado. This repository contains the source code for the official artist website at [glissline.com](https://glissline.com), featuring:

- Artist biography and press information
- Live show dates and past performances
- Music releases and embedded players from Bandcamp
- Links to social media and streaming platforms
- Interactive album experiences

## Technologies

- **React** (v18.2.0) - Frontend framework
- **Three.js** (v0.161.0) - 3D graphics for visual elements
- **Create React App** - Build tooling and development server
- **Yarn** - Package management

## Development

### Prerequisites

- Node.js (version specified in `.nvmrc`)
- Yarn package manager

### Getting Started

1. Clone the repository:
```bash
git clone https://github.com/tommymetz/glissline.com.git
cd glissline.com
```

2. Install dependencies:
```bash
yarn install
```

3. Start the development server:
```bash
yarn start
```

The site will open at [http://localhost:3000](http://localhost:3000) with hot reloading enabled.

## Available Scripts

### `yarn start`
Runs the app in development mode with hot reloading.

### `yarn build`
Builds the app for production to the `build` folder, optimizing for best performance.

### `yarn test`
Launches the test runner in interactive watch mode.

### `yarn eject`
**Note: this is a one-way operation!** Ejects from Create React App for full configuration control.

## Project Structure

```
glissline.com/
├── public/           # Static assets (images, HTML template)
│   └── img/         # Album artwork and photos
├── src/
│   ├── components/  # React components
│   ├── App.js       # Main application component
│   └── index.js     # Application entry point
├── package.json     # Dependencies and scripts
└── README.md        # This file
```

## Deployment

The site is configured for static hosting. Build the production bundle with `yarn build` and deploy the contents of the `build/` directory to your hosting provider.

## Links

- **Live Site**: [glissline.com](https://glissline.com)
- **Bandcamp**: [glissline.bandcamp.com](https://glissline.bandcamp.com)
- **SoundCloud**: [soundcloud.com/glissline](https://soundcloud.com/glissline)
- **Facebook**: [facebook.com/glissline1](https://www.facebook.com/glissline1)
- **Interactive Experience**: [horizon.glissline.com](https://horizon.glissline.com)
- **Label**: [Multidim Records](https://multidim.net)

## License

© Glissline. All rights reserved.
