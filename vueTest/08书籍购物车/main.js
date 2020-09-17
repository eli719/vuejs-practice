const app = new Vue({
				el:'#app',
				data: {
					books:[
						{
							id:1,
							name:"算法",
							date:'2020-04',
							price:50.00,
							count:1,
						},
						{
							id:2,
							name:"飒飒",
							date:'2020-04',
							price:12.00,
							count:1,
						},
						{
							id:3,
							name:"请问",
							date:'2020-04',
							price:24.00,
							count:1,
						},
						{
							id:4,
							name:"主线程",
							date:'2020-04',
							price:51.00,
							count:1,
						}
					]
				},
				methods:{
					increment(index){
						this.books[index].count++;
						console.log('in',index)
					},
					decrement(index){
						this.books[index].count--;
						console.log('de',index)
					},
					remove(index){
						this.books.splice(index,1)
					}
				},
				computed:{
					totalPrice(){
						let totalPrice = 0;
						// for (let i = 0; i < this.books.length; i++) {
						// 	totalPrice+=this.books[i].price*this.books[i].count;
						// }
						
						// for (let i in books) {
						// 	const book = this.books[i];
						// 	totalPrice+=book.price*book.count;
						// }
						
						// for (let item of this.books) {
						// 	totalPrice+=item.price*item.count;
						// }
						
						// return totalPrice;
						return this.books.reduce((pre,book)=>pre+book.price*book.count,0);
					}
				},
				filters:{
					showPrice(price){
						return "￥"+price.toFixed(2);
					}
				}
				
			})