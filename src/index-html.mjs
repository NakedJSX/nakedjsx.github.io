import { Page } from '@nakedjsx/core/page'

import logo from ':raw:$ASSET/logo.svg'
import { Analytics } from '../documentation/src/common.jsx'

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
            <h1><raw-content content={logo} /></h1>
            <p>Launching May 28, 2023.</p>
        </main>
    </>

Page.Create('en');
Page.AppendHead(<Head/>);
Page.AppendHead(<Analytics />);
Page.AppendBody(<Body/>);
Page.Render();