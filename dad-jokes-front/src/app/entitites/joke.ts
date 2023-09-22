import { Author } from "./author";

export class Joke{
    public _id:string;
    public setup:string;
    public punchLine:string;
    public author:Author

    constructor(_id:string, setup:string, punchLine:string, author:Author) {
        this._id = _id;
        this.setup = setup;
        this.punchLine = punchLine;
        this.author = author;
        
    }
}