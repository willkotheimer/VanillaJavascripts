const posts = [
{title: 'Post One', body: 'This is post one'},
{title: 'Post Two', body: 'This is post two'}
];

function getPosts() {
	setTimeout(()=>{
		let output = '';
		posts.forEach((post,index)=>{
			output += `<li>${post.title} -- ${post.body}</li>`;
		});
		document.body.innerHTML = output;
	},1000);

}

function createPost(post,callback) {
	return new Promise((resolve,reject) => {
		setTimeout(()=>{
			posts.push(post);
			const error = false;
			if(!error) {
				resolve();
			} else {
				reject('Error: Something went wrong');
			}
		},2000);

	});
}

//Async Await
async function init() {
	await createPost({title: 'Post Three', body: 'This is post three'})
	getPosts();
}

init();


