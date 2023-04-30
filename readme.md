# Learn how to working with canvas

Read book [HTML5 Canvas | Fulton Jeff
[src](https://github.com/mattpardee/html5canvas)

- Fulton Steve](https://www.amazon.com/HTML5-Canvas-Steve-Fulton/dp/144939390X)

## chapter 1

- [drawScreen()](https://github.com/vaskes79/learn-canvas/commit/9398d2848856aadb6516b1b79e0e75d4a63acbe5) base example how to draw on canvas

### The 2D Context and the Current State

**Transformation matrix**

Methods for scale

- rotate
- transform
- and translate.

**Clipping region**

Created with the clip() method.

**Properties of the context**

Properties include

- strokeStyle
- fillStyle
- globalAlpha
- lineWidth
- lineCap
- lineJoin
- miterLimit
- shadowOffsetX
- shadowOffsetY
- shadowBlur
- shadowCol or
- globalCompositeOperation
- font
- textAlign
- and textBaseline.

**resume**

Три типа манипуляций со стейтом в канвас.

- трансформации
- ограничения регионов
- свойства

### The HTML5 Canvas Object

- `canvas.width`, `canvas.height` = not read only
- `window.devicePixelRatio` scale factor for canvas
- `getContext` will return instance canvas context
- `toDataURL` will return data:url string with current canvas state
- `toBlob([callback])` should retern url on image on canvas

### Another Example: Guess The Letter

[Guess The Letter](https://github.com/vaskes79/learn-canvas/commit/5b3b832f2e2cfcf8e7f8a754b7579ea9ab713dc1)
