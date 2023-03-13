import { Navbar, Hero, Services } from "../componant/index";

export default function App() {
  return (
    <div className="no-scrollbar">
      <Hero
        heading="Captur Photography"
        message="I capture moments in nature and keep them alive."
      />
      <Services />
    </div>
  );
}
