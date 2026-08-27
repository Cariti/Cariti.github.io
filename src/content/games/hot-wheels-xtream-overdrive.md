---
title: "Hot Wheels Xtream Overdrive"
date: 2025-10-29
cover: "../../assets/games/hot-wheels-xtream-overdrive/HWXO_cover.jpg"
platforms: ["Android", "In-car infotainment", AirConsole"]
hoverVideo: "/games/hot-wheels-xtream-overdrive/hover.mp4"
trailer: "https://www.youtube.com/embed/ee5uKTAfbCU"
role: "Technical Artist"
tags: ["Shaders", "Optimization", "Pipeline", "Rendering"]
featured: true
---
Built against a hard constraint — the in-car tablet's weak GPU had to render up to four cameras at once, which set the budget for every decision below.

- Authored the entire shader set (vehicles, environments, track surfaces, and screen effects), keeping shader variants and compilation times down.
- Cut per-frame draw time by ~30%. Profiled the frame and chose case by case between static batching and GPU instancing.
- Automated base-prefab creation, eliminating the material and shader mismatches that kept slowing the integration step.