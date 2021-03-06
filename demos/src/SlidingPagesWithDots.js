import '../../src/SlidingViewport.js';
import { merge } from '../../src/updates.js';
import * as symbols from '../../src/symbols.js';
import AriaListMixin from '../../src/AriaListMixin.js';
import ContentItemsMixin from '../../src/ContentItemsMixin.js';
import DirectionSelectionMixin from '../../src/DirectionSelectionMixin.js';
import ElementBase from '../../src/ElementBase.js';
import FocusVisibleMixin from '../../src/FocusVisibleMixin.js';
import KeyboardDirectionMixin from '../../src/KeyboardDirectionMixin.js';
import KeyboardMixin from '../../src/KeyboardMixin.js';
import LanguageDirectionMixin from '../../src/LanguageDirectionMixin.js';
import PageDotsMixin from '../../src/PageDotsMixin.js';
import SingleSelectionMixin from '../../src/SingleSelectionMixin.js';
import SlotContentMixin from '../../src/SlotContentMixin.js';
import SwipeDirectionMixin from '../../src/SwipeDirectionMixin.js';
import TouchSwipeMixin from '../../src/TouchSwipeMixin.js';
import TrackpadSwipeMixin from '../../src/TrackpadSwipeMixin.js';


const Base =
  AriaListMixin(
  ContentItemsMixin(
  DirectionSelectionMixin(
  FocusVisibleMixin(
  KeyboardDirectionMixin(
  KeyboardMixin(
  LanguageDirectionMixin(
  PageDotsMixin(
  SingleSelectionMixin(
  SlotContentMixin(
  SwipeDirectionMixin(
  TouchSwipeMixin(
  TrackpadSwipeMixin(
    ElementBase
  )))))))))))));

/**
 * Shows how to add page dots to a sliding viewport.
 * 
 * @inherits ElementBase
 * @mixes AriaListMixin
 * @mixes ContentItemsMixin
 * @mixes DirectionSelectionMixin
 * @mixes FocusVisibleMixin
 * @mixes KeyboardDirectionMixin
 * @mixes KeyboardMixin
 * @mixes LanguageDirectionMixin
 * @mixes PageDotsMixin
 * @mixes SingleSelectionMixin
 * @mixes SlotContentMixin
 * @mixes SwipeDirectionMixin
 * @mixes TouchSwipeMixin
 * @mixes TrackpadSwipeMixin
 */
class SlidingPagesWithDots extends Base {

  componentDidMount() {
    if (super.componentDidMount) { super.componentDidMount(); }
    this.$.viewport.addEventListener('selected-index-changed', () => {
      /** @type {any} */
      const viewport = this.$.viewport;
      this.selectedIndex = viewport.selectedIndex;
    });
  }

  get defaultState() {
    return Object.assign({}, super.defaultState, {
      selectionRequired: true
    });
  }

  get [symbols.template]() {
    return `
      <style>
        :host {
          display: flex;
          overflow: hidden;
          position: relative;
        }

        elix-sliding-viewport {
          flex: 1;
        }
      </style>
      ${PageDotsMixin.wrap(`
        <elix-sliding-viewport id="viewport">
          <slot></slot>
        </elix-sliding-viewport>
      `)}
    `;
  }

  get updates() {
    return merge(super.updates, {
      $: {
        viewport: {
          selectedIndex: this.state.selectedIndex,
          swipeFraction: this.state.swipeFraction
        }
      }
    });
  }
}


customElements.define('sliding-pages-with-dots', SlidingPagesWithDots);
export default SlidingPagesWithDots;
