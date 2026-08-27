---
title: "Vegetation Scatter Tool"
description: "Houdini digital asset plus an editor bridge for art-directable foliage scattering."
date: 2025-06-03
featured: true
tags: ["Tools", "Unity", "C#", "Pipeline"]
---

## Brief

Artists needed fast, non-destructive foliage layout that round-trips between Houdini and the engine.

## Approach

- HDA exposes density, slope, altitude, and paint-mask controls
- Python bridge writes point instances and LOD assignments into the level
- One-click re-bake with deterministic seeds

## Result

Cut a typical biome pass from ~2 days to ~3 hours; layouts are reviewable in-editor.