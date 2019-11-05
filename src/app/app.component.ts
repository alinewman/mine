import { Component, ChangeDetectionStrategy, ChangeDetectorRef, Input, OnInit } from '@angular/core';
import { Car } from './domain/car';
import { Payment } from './domain/payment';
import { PaymentService } from './services/paymentservice';
import { Stuff } from './domain/stuff';
import { isNgTemplate } from '@angular/compiler';


// export class PrimePayment implements Payment {

//     constructor( public id, public name, public globalRights) { }
// }

export type RightsKey = 'noRights' | 'viewOnly' | 'fullRights' | 'grantRights' | 'customRights';

export type Category = 'Payments' | 'Wire Services' | 'Domestic Wire Services';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [],
    //encapsulation: ViewEncapsulation.Native // 
})
export class AppComponent implements OnInit {

    displayDialog: boolean;

    //payment: Payment = new PrimePayment();
    //payments: Payment[];
    cols: any;
    payments: Stuff[];

    selectedPayment: Payment;

    newPayment: boolean;

    //payments: Payment[];

    grantRights = false;
    expandedRows: {} = {};

    title: string;

    dataFromChild: any;

    constructor() { }

    ngOnInit() {

        // this.paymentService.getPayments().then(
        //     payments => this.payments = payments);


        this.payments = [
            new Stuff({
                "id": "payments",
                "name": "Payments",
                "globalRights": "noRights",
                "treeId": "paymentId",
                "grantRight": false,
                "checkable": true,
                "registers":
                    [
                        {
                            "name": "Manage Security Levels for Payments",
                            "isOpen": false

                        }
                    ],
                "rights": [
                    {
                        "id": "payments_auditlogview",
                        "name": "Audit Log - View",
                        "checked": false,
                        "checkable": true,
                        "registers": [
                            {

                            }
                        ],
                        get childObj() {
                            var self = this;
                            return {
                                method1: function () {
                                    return self.name;
                                }
                            }
                        }
                    },
                    {
                        "id": "payments_approvalgroupview",
                        "name": "Approval Group - View",
                        "registers": [

                        ],
                        "checked": false,
                        "checkable": true,
                        get childObj() {
                            var self = this;
                            return {
                                method1: function () {
                                    return self.name;
                                }
                            }

                        },
                        "rights": [
                            {
                                "id": "payments_approvalgroupview_create",
                                "name": "Create",
                                "checked": false,
                                "checkable": true,
                                "registers": [

                                ],

                            },
                            {
                                "id": "payments_approvalgroupview_update",
                                "name": "Update",
                                "checked": false,
                                "checkable": true,
                                "registers": [

                                ]
                            },
                            {
                                "id": "payments_approvalgroupview_delete",
                                "name": "Delete",
                                "checked": false,
                                "checkable": true,
                                "registers": [

                                ]

                            },
                            {
                                "id": "payments_approvalgroupview_approve",
                                "name": "Approve",
                                "checked": false,
                                "checkable": true,
                                "registers": [

                                ]
                            }
                        ]
                    },
                    {
                        "id": "payments_approvalprofileview",
                        "name": "Approval Profile - View",
                        "checked": false,
                        "checkable": true,
                        get childObj() {
                            var self = this;
                            return {
                                method1: function () {
                                    return self.name;
                                }
                            }
                        },
                        "rights": [
                            {
                                "id": "payments_approvalprofileview_create",
                                "name": "Create",
                                "checked": false,
                                "checkable": true,
                                "registers": [

                                ]
                            },
                            {
                                "id": "payments_approvalprofileview_update",
                                "name": "Update",
                                "checked": false,
                                "checkable": true,
                                "registers": [

                                ]
                            },
                            {
                                "id": "payments_approvalprofileview_delete",
                                "name": "Delete",
                                "checked": false,
                                "checkable": true,
                                "registers": [

                                ]
                            },
                            {
                                "id": "payments_approvalprofileview_approve",
                                "name": "Approve",
                                "checked": false,
                                "checkable": true,
                            }
                        ]
                    },
                    {
                        "id": "payments_importfiles_view",
                        "name": "Import Files - View",
                        "checked": false,
                        "checkable": true,
                        "registers": [

                        ],
                        get childObj() {
                            var self = this;
                            return {
                                method1: function () {
                                    return self.name;
                                }
                            }
                        }
                    },
                    {
                        "id": "payments_importfilesmanageprofile",
                        "name": "Import Files - Manage Profile",
                        "checked": false,
                        "checkable": true,
                        get childObj() {
                            var self = this;
                            return {
                                method1: function () {
                                    return self.name;
                                }
                            }
                        },
                        "rights": [
                            {
                                "id": "payments_importfilesmanageprofile_approve",
                                "name": "Approve",
                                "checked": false,
                                "checkable": true,
                            }
                        ]
                    },
                    {
                        "id": "payments_managesecurereceiver",
                        "name": "Manage Secure Receiver",
                        "checked": false,
                        "checkable": true,
                        "registers": [

                        ],
                        get childObj() {
                            var self = this;
                            return {
                                method1: function () {
                                    return self.name;
                                }
                            }
                        }
                    },
                    {
                        "id": "payments_unmanagedreceivers",
                        "name": "Unmanaged Receivers",
                        "checked": false,
                        "checkable": true,
                        get childObj() {
                            var self = this;
                            return {
                                method1: function () {
                                    return self.name;
                                }
                            }
                        },
                        "rights": [
                            {
                                "id": "payments_unmanagedreceivers_createupdate",
                                "name": "Create/Update",
                                "checked": false,
                                "checkable": true,
                                "registers": [

                                ]
                            },
                            {
                                "id": "payments_unmanagedreceivers_managesecurereceiver",
                                "name": "Manage Secure Receiver",
                                "checked": false,
                                "checkable": true
                            }
                        ]
                    }
                ]
            }),
            new Stuff({
                "id": "wire",
                "name": "Wire Services",
                "globalRights": "noRights",
                "treeId": "wireId",
                "grantRight": false,
                "checkable": true,
                "registers": [
                    { "name": "Manage Attributes for Wire Services", "isOpen": false },
                    { "name": "Manage Domestic Bank Accounts - Commercial for Wire Services", "isOpen": false },
                    { "name": "Manage Security Levels for Wire Services", "isOpen": false },
                    { "name": "Manage Domestic Bank Accounts - Commercial (Savings) for Wire Services", "isOpen": false },
                    { "name": "Manage Global Treasury Management Accounts for Wire Services", "isOpen": false }
                ],
                "rights": [
                    {
                        "id": "wire_wiremanagedreceiversview",
                        "name": "Wire Managed Receivers - View",
                        "checked": false,
                        "checkable": true,
                        get childObj() {
                            var self = this;
                            return {
                                method1: function () {
                                    return self.name;
                                }
                            }
                        },
                        "rights": [
                            {
                                "id": "wire_wiremanagedreceiversview_createupdate",
                                "name": "Create/Update",
                                "checked": false,
                                "checkable": true
                            },
                            {
                                "id": "wire_wiremanagedreceiversview_delete",
                                "name": "Delete",
                                "checked": false,
                                "checkable": true
                            },
                            {
                                "id": "payments_approvalgroupview_approve",
                                "name": "Approve",
                                "checked": false,
                                "checkable": true
                            }
                        ]
                    }
                ]
            }),
            new Stuff({
                "id": "domesticwire",
                "name": "Domestic Wire Services",
                "globalRights": "noRights",
                "treeId": "domesticId",
                "grantRight": false,
                "checkable": true,
                "registers": [
                    { "name": "Manage Domestic Bank Accounts - Commercial for Domestic Wire", "isOpen": false },
                    { "name": "Manage Security Levels for Domestic Wire", "isOpen": false },
                    { "name": "Manage Domestic Bank Accounts - Commercial (Savings) for Domestic Wire", "isOpen": false }
                ],
                "rights": [
                    {
                        "id": "domesticwire_viewpaymentdetails",
                        "name": "View Payment Details",
                        "checked": false,
                        "checkable": true,
                        get childObj() {
                            var self = this;
                            return {
                                method1: function () {
                                    return self.name;
                                }
                            }
                        },
                        "rights": [
                            {
                                "id": "domesticwire_viewpaymentdetails_createupdatepayment",
                                "name": "Create/Update Payment",
                                "checked": false,
                                "checkable": true,
                                get childObj() {
                                    var self = this;
                                    return {
                                        method1: function () {

                                            return self.name;
                                        }
                                    }
                                },
                                "registers": [
                                    { "name": "Manage Attributes for Create/Update Payment", "isOpen": false }
                                ],
                                "rights": [
                                    {
                                        "id": "createupdatepayment_paymentfromtemplate",
                                        "name": "Create/Update Payment from Template",
                                        "checked": false,
                                        "checkable": true
                                    },
                                    {
                                        "id": "createupdatepayment_freeformtemplate",
                                        "name": "Create/Update Freeform Payment",
                                        "checked": false,
                                        "checkable": true
                                    }
                                ]
                            },
                            {
                                "id": "domesticwire_viewpaymentdetails_importpayment",
                                "name": "Import Payment",
                                "checked": false,
                                "checkable": true
                            },
                            {
                                "id": "domesticwire_viewpaymentdetails_approvepayment",
                                "name": "Approve Payment",
                                "checked": false,
                                "checkable": true,
                                "registers": [
                                    { "name": "Manage Attributes for Approve Payment", "isOpen": false }
                                ]
                            },
                            {
                                "id": "domesticwire_viewpaymentdetails_cancelpayment",
                                "name": "Cancel Payment",
                                "checked": false,
                                "checkable": true
                            }
                        ]
                    },
                    {
                        "id": "domesticwire_viewtemplatedetails",
                        "name": "View Template Details",
                        "checked": false,
                        "checkable": true,
                        get childObj() {
                            var self = this;
                            return {
                                method1: function () {
                                    return self.name;
                                }
                            }
                        },
                        "rights": [
                            {
                                "id": "domesticwire_viewtemplatedetails_createtemplate",
                                "name": "Create Template",
                                "checked": false,
                                "checkable": true
                            },
                            {
                                "id": "domesticwire_viewtemplatedetails_edittemplate",
                                "name": "Edit Template",
                                "checked": false,
                                "checkable": true,
                                get childObj() {
                                    var self = this;
                                    return {
                                        method1: function () {
                                            return self.name;
                                        }
                                    }
                                },
                                "rights": [
                                    {
                                        "id": "edittemplate_edittemplatelimit",
                                        "name": "Edit Template Limit",
                                        "checked": false,
                                        "checkable": true
                                    }
                                ]
                            },
                            {
                                "id": "domesticwire_viewtemplatedetails_importtemplate",
                                "name": "Import Template",
                                "checked": false,
                                "checkable": true
                            },
                            {
                                "id": "domesticwire_viewtemplatedetails_approvetemplate",
                                "name": "Approve Template",
                                "checked": false,
                                "checkable": true
                            },
                            {
                                "id": "domesticwire_viewtemplatedetails_deletetemplate",
                                "name": "Delete Template",
                                "checked": false,
                                "checkable": true
                            }
                        ]
                    },
                    {
                        "id": "domesticwire_viewreport",
                        "name": "View Report",
                        "checked": false,
                        "checkable": true,
                        get childObj() {
                            var self = this;
                            return {
                                method1: function () {

                                    return self.name;
                                }
                            }
                        }
                    }
                ]
            })
        ];




    }

    setRights(value: RightsKey) {
        const allRadiosOnPage = this.payments;
        const newArray = allRadiosOnPage.map(item => {
            item.globalRights = value;
            let myRights = item.rights;
            const sweeterArray = myRights.map(item => {
                item.checked = true;
                // this.search3(items)
            })
            return item;
        });
    }

    grantRightsSelect = (event) => {
        event.preventDefault();
        const allRadiosOnPage = this.payments;
        const newArray = allRadiosOnPage.map(item => {
            item.grantRight = !item.grantRight;
            return item;
        });
    }

    onRowExpand(value: Category, event) {

        event.preventDefault()
        const rows = this.payments;
        const newArray = rows.map(item => {
            // debugger;
            if (item.name == value) {
                console.log(value)
                item.checkable = !item.checkable
            }
            return item;
        });
    }

    setRights2(value: RightsKey) {
        const allRadiosOnPage = this.payments;
        console.log(allRadiosOnPage)
        const newArray = allRadiosOnPage.map(item => {
            item.globalRights = value;
            let myRights = item.rights;
            const sweeterArray = myRights.map(item => {
                item.checked = false;
                this.search2(item)
            })
            return item;
        });
    }


    search2 = (node) => {
        if (node != null) {
            // console.log("found", node);
            node.checked = false;
            if (node.rights != null) {
                for (let i = 0; i < node.rights.length; i++) {
                    const found = this.search2(node.rights[i]);
                    node.rights.checked = false;
                }
            }
        }
    };

    setRights3(value: RightsKey) {
        const allRadiosOnPage = this.payments;
        const newArray = allRadiosOnPage.map(item => {
            item.globalRights = value;
            console.log(item.globalRights)
            let myRights = item.rights;
            // item.checked = false;
            // myRights = value
            console.log(myRights)
            const sweeterArray = myRights.map(item => {
                console.log(item)
                item.globalRights = value;
                item.checked = false;
                this.search3(item)
            })
            return item;
        });
    }


    search3 = (node) => {
        if (node != null) {
            console.log("found", node)
            node.checked = true;
            if (node.rights != null) {
                for (let i = 0; i < node.rights.length; i++) {
                    console.log("node.rights", node.rights);
                    let ali = node.rights;
                    const sweeterArray = ali.map(item => {
                        console.log("sweet", item)
                        item.checked = false;
                    })
                }
            }
        }
    }

    setRights4() {
        const allRadiosOnPage = this.payments;
        const newArray = allRadiosOnPage.map(item => {
            item.globalRights = "customRights";
            let myRights = item.rights;
            return item;
        });
    }


    eventFromChild(data) {
        this.dataFromChild = data;
        this.setRights4();
    }

}
