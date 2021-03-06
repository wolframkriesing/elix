// Elix is a JavaScript project, but we use TypeScript as an internal tool to
// confirm our code is type safe.

/// <reference path="../src/shared.d.ts"/>

import * as symbols from './symbols.js';

declare const TouchSwipeMixin: StateMixin<{},
{},
{
  [symbols.swipeTarget]: Element;
},
{
  swipeFraction: number;
  touchAction: string;
}>;

export default TouchSwipeMixin;
