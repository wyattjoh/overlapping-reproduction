import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

function PageLink({ path, page }) {
  const router = useRouter();

  const active = router.route === page;

  return (
    <li style={{ fontWeight: active ? "bold" : "normal" }}>
      <Link href={path}>
        {router.basePath}
        {path}
      </Link>
      {router.route === page && <span> (current)</span>}
    </li>
  );
}

export function Page() {
  const router = useRouter();

  return (
    <div style={{ margin: "30px auto", maxWidth: "500px" }}>
      <h3>{router.route}</h3>
      <h2>Links</h2>
      <ul>
        <PageLink
          page="/[productSlug]/tutorials/[collectionSlug]"
          path="/vault/tutorials/authentication"
        />
        <PageLink
          page="/[productSlug]/tutorials/[...tutorialSlug]"
          path="/vault/tutorials/authenticating/jwt"
        />
        <PageLink page="/[productSlug]/tutorials" path="/vault/tutorials" />
        <PageLink page="/" path="/" />
      </ul>
    </div>
  );
}
