// Don't modify
function Cart () {}
Cart.prototype.add = function (item) {
    if (!this.goods) {
        this.goods = [];
    }
    this.goods.push(item);
};

var cartParent = new Cart();

function Item(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
};

function UserCart(){
    this.__proto__ = cartParent;

    this.amount = function () {
        var total = 0;
        for(var i = 0; i < this.goods.length; i++)
            total += this.goods[i].price * this.goods[i].count;
        return total;
    }

    this.updateQnt = function(id, count){
        for(var i = 0; i < this.goods.length; i++)
            if (this.goods[i].id == id)
                this.goods[i].count = count;
    }

    this.remove = function (id){
        for(var i = 0; i < this.goods.length; i++)
            if (this.goods[i].id == id)
                this.goods.splice(i, 1);
    }

    this.clear = function(){
        this.goods = [];
    }

    this.getAll = function(){
        return this.goods;
    }
};
// Test
const cart = new UserCart();
cart.add(new Item(1, 'Сhair', 2000));
cart.add(new Item(2, 'Desk', 3000));
cart.add(new Item(3, 'Sofa', 4000));
let amount = cart.amount();
if (amount === 9000) {
    console.log('Add done');
} else {
    console.error('Add error');
}
cart.updateQnt(3, 10);
cart.remove(2);
amount = cart.amount();
if (amount === 42000) {
    console.log('Modify done');
} else {
    console.error('Modify error');
}
cart.clear();
if (cart.getAll().length === 0) {
    console.log('Clear done');
} else {
    console.error('Clear error');
}