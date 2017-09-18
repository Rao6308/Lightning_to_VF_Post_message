({
    init: function (cmp, event, helper) {
        cmp.set('v.mycolumns', [
            {label: 'Account name', fieldName: 'AccountName', type: 'text'},
            {label: 'Confidence', fieldName: 'confidence', type: 'percent'},
            {label: 'Amount', fieldName: 'amount', type: 'currency', cellAttributes: { currencyCode: 'EUR'}},
            {label: 'Email', fieldName: 'contact', type: 'email'},
            {label: 'Phone', fieldName: 'phone', type: 'phone'}
        ]);
        cmp.set('v.acc_val', [{
            id: 'a',
            AccountName: 'Cloudhub',
            confidence: 0.2,
            amount: 25000,
            contact: 'jrogers@cloudhub.com',
            phone: '2352235235'
        },
                              {
                                  id: 'b',
                                  AccountName: 'Quip',
                                  confidence: 0.78,
                                  amount: 740000,
                                  contact: 'quipy@quip.com',
                                  phone: '2352235235'
                              }]);
    },
    getSelectedName: function (component, event) {
        var selectedRows = event.getParam('selectedRows');   
        // Display that fieldName of the selected rows
        var selected_array = [];
        for (var i = 0; i < selectedRows.length; i++){
            selected_array.push(selectedRows[i]);
        }  
        component.set("v.selected_rows",selected_array);
    },
    sendToVF : function(component, event, helper) {
        var message = component.get("v.selected_rows");
        console.log(JSON.stringify(message));
        var vfOrigin = "https://" + component.get("v.vfHost");
        var vfWindow = component.find("vfFrame").getElement().contentWindow;
        vfWindow.postMessage(JSON.stringify(message), vfOrigin);
    },
})