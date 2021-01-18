class Entity {
    constructor(x,y,size,attributes){
        this.x=x;
        this.y=y;
        this.size=size;
        this.attributes = { ...attributes };
    }

    draw(context){
        context.fillStyle = this.attributes.color || 'whte';
        context.testBaseline = 'hanging';
        context.font = '16px Helvetica';
        context.fillText(this.attributes.ascii, this.x*this.size + (this.attributes.offset ? this.attributes.offset.x : 0), this.y*this.size+ (this.attributes.offset ? this.attributes.offset.y : 13));
    }

    action(verb,world){
        console.log(`Verb: ${verb}`);
    }
}

export default Entity;