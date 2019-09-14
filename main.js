var app = new Vue({
  el: "#app",
  data: {
    title: "Todo list:",
    items: ["Apple", "Banana", "Carrot"],
    nextItem: "Danish"
  },
  methods: {
    removeItem: function(item) {
      let index = this.items.indexOf(item);
      this.items.splice(index, 1);
    }
  }
});
