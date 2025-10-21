import GalleryHoverCarousel from "@/components/gallery-hover-carousel";

export default function MusicSectionCarousel() {

    const items = [
    {
      id: "item-1",
      title: "Hero: Empower creators with Wubble",
      summary: "Main call-to-action to explore your learning or creation hub.",
      button: "Explore Wubble Studio",
      url: "#",
      image: "/Blog 1.avif",
      w: "18rem"
    },
    {
      id: "item-2",
      title: "Wubble Chat Studio",
      summary:
        "Interactive chat-based music generation interface.",
      button: "Open Studio",
      url: "#",
      image: "/Blog 1.avif",
      w: "10rem"
    },
    {
      id: "item-3",
      title: "Hero: Empower creators with Wubble",
      summary:
        "Main call-to-action to explore your learning or creation hub.",
      button: "Explore Wubble Studio",
      url: "#",
      image: "/Blog 1.avif",
      w: "18rem"
    },
    {
      id: "item-4",
      title: "Add Vocals & Instruments",
      summary:
        "Lets users layer vocals, instruments, or samples to their tracks for richer music creation",
      button: "Explore Wubble Studio",
      url: "#",
      image: "/Blog 1.avif",
      w: "18rem"
    },
    {
      id: "item-5",
      title: "Hero: Empower creators with Wubble",
      summary:
        "Main call-to-action to explore your learning or creation hub.",
      button: "Explore Wubble Studio",
      url: "#",
      image: "/Blog 1.avif",
      w: "18rem"
    },
    {
      id: "item-6",
      title: "Hero: Empower creators with Wubble",
      summary: "Main call-to-action to explore your learning or creation hub.",
      button: "Explore Wubble Studio",
      url: "#",
      image: "/Blog 1.avif",
      w: "18rem"
    },
  ]


    return <GalleryHoverCarousel heading="Featured Projects" items={items}/>;
}