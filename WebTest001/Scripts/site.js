var MasterViewModel = function () {
    var self;

    self = this;
    self.theArray = ko.observableArray([
        { value: "hello" },
        { value: "hello2" },
        { value: "hello3" },
        { value: "hello4" }
    ]);
    self.function1 = function () {
        $.each(self.theArray(), function (index, value) {
            alert(value.value);
        }
        );
    }
    self.function2 = function () {
        return alert("button2 " + self.theValue());
    }
}

ko.applyBindings(new MasterViewModel());