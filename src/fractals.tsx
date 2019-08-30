/*
** Import for esModuleInterop
import * as React from "react";
import * as ReactDOM from "react-dom";
*/

/*
** Import for allowSyntheticDefaultImports
*/
import React from "react";
import ReactDOM from "react-dom";
import Color from './utils'
/*
class Vec2
{
	x : number; 
	y : number;

	constructor(x: number, y: number)
	{
	    this.x = x;
	    this.y = y;
	}

	add(operand: Vec2): Vec2
	{
  		let res = new Vec2(this.x + operand.x, this.y + operand.y);
		return (res);
 	}

 	scale(scalar: number) : Vec2
 	{
 		let res = new Vec2(this.x * scalar, this.y * scalar);
 		return (res);
 	}

}
*/
/*
abstract class Alg2 extends Vec2
{
	constructor(x: number, y: number)
	{
		super(x, y);
	}

	abstract mult(operand: Alg2): Alg2;
	abstract quadnorm(): number;
	abstract norm(): number;
}
*/
/*
class Complex extends Vec2//Alg2
{
	//x : number; 
  	//y : number;

	constructor(x: number, y: number)
	{
		super(x,y);
	}

	//TODO karatsuba.
	mult(operand: Complex) : Complex
	{
		let res = new Complex( this.x * operand.x - this.y * operand.y,
								this.x * operand.y + this.y * operand.x
							);
		return (res);
	}

	quadnorm() : number
	{
		return (this.x * this.x + this.y * this.y);
	}

	norm() : number
	{
		return (Math.sqrt(this.quadnorm()));
	}
}
*/

class Complex// extends Vec2//Alg2
{
	x : number; 
	y : number;

	constructor(x: number, y: number)
	{
	    this.x = x;
	    this.y = y;
	}

	add(operand: Complex): Complex
	{
  		let res = new Complex(this.x + operand.x, this.y + operand.y);
		return (res);
 	}

 	scale(scalar: number) : Complex
 	{
 		let res = new Complex(this.x * scalar, this.y * scalar);
 		return (res);
 	}

	//TODO karatsuba.
	mult(operand: Complex) : Complex
	{
		let res = new Complex( this.x * operand.x - this.y * operand.y,
								this.x * operand.y + this.y * operand.x
							);
		return (res);
	}

	quadnorm() : number
	{
		return (this.x * this.x + this.y * this.y);
	}

	norm() : number
	{
		return (Math.sqrt(this.quadnorm()));
	}
}


export type DwellFunction = (max_dwell : number, complex : Complex) => number;
//export type Sampling2DFunction = (width : number, height : number) => number[][];

function samplePointsOnPlane(width : number, height : number, span : [Complex, Complex])
{
	let x : number;
	let y : number;
	let step : Complex;
	let result : Complex[][];

	if (span[0].x > span[1].x)
	{
		x = span[0].x;
		span[0].x = span[1].x;
		span[1].x = x;
	}
	if (span[0].y > span[1].y)
	{
		y = span[0].y;
		span[0].y = span[1].y;
		span[1].y = y;
	}

	step = new Complex((span[1].x - span[0].x) / width,
					(span[1].y - span[0].y) / height);// as Alg2;
	result = [];
	for (y = 0; y < height; y++)
	{
		let pointline = [];
		let y_pos = span[0].y + y * step.y;
		for (x = 0; x < width; x++)
		{
			let x_pos = span[0].x + x * step.x;
			pointline.push(new Complex(x_pos, y_pos));//as Alg2);
		}
		result.push(pointline);
	}

	return (result);
}

//function fractalRender_MarianiSilver()

function fractalRender_Simple(width : number, height : number, points : Complex[][],
								max_dwell : number, getDwell : DwellFunction)
{
	let result : number[][];
	let dwell : number;

	result = [];
	for (let y = 0; y < height; y++)
	{
		let dwell_line = [];
		for (let x = 0; x < width; x++)
		{
			dwell = getDwell(max_dwell, points[y][x]);
			dwell_line.push(dwell);
		}
		result.push(dwell_line);
	}

//console.log(result);

	return (result);
}

function dwellArray_to_colorArray(width : number, height : number, dwell_arr : number[][], palette : Color[])
{
	let result : Color[][];
	let color : Color;
	let color_nb : number;

	color_nb = palette.length;

	result = [];
	for (let y = 0; y < height; y++)
	{
		let color_line = [];
		for (let x = 0; x < width; x++)
		{
			color = palette[dwell_arr[y][x] % color_nb];
			color_line.push(color);
		}
		result.push(color_line);
	}

	return (result);
}

function mandelbrotDwell(max_dwell : number, start: Complex)
{
	let dwell = 0;
	let z = new Complex(start.x, start.y);

	while (Math.abs(z.quadnorm()) < 4 && dwell < max_dwell)
	{
		z = z.mult(z);
		z = z.add(start);
		dwell++;
	}

	return (dwell);
}

//export type 

// function number[][] to Color[][]
// function draw Color[][] to canvas
/*
export interface EscapeTimeFractal
{
	max_dwell : number;
	size_x : number;
	size_y : number;
	span : [Vec2, Vec2];
	//iter_poly : Polynomial;

	iterate(vec2 : Vec2) : number;
//	sample(): ; //return a react component which is 
}

class Mandelbrot implements EscapeTimeFractal
{
	max_dwell : number;
	size_x : number;
	size_y : number;
	span : [Vec2, Vec2];

	constructor(max_dwell : number, size_x : number, size_y : number, span : [Vec2, Vec2])
	{
		this.max_dwell = max_dwell;
		this.size_x = size_x;
		this.size_y = size_y;
		this.span = span;
	}

	iterate(start: Vec2)
	{
		let dwell = 0;
		let vec2 = start;

		while (Math.abs(vec2.quadnorm()) < 2 && dwell < this.max_dwell)
		{
			vec2 = vec2.mult(vec2);
			vec2 = vec2.add(start);
			dwell++;
		}

		return (dwell);
	}
}
*/

export {samplePointsOnPlane, fractalRender_Simple, dwellArray_to_colorArray,
		mandelbrotDwell,
		/*Vec2,*/ Complex};

