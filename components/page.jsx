import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

function PageLink({ path, page, getStaticPaths = false }) {
  const router = useRouter();

  const matchesPathname = router.asPath === path;
  const matchesRoute = router.route === page;

  return (
    <div
      style={{
        color: matchesPathname ? "blue" : undefined,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        // border: matchesPathname ? "1px solid blue" : "1px solid black",
        padding: "4px",
        marginBottom: "4px",
        borderRadius: "4px",
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
      <hr
        style={{
          flexGrow: "1",
          border: "none",
          height: "1px",
          background: matchesPathname ? "blue" : "black",
          margin: "0 20px",
        }}
      />
      <span>
        {matchesPathname && <span> (pathname)</span>}
        {matchesRoute && <span> (route)</span>}
        {getStaticPaths && <span> (getStaticPaths)</span>}
      </span>
    </div>
  );
}

function LegendItem({ name, children, style = {} }) {
  return (
    <div style={{ marginBottom: "15px", ...style }}>
      <dt style={{ fontWeight: "bold", marginBottom: "5px" }}>({name})</dt>
      <dd>{children}</dd>
    </div>
  );
}

function Header({ children }) {
  return (
    <h2 style={{ margin: "30px 0 20px", borderBottom: "2px solid black" }}>
      {children}
    </h2>
  );
}

export function Page() {
  const router = useRouter();

  return (
    <div
      style={{
        margin: "30px auto",
        maxWidth: "700px",
        fontFamily: "monospace",
      }}
    >
      <div>
        <Header>Route</Header>
        <div>{router.route}</div>
      </div>
      <div>
        <Header>Pathname</Header>
        <div>{router.asPath}</div>
      </div>
      <div>
        <Header>Links</Header>
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
      <div>
        <Header>Legend</Header>
        <dl>
          <LegendItem name="pathname" style={{ color: "blue" }}>
            current page pathname matches
          </LegendItem>
          <LegendItem name="route">current page route matches</LegendItem>
          <LegendItem name="getStaticPaths">
            page was a listed in getStaticPaths
          </LegendItem>
        </dl>
      </div>
    </div>
  );
}
