var MasterViewModel = function () {
    var self;
    self = this;

    //Array-related items
    self.theValue = ko.observable("");
    self.theArray = ko.observableArray([]);
    self.addItem = function () {
        var isValidInput = $.trim(self.theValue()).length > 0;

        if (!isValidInput) {
            return alert("You must enter a value.");
        } else {
            return self.theArray.push({ value: self.theValue() });
        }
    }
    self.removeItem = function () {
        return self.theArray.pop();
    }

    //Checkbox-related items
    self.displayMessage = ko.observable(false);
}

ko.applyBindings(new MasterViewModel());