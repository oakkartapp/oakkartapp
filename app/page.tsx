
 import { Button } from "@/components/ui/button";
import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/CTA";
import { recentSessions } from "@/constants";

const Page  = () => {
  return (
    <main>
      <h1>Popular Companions</h1>
      <section className="home-section">
          <CompanionCard
          id="123"
          name="Neura the Brainy Explorer"
          topic="Neural Network of the Brain"
          subject="Science"
          duration={45}
          color="#ffda6e"
          />
          <CompanionCard
              id="456"
              name="Countsy the Number Wizard"
              topic="Derivative & Integral"
              subject="Maths"
              duration={30}
              color="#E5D0FF"
          />
          <CompanionCard
              id="789"
              name="Verba the Vocabulary Builder"
              topic="Language"
              subject="English Literature"
              duration={30}
              color="#BDE7FF"
          />

      </section>
        <section className="home-section">
            <CompanionsList
                title="Recent Completed sessions"
                companions={recentSessions}
                className="w-2/3 max-lg:w-full"
            />
            <CTA />
        </section>
    </main>
  )
}

export default Page