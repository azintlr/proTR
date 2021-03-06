import { $, browser, by, element, ElementFinder } from 'protractor';
import { conf } from './../conf/env';

export class AngularFormPage {
    public url = `${conf.baseUrl}/ng1/#/form`;

    public username = $('[ng-model="username"]');
    public bindingUsername = element(by.binding('username'));

    public nickname = element(by.model('nickname'));
    public nicknameBind = element(by.binding('nickname'));
    public aboutText = element(by.model('aboutext'));

    public checkBoxShow = element(by.model('show'));
    public shower = element(by.id('shower'));

    public disableCheckBox = element(by.xpath('//*[@id="checkboxes"]/input[2]'));
    public dummyButton = $('#disabledButton');
    public alertButton = $('#alertbutton');

    public async setUserName(value: string) {
        await this.username.clear();
        await this.username.sendKeys(value);
    }

    public async setNickName(value: string) {
        await this.nickname.clear();
        await this.nickname.sendKeys(value);
    }
}
