var MasterViewModel = function () {
    var self, testVal;
    self = this;

    self.theValue = ko.observable("");
    self.theArray = ko.observableArray([]);
    self.arrayAdd = function () {
        if ($("#theValInput").val().length > 0) {
            self.theArray.push({
                value: self.theValue()
            });
        } else {
            alert("You must input a value");
        }
    }
    self.arrayRemove = function () {
        self.theArray.pop();
    }
}

ko.applyBindings(new MasterViewModel());