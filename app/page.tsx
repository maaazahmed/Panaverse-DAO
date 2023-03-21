import {
  Navbar,
  Hero,
  Info,
  CoreCourses,
  SpecializedTracks,
} from "../componant/index";

export default function App() {
  return (
    <div className="no-scrollbar">
      <Hero
        heading="Captur Photography"
        message="I capture moments in nature and keep them alive."
      />
      <Info />
      <CoreCourses />
      <SpecializedTracks />
    </div>
  );
}
