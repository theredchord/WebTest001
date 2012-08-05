var MasterViewModel = function () {
    var self, testVal;
    self = this;

    self.profitVal = ko.observable("0");
}

ko.applyBindings(new MasterViewModel());