import React from 'react'
import { FeatureSteps } from './feature-steps'
const FeatureSection = () => {
   
// import img from '../../../public/podcast.jpg'
const features = [
  { 
    step: 'Step 1', 
    title: 'AUDIOBOOKS',
    content: 'Upload your ePub or PDF, pick your characters, direct the delivery, and publish high-quality multi-voice audiobooks.', 
    image: '/music.jpg' 
  },
  { 
    step: 'Step 2',
    title: 'VIDEO VOICEOVERS',
    content: 'Select the ideal voice or clone your own. Generate ads, shorts, or films with our Al voice generator.',
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
    title: 'PODCASTS',
    content: "Translate into 30+ languages while preserving the speaker's voice. Dub with one click or use Dubbing Studio for full control.",
    image: '/music.jpg'
  },
]
  return (
    <div>
        <FeatureSteps features={features} title="Generate high-quality audio with our Al voice generator for audiobooks, videos, and podcasts" autoPlayInterval={4000} imageHeight="h-[500px]"/>
    </div>
  )
}

export default FeatureSection