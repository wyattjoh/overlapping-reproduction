import React from 'react'

export function Page({ path }) {
  return function Component() {
    return <div>Page: {path}</div>
  }
}
