import { Point } from "./point";

export class Rectangle {
  location: Point;
  size: Point;

  constructor(location: Point, size: Point) {
    this.location = location;
    this.size = size;
  }

  left(): number {
    return this.location.x;
  }

  right(): number {
    return this.location.x + this.size.x;
  }

  top(): number {
    return this.location.y;
  }

  bottom(): number {
    return this.location.y + this.size.y;
  }

  center(): Point {
    return this.location.add(this.size.divideBy(2));
  }

  centerOn(other: Rectangle): Rectangle {
    return new Rectangle(
      other.center().subtract(this.size.divideBy(2)),
      new Point(this.size.x, this.size.y)
    );
  }

  centerOnPoint(point: Point): Rectangle {
    return new Rectangle(
      point.subtract(this.size.divideBy(2)),
      new Point(this.size.x, this.size.y)
    );
  }

  centerHorizontal(other: Rectangle): Rectangle {
    return new Rectangle(
      other.center().subtract(this.size.divide(new Point(2, 1))),
      new Point(this.size.x, this.size.y)
    );
  }

  centerVertical(other: Rectangle): Rectangle {
    return new Rectangle(
      other.center().subtract(this.size.divide(new Point(1, 2))),
      new Point(this.size.x, this.size.y)
    );
  }

  union(other: Rectangle): Rectangle {
    const y = Math.min(this.location.y, other.location.y);
    const bottom = Math.max(this.bottom(), other.bottom());
    const x = Math.min(this.location.x, other.location.y);
    const right = Math.max(this.right(), other.right());
    const width = right - x;
    const height = bottom - y;
    return new Rectangle(new Point(x, y), new Point(width, height));
  }

  contains(other: Rectangle): boolean {
    return (
      this.left() <= other.left() &&
      this.right() >= other.right() &&
      this.bottom() >= other.bottom() &&
      this.top() <= other.top()
    );
  }

  containsPoint(point: Point): boolean {
    return (
      this.left() <= point.x &&
      this.right() >= point.x &&
      this.bottom() >= point.y &&
      this.top() <= point.y
    );
  }

  overlaps(other: Rectangle): boolean {
    return (
      this.left() < other.right() &&
      this.right() > other.left() &&
      this.bottom() > other.top() &&
      this.top() < other.bottom()
    );
  }

  growByStep(targetSize: Point, step: Point = new Point(1, 1)): Rectangle {
    const newX = Math.min(this.size.x + step.x, targetSize.x);
    const newY = Math.min(this.size.y + step.y, targetSize.y);
    return new Rectangle(new Point(), new Point(newX, newY)).centerOn(this);
  }

  shrinkByStep(targetSize: Point, step: Point = new Point(1, 1)): Rectangle {
    const newX = Math.max(this.size.x - step.x, targetSize.x);
    const newY = Math.max(this.size.y - step.y, targetSize.y);
    return new Rectangle(new Point(), new Point(newX, newY)).centerOn(this);
  }
}
