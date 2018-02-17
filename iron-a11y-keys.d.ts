/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   iron-a11y-keys.html
 */

/// <reference path="../polymer/types/polymer.d.ts" />

interface IronA11yKeysElement extends Polymer.Element, Polymer.IronA11yKeysBehavior {
  target: Node|null;

  /**
   * Space delimited list of keys where each key follows the format:
   * `[MODIFIER+]*KEY[:EVENT]`.
   * e.g. `keys="space ctrl+shift+tab enter:keyup"`.
   * More detail can be found in the "Grammar" section of the documentation
   */
  keys: string|null|undefined;
  attached(): void;
  _targetChanged(target: any): void;
  _keysChanged(): void;
  _fireKeysPressed(event: any): void;
}

interface HTMLElementTagNameMap {
  "iron-a11y-keys": IronA11yKeysElement;
}
