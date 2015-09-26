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
                data: "title",
                title: "Title"
            }, {
                data: "author",
                title: "Author"
            }, {
                data: "description",
                title: "Description"
            }
        ]
    }
});


Volunteerings.attachSchema(new SimpleSchema({
    // We use `label` to put a custom label for this form field
    // Otherwise it would default to `Title`
    // 'optional: false' means that this field is required
    // If it's blank, the form won't submit and you'll get a red error message
    // 'type' is where you can set the expected data type for the 'title' key's value
    title: {
        type: String,
        optional: false,
        label: 'Volunteering Title'
    },
    author: {
        type: String,
        optional: false,
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