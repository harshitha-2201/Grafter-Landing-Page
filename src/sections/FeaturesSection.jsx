import useContent from "../hooks/useContent";
import { fetchFeaturesContent } from "../services/api";
import FloatingShape from "../components/ui/FloatingShape";

import GradientText from "../components/ui/GradientText";
import GradientButton from "../components/ui/GradientButton";
import Skeleton from "../components/ui/Skeleton";
import Carousel from "../components/ui/Carousel";

import "../styles/variables.css";

const FeaturesSection = () => {
  const { data, loading, error, retry } = useContent(fetchFeaturesContent);

  if (loading) return <Skeleton type="features" />;

  if (error) {
    return (
      <section className="features">
        <p className="error-text">{error}</p>
        <GradientButton onClick={retry}>Retry</GradientButton>
      </section>
    );
  }

  return (
    <section className="features">
      {/*  Shapes belong here */}
  {data.shapes?.map((shape, index) => (
    <FloatingShape
      key={index}
      type={shape.type}
      color={shape.color}
    />
  ))}
      <div className="features-container">
        <h2 className="features-title">
  {data.titlePrefix}{" "}
  <GradientText variant="gray">{data.titleHighlight}</GradientText>{" "}
  {data.titleSuffix}
</h2>

        <p className="features-subtitle">{data.subtitle}</p>

        <Carousel
          items={data.products.map((product, index) => (
            <div className="feature-card" key={index}>
  <h3 className="feature-title">{product.title}</h3>

  <div className="feature-image-wrapper">
    <img
      src={product.image}
      alt={product.title}
      className="feature-image"
    />
  </div>

            </div>
          ))}
        />
      </div>
    </section>
  );
};

export default FeaturesSection;