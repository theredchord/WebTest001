var MasterViewModel = function () {
    var self = this;

    self.acceptedNumericValue = ko.observable(123);
    self.lastInputWasValid = ko.observable(true);

    self.attemptedValue = ko.computed({
        read: self.acceptedNumericValue,
        write: function (value) {
            if (isNaN(value)) {
                self.lastInputWasValid(false);
            } else {
                self.lastInputWasValid(true);
                self.acceptedNumericValue(value);
            }
        },
        owner: self
    });
}

ko.applyBindings(new MasterViewModel());