var app = new Vue({
	el: '#app',
	data: {
		product:"Socks",
		image: "vmSoacks-green.png",
		Instock: true,
		details: ["80% cotton", "20% polyester", "gender-neutral"],
		variants: [ 
		{
			variantid:1234,
			variantcolor: "green",
			variantimage: "vmSoacks-green.png"

		},
		{
			variantid: 2425,
			variantcolor: "blue",
			variantimage: "blue.jpg"
		}
		],
		cart: 0
	},
		methods: {
			addToCart() {
				this.cart +=1
			},
			updateProduct: function(variantimage) {
				this.image = variantimage
			}
		}

	
})