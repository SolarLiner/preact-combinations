let poly = require("preact-cli/lib/lib/webpack/polyfills");

import { h, render } from "preact";

import Host from "./components/host";

render(<Host />, document.querySelector('[data-widget-host="habitat"]'));
