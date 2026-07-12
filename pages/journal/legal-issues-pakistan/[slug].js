import GuidePage from "../../../src/components/GuidePage";
import { pakistanGuides } from "../../../src/data/marketing";

export const getStaticPaths = () => ({
  paths: pakistanGuides.map((guide) => ({ params: { slug: guide.slug } })),
  fallback: false,
});

export const getStaticProps = ({ params }) => {
  const guide = pakistanGuides.find((item) => item.slug === params.slug);

  return {
    props: {
      guide,
    },
  };
};

export default GuidePage;
