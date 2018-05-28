import $ from 'jquery';

class TypeWrite {
	constructor(){
		this.counter = 0;
		this.txt = "The typed text.";
		this.el = $(".large-hero__subtitle");
		this.typeWriter();
	}

	typeWriter() {
		if (this.counter < this.txt.length){
			alert (this.el.html);
			this.el.html = this.el.html + this.txt.charAt(this.counter);
			setTimeout (this.typeWriter.bind(this), 50);
			this.counter++;
		}
		
	}
}
export default TypeWrite;