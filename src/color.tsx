
export class Color
{
	a:number;
	r:number;
	g:number;
	b:number;

	private sanitizeChannel(c:number)
	{
		c = Math.floor(c);
		if (c < 0)
			c = 0;
		if (c > 255)
			c = 255;
		return (c);
	}

	constructor(r:number, g:number, b:number, a?:number)
	{
		this.a = a && this.sanitizeChannel(a) || 0;
		this.r = this.sanitizeChannel(r);
		this.g = this.sanitizeChannel(g);
		this.b = this.sanitizeChannel(b);
	}

	private toByteString(c:number)
	{
		if (c < 16)
			return "0" + c.toString(16);
		return c.toString(16);
	}

	getCSS()
	{
		return ("#" + (this.a != 0 ? this.toByteString(this.a) : "") +
			this.toByteString(this.r) +
			this.toByteString(this.g) +
			this.toByteString(this.b));
	}
}



export function makeGrayscalePalette(max_dwell:number)
{
	let result:Color[];

	result = [];
	for (let i = 0; i < max_dwell; i++)
	{
		let lerp_val = (i + 1) * 255 / max_dwell;
		result.push(new Color(lerp_val, lerp_val, lerp_val));
	}
	result.push(new Color(0, 0, 0));

	return (result);
}
