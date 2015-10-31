// Write your package code here!
if (Meteor.isServer) {

       Meteor.startup(function () {

        if (Init.find().count() <= 0) {
            console.log("init dev only data!!")
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
                    category: "Volunteer",
                    thumbnail: "http://www.universalgiving.org/photo/image.do?id=3106",
                    title: "Volunteer in China",
                    organization: "The GVN Foundation",
                    length: "2-6 months",
                    location: "China",
                    submitted: now,
                    description: "Great opportunity to volunteer in China!"
                }
            );

            Volunteerings.insert({
                    category: "Volunteer",
                    thumbnail: "http://www.universalgiving.org/photo/image.do?id=5018",
                    title: "Rwanda Volunteer Program",
                    organization: "WorldTeach",
                    length: "2-12 weeks",
                    location: "Rwanda",
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
