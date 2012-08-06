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

    //Name demonstration
    self.firstName = ko.observable("");
    self.lastName = ko.observable("");
    self.fullName = ko.computed(function () {
        return self.firstName() + " " + self.lastName();
    });
}

ko.applyBindings(new MasterViewModel());