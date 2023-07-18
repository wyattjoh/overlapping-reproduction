export { Page as default } from "../../../../components/page";

export const config = { runtime: "experimental-edge" };

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
    fallback: false,
  };
};
