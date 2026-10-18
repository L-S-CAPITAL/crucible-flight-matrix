# CRUCIBLE // SIGINT Flight Matrix

A Palantir Gotham-inspired tactical flight tracking terminal with a 3D interactive world globe, real-time Flightradar24 telemetry integration, and the Crucible defense brand aesthetic.

![Crucible Flight Matrix](https://img.shields.io/badge/STATUS-OPERATIONAL-00c8ff?style=for-the-badge&logo=radar)
![Target Lock](https://img.shields.io/badge/TARGET-UAE75T%20%2F%20EK435-ff7a18?style=for-the-badge)

---

## Overview

- **Aesthetic**: Modeled after the **Palantir Gotham** defense / SIGINT interface with tactical telemetry cards, ambient vignette, CRT scanlines, and luminescent data grids.
- **Branding**: Official **Crucible** orange glowing hexagon emblem with clean, tracked monospace typography.
- **3D World Globe**: High-precision Three.js globe featuring obsidian matte oceans, glowing vector sovereign country boundaries (from TopoJSON World Atlas), latitude/longitude graticules, and atmospheric rim glow shaders.
- **Airplane Marker**: High-fidelity **Airbus A380-842** silhouette with swept wings, 4 jet engine nacelles, contour luminescent outline, strobe navigation beacon, and tactical avionics tag.
- **Flight Corridor Tracking**:
  - **Live Target**: Emirates Flight `EK435` / Callsign `UAE75T` (`A6-EUT`)
  - **Route**: Brisbane Airport (**BNE**) ➔ Dubai International Airport (**DXB**)
  - **Trajectory**: 810+ actual GPS radar track points plotted across the Australian continent and Indonesia, connected to an active great-circle projection onward to Dubai.
  - **Avionics**: Live barometric altitude, ground speed, true track, coordinates, squawk code, and progress corridor.

---

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18+)

### Installation

```bash
git clone https://github.com/L-S-CAPITAL/crucible-flight-matrix.git
cd crucible-flight-matrix
npm install
```

### Launch

```bash
npm start
```

Open your browser to:
```
http://localhost:3000
```

---

## Controls

- **Orbit / Rotate**: Click and drag to orbit around the 3D globe.
- **Zoom**: Scroll wheel to zoom in on targets.
- **`⊙ TRACK TARGET`**: Locks the camera directly onto the aircraft's active coordinates.
- **`⬡ FULL CORRIDOR`**: Frames the trans-oceanic flight path between Australia and the Middle East.
- **`↺ RESET CAM`**: Resets the perspective camera.

---

## License
MIT
