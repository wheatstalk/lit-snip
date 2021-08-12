# Lit Snipper

A small tool to snip and format sections of code for markdown-based
literature.

## Usage

Let's say we have a file called `my-example.lit.ts` with this content:

```ts
import * as cdk from '@aws-cdk/core';
import { IntrinsicValidator, Validation } from '..';
import { TestLambdas } from './test-lambdas';

/** @internal */
export class ItLitLambda extends cdk.Stack {
  constructor(scope_: cdk.Construct, props: cdk.StackProps = {}) {
    super(scope_, 'ItLitLambda', props);

    const testLambdas = new TestLambdas(this, 'TestLambdas');
    const lambdaFunction = testLambdas.alwaysSucceeds;

    // Lit code uses 'scope'
    const scope = this;

    // ::SNIP
    new IntrinsicValidator(scope, 'IntrinsicValidator', {
      validations: [
        Validation.lambdaInvokeSucceeds({
          lambdaFunction,
        }),
      ],
    });
    // ::END-SNIP
  }
}
```

When you run the lit-snip like this:

```shell
npx -p @wheatstalk/lit-snip lit-snip ./my-example.lit.ts
```

The script will output all the lines between `::SNIP` and `::END-SNIP` and it
will adjust the indentation to match the comment, wrapping the example in a
markdown code block like this:

```ts
new IntrinsicValidator(scope, 'IntrinsicValidator', {
  validations: [
    Validation.lambdaInvokeSucceeds({
      lambdaFunction,
    }),
  ],
});
```

You might find this useful in conjunction with [markmac][1] to keep your
`README.md` code examples in sync with tests that prove the examples work.

[1]: https://github.com/awslabs/markmac