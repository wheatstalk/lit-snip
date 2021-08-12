const pj = require('projen');
const project = new pj.TypeScriptProject({
  defaultReleaseBranch: 'main',
  name: '@wheatstalk/lit-snip',
  description: 'A tool to snip code from code used in README files.',

  bin: {
    'lit-snip': 'lib/cli.js',
  },

  // deps: [],                          /* Runtime dependencies of this module. */
  // description: undefined,            /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],                       /* Build dependencies for this module. */
  // packageName: undefined,            /* The "name" in package.json. */
  // projectType: ProjectType.UNKNOWN,  /* Which type of project this is (library/app). */
  // release: undefined,                /* Add release management to this project. */
});
project.synth();