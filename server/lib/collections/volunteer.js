Volunteerings = new orion.collection('volunteerings', {
    singularName: 'volunteering', // The name of one of these items
    pluralName: 'volunteerings', // The name of more than one of these items
    link: {
        // *
        //  * The text that you want to show in the sidebar.
        //  * The default value is the name of the collection, so
        //  * in this case it is not necessary.

        title: 'Volunteering'
    },
    /**
     * Tabular settings for this collection
     */
    tabular: {
        // here we set which data columns we want to appear on the data table
        // in the CMS panel
        columns: [
            {
                data: "category",
                title: "Category"
            },
            {
                data: "thumbnail",
                title: "Thumbnail"
            },
            {
                data: "title",
                title: "Title"
            },{
                data: "org",
                title: "Organization"
            }, {
                data: "description",
                title: "Description"
            },{
                data: "length",
                title: "Length"
            },{
                data: "location",
                title: "Location"
            }
        ]
    }
});


Volunteerings.attachSchema(new SimpleSchema({
    category: {
        type: String,
        optional: false,
        label: 'Category'
    },
    thumbnail: {
        type: String,
        optional: false,
        label: 'Thumbnail'
    },
    title: {
        type: String,
        optional: false,
        label: 'Volunteering Title'
    },
    organization: {
        type: String,
        optional: false,
        label: 'Organization'
    },
    length: {
        type: String,
        optional: false,
        label: 'Length'
    },
    location: {
        type: String,
        optional: false,
        label: 'Location'
    },
    // 'type: Date' means that this field is expecting a data as an entry
    submitted: {
        type: Date,
        optional: false,
    },
    description: orion.attribute('summernote', {
        label: 'Description'
    })
}));