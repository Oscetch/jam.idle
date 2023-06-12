export class Point {
  x: number;
  y: number;

  constructor(x: number = 0, y: number = 0) {
    this.x = x;
    this.y = y;
  }

  add(other: Point): Point {
    return new Point(this.x + other.x, this.y + other.y);
  }

  addBy(value: number): Point {
    return new Point(this.x + value, this.y + value);
  }

  subtract(other: Point): Point {
    return new Point(this.x - other.x, this.y - other.y);
  }

  subtractBy(value: number): Point {
    return new Point(this.x - value, this.y - value);
  }

  multiply(other: Point): Point {
    return new Point(this.x * other.x, this.y * other.y);
  }

  multiplyBy(value: number): Point {
    return new Point(this.x * value, this.y * value);
  }

  divide(other: Point): Point {
    return new Point(this.x / other.x, this.y / other.y);
  }

  divideBy(value: number): Point {
    return new Point(this.x / value, this.y / value);
  }

  moveInDirection(angle: number, distance: number): Point {
    const x = this.x + distance * Math.cos(angle);
    const y = this.y + distance * Math.sin(angle);
    return new Point(x, y);
  }

  angleTo(other: Point): number {
    const deltaX = other.x - this.x;
    const deltaY = other.y - this.y;
    return Math.atan2(deltaY, deltaX);
  }

  distanceTo(other: Point): number {
    const x = Math.pow(other.x - this.x, 2);
    const y = Math.pow(other.y - this.y, 2);
    return Math.sqrt(x + y);
  }

  toString(): string {
    return `${this.x}, ${this.y}`;
  }
}
