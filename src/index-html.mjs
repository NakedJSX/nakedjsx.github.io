import { Page } from '@nakedjsx/core/page'

import logo from ':raw:$ASSET/logo.svg'

const Head =
    () =>
    <>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>NakedJSX</title>
    </>

const Body =
    () =>
    <>
        <main>
            <h1><raw-content content={logo} /> Coming Soon.</h1>
        </main>
    </>

Page.Create('en');
Page.AppendHead(<Head/>);
Page.AppendBody(<Body/>);
Page.Render();