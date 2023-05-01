# Learn how to working with canvas

Read book [HTML5 Canvas | Fulton Jeff

- [Fulton Steve](https://www.amazon.com/HTML5-Canvas-Steve-Fulton/dp/144939390X)
- [src](https://github.com/mattpardee/html5canvas)

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

## chapter 2 Drawing on the Canvas

- `ctx.save()` save state canvas 38p.
- `ctx.restore()` restore state canvas 38p.

### work with line attribute page 40

```js
context.strokeStyle = "black";
context.lineWidth = 10;
context.lineCap = "square";
context.beginPath();
context.moveTo(20, 0);
context.lineTo(100, 0);
context.stroke();
context.closePath();
```

**how to draw arc page 44**

```js
context.beginPath();
context.strokeStyle = "black";
context.lineWidth = 5;
// centerX,centerY, radius, startAngleInRadians, endEngleInradians, anticlockwise
// last params direction drawing on clock or another direction
context.arc(100, 100, 20, (Math.PI / 180) * 0, (Math.PI / 180) * 360, false);
//full circle
context.stroke();
context.closePath();
```

**how to draw arc use arcTo**

Что бы нарисовать дугу нужно построить две касательные. Радиус дожен укладываться в эти две касательные. В премере функции [drawArcsSquare2](https://github.com/vaskes79/learn-canvas/commit/ff9151b8b2bdf69f725888a47a46353a62715f4d)

- move to the start drawing `moveTo`
- middleX and middleY end coordinate for first line that for build arc
- for build second line we start on previos point and set end coordinate to the posX, middleY
- radius should be in diaposone between lines

```js
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = lineWidth;
ctx.moveTo(middleX, posY);
ctx.arcTo(middleX, middleY, posX, middleY, radius);
ctx.stroke();
```

### The Canvas Clipping Region page 44

```js
//draw a big box on the screen
context.fillStyle = "black";
context.fillRect(10, 10, 200, 200);
context.save();
context.beginPath(); //clip the canvas to a 50×50 square starting at 0,0 context.rect(0, 0, 50, 50);
context.clip();
//red circle
context.beginPath();
context.strokeStyle = "red";
context.lineWidth = 5;
context.arc(100, 100, 100, (Math.PI / 180) * 0, (Math.PI / 180) * 360, false); //full circle
context.stroke();
context.closePath();
context.restore();
//reclip to the entire canvas
context.beginPath();
context.rect(0, 0, 500, 500);
context.clip();
//draw a blue line that is not clipped
context.beginPath();
context.strokeStyle = "blue";
context.lineWidth = 5;
context.arc(100, 100, 50, (Math.PI / 180) * 0, (Math.PI / 180) * 360, false); //full circle
context.stroke();
context.closePath();
```

### Compositing on the Canvas page 47

- `globalAlpha`
- `globalCompositeOperation`
