const data = '{"results":[{"gender":"male","name":{"title":"Mr","first":"Tracy","last":"Hudson"},"location":{"street":{"number":8210,"name":"North Road"},"city":"Salisbury","state":"Devon","country":"United Kingdom","postcode":"HW27 6QZ","coordinates":{"latitude":"-7.9619","longitude":"-69.0423"},"timezone":{"offset":"-3:30","description":"Newfoundland"}},"email":"tracy.hudson@example.com","login":{"uuid":"e75d8b4a-c499-4085-8131-7f67d7d851c0","username":"brownbutterfly509","password":"allan","salt":"UsLJaIwr","md5":"3feab70227b485c9d50801c689136a2a","sha1":"2fdb995bec6495ff209340103fd8b20636dd400b","sha256":"013b50692bc7f7c944f25348bbac7f2eee0a676a0b528461c24043dbb53255da"},"dob":{"date":"1999-03-26T23:27:08.911Z","age":23},"registered":{"date":"2009-12-25T07:39:28.527Z","age":13},"phone":"016973 39093","cell":"07294 533806","id":{"name":"NINO","value":"ER 73 27 79 M"},"picture":{"large":"https://randomuser.me/api/portraits/men/46.jpg","medium":"https://randomuser.me/api/portraits/med/men/46.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/46.jpg"},"nat":"GB"}],"info":{"seed":"882e4390cf6f2533","results":1,"page":1,"version":"1.4"}}';

const obj = JSON.parse(data);

console.log(data)

window.onload = function() {
	document.getElementById("full_name").innerHTML = obj.results[0].name.title +' '+ obj.results[0].name.first +' '+ obj.results[0].name.last;
	document.getElementById("phone").innerHTML ='Phone: '+ obj.results[0].phone;
	document.getElementById("mail").innerHTML = 'e-mail: '+ '<a href="mailto:tracy.hudson@example.com">' + obj.results[0].email + '</a>';
	document.getElementById("home").innerHTML = obj.results[0].location.city +' - '+obj.results[0].location.country;
};
