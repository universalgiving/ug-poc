Router.configure({
    layoutTemplate: 'layout'
});

VolunteersListController = RouteController.extend({
    template: 'volunteersList',
    increment: 5,
    postsLimit: function() {
        return parseInt(this.increment);
    },
    findOptions: function() {
        return {sort: this.sort, limit: this.postsLimit()};
    },
    subscriptions: function() {
        this.volunteeringsSub = Meteor.subscribe('volunteerings', this.findOptions());
    },
    volunteerings: function() {
        return Volunteerings.find({}, this.findOptions());
    },
    data: function() {
        var self = this;
        return {
            volunteerings: self.volunteerings(),
            ready: self.volunteeringsSub.ready,
            nextPath: function() {
                if (self.posts().count() === self.postsLimit())
                    return self.nextPath();
            }
        };
    }
});

NewVolunteersController = VolunteersListController.extend({
    sort: {submitted: -1, _id: -1},
    nextPath: function() {
        return Router.routes.newVolunteers.path({postsLimit: this.postsLimit() + this.increment})
    }
});

Router.route('/', {
    name: 'home',
    controller: NewVolunteersController
});
