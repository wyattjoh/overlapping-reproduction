import { Page } from '../../../../components/page'

export default Page({ path: 'pages/[productSlug]/tutorials/[...tutorialSlug]' })

export const getStaticProps = async () => {
  return {
    props: {},
  }
}

export const getStaticPaths = async () => {
  return {
    paths: [
      {
        params: {
          productSlug: 'vault',
          tutorialSlug: ['authenticating', 'jwt'],
        },
      },
    ],
    fallback: false,
  }
}
