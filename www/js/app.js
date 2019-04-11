const app = {
    initialize : function () {
        console.log('app.initialize');

        if (app._isMobile()) {
            document.addEventListener("deviceready", app.onDeviceReady, false);
        } else {
            document.addEventListener('DOMContentLoaded', app.onDeviceReady, false);
        }
    },

    onDeviceReady : function () {
        console.log('app.onDeviceReady');
        welcome.show(function () {
            welcome.hide();

            // const nickname = localStorage.getItem('nickname');
            settings.show(() => {
                settings.hide();
                chat.show();
            });
            // if (nickname) {
            //     chat.show();
            // } else {
            //     settings.show();
            // }
        }, 2000);
    },

    _isMobile : () => navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|IEMobile)/)
};