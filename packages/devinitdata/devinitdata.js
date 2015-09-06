// Write your package code here!


if (Meteor.isServer) {


    Meteor.startup(function () {

        if (Init.find().count() <= 0) {

            //var now = new Date().getTime();

            // create user
            Accounts.createUser({
                profile: {
                    name: 'Zhenzhong Xu'
                },
                username: "zxu",
                email: "zxu@universalgiving.org",
                password: "Pa$$w0rd"
            });

            var now = new Date().getTime();

            Volunteerings.insert({
                    title: "Volunteer in China",
                    author: "Zhenzhong Xu",
                    submitted: now,
                    description: "Great opportunity to volunteer in China!"
                }
            );

            Volunteerings.insert({
                    title: "Rwanda Volunteer Program",
                    author: "Zhenzhong Xu",
                    submitted: now,
                    description: "The Global Volunteer Network currently has opportunities to work with children, and their community through our partner organization in Rwanda. Volunteers will assist our partner organisation's mission to facilitate processes to help eradicate. . ."
                }
            );

            Init.insert({
                init: true
            })

        }

    });

}