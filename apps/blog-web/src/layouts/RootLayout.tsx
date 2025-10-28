'use client';

import { ThemeProvider } from '@monorepo/providers';
import { Global, css } from '@emotion/react';
import type { TenantName } from '@monorepo/tokens';
import { useServerInsertedHTML } from 'next/navigation';
import { useState } from 'react';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();

    (styledComponentsStyleSheet.instance as any).clearTag();

    return <>{styles}</>;
  });

  const defaultTenant: TenantName = 'tenant-a';
  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      <ThemeProvider tenant={defaultTenant}>
        <Global
          styles={css`
            /* Global resets and base styles inspired by provided snippet */
            :root {
              /* place to inject font CSS variables if needed */
            }

            html,
            body {
              padding: 0;
              margin: 0;
              min-height: 100%;
            }

            h1,
            h2,
            h3,
            h4,
            h5,
            p {
              margin: 0;
              padding: 0
            }

            a {
              text-decoration: none;
            }
            a:hover span {
              text-decoration: underline;
            }
          `}
        />
        <main>{children}</main>
      </ThemeProvider>
    </StyleSheetManager>
  );
}
