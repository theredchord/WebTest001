var MasterViewModel = function () {
    var self, function1, function2;

    self = this;
    self.theValue = ko.observable("");
    self.function1 = function () {
        return alert("button1 " + self.theValue());
    }
    self.function2 = function () {
        return alert("button2 " + self.theValue());
    }
}

ko.applyBindings(new MasterViewModel());