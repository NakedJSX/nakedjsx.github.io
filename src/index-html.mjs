import { Page } from '@nakedjsx/core/page'

import logo from ':raw:$DOC_ASSET/logo.svg'
import prismTheme from ':raw:@nakedjsx/plugin-asset-prism/theme.css';

import { Inline } from '$DOC_SRC/common.jsx'
import { Example } from '$DOC_SRC/example.jsx'

const title = "Static Site Generator.";
const description = "NakedJSX is an open-source npx command for generating JSX based static websites. The output is pure HTML and CSS - unless you choose to add your own JavaScript."

const Head =
    () =>
    <>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:type" content="website"></meta>
        <meta property="og:url" content="https://nakedjsx.org"></meta>
        <meta property="og:title" content={`NakedJSX - ${title}`}></meta>
        <meta property="og:description" content={description}></meta>
        <title>{`NakedJSX - ${title}`}</title>
    </>

const Dep =
    ({ name, url, donate, plugins, children }) =>
    <>
        <h3><a href={url}>{name}</a>{donate && <> - <a href={donate}>donate</a></>}</h3>
        {children}
        {plugins && <p css="font-size: 1rem">* {plugins}</p>}
    </>

const exampleSource =
`import { Page } from '@nakedjsx/core/page'

const BodyContent =
    ({ title }) =>
    <>
        <h1 css="color: fuchsia">{title}</h1>
        <p css="color: #ff00ff">
            You might not need a single page app?
        </p>
    </>

Page.Create('en');
Page.AppendCss('body { font-family: sans-serif }');
Page.AppendHead(<title>Hello NakedJSX</title>);
Page.AppendBody(<BodyContent title="Hello NakedJSX" />);
Page.Render();`;

const Body =
    () =>
    <main>
        <h1><raw-content content={logo} /> {title}</h1>
        <p>{description}</p>
        <p><a href="documentation">You can find detailed documentation here</a>.</p>
        
        <h2>A Two Minute Test</h2>
        <Example captureOutput={['example', 'hello-nakedjsx']}>
            <p>If you have Node.js installed, you can play with it now. Create a directory called <Inline>src</Inline> and in it a file called <Inline>index-page.jsx</Inline>:</p>
            <Example.Src lang="jsx" filename="src/index-page.jsx">{
                exampleSource
            }</Example.Src>
            <p>Then open the parent directory in your terminal and run:</p>
            <Example.BuildCmd />
            <p>The result is a new subdirectory called <Inline>out</Inline>, which contains a single HTML file:</p>
        </Example>
        <Example buildFlags={[]} wordwrapOutput captureOutput={['example', 'hello-nakedjsx-dist']}>
            <Example.Src hidden lang="jsx" filename="src/index-page.jsx">{
                exampleSource
            }</Example.Src>
            <p>If you build it without the <Inline>--pretty</Inline> flag, the result is tightly packed and suitable for distribution:</p>
        </Example>
        <p>If you build with the <Inline>--dev</Inline> flag then a live-refresh development web server will be started.</p>
        <p>Having a simple way to build HTML files from JSX is a good start, but NakedJSX can do much more.</p>
        
        <h2 id="features">Features</h2>
        <ul>
            <li>Build HTML files using JSX templates</li>
            <li>Live-refresh development server</li>
            <li>JSX support for 'ref' and 'children' props</li>
            <li>Easy-to-use JSX 'context' prop</li>
            <li>Scoped CSS extraction</li>
            <li>CSS nesting</li>
            <li>CSS deduplication and compression</li>
            <li>Publish images and other asset files</li>
            <li>Generate image sourcesets at multiple resolutions</li>
            <li>Convert images to webp</li>
            <li>Embed raw asset files in HTML (useful for SVG)</li>
            <li>Use of JSX in client JavaScript</li>
            <li>Client JavaScript minification</li>
            <li>Embed predefined values at build time</li>
            <li>Configurable import path aliases</li>
            <li>Asset import plugin system</li>
        </ul>

        <p>Please refer to the <a href="documentation">detailed documentation</a> for more information.</p>
        
        <h2 id="author">Author</h2>

        <p>
            Hello, I'm David Hogan. Since 1999 I have been a professional software engineer, a startup/scaleup CTO,
            and everything in between. I am a current member of the VICE (Commodore 8-bit computer emulator) development team.
        </p>
        <p>
            I designed and built NakedJSX for fun. I would love to hear your feedback!
        </p>
        <p>
            You can reach me via <a href="mailto:contact@nakedjsx.com">Email</a>
            , <a href="https://www.linkedin.com/in/davidqhogan/">LinkedIn</a>
            , and at the <a href="https://discord.gg/BXQDtub2fS">NakedJSX Discord Server</a>.
        </p>
        <p>
            I am based in Melbourne, Australia, and currently available for hybrid or remote contract work. 
        </p>

        {/* <h2 id="philosophy">Design Philosophy</h2>

        <h3>Pure HTML & CSS Output</h3>
        <p>The output files are ready for your browser to render without executing any JavaScript.</p>
        <p>Of course, you can add whatever browser JavaScript you like, and if NakedJSX builds that code for you then it can use JSX.</p>
        
        <h3>Low-Friction</h3>
        <p>NakedJSX doesn't require the setting up and maintaining of a Node.js project. Just create the site files and run the npx command.</p>
        
        <h3>Conservative Dependency Choices</h3>
        <p>
            Where practical, required functionality is implemented directly within NakedJSX.
            In other cases, well known and well maintained <a href="#acknowledgments">external dependencies</a> are chosen.
        </p>
        
        <h3>Security Compliance</h3>
        <p>Supported versions of NakedJSX will maintain a state of zero of npm audit findings.</p> */}

        <h2 id="acknowledgments">Dependencies & Acknowledgments</h2>

        <p>NakedJSX would not exist without these direct dependencies. If you find NakedJSX useful, please consider supporting them!</p>

        <Dep name="Babel" url="https://babeljs.io" donate="https://opencollective.com/babel" plugins="Plus @babel/generator and @babel/plugin-transform-react-jsx plugins, and @babel/preset-env preset.">
            <ul>
                <li>Transpilation of JSX to JavaScript</li>
                <li>Hosting several NakedJSX plugins</li>
            </ul>
        </Dep>
        <Dep name="Chokidar" url="https://github.com/paulmillr/chokidar#readme" donate="https://github.com/sponsors/paulmillr">
            <ul>
                <li>Observation of source file change events</li>
            </ul>
        </Dep>
        <Dep name="CSSO" url="https://github.com/css/csso#readme">
            <ul>
                <li>CSS optmisation / compression</li>
            </ul>
        </Dep>
        <Dep name="CSSTree" url="https://github.com/csstree/csstree#readme">
            <ul>
                <li>CSS manipulation</li>
            </ul>
        </Dep>
        <Dep name="Node.js" url="https://nodejs.org">
            <ul>
                <li>JavaScript runtime environment.</li>
            </ul>
        </Dep>
        <Dep name="PostCSS" url="https://postcss.org" donate="https://opencollective.com/postcss" plugins="Plus postcss-nested plugin.">
            <ul>
                <li>Transpilation of nested CSS into flat CSS.</li>
            </ul>
        </Dep>
        <Dep name="Rollup" url="https://rollupjs.org" doante="https://opencollective.com/rollup" plugins="Plus @rollup/plugin-babel, @rollup/plugin-dynamic-import-vars, and @rollup/plugin-inject plugins.">
            <ul>
                <li>Production of self-contained JavaScript bundles.</li>
                <li>Hosting NakedJSX plugins</li>
            </ul>
        </Dep>
        <Dep name="Terser" url="https://terser.org">
            <ul>
                <li>JavaScript optmisation / compression for production builds of client JavaScript code.</li>
            </ul>
        </Dep>
    </main>

Page.Create('en');
Page.AppendHead(<Head/>);
Page.AppendCss(prismTheme);
Page.AppendBody(<Body/>);
Page.Render();