import GuidePage from "../../../src/components/GuidePage";
import { gccGuides } from "../../../src/data/marketing";

export const getStaticPaths = () => ({
  paths: gccGuides.map((guide) => ({ params: { slug: guide.slug } })),
  fallback: false,
});

export const getStaticProps = ({ params }) => {
  const guide = gccGuides.find((item) => item.slug === params.slug);

  return {
    props: {
      guide,
    },
  };
};

export default GuidePage;
