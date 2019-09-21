// global.Cock = class Cock extends Model {
//
//   constructor(data) {
//     super();
//     this._id = data.id;
//     this._character_id = data.character_id;
//     this._count = data.count;
//     this._glow = data.glow;
//     this._knobHeightRatio = data.knobHeightRatio;
//     this._knotWidthRatio = data.knotWidthRatio;
//     this._length = data.length;
//     this._placement = data.placement;
//     this._shape = data.shape;
//     this._sheath = data.sheath;
//     this._spineHeightRatio = data.spineHeightRatio;
//     this._urethraElasticity = data.urethraElasticity;
//     this._urethraWidth = data.urethraWidth;
//     this._widthRatio = data.widthRatio;
//   }
//
//   get attributes() {
//     return {
//       id: this._id,
//       character_id: this._character_id,
//       count: this._count,
//       glow: this._glow,
//       knobHeightRatio: this._knobHeightRatio,
//       knotWidthRatio: this._knotWidthRatio,
//       length: this._length,
//       placement: this._placement,
//       shape: this._shape,
//       sheath: this._sheath,
//       spineHeightRatio: this._spineHeightRatio,
//       urethraElasticity: this._urethraElasticity,
//       urethraWidth: this._urethraWidth,
//       widthRatio: this._widthRatio,
//     }
//   }
//
//   // === Instance Functions ===
//
//   get placement() { return this._placement; }
//   setPlacement(placement) {
//     this.validateValueIn('placement', placement, ['normal','nipple','tongue']);
//     this._placement = placement;
//   }
//
//   get count() { return this._count; }
//   setCount(count) { this._count = count; }
//
//   get glow() { return this._glow; }
//   setGlow(glow) { this._glow = glow; }
//
//   get shape() { return this._shape; }
//   setShape(shape) { this._shape = shape; }
//
//   get sheath() { return this._sheath; }
//   setSheath(sheath) { this._sheath = sheath; }
//
//   // Get the cock length in in cm, or inches.
//   get length() { return this._length; }
//   get convertedLength() { return ConversionUtility.milliToInches(this._length); }
//   setLength(length) { this._length = length; }
//
//   // Urethra
//   get urethraWidth() { return this._urethraWidth; }
//   get convertedUrethraWidth() { return ConversionUtility.milliToInches(this._urethraWidth); }
//   get urethraArea() { return MathUtility.widthToArea(this._urethraWidth); }
//   setUrethraWidth(width) { this._urethraWidth = width; }
//
//   get urethraElasticity() { return this._urethraElasticity; }
//   setUrethraElasticity(value) { this._urethraElasticity = value; }
//
//   // --- Width Ratios ---
//   // Actual width values require access to the character's race to enforce
//   // minimum width values, so the width functions are added in the main and
//   // client threads.
//
//   get widthRatio() { return this._widthRatio || Cock.WIDTH_RATIOS[this._shape]; }
//   setWidthRatio(ratio) { this._widthRatio = ratio; }
//
//   get knobHeightRatio() { return this._knobHeightRatio; }
//   setKnobHeightRatio(ratio) { this._knobHeightRatio = ratio; }
//
//   get knotWidthRatio() { return this._knotWidthRatio; }
//   setKnotWidthRatio(ratio) { this._knotWidthRatio = ratio; }
//
//   get spineHeightRatio() { return this._spineHeightRatio; }
//   setSpineHeightRatio(ratio) { this._spineHeightRatio = ratio; }
// }
//
// Cock.WIDTH_RATIOS = {
//   snake:  0.75,
//   horse:  0.9,
//   normal: 1,
//   demon:  1.2,
//   dog:    1.4,
//   dragon: 1.6 };
