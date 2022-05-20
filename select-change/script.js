const div = document.createElement('div');
const select = document.createElement('select');
// const option = document.createElement('option');
const ul = document.createElement('ul');
const li = document.createElement('li');

document.body.appendChild(div);
div.append(select);
div.append(ul);
ul.append(li);

div.style.cssText = `
		padding-top:50px;
		`;

select.style.cssText = `
			margin:auto;
			display: block;
			width: 500px;
			padding:8px;
			border-color:#ccc;
			border-radius:3px; `;
ul.style.cssText = `
			margin:auto;
			display: block;
			width: 500px;
			list-style-type:none;
			padding:10px;`;


// const arr = {
// 	name: 'Select a Option',
// 	name: 'Option One',
// 	name: 'Option Two'
// };

// function getOption() {
// 	for (let key in arr) {

// 		let options = arr[key];

// 		option.textContent = options;
// 		option.value = key;
// 		select.appendChild(option);
// 	}
// }
// getOption();

let arr = ['Select a Option', 'Option One', 'Option Two'];

for (let i = 0; i < 3; i++) {
	const option = document.createElement('option');
	option.value = i;
	option.innerHTML = arr[i];
	select.appendChild(option);

}


