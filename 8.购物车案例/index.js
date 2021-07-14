const bookss = new Vue({
    el: ".bookss",
    data: {
        books: [
            {
                number: 1,
                name: "《算法导论》",
                date: 2006 - 9,
                price: 81,
                num2: 1,
            },
            {
                number: 2,
                name: "《unix》",
                date: 2006 - 9,
                price: 105,
                num2: 1,
            },
            {
                number: 3,
                name: "《编程》",
                date: 2006 - 9,
                price: 45,
                num2: 1,
            },
            {
                number: 4,
                name: "《代码》",
                date: 2006 - 9,
                price: 83,
                num2: 1,
            },
        ],
    },
    computed: {
        allPrice() {
            return this.books.reduce((pre, book) => {
                return pre + book.price * book.num2;
            }, 0);
        },
    },
    methods: {
        btnsub(index) {
            this.books[index].num2--;
        },
        btnadd(index) {
            this.books[index].num2++;
        },
        remove(index) {
            this.books.splice(index, 1);
        },
    },
    filters: {
        showprice(price) {
            return "¥" + price.toFixed(2);
        },
    },
});
