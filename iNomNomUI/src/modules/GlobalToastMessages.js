import Vue from 'vue'

export default class GlobalToastMessages {
    constructor() {
        this.RegisterConnectorStatusCodes();
        this.RegisterSuccessMessages();
    }

    RegisterConnectorStatusCodes() {
        let options = {
            type: 'error',
            icon: 'error_outline',
            theme: 'toasted-custom_error',
            duration: 2000,
            action: [{
                text: 'dismiss',
                onClick: (e, toastObject) => {
                    toastObject.goAway(0);
                }
            }, ]
        };

        Vue.toasted.register('Error', (payload) => {
            return (!payload.message) ? "Oops.. Something Went Wrong.." : payload.message;
        }, options)
        Vue.toasted.register('Error_404', (payload) => {
            return (!payload.message) ? "404 this is not the resource you are looking for" : payload.message;
        }, options)
        Vue.toasted.register('Error_401', (payload) => {
            return (!payload.message) ? "You are not authorised to access this resource" : payload.message;
        }, options)
        Vue.toasted.register('Error_401_login', (payload) => {
            return (!payload.message) ? "Incorrect credentials entered" : payload.message;
        }, options)
        Vue.toasted.register('Error_500', (payload) => {
            return (!payload.message) ? "'It's dead Jim', something went wrong with this request" : payload.message;
        }, options)
        Vue.toasted.register('Error_503', (payload) => {
            return (!payload.message) ? "Unable to communicate with API: Network Error" : payload.message;
        }, options)
    }

    RegisterSuccessMessages() {
        let options = {
            type: 'success',
            icon: 'done',
            theme: 'toasted-custom_error',
            duration: 4000,
            action: [{
                text: 'dismiss',
                onClick: (e, toastObject) => {
                    toastObject.goAway(0);
                }
            }, ]
        };

        Vue.toasted.register('Success', (payload) => {
            return (!payload.message) ? "Success!" : payload.message;
        }, options)
        Vue.toasted.register('Success_Login', (payload) => {
            return (!payload.message) ? "Login Successful" : payload.message;
        }, options)
        Vue.toasted.register('Success_Created', (payload) => {
            return (!payload.message) ? "Created" : payload.message;
        }, options)

    }

    RegisterInformationMessages() {
        let options = {
            type: 'info',
            icon: 'info_outline',
            theme: 'toasted-custom_error',
            duration: 4000,
            action: [{
                text: 'dismiss',
                onClick: (e, toastObject) => {
                    toastObject.goAway(0);
                }
            }, ]
        };

        Vue.toasted.register('Info', (payload) => {
            return (!payload.message) ? "Info" : payload.message;
        }, options)
        Vue.toasted.register('Info_Updated_Resource', (payload) => {
            return (!payload.message) ? "Resource was successfully updated" : payload.message;
        }, options)
        Vue.toasted.register('Info_Remove_Resource', (payload) => {
            return (!payload.message) ? "Resource was successfully removed" : payload.message;
        }, options)
    }
}

//Snippets
// this.$toasted.show("qwerty asdf");
// this.$toasted.global.Error({
//   message: "Custom Error"
// });
// this.$toasted.global.Success();