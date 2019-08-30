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



export default Color;