#!/bin/bash
node_modules/node-sass/bin/node-sass client/styles/client.scss --output assets/compiled
node_modules/node-sass/bin/node-sass modules/cinnamon/styles/scenario.scss --output assets/compiled
