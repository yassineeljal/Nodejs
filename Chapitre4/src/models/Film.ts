class Film {

    private title: string;
    private yearOfRelease: Date;
    private resume: string;

    public constructor(title: string, yearOfRelease: Date, resume: string) {
        this.title = title;
        this.yearOfRelease = yearOfRelease;
        this.resume = resume;
    }

    public getTitle(): string {
        return this.title
    }

    public getyearOfRelease(): Date {
        return this.yearOfRelease
    }

    public getresume(): string {
        return this.resume
    }

    
    
}