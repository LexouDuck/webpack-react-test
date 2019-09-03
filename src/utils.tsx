function bindValue(value : number, min : number, max : number)
{
    if (max < min)
    {
        console.log("bindValue: incoherent min and max: undefined behavior");
    }

    if (value < min)
        return min;
    if (value > max)
        return max;
    return value;
}

function init2DArray(width : number, height : number, default_value : T) : T[][]
{
	result : T[][];

	result = [];
	for (let y = 0; y < height; y++)
	{
		let line = [];
		for (let x = 0; x < width; x++)
		{
			line.push(default_value);
		}
		result.push(color_line);
	}
	return (result);
}

function fill2DArray(width : number, height : number, form : (x:number, y:number) => T) : T[][]
{
	result : T[][];

	result = [];
	for (let y = 0; y < height; y++)
	{
		let line = [];
		for (let x = 0; x < width; x++)
		{
			line.push(form(x, y));
		}
		result.push(color_line);
	}
	return (result);
}

/*
** Needs object argument to pass by reference
*/
function swap<T>(pair: {val1 : T, val2 : T})
{
	let tmp : T;

	tmp = pair.val1;
	pair.val1 = pair.val2;
	pair.val2 = tmp;
}



class Color
{
//    a : number;
    r : number;
    g : number;
    b : number;

    private bindChannel(c : number)
    {
        return Math.floor(bindValue(c, 0, 255));
    }

    private toByteString(c : number)
    {
        if (c < 16)
            return "0" + c.toString(16);
        return c.toString(16);
    }

    constructor(/*a : number,*/ r : number, g : number, b : number)
    {
        //this.a = this.bindChannel(a); //TODO useless for now
        this.r = this.bindChannel(r);
        this.g = this.bindChannel(g);
        this.b = this.bindChannel(b);
    }

    getCSS()
    {
        return ("#" + this.toByteString(this.r) + this.toByteString(this.g) + this.toByteString(this.b));
    }
}



class QuadtreeNode<T>
{
    private top_l : QuadtreeNode<T> | null;
    private top_r : QuadtreeNode<T> | null;
    private bot_l : QuadtreeNode<T> | null;
    private bot_r : QuadtreeNode<T> | null;
    private data : T | null;

    constructor(data : T | null)
    {
        this.top_l = null;
        this.top_r = null;
        this.bot_l = null;
        this.bot_r = null;
        this.data = data;
    }

    build_empty_children()
    {
    	this.top_l = new QuadtreeNode<T>(null);
		this.top_r = new QuadtreeNode<T>(null);
		this.bot_l = new QuadtreeNode<T>(null);
		this.bot_r = new QuadtreeNode<T>(null);	
    }
    has_children()
    {
    	return (
    		this.has_top_l() ||
    		this.has_top_r() ||
    		this.has_bot_l() ||
    		this.has_bot_r()	);
    }

    set_top_l(node : QuadtreeNode<T>)
    {
    	this.top_l = node;
    }
    get_top_l()
    {
    	return (this.top_l);
    }
	has_top_l()
	{
		return (this.top_l != null);
	}

    set_top_r(node : QuadtreeNode<T>)
    {
    	this.top_r = node;
    }
    get_top_r()
    {
    	return (this.top_r);
    }
    has_top_r()
	{
		return (this.top_r != null);
	}

    set_bot_l(node : QuadtreeNode<T>)
    {
    	this.bot_l = node;
    }
    get_bot_l()
    {
    	return (this.bot_l);
    }
    has_bot_l()
	{
		return (this.bot_l != null);
	}

    set_bot_r(node : QuadtreeNode<T>)
    {
    	this.bot_r = node;
    }
    get_bot_r()
    {
    	return (this.bot_r);
    }
    has_bot_r()
	{
		return (this.bot_r != null);
	}

    set_data(data : T)
    {
    	this.data = data;
    }
    get_data()
    {
    	return (this.data);
    }
    has_data()
	{
		return (this.data != null);
	}
}

class Quadtree<T>
{
	private root : QuadtreeNode<T>;

	constructor()
	{
		this.root = new QuadtreeNode(null);
	}
	get_root()
	{
		return (this.root);
	}
/*
	parse_tree( function(data : T) : T)
	{

	}
*/
}


export {Color, QuadtreeNode, Quadtree};