class CreateNewGroupPage {
    
    getNewGroupWindow() {
        var modal = cy.get('app-create-new-group.ng-star-inserted')
        return modal;
    }

    getModalforUpdate() {
        var modal2 = cy.xpath('//*[@id="mat-dialog-2"]/app-create-new-group/h2')
        return modal2;
    }

    getgroupNamefield() {
        var groupNameField = cy.get('#group-name')
        return groupNameField;
    }

    getgroupColor() {
        //var groupColor = cy.get('#mat-dialog-1 > app-create-new-group > div.mat-dialog-content > div > app-form-field:nth-child(2) > div > div > app-color-picker:nth-child(1)')
        var groupcolor = cy.get('.mt-3').find('app-color-picker:nth-child(1)')
        return groupcolor;
    }

    getgroupColor2() {
        //var groupColor = cy.xpath('//*[@id="mat-dialog-0"]/app-create-new-group/div[1]/div/app-form-field[2]/div/div/app-color-picker[4]/div/span')
        var groupcolor = cy.get('.mt-3').find('app-color-picker:nth-child(2)')
        return groupcolor;
    }

    getAccountCheckBoxes() {
        //var AccountCheckBoxes = cy.get('#mat-dialog-1 > app-create-new-group > div.mat-dialog-content > app-accounts-select-table > div:nth-child(2)')
        return cy.get('app-accounts-select-table').find('div:nth-child(2)').find('mat-checkbox')
        //return AccountCheckBoxes;
    }

    getAccountCheckBoxes2() {
       // var AccountCheckBoxes2 = cy.xpath('//*[@id="mat-dialog-0"]/app-create-new-group/div[1]/app-accounts-select-table/div[3]/div/span[1]')
        //return AccountCheckBoxes2;
        return cy.get('app-accounts-select-table').find('div:nth-child(3)').find('mat-checkbox')
    }

    getcreateNewGroupBtn() {
        var CreateNewGroupBtn = cy.contains(' Create Group ')
        return CreateNewGroupBtn;
    }

    getSaveUpdatedGroupBtn() {
        var SaveUpdatedGroupBtn = cy.contains(' Save ')
        return SaveUpdatedGroupBtn;
    }

    getSuccessMessage() {
        var Successmessage = cy.get('.fixed > .bg-white')
        return Successmessage;
    }
    
}

export default CreateNewGroupPage;