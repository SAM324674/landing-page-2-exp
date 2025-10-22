import React from 'react'
import { FeatureSteps } from './feature-steps'
const FeatureSection = () => {
   
// import img from '../../../public/podcast.jpg'
const features = [
  { 
    step: 'Step 1', 
    title: 'Conversational engineering',
    content: 'Go beyond generation. Conversationally guide Wubble to mix, master, and perform DAW-level edits on all your tracks.', 
    image: '/music.jpg' 
  },
  { 
    step: 'Step 2',
    title: 'Generative music & scoring',
    content: 'Create custom, copyright-free music. Generate tracks in any genre, or create adaptive scores that react to your video or game.',
    image: '/podcast.jpg'
  },
  { 
    step: 'Step 3',
    title: 'DUBBED VIDEOS',
    content: "Translate into 30+ languages while preserving the speaker's voice. Dub with one click or use Dubbing Studio for full control.",
    image: '/podcast.jpg'
  },
   { 
    step: 'Step 4',
    title: 'AI voice & ADR',
    content: "Clone voices for secure ADR, create hyper-realistic voiceovers, or localize your content in any language and accent.",
    image: '/music.jpg'
  },
  { 
    step: 'Step 5',
    title: 'AI SFX & Foley',
    content: "Generate any sound effect imaginable. From unique game-ready SFX to procedural foley tracks that sync perfectly to your film.",
    image: '/music.jpg'
  },
]
  return (
    <div>
        <FeatureSteps features={features} title="Generate, mix, and master studio-quality audio with our conversational AI agent." autoPlayInterval={4000} imageHeight="h-[500px]"/>
    </div>
  )
}

export default FeatureSection