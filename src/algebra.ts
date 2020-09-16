/*
** 2 dimensional classic algebras
*/

enum Alg2Class
{
	NONE = 0,
	COMPLEX = 1,
	SPLIT_COMPLEX = 2,
	DUAL_NUMBER = 3
}

abstract class Alg2
{
	x : number; 
	y : number;

	constructor(x : number, y : number)
	{
		this.x = x;
		this.y = y;
	}

	add(operand: Alg2)
	{
		this.x += operand.x;
		this.y += operand.y;
	}

	scale(scalar : number)
	{
		this.x *= scalar;
		this.y *= scalar;
	}

	abstract quadnorm() : number;
	abstract mult(operand : Alg2) : void;
	abstract getClassEnum() : Alg2Class;
}

class Complex extends Alg2
{
	constructor(x : number, y : number)
	{
		super(x, y);
	}

	quadnorm() : number
	{
		return (this.x * this.x + this.y * this.y);
	}

	mult(operand : Complex) : void
	{
		let tmp_x = this.x * operand.x - this.y * operand.y;
		let tmp_y = this.x * operand.y + this.y * operand.x;
		this.x = tmp_x;
		this.y = tmp_y;
	}

	getClassEnum()
	{
		return (Alg2Class.COMPLEX);
	}
}

class SplitComplex extends Alg2
{
	constructor(x : number, y : number)
	{
		super(x, y);
	}

	quadnorm() : number
	{
		return (this.x * this.x - this.y * this.y);
	}

	mult(operand : SplitComplex) : void
	{
		let tmp_x = this.x * operand.x + this.y * operand.y;
		let tmp_y = this.x * operand.y + this.y * operand.x;
		this.x = tmp_x;
		this.y = tmp_y;
	}

	getClassEnum()
	{
		return (Alg2Class.SPLIT_COMPLEX);
	}
}

class DualNumber extends Alg2
{
	constructor(x : number, y : number)
	{
		super(x, y);
	}

	quadnorm() : number
	{
		return (this.x * this.x);
	}

	mult(operand : DualNumber) : void
	{
		let tmp_x = this.x * operand.x;
		let tmp_y = this.x * operand.y + this.y * operand.x;
		this.x = tmp_x;
		this.y = tmp_y;
	}

	getClassEnum()
	{
		return (Alg2Class.DUAL_NUMBER);
	}
}

/*
** Functions for interop
*/

function newAlg2(alg2_class : Alg2Class, x : number, y : number)
{
	switch (alg2_class)
	{
		case Alg2Class.COMPLEX : 		return new Complex(x, y);
		case Alg2Class.SPLIT_COMPLEX :	return new SplitComplex(x, y);
		case Alg2Class.DUAL_NUMBER :	return new DualNumber(x, y);
		default : console.log("Unexpected error in getAlg2_null"); return new Complex(x, y);
	}
}

function getAlg2_copy(alg2 : Alg2)
{
	switch (alg2.getClassEnum())
	{
		case Alg2Class.COMPLEX : 		return new Complex(alg2.x, alg2.y);
		case Alg2Class.SPLIT_COMPLEX :	return new SplitComplex(alg2.x, alg2.y);
		case Alg2Class.DUAL_NUMBER :	return new DualNumber(alg2.x, alg2.y);
		default : console.log("Unexpected error in getAlg2_null"); return new Complex(alg2.x, alg2.y);
	}
}

function getAlg2_add(alg2_class : Alg2Class)
{
	switch (alg2_class)
	{
		case Alg2Class.COMPLEX : 		return add_complex;
		case Alg2Class.SPLIT_COMPLEX :	return add_splitcomplex;
		case Alg2Class.DUAL_NUMBER :	return add_dualnumber;
		default : console.log("Unexpected error in getAlg2_add"); return add_complex;
	}
}

function getAlg2_mult(alg2_class : Alg2Class)
{
	switch (alg2_class)
	{
		case Alg2Class.COMPLEX : 		return mult_complex;
		case Alg2Class.SPLIT_COMPLEX :	return mult_splitcomplex;
		case Alg2Class.DUAL_NUMBER :	return mult_dualnumber;
		default : console.log("Unexpected error in getAlg2_mult"); return mult_complex;
	}
}

function getAlg2_null(alg2_class : Alg2Class)
{
	switch (alg2_class)
	{
		case Alg2Class.COMPLEX : 		return new Complex(0, 0);
		case Alg2Class.SPLIT_COMPLEX :	return new SplitComplex(0, 0);
		case Alg2Class.DUAL_NUMBER :	return new DualNumber(0, 0);
		default : console.log("Unexpected error in getAlg2_null"); return new Complex(0,0);
	}
}


type Alg2Op = (op1 : Alg2, op2 : Alg2) => Alg2;
type ComplexOp = (op1 : Complex, op2 : Complex) => Complex;
type SplitComplexOp = (op1 : SplitComplex, op2 : SplitComplex) => SplitComplex;
type DualNumberOp = (op1 : DualNumber, op2 : DualNumber) => DualNumber;

function add_complex(op1 : Complex, op2 : Complex) : Complex
{
	return (new Complex(op1.x + op2.x, op1.y + op2.y));
}
function mult_complex(op1 : Complex, op2 : Complex) : Complex
{
	return (new Complex(op1.x * op2.x - op1.y * op2.y,
						op1.x * op2.y + op1.y * op2.x));
}

function add_splitcomplex(op1 : SplitComplex, op2 : SplitComplex) : SplitComplex
{
	return (new SplitComplex(op1.x + op2.x, op1.y + op2.y));
}
function mult_splitcomplex(op1 : SplitComplex, op2 : SplitComplex) : SplitComplex
{
	return (new SplitComplex(op1.x * op2.x + op1.y * op2.y,
							op1.x * op2.y + op1.y * op2.x));
}

function add_dualnumber(op1 : DualNumber, op2 : DualNumber) : DualNumber
{
	return (new DualNumber(op1.x + op2.x, op1.y + op2.y));
}
function mult_dualnumber(op1 : DualNumber, op2 : DualNumber) : DualNumber
{
	return (new DualNumber(op1.x * op2.x,
							op1.x * op2.y + op1.y * op2.x));
}


/*
** Polynomials over Alg2 variables, ordered with constant term starting at 0, and each index
** corresponding to the monomial of the same degree.
*/

abstract class Poly2
{
	coef : Alg2[];
	elem_add : Alg2Op;
	elem_mult : Alg2Op;

	constructor(coef : Alg2[], elem_add : Alg2Op, elem_mult : Alg2Op)
	{
		this.coef = coef;
		this.elem_add = elem_add;
		this.elem_mult = elem_mult;
	}

	getDegree()
	{
		return (this.coef.length - 1);
	}

	add(operand : Poly2) : void
	{
		let min_deg = Math.min(this.getDegree(), operand.getDegree());
		let max_deg = Math.max(this.getDegree(), operand.getDegree());
		let i = 0;

		while (i <= min_deg)
		{
			this.coef[i].add(operand.coef[i]);
			i++;
		}

		if (this.getDegree() == min_deg)
		{
			while (i <= max_deg)
			{
				this.coef.push(operand.coef[i]);
				i++;
			}
		}
	}

	mult(operand : Poly2) : void
	{
		let tmp = [];
		let degree = this.getDegree() * operand.getDegree();

		for (let i = 0; i <= degree; i++)
		{
			let cur_monomial = getAlg2_null(this.getPoly_Alg2Class());
			for (let j = 0; j <= i; j++)
			{
				cur_monomial.add(this.elem_mult(this.coef[i - j], operand.coef[j]));
			}
			tmp.push(cur_monomial);
		}
		this.coef = tmp;
	}

	eval(value : Alg2) : Alg2
	{
		let i = this.getDegree();
		let result = this.coef[i];

		while(i >= 0)
		{
			result.mult(value);
			result.add(this.coef[i]);
			i--;
		}
		return (result);
	}

	abstract getPoly_Alg2Class() : Alg2Class;
}


class ComplexPoly extends Poly2
{
	constructor(coef : Complex[])
	{
		super(coef, add_complex, mult_complex);
	}

	getPoly_Alg2Class()
	{
		return (Alg2Class.COMPLEX);
	}
}

class SplitComplexPoly extends Poly2
{
	constructor(coef : SplitComplex[])
	{
		super(coef, add_splitcomplex, mult_splitcomplex);
	}

	getPoly_Alg2Class()
	{
		return (Alg2Class.SPLIT_COMPLEX);
	}
}

class DualNumberPoly extends Poly2
{
	constructor(coef : DualNumber[])
	{
		super(coef, add_dualnumber, mult_dualnumber);
	}

	getPoly_Alg2Class()
	{
		return (Alg2Class.DUAL_NUMBER);
	}
}


export {Alg2, Complex, SplitComplex, DualNumber, Alg2Class,
		Poly2, ComplexPoly, SplitComplexPoly, DualNumberPoly,
		newAlg2, getAlg2_copy};