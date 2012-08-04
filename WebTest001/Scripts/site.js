var MasterViewModel = function () {
    var self = this;
    self.price = ko.observable(25.99);

    self.formattedPrice = ko.computed({
        read: function () {
            return "$" + self.price().toFixed(2);
        },
        write: function (value) {
            value = parseFloat(value.replace(/[^\.\d]/g, ""));
            self.price(isNaN(value) ? 0 : value);
        },
        owner: self
    });
}

ko.applyBindings(new MasterViewModel());