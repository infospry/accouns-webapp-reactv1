/* globals hopscotch: false */

/* ============ */
/* EXAMPLE TOUR */
/* ============ */


var tour = {
    id: 'planner-tour',
    steps: [           
        {
            target: 'btnAddPlannerName1',
            title: 'Add a new planner',
            content: 'Add a new planner as per the location.',
            placement: 'bottom',
            arrowOffset: 10
        },
        {
            target: 'add_role_planner',//document.querySelectorAll('#btnAddPlannerName')[1],
            title: 'Add / Update roles',
            content: 'Add / Update roles you need to manage on the planner.',
            placement: 'right',
            yOffset: -20
        },
        {
            target: 'btnAddPlannerName',
            title: 'Select / Create planner',
            content: 'Select or Create new planner as per the location and manage rota  separately.',
            placement: 'bottom',
            arrowOffset: 10
        },
        {
            target: 'ball',
            title: 'Create / Activate shift timings',
            content: 'Create or Activate new shift timing from the list',
            placement: 'left',
            arrowOffset: 10
        },
        {
            target: 'btndropshiftrota',          
            title: 'Drop shifts to delete',
            content: 'Delete the shift by dropping on the delete area.',
              placement: 'bottom'
        },        
    ],
  
  showPrevButton: true,
  scrollTopMargin: 100
}
   

var tour1 = {
    id: 'rota-tour',
    steps: [
        {
            target: 'btnAddActivateRoles',
            title: 'Add / Update roles',
            content: 'Add / Update roles you need to manage on the planner.',
            placement: 'bottom',
            arrowOffset: 10
        },
        {
            target: 'RotaShiftTiming',
            title: 'Create / Activate shift timings',
            content: 'Create or Activate new shift timing from the list and drop on the rota.',
            placement: 'left'
        }, 
        {
            target: 'RotaEmployees',
            title: 'Employee Shifts',
            content: 'Assign a shift directly to an employee by dropping  directly on the rota.',
            placement: 'left'
        },
          {
              target: 'btn_copy_from_planner',
              title: 'Copy existing planner',
              content: 'Copy shifts from the existing planner you designed for your regular use',
            placement: 'left'
        },
        {
            target: 'btn_confirm',
            title: 'Confirm Shifts',
            content: 'Publish the shifts and make them available to everyone in your rota.',
            placement: 'left',
            arrowOffset: 20
        },          

        {
            target: 'btndropshiftrota',
            title: 'Drop shifts to delete',
            content: 'Delete the shift by dropping on the delete area.',
            placement: 'bottom'
        },

        {
            target: 'btn_swaprequest',
            title: 'Swap Request',
            content: 'View the list of requests from employees for shift swap',
            placement: 'bottom'
        },

    ],
    showPrevButton: true,
    scrollTopMargin: 100
}


var tour2 = {
    id: 'rota-tour',
    steps: [
        {
            target: 'btnAddActivateRoles',
            title: 'Add / Update roles',
            content: 'Add / Update roles you need to manage on the planner.',
            placement: 'bottom',
            arrowOffset: 10
        },
        {
            target: 'RotaShiftTiming',
            title: 'Create / Activate shift timings',
            content: 'Create or Activate new shift timing from the list and drop on the rota.',
            placement: 'left'
        },
        {
            target: 'RotaEmployees',
            title: 'Employee Shifts',
            content: 'Assign a shift directly to an employee by dropping  directly on the rota.',
            placement: 'left'
        },
        {
            target: 'btn_copy_from_planner',
            title: 'Copy existing planner',
            content: 'Copy shifts from the existing planner you designed for your regular use',
            placement: 'left'
        },
        {
            target: 'btn_confirm',
            title: 'Confirm Shifts',
            content: 'Publish the shifts and make them available to everyone in your rota.',
            placement: 'left',
            arrowOffset: 20
        },

        {
            target: 'btndropshiftrota',
            title: 'Drop shifts to delete',
            content: 'Delete the shift by dropping on the delete area.',
            placement: 'bottom'
        },

        {
            target: 'btn_swaprequest',
            title: 'Swap Request',
            content: 'View the list of requests from employees for shift swap',
            placement: 'bottom'
        },

    ],
    showPrevButton: true,
    scrollTopMargin: 100
}

var tour_employee = {
    id: 'employee-creation-tour',
    steps: [
        {
            target: 'a_Overview',
            title: 'Employees Overview',
            content: 'Review employees at a glance.',
            placement: 'bottom',
            arrowOffset: 10,
            onNext: ["EmployeeList"]
        },
        {
            target: 'a_Employees',
            title: 'Employees List',
            content: 'Create / Manage Employees.',
            placement: 'bottom',
            yOffset: -20,
            showCloseButton: true,            
            onNext: ["OpenPopupAddNewCnd"]
        },
        {
            target: 'btnAddNewCnd',
            title: 'Add / Create Employee',
            content: 'Add / Create new employee by clicking link.',
            placement: 'left',
            arrowOffset: 10,
            onNext: ["importEmployee"]
        },
        {
            target: 'btnImportEmployees',
            title: 'Import Employees',
            content: 'Import employee from excel/csv file',
            placement: 'left',
            arrowOffset: 10            
        },
        
    ],
    onEnd: function () {
        $('#bulkUpload').modal('hide');
        $(".modal-backdrop").css('display', 'none');
    },
    showPrevButton: true,
    scrollTopMargin: 100,
   
}





//1. Select role
//Select a role to view or setup the documents and make changes accordingly
//2. Create / Activate Role
//Create or Activate new roles to setup documents
//3. Add new document
//Add a new document and related settings under your master list
//4. Add new category
//Setup a new category and related settings to make it private or public
//5. Edit / Remove documents
//You can remove or edit any documents and change its settings
//6. Search documents
//Search available documents from existing list
//7. Drag & Drop Documents
//Drag and drop documents from master list to particular category
//8. Save settings
//Save all the changes you have made
//9. Refresh the list
//See the updates by clicking on the refresh button




var tour_docs = {
    id: 'docs-tour',
    steps: [
        //{
        //    target: 'startDocsTourBtn',
        //    title: 'Documents Settings',
        //    content: '............',
        //    placement: 'bottom',
        //    arrowOffset: 10,
        //    onNext: ["SearchFilter"]
        //},
        {
            target: 'ddlCndJobRole',
            title: 'Select role',
            content: 'Select a role to view or setup the documents and make changes accordingly',
            placement: 'bottom',
         /*   onNext: ["SearchFilter"]*/
          
        },
        {
            target: 'ddlCndJobRole',
            title: 'Create / Activate Role',
            content: 'Create or Activate new roles to setup documents',
            placement: 'right',
            xOffset: 50,          
        },
        {
            target: 'AddCategoryAndDocs',
            title: 'Add Document / Category',
            content: 'add document / category by clicking button',
            placement: 'left',
            xOffset: 30,
            yOffset: -10,
            onNext: ["btnaddpagecat"]
        },
        
        {
            target: 'lblDocMasterTitle', //'btn-cls-document-setting',
            title: 'Add new document',
            content: 'Add a new document and related settings under your master list',
            placement: 'left',
            arrowOffset: 10,
            xOffset: -500,
            onNext: ["closePopupDocs"]
        },
        {
            target: 'lblDocCategoryTitle',
            title: 'Add new category',
            content: 'Setup a new category and related settings to make it private or public.',
            placement: 'left',
            arrowOffset: 10,
            xOffset: -500,
            onNext: ["btnCloseCatPop"]
        },
        {
            target: 'docs-rigth-panel',
            title: 'Edit / Remove documents',
            content: 'You can remove or edit any documents and change its settings',
            placement: 'left',
            yOffset: 60,
            xOffset: 295,
            onNext: ["SearchFilter"]
        },
        {
            target: 'btn-cls-doc-search',
            title: 'Serach documents',
            content: 'Search available documents from existing list',
            placement: 'right',
            yOffset: -15,
            onNext: ["docRolelistAddBorder"]            
        },
        {
            target: 'docRolelist',
            title: 'Drag & Drop Documents',
            content: 'Drag and drop documents from master list to particular category',
            placement: 'right',
            yOffset: 200,
            xOffset: -100,
            onNext: ["docRolelistRemoveBorder"]

        },
        {
            target: 'btnsavesettings',
            title: 'Save settings',
            content: 'Save all the changes you have made',
            placement: 'top',           
        },       
        {
            target: 'btn-cls-document-setting',
            title: 'Refresh the list',
            content: 'See the updates by clicking on the refresh button',
            placement: 'left',
            arrowOffset: 10,
            yOffset: -15,
            xOffset: 30
        },         
        //{
        //    target: 'btn-viewsamplepage',
        //    title: 'document settings demo',
        //    content: 'document settings demo',
        //    placement: 'bottom',
        //    onNext: ["viewsamplepage"]
        //}
    ],
    //onEnd: function () {
    //    $('#addpagecat').modal('hide');
    //    $(".modal-backdrop").css('display', 'none');
    //},
    showPrevButton: true,
    scrollTopMargin: 100,

}

hopscotch.registerHelper('EmployeeList', function () {
    $('#a_Employees').click();
});

hopscotch.registerHelper('OpenPopupAddNewCnd', function () {
    $('#btnAddNewCnd').click();
});

hopscotch.registerHelper('importEmployee', function () {
    $('#add_internal').modal('hide');
    $(".modal-backdrop").css('display', 'none');
    $('#bulkUpload').modal();
});


//*********************************Documents Tour Events****************************************


hopscotch.registerHelper('btnaddpagecat', function () {
    $('#addnewdoc1').click();
   // $('#addpagecat').modal();
});

hopscotch.registerHelper('closePopupDocs', function () {
    $('#addpage').modal('hide');
    $(".modal-backdrop").css('display', 'none');
    $('#addpagecat').modal();
});

hopscotch.registerHelper('btnCloseCatPop', function () {
    $('#addpagecat').modal('hide');
    $(".modal-backdrop").css('display', 'none');
});

hopscotch.registerHelper('docRolelistAddBorder', function () {
    $('#docRolelist').css("border","1px solid #f00");
});

hopscotch.registerHelper('docRolelistRemoveBorder', function () {
    $('#docRolelist').css("border", "");
});



hopscotch.registerHelper('selectroletoview', function () {
    $('#ddlCndJobRole').prop('selectedIndex', 1);
    doc_role_id = $('#ddlCndJobRole').val();
    ns_documents.get('listsettings', '', '');
});

hopscotch.registerHelper('SearchFilter', function () {
    $('#btn-cls-doc-search').click();
});

hopscotch.registerHelper('viewsamplepage', function () {
    $('#btn-viewsamplepage').click();
});

//*********************************End Documents Tour Events****************************************
















/* ========== */
/* TOUR SETUP */
/* ========== */
//addClickListener = function(el, fn) {
//  if (el.addEventListener) {
//    el.addEventListener('click', fn, false);
//  }
//  else {
//    el.attachEvent('onclick', fn);
//  }
//},

//init = function() {
//    var startBtnId = 'startTourBtn',
//      calloutId = 'startTourCallout',
//      mgr = hopscotch.getCalloutManager(),
//      state = hopscotch.getState();

//    if (state && state.indexOf('planner-tour:') === 0) {
//    // Already started the tour at some point!
//   // hopscotch.startTour(tour);
//  }
//  else {
//    // Looking at the page for the first(?) time.
//    //setTimeout(function() {
//    //  mgr.createCallout({
//    //    id: calloutId,
//    //    target: startBtnId,
//    //    placement: 'bottom',
//    //    title: 'Take a tour',
//    //    content: '',     
//    //    arrowOffset: 20,
//    //    width: 240
//    //  });
//    //}, 10);
//  }

//  addClickListener(document.getElementById(startBtnId), function() {
//    if (!hopscotch.isActive) {
//      mgr.removeAllCallouts();
//        hopscotch.startTour(tour);    
//    }
//  });
//};

//init();

//Rota Tour

//$(document).ready(function () {
//    $(document).on('click', "#startTourBtn", function () {
//        hopscotch.startTour(tour);
//    });
//    $(document).on('click', "#startTourBtn2", function () {
//        hopscotch.startTour(tour1);
//    });
//});


