import { Page } from '@nakedjsx/core/page'

import logo from ':raw:$DOC_ASSET/logo.svg'
import prismTheme from ':raw:@nakedjsx/plugin-asset-prism/theme.css';

import { Inline, Analytics } from '$DOC_SRC/common.jsx'
import { Example } from '$DOC_SRC/example.jsx'

const title = "Static Site Generator";
const description = "Nakedjsx is a command-line tool for generating static websites from JSX. The output is pure HTML and CSS - unless you choose to add your own JavaScript."

const Head =
    () =>
    <>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={description}></meta>
        <meta property="og:type" content="website"></meta>
        <meta property="og:url" content="https://nakedjsx.org"></meta>
        <meta property="og:title" content={`NakedJSX - ${title}`}></meta>
        <meta property="og:description" content={description}></meta>
        <title>{`NakedJSX - ${title}`}</title>
        <Analytics />
    </>

const Dep =
    ({ name, url, donate, plugins, children }) =>
    <>
        <h3 css={`
            display: flex;
            justify-content: space-between;
            align-items: center;

            a {
                font-size: 0.875rem;
                font-weight: normal;
            }
        `}>
            <span css="flex-grow: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap">{name}</span>
            {donate && <a href={donate}>(donate)</a>}
        </h3>
        {children}
        <p css={`
            display: flex;
            justify-content: space-between;
            align-items: center;
        `}>
            <a href={url} css="flex-grow: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap">{url.replace(/^https:\/\//, '')}</a>
        </p>
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

const Inset =
    ({ children }) =>
    <p css={`
        padding: var(--gap-three-eighths-2) var(--gap);
        background-color: var(--code-bg-color);
    `}>
        {children}
    </p>

const Body =
    () =>
    <>
        <main>
            <h1><raw-content content={logo} /> {title}</h1>
            <p>{description}</p>
            <Inset>
                This is an overview. Please refer to the <a href="documentation">documentation</a> for a detailed look at each feature.
            </Inset>
            <p>This page was built by NakedJSX. You can look at its <a href={'https://github.com/NakedJSX/nakedjsx.github.io/blob/main/src/index-html.mjs'}>source</a>.</p>
            
            <h2>At a Glance</h2>
            <p>Generate static HTML files from JSX by running an npx command.</p>
            <p>Scoped CSS classes are extracted from JSX and deduplicated.</p>
            <p>No need to set up a Node.js project, just run an npx command on your NakedJSX content directory and your site is built into an output folder.</p>
            <p>A development mode with a live-refresh build and web server is included.</p>
            <p>
                NakedJSX provides an <a href="https://github.com/NakedJSX/core/blob/main/runtime/client/jsx.mjs">optional and small runtime</a> allowing JSX
                to be used by client-side JavaScript. The runtime is automatically injected if needed.
            </p>
            
            <h2 id="a-quick-test">A Two Minute Test</h2>
            <Example captureOutput={['example', 'hello-nakedjsx-pretty']}>
                <p>If you have Node.js installed, you can try NakedJSX right now. Create a directory called <Inline>src</Inline> with the following file (the filename must end in <Inline>-page.jsx</Inline>):</p>
                <Example.Src lang="jsx" filename="src/index-page.jsx">{
                    exampleSource
                }</Example.Src>
                <p>Then open the parent directory in your terminal and run:</p>
                <Example.BuildCmd />
                <p>The result is a new subdirectory called <Inline>out</Inline>, which contains a single HTML file:</p>
            </Example>
            <p>Note that the scoped CSS was extracted from the JSX, minified, and then deduplicated.</p>
            <Example buildFlags={[]} wordwrapOutput captureOutput={['example', 'hello-nakedjsx-dist']}>
                <Example.Src hidden lang="jsx" filename="src/index-page.jsx">{
                    exampleSource
                }</Example.Src>
                <p>If you build it without the <Inline>--pretty</Inline> flag, the result is tightly packed and suitable for distribution:</p>
            </Example>
            <p>If you build with the <Inline>--dev</Inline> flag then a live-refresh development webserver will be started.</p>
            <p>Having a simple way to build HTML files from JSX is a good start, but NakedJSX can a lot more.</p>
            
            <h2 id="features">Features</h2>
            <ul>
                <li>Build HTML files using JSX templates</li>
                <li>Live-refresh development server</li>
                <li>JSX support for 'ref' and 'children' props</li>
                <li>JSX parent and child communication via 'context' prop</li>
                <li>Scoped CSS extraction from JSX</li>
                <li>CSS nesting</li>
                <li>CSS minification and deduplication</li>
                <li>Publish images and other asset files</li>
                <li>Generate image sourcesets at multiple resolutions</li>
                <li>Convert images to webp</li>
                <li>Embed raw asset files in HTML (useful for SVG)</li>
                <li>Client JavaScript minification</li>
                <li>Use JSX in client JavaScript</li>
                <li>Embed predefined values at build time</li>
                <li>Configurable import path aliases</li>
                <li>Asset import plugin system</li>
            </ul>

            <Inset>
                You can find detailed information in the <a href="documentation">documentation</a>.
            </Inset>

            <h2>Project Status</h2>
            <p>NakedJSX is subject to design changes until version 1.0.</p>
            <p>Until then breaking changes will be linked to Y increments in X.Y.Z. Breaking changes after 1.0 will be linked to increments in X and will be avoided if possible.</p>
            <p>Detailed release announcements are currently made on the <a href="https://discord.gg/BXQDtub2fS">NakedJSX Discord Server</a> - you are invited to join it.</p>
            <p>You can also get in touch via <a href="mailto:contact@nakedjsx.org">contact@nakedjsx.org</a>.</p>
            <p>Your feedback is requested!</p>
            
            <h2 id="philosophy">Design Philosophy</h2>

            <h3>Pure HTML & CSS Output</h3>
            <p>The output files are ready for your browser to render without executing any JavaScript.</p>
            <p>Of course, you can add any browser JavaScript you like, and if NakedJSX builds that code then will be able to use inline JSX to create DOM nodes.</p>
            
            <h3>Low-Friction</h3>
            <p>NakedJSX doesn't require the setting up and maintaining of a Node.js project. Just create the site files and run the npx command to build.</p>

            <h3>API Stability (After 1.0 Release)</h3>
            <p>Sites should continue build with newer versions of NakedJSX.</p>
            
            <h3>Conservative Dependency Choices</h3>
            <p>
                Where practical, required functionality is implemented directly within NakedJSX.
                In other cases, well known external dependencies are chosen.
            </p>
            
            <h3>Security Compliance</h3>
            <p>Supported versions of NakedJSX will aim for an ongoing state of zero npm audit findings.</p>

            <h2 id="acknowledgments">Dependencies & Acknowledgments</h2>
            <p>NakedJSX relies on these projects for core functionality. Please consider supporting them if you rely on NakedJSX.</p>

            <Dep name="Babel" url="https://babeljs.io" donate="https://opencollective.com/babel" plugins="Plus @babel/generator and @babel/plugin-transform-react-jsx plugins, and the @babel/preset-env preset.">
                <ul>
                    <li>Transpilation of JSX to JavaScript</li>
                    <li>Hosting several NakedJSX plugins</li>
                </ul>
            </Dep>
            <Dep name="Chokidar" url="https://github.com/paulmillr/chokidar#readme" donate="https://github.com/sponsors/paulmillr">
                <ul>
                    <li>Notification of source file changes</li>
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
            <Dep name="js-beautify" url="https://github.com/beautify-web/js-beautify#readme">
                <ul>
                    <li>Pretty printing of HTML, CSS and JavaScript code</li>
                </ul>
            </Dep>
            <Dep name="Node.js" url="https://nodejs.org">
                <ul>
                    <li>JavaScript runtime environment and API</li>
                </ul>
            </Dep>
            <Dep name="PostCSS" url="https://postcss.org" donate="https://opencollective.com/postcss" plugins="Plus postcss-nested plugin.">
                <ul>
                    <li>Transpilation of nested CSS into flat CSS</li>
                </ul>
            </Dep>
            <Dep name="React" url="https://react.dev">
                NakedJSX does not use React, but the excellent ideas and work of the engineers at Meta (who created JSX!) must be acknowledged.
            </Dep>
            <Dep name="Rollup" url="https://rollupjs.org" doante="https://opencollective.com/rollup" plugins="Plus @rollup/plugin-babel and @rollup/plugin-inject plugins.">
                <ul>
                    <li>Production of self-contained JavaScript bundles</li>
                    <li>Hosting NakedJSX plugins</li>
                </ul>
            </Dep>
            <Dep name="Terser" url="https://terser.org">
                <ul>
                    <li>JavaScript optmisation / compression</li>
                </ul>
            </Dep>

            <h2 id="author">Project Owner</h2>
            <p>
                Hello, I'm David Hogan. Since 1999 I have been a professional software engineer, a startup/scaleup CTO,
                and everything in between. I am a current member of the VICE (Commodore 8-bit computer emulator) development team.
            </p>
            <p>
                I designed and built NakedJSX by following my curiosity and I hope that you find it useful.
            </p>
            <p>
                You can reach me at:
            </p>
            <ul>
                <li><a href="mailto:contact@nakedjsx.org">contact@nakedjsx.org</a></li>
                <li><a href="https://www.linkedin.com/in/davidqhogan/">LinkedIn</a></li>
                <li><a href="https://discord.gg/BXQDtub2fS">The NakedJSX Discord Server</a></li>
            </ul>
            <p>
                By the way ...
            </p>
            <p>I am based in Melbourne, Australia, and will soon be available for hybrid or remote work.
                My <em>primary</em> languages are C, C++, Java, JavaScript, and I have deployed on AWS for well over a decade.
                I am ideally suited to a hands-on role leading a small, high performance team.
            </p>
        </main>
    </>

Page.Create('en');
Page.AppendHead(<Head/>);
Page.AppendCss(prismTheme);
Page.AppendBody(<Body/>);
Page.Render();
