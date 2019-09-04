
/*
** keeps value between 'min' & 'max'
*/
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

function init2DArray<T>(width : number, height : number, default_value : T) : T[][]
{
	let result : T[][];

	result = [];
	for (let y = 0; y < height; y++)
	{
		let line = [];
		for (let x = 0; x < width; x++)
		{
			line.push(default_value);
		}
		result.push(line);
	}
	return (result);
}
/*
//TODO add currying or this is useless
function fill2DArray(width : number, height : number, form : (x:number, y:number) => T) : T[][]
{
	let result : T[][];

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
*/

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



class QuadtreeNode<T>
{
    private top_l : QuadtreeNode<T> | null;
    private top_r : QuadtreeNode<T> | null;
    private bot_l : QuadtreeNode<T> | null;
    private bot_r : QuadtreeNode<T> | null;
    private data : T | null;

    constructor()//data : T)
    {
        this.top_l = null;
        this.top_r = null;
        this.bot_l = null;
        this.bot_r = null;
/*        if (data != null)
	        this.data = data;
	    else 
*/	    	this.data = null;
    }

    build_empty_children()
    {
    	this.top_l = new QuadtreeNode<T>();//null);
		this.top_r = new QuadtreeNode<T>();//null);
		this.bot_l = new QuadtreeNode<T>();//null);
		this.bot_r = new QuadtreeNode<T>();//null);	
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
		this.root = new QuadtreeNode();
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


export {
	bindValue,
	swap,
	init2DArray,
	QuadtreeNode, Quadtree
};