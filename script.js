window.promises = [];

const prom1 = new Promise((resolve , reject)=>{
	setTimeOut(()=>{
		resolve("hurray");
	},3000);
});
const prom2 = new Promise((resolve , reject)=>{
	setTimeOut(()=>{
		resolve("hurraaaaa");
	},4000);
});
const prom3 = new Promise((resolve , reject)=>{
	setTimeOut(()=>{
		resolve("hurrayiiii");
	},3500);
});
const prom4 = new Promise((resolve , reject)=>{
    setTimeout(()=>{
        resolve("I am first");
    },1000)
	
});
const prom5 = new Promise((resolve , reject)=>{
	setTimeOut(()=>{
		resolve("hurrayhoooo");
	},4200);
});
promises.push(prom1,prom2,prom3,prom4,prom5);
Promise.any(promises).then((val)=>{
	document.getElementById("output").innerHTML = val;
})

// Do not change the code above this
// add your promises to the array `promises`
