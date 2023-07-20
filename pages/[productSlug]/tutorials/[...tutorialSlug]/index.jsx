export { Page as default } from "../../../../components/page";

export const getStaticProps = async () => {
  return {
    props: {},
  };
};

export const getStaticPaths = async () => {
  return {
    paths: [
      {
        params: {
          productSlug: "vault",
          tutorialSlug: ["authenticating", "jwt"],
        },
      },
    ],
    fallback: "blocking",
  };
};
