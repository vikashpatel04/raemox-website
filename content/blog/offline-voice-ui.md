---
title: "Implementing Voice UI Offline"
excerpt: "A guide to setting up a wake-word engine that respects user privacy by never sending audio to the cloud."
category: "Tutorial"
date: "2023-09-28"
readTime: "12 min read"
image: "/blog/offline-voice.jpg"
author: "RaeMox Team"
featured: false
---

# Implementing Voice UI Offline

Voice interfaces are everywhere, but most rely on cloud processing. For privacy-sensitive applications, local processing is essential.

## Why Offline Voice?

1. **Privacy**: Audio never leaves the device
2. **Latency**: No network round-trip
3. **Reliability**: Works without connectivity

## Architecture Overview

```
┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│   Audio In  │───▶│  Wake Word  │───▶│     ASR     │
│  (Mic/DSP)  │    │  Detection  │    │  (Whisper)  │
└─────────────┘    └─────────────┘    └─────────────┘
                          │
                          ▼
                   ┌─────────────┐
                   │   Intent    │
                   │   Parser    │
                   └─────────────┘
```

## Step 1: Wake Word Detection

We use Porcupine for efficient wake word detection:

```python
import pvporcupine

porcupine = pvporcupine.create(
    keywords=["hey robot"],
    sensitivities=[0.5]
)
```

## Step 2: Speech-to-Text with Whisper

Once wake word is detected, run Whisper locally:

```python
import whisper

model = whisper.load_model("tiny.en")
result = model.transcribe(audio_segment)
```

## Step 3: Intent Parsing

Map transcribed text to actions using a local NLU model or rule-based system.

## Performance on Edge

On Snapdragon 8 Gen 2:
- Wake word: <10ms latency
- ASR: ~200ms for short commands
- Total power: <100mW average

## Conclusion

Offline voice UI is not just possible—it's practical. With the right architecture, you can build responsive, private voice interfaces.
