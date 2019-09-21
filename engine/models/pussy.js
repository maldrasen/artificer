// global.Pussy = class Pussy extends Model {
//
//   constructor(data) {
//     super();
//     this._id = data.id;
//     this._character_id = data.character_id;
//     this._cervixElasticity = data.cervixElasticity;
//     this._cervixWidth = data.cervixWidth;
//     this._clitLength = data.clitLength;
//     this._clitWidth = data.clitWidth;
//     this._elasticity = data.elasticity;
//     this._innerLabiaLength = data.innerLabiaLength;
//     this._outerLabiaSize = data.outerLabiaSize;
//     this._placement = data.placement;
//     this._prolapseLength = data.prolapseLength;
//     this._shape = data.shape;
//     this._urethraElasticity = data.urethraElasticity;
//     this._urethraWidth = data.urethraWidth;
//     this._width = data.width;
//   }
//
//   get attributes() {
//     return {
//       id: this._id,
//       character_id: this._character_id,
//       cervixElasticity: this._cervixElasticity,
//       cervixWidth: this._cervixWidth,
//       clitLength: this._clitLength,
//       clitWidth: this._clitWidth,
//       elasticity: this._elasticity,
//       innerLabiaLength: this._innerLabiaLength,
//       outerLabiaSize: this._outerLabiaSize,
//       placement: this._placement,
//       prolapseLength: this._prolapseLength,
//       shape: this._shape,
//       urethraElasticity: this._urethraElasticity,
//       urethraWidth: this._urethraWidth,
//       width: this._width,
//     }
//   }
//
//   // === Instance Functions ===
//
//   get placement() { return this._placement; }
//   setPlacement(placement) {
//     this.validateValueIn('placement', placement, ['normal','nipple']);
//     this._placement = placement;
//   }
//
//   get shape() { return this._shape; }
//   setShape(shape) {
//     this.validateValueIn('shape', shape, Pussy.SHAPES);
//     this._shape = shape;
//   }
//
//   get elasticity() { return this._elasticity; }
//   setElasticity(value) { this._elasticity = value; }
//
//   get width() { return this._width; }
//   get convertedWidth() { return ConversionUtility.milliToInches(this._width); }
//   get area() { return MathUtility.widthToArea(this._width); }
//   setWidth(width) { this._width = width; }
//
//   get cervixWidth() { return this._cervixWidth; }
//   get convertedCervixWidth() { return ConversionUtility.milliToInches(this._cervixWidth); }
//   get cervixArea() { return MathUtility.widthToArea(this._cervixWidth); }
//   setCervixWidth(width) { this._cervixWidth = width; }
//
//   get cervixElasticity() { return this._cervixElasticity; }
//   setCervixElasticity(value) { this._cervixElasticity = value; }
//
//   get urethraWidth() { return this._urethraWidth; }
//   get convertedUrethraWidth() { return ConversionUtility.milliToInches(this._urethraWidth); }
//   get urethraArea() { return MathUtility.widthToArea(this._urethraWidth); }
//   setUrethraWidth(width) { this._urethraWidth = width; }
//
//   get urethraElasticity() { return this._urethraElasticity; }
//   setUrethraElasticity(value) { this._urethraElasticity = value; }
//
//   get prolapseLength() { return this._prolapseLength; }
//   get convertedProlapseLength() { return ConversionUtility.milliToInches(this._prolapseLength); }
//   setProlapseLength(length) { this._prolapseLength = length; }
//
//   get innerLabiaLength() { return this._innerLabiaLength; }
//   get convertedInnerLabiaLength() { return ConversionUtility.milliToInches(this._innerLabiaLength); }
//   setInnerLabiaLength(length) { this._innerLabiaLength = length; }
//
//   get outerLabiaSize() { return this._outerLabiaSize; }
//   setOuterLabiaSize(size) { this._outerLabiaSize = size; }
//
//   get clitLength() { return this._clitLength; }
//   setClitLength(length) { this._clitLength = length; }
//
//   get clitWidth() { return this._clitWidth; }
//   setClitWidth(width) { this._clitWidth = width; }
// }
//
// Pussy.SHAPES = ['normal','dog','horse','snake'];
