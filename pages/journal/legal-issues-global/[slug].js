import GuidePage from "../../../src/components/GuidePage";
import { globalGuides } from "../../../src/data/marketing";

export const getStaticPaths = () => ({
  paths: globalGuides.map((guide) => ({ params: { slug: guide.slug } })),
  fallback: false,
});

export const getStaticProps = ({ params }) => {
  const guide = globalGuides.find((item) => item.slug === params.slug);

  return {
    props: {
      guide,
    },
  };
};

export default GuidePage;
