---
title: "Dissolve & Burn Shader"
description: "Reusable dissolve with an animated emissive burn edge."
date: 2025-11-12
featured: true
tags: ["Shaders", "URP", "Unity", "HLSL"]
---

## Brief

One or two sentences: the problem and the constraint (platform, budget, art direction).

## Approach

- Noise-driven clip threshold, animated over the effect's lifetime
- Emissive edge band, ramped by distance to the threshold
- One material, parameterised for both VFX and gameplay use

## Result

What shipped, where it's used, and any measurable win (draw calls, memory, artist time saved).