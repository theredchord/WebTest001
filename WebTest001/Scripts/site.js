var MasterViewModel = function () {
    var self, testVal;
    self = this;

    self.theValue = ko.observable("");
    self.theArray = ko.observableArray([]);
    self.arrayAdd = function () {
        self.theArray.push({
            value: self.theValue()
        });
    }
}

ko.applyBindings(new MasterViewModel());