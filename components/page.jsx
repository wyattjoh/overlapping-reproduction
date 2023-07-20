import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

function PageLink({ path, page, getStaticPaths = false }) {
  const router = useRouter();

  const matchesPathname = router.asPath === path;
  const matchesPage = router.route === page;

  return (
    <div
      style={{
        color: matchesPathname ? "blue" : undefined,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        border: matchesPathname ? "1px solid blue" : "1px solid black",
        padding: "4px",
        marginBottom: "4px",
      }}
    >
      <Link
        href={path}
        style={{
          padding: "6px",
          margin: "2px",
          backgroundColor: matchesPathname ? "blue" : "black",
          color: "white",
          display: "inline-block",
        }}
      >
        {router.basePath}
        {path}
      </Link>
      <span style={{ fontFamily: "monospace" }}>
        {matchesPathname && <span> (pathname)</span>}
        {matchesPage && <span> (page)</span>}
        {getStaticPaths && <span> (getStaticPaths)</span>}
      </span>
    </div>
  );
}

export function Page() {
  const router = useRouter();

  return (
    <div style={{ margin: "30px auto", maxWidth: "700px" }}>
      <h3>Route: {router.route}</h3>
      <h2>Links</h2>
      <div>
        <PageLink
          page="/[productSlug]/tutorials/[collectionSlug]"
          path="/vault/tutorials/authentication"
          getStaticPaths
        />
        <PageLink
          page="/[productSlug]/tutorials/[collectionSlug]"
          path="/vault/tutorials/auth"
        />
        <PageLink
          page="/[productSlug]/tutorials/[...tutorialSlug]"
          path="/vault/tutorials/authenticating/jwt"
          getStaticPaths
        />
        <PageLink
          page="/[productSlug]/tutorials/[...tutorialSlug]"
          path="/vault/tutorials/authenticating/password"
        />
        <PageLink
          page="/[productSlug]/tutorials"
          path="/vault/tutorials"
          getStaticPaths
        />
        <PageLink page="/" path="/" />
      </div>
    </div>
  );
}
