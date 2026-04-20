import useContent from "../hooks/useContent";
import { fetchHeroContent } from "../services/api";

import GradientText from "../components/ui/GradientText";
import GradientButton from "../components/ui/GradientButton";
import FloatingShape from "../components/ui/FloatingShape";
import Skeleton from "../components/ui/Skeleton";

import "../styles/variables.css";

const HeroSection = () => {
  const { data, loading, error, retry } = useContent(fetchHeroContent);

  //  Loading state
  if (loading) {
    return <Skeleton type="hero" />;
  }

  //  Error state
  if (error) {
    return (
      <section className="hero">
        <p className="error-text">{error}</p>
        <GradientButton onClick={retry}>Retry</GradientButton>
      </section>
    );
  }

  //  Success state
  return (
    <section className="hero">

      {/*  Content */}
      <div className="hero-content">
        <h1 className="hero-title">
          {data.headlinePrefix}
          <br/>
          <GradientText variant="default">{data.headlineGradient}</GradientText>
        </h1>

        <p className="hero-subtitle">{data.subheadline}</p>

        <GradientButton>
          {data.cta}
        </GradientButton>
      </div>
    </section>
  );
};

export default HeroSection;