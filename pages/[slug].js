import GuidePage from "../src/components/GuidePage";
import { guides } from "../src/data/marketing";

export const getStaticPaths = () => ({
  paths: guides.map((guide) => ({ params: { slug: guide.slug } })),
  fallback: false,
});

export const getStaticProps = ({ params }) => {
  const guide = guides.find((item) => item.slug === params.slug);

  return {
    props: {
      guide,
    },
  };
};

export default GuidePage;
